const recipesCtrl = {};
const { Recipe } = require('../db/models');



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
            result = { result: 'OK' };
            res.status(200).send(result)
        } else {
            res.status(500).send('No existe la receta.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = recipesCtrl;