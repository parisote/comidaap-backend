const recipesCtrl = {};
const { Recipe } = require('../db/models');


recipesCtrl.createRecipe = async (req,res) => {
    try {
        Recipe.create ({
           productId: req.body.productId,
           ingredientId: req.body.ingredientId,
           ingredientCount: req.body.ingredientCount
        })
    } catch (error) {
        res.status(409).send({})
    }    
     res.status(200).send({})
}

module.exports = recipesCtrl;