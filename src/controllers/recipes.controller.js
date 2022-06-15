const recipesCtrl = {};
const { Recipe } = require('../db/models');

recipesCtrl.createRecipe = async (req,res) => {
    try {    
        Recipe.create ({
            ingredientCount: req.body.ingredientCount
        })
    } catch(error) {
        return res.status(501).send({})
    }
    return res.status(200).send({})
}

module.exports = recipesCtrl;