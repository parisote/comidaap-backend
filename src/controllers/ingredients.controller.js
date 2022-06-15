const ingredientsCtrl = {};
const { Ingredient } = require('../db/models');


ingredientsCtrl.createIngredient = async (req,res) => {
   
        Ingredient.create ({
            name: req.body.name
        })
    return res.status(200).send({})
}

module.exports = ingredientsCtrl;