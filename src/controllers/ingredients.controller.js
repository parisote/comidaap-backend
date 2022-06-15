const ingredientsCtrl = {};
const { Ingredient } = require('../db/models');


ingredientsCtrl.createIngredient = async (req,res) => {
    try {
        Ingredient.create ({
            name: req.body.name,
            typeMeasureId: req.body.typeMeasureId
        })
    } catch (error) {
        res.status(409).send({})
    }    
     res.status(200).send({})
}

module.exports = ingredientsCtrl;