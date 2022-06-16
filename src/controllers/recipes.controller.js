const recipesCtrl = {};
const { Recipe } = require('../db/models');


recipesCtrl.createRecipe = async (req,res) => {
    const productId = req.body.productId;
    const ingredientId = req.body.ingredientId;
    const ingredientCount = req.body.ingredientCount;
    const recipe = await Recipe.findOne ({
        where: {productId:productId, ingredientId:ingredientId}
    })
    if (!isNaN(ingredientCount)||!isNaN(productId)||!isNaN(ingredientId)) {
        if (recipe==null) {
            try {
                await Recipe.create ({
                    productId: productId,
                    ingredientId: ingredientId,
                    ingredientCount: ingredientCount,
                    createdAt: req.body.createdAt,
                    updatedAt: req.body.updatedAt
                })
                res.status(200)
            } catch (error) {
                res.status(500).send(error)
            }    
        } else {
            res.status(500).send('Este producto ya está asociado a este ingrediente.')
        }
    } else {
        res.status(500).send('Los parámetros deben ser númericos.')
    }    
}

recipesCtrl.deleteRecipe = async (req,res) => {
    const {productId} = req.body;
    const {ingredientId} = req.body;
    const r = Recipe.findOne({
        where: {productId:productId, ingredientId:ingredientId}
    })
    if (r != null) {
        try {    
            await Recipe.delete ({
                where: {productId:productId, ingredientId:ingredientId}
            });
            res.status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('No existe la receta.')
}
}

module.exports = recipesCtrl;