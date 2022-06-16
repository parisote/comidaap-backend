const ingredientsCtrl = {};
const { Ingredient, IngredientsPrice } = require('../db/models');


ingredientsCtrl.createIngredient = async (req,res) => {
    const name = req.body.name;
    const ingredient = Ingredient.findOne({
        where: {name:name}
    });
    if (ingredient == null) {
        try {
            await Ingredient.create ({
                name: name,
                typeMeasuresId: req.body.typeMeasureId,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            })
            res.status(200)
        } catch (error) {
            res.status(500).send(error)
        }    
    } else {
        res.status(500).send('El ingrediente ya existe')
    }
}

ingredientsCtrl.deleteIngredientById = async (req,res) => {
    const {id} = req.body;
    const i = Ingredient.findOne({
        where: {id:id}
    });
    if (i != null) {
        try {    
            await Ingredient.delete ({
                where: {id:id}
            });
            res.status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('No existe el ingrediente.')
    }
}

ingredientsCtrl.deleteIngredientByName = async (req,res) => {
    const name = req.body;
    const i = Ingredient.findOne({
        where: {name:name}
    });
    if (i != null) {
        try {    
            await Ingredient.delete ({
                where: {name:name}
            });
            res.status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('No existe el ingrediente.')
    }
}

module.exports = ingredientsCtrl;