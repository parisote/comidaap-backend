const ingredientsCtrl = {};
const { Ingredient } = require('../db/models');


ingredientsCtrl.createIngredient = async (req,res) => {
    try {
        await Ingredient.create ({
            name: req.body.name,
            typeMeasuresId: req.body.typeMeasureId,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        })

    } catch (error) {
       return res.status(500).send(error)
    }    
    return res.status(200).send()
}

module.exports = ingredientsCtrl;