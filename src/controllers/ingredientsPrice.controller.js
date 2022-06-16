const ingredientsPriceCtrl = {};
const { IngredientsPrice } = require('../db/models');

ingredientsPriceCtrl.createIngredientPrice = async (req,res) => {
    const ingredientId = req.body.ingredientId;
    const cant = req.body.cant;
    const price = req.body.price;
    const ingredientPrice = IngredientsPrice.findOne({
        where: {ingredientId:ingredientId}
    });
    if((!isNaN(cant)||!isNaN(price))&&price>0) {
        if (ingredientPrice == null) {
            try {
                await IngredientsPrice.create ({
                    ingredientId: ingredientId,
                    cant: cant,
                    price: price,
                    createdAt: req.body.createdAt,
                    updatedAt: req.body.updatedAt
                })
                res.status(200)
            } catch (error) {
                res.status(500).send(error)
            }    
        } else {
            res.status(500).send('El ingredientPrice ya existe')
        }
    } else {
        res.status(500).send('Los parámetros deben ser númericos y mayores a 0')
    }
}

ingredientsPriceCtrl.deleteIngredientPrice = async (req,res) => {
    const {ingredientId} = req.body;
    const i = IngredientsPrice.findOne({
        where: {ingredientId:ingredientId}
    });
    if (!isNaN(ingredientId)) {
        if (i != null) {
            try {    
                await IngredientsPrice.delete ({
                    where: {ingredientId:ingredientId}
                });
                res.status(200)
            } catch (error) {
                res.status(500).send(error)
            }
        } else {
            res.status(500).send('No existe el ingredient price.')
        }
    } else {
        res.status(500).send('Los parámetros deben ser númericos.')
    }    
}


module.exports = ingredientsPriceCtrl;