const recipesCtrl = {};
const { Recipe } = require('../db/models');


recipesCtrl.createRecipe = async (req, res) => {
    try {
        const productId = req.body.productId;
        const ingredientId = req.body.ingredientId;
        const ingredientCount = req.body.ingredientCount;
        const recipe = await Recipe.findOne({
            where: { productId: productId, ingredientId: ingredientId }
        })
        if (!isNaN(ingredientCount) || !isNaN(productId) || !isNaN(ingredientId)) {
            if (recipe == null) {
                await Recipe.create({
                    productId: productId,
                    ingredientId: ingredientId,
                    ingredientCount: ingredientCount,
                    createdAt: new Date()
                })
                res.status(201).send({})

            } else {
                res.status(500).send('Este producto ya está asociado a este ingrediente.')
            }
        } else {
            res.status(500).send('Los parámetros deben ser númericos.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

recipesCtrl.deleteRecipe = async (req, res) => {
    try {
        const { productId } = req.body;
        const { ingredientId } = req.body;
        const r = await Recipe.findOne({
            where: [{ productId: productId}, {ingredientId: ingredientId }]
        })
        if (r != null) {
            await Recipe.destroy({
                where: { productId: productId, ingredientId: ingredientId }
            });
            res.status(200).send({})
        } else {
            res.status(500).send('No existe la receta.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = recipesCtrl;