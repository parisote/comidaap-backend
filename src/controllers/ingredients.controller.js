const ingredientsCtrl = {};
const { Ingredient } = require('../db/models');


ingredientsCtrl.createIngredient = async (req,res) => {
    try {
        Ingredient.create ({
            name: req.body.name
        })
    } catch (error) {
        res.status(501).send({})
    }    
     res.status(200).send({})
}

module.exports = ingredientsCtrl;