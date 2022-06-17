const recipesCtrl = {};
const { Recipe, Product, Ingredient, TypeMeasure, IngredientsPrice } = require("../db/models");
const {Op} = require('sequelize')

recipesCtrl.createRecipe = async (req, res) => {
  try {
    const { products, ingredients, producedAmount, typeMeasure } = req.body;
//VERIFICACION
    //Si algún campo está vacio:
    if (!products || !products.name || !ingredients || !producedAmount || !typeMeasure) {
      return res.status(400).json({ status: "error", message: "Por favor llena todos los campos" });
    }
    //Si ya existe el producto(receta) con el mismo nombre
    const productsFind = await Product.findOne({
      where: { name: products.name },
    });
    if (productsFind !== null) {
      return res.status(400).json({ status: "error", message: "La Receta ya existe, cambie el nombre por favor" });
    }
    //Promesas en PALALELO
    //Busca si todos los ID de ingredientes existen
    const promises = ingredients.map(async (ingredient) =>
      Ingredient.findOne({ where: { id: ingredient.id } })
    );
    const result = await Promise.all(promises);
    if (result.some((ingredient) => ingredient === null)) {
      return res.status(400).json({status: "error", message: "Alguno de los ingredientes no existe"});
    }
    //Verificar si el ID de typeMeasure existe
    const measureFind = await TypeMeasure.findOne({
      where: { id: typeMeasure},
    });
    if (measureFind === null) {
      return res.status(400).json({ status: "error", message: "El tipo de medida que Ud indicó no existe" });
    }

//Impactar la tabla
    //Crear Producto
   const productCreate = await Product.create ({
      name: products.name,
      description: products.description,
      createdAt: new Date,
  });

  //Crear Ingrediente que es un Producto(receta)
  const ingredientCreate = await Ingredient.create ({
    name: products.name,
    typeMeasuresId: typeMeasure,
    createdAt: new Date,
  });

   let amount = []
   //Impactar en la tabla Recetas
   const promisesIngred = ingredients.map(async (ingredient) =>{
    amount.push({id: ingredient.id, count: ingredient.amount/producedAmount})
    await Recipe.create(
        { productId: productCreate.id,
          ingredientId: ingredient.id,
          ingredientCount: (ingredient.amount/producedAmount),
          createdAt: new Date(),
      }
      )
    }
  );
  
  await Promise.all(promisesIngred)

  // Impactar en la tabla de ingredient price
  let countPrice = 0;
  //const productId = productCreate.id;
  let iIds = []
  amount.forEach(element => {
    iIds.push(element.id)
  });

  const priceIngredients = await IngredientsPrice.findAll({
        where: { ingredientId: iIds }
    });
  
  for (const i of priceIngredients) {
    amount.forEach(element => {
      if(i['ingredientId'] == element.id){
        countPrice += element.count * i['price']
      }
    });
  }

  await IngredientsPrice.create ({
    ingredientId: ingredientCreate.id,
    cant: 1,
    price: countPrice,
    createdAt: new Date,
  })

  } catch (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({});
};

module.exports = recipesCtrl;
