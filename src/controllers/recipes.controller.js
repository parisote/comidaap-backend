const recipesCtrl = {};
const { Recipe, Product, Ingredient, TypeMeasure, IngredientPrice, Sequelize, sequelize } = require("../db/models");
const productsCtrl = {};

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
  })
  //Crear Ingrediente que es un Producto(receta)
  const ingredientCreate = await Ingredient.create ({
    name: products.name,
    typeMeasuresId: typeMeasure,
    createdAt: new Date,
})

   //Impactar en la tabla Recetas
   const promisesIngred = ingredients.map(async (ingredient) =>
   await Recipe.create(
      { productId: productCreate.id,
        ingredientId: ingredient.id,
        ingredientCount: (ingredient.amount/producedAmount),
        createdAt: new Date(),
     }
    )
  );
  
    await Promise.all(promisesIngred)

  // Impactar en la tabla de ingredient price
  const countPrice = 0;
  const thisId = productCreate.id;
  //Buscar en recetas todo lo que tenga ID de producto
  const auxList = await Recipe.findAll({
      where: { productId: thisId },
  });
  //ingredientId ++ ingredientCount
  const auxList2 =  []
    await auxList.forEach(async (element) => {
   
  });
  


  const auxListPrice = await IngredientPrice.findOne({
    where: { ingredientId: IDDDDD },
  })
 
  await IngredientPrice.create ({
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
