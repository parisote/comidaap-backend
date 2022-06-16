const recipesCtrl = {};
const { Recipe, Product, Ingredient, TypeMeasure, Sequelize, sequelize } = require("../db/models");
const productsCtrl = {};
/*
FORMATO de lo RECIBIDO

const ingredients = [{id: 1, amount: 1},];

const products = {name: "", description: ""};

*/
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
    const promesas = ingredients.map(async (ingredient) =>
      Ingredient.findOne({ where: { id: ingredient.id } })
    );
    const result = await Promise.all(promesas);
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

    //Obtener el id del producto
    

    //Impactar en la tabla Recetas

       


   
  } catch (error) {
    return res.status(500).send(error);
  }

//Creacion de tablas

  res.status(200).send({});
};

module.exports = recipesCtrl;
