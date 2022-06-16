const recipesCtrl = {};
const { Recipe } = require('../db/models');


recipesCtrl.createRecipe = async (req,res) => {
    try {
        await Recipe.create ({
           productId: req.body.productId,
           ingredientId: req.body.ingredientId,
           ingredientCount: req.body.ingredientCount,
           createdAt: req.body.createdAt,
           updatedAt: req.body.updatedAt
        })
    } catch (error) {
        res.status(500).send(error)
    }    
     res.status(200).send({})
}

module.exports = recipesCtrl;