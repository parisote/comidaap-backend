const ingredientsCtrl = {};
const { Ingredient, IngredientsPrice } = require('../db/models');


ingredientsCtrl.createIngredient = async (req, res) => {
    try {
        const name = req.body.name;
        const ingredient = Ingredient.findOne({
            where: { name: name }
        });
        if (ingredient == null) {
            await Ingredient.create({
                name: name,
                typeMeasuresId: req.body.typeMeasureId,
                createdAt: new Date()
            })
            res.status(201).send({})
        } else {
            res.status(500).send('El ingrediente ya existe')
        }
    } catch (error) {

        res.status(500).send(error)
    }
}

ingredientsCtrl.deleteIngredientById = async (req, res) => {
    try {
        const { id } = req.body;
        const i = await Ingredient.findOne({
            where: { id: id }
        });
        if (i != null) {
            await Ingredient.destroy({
                where: { id: id }
            });
            res.status(200).send({})
        } else {
            res.status(500).send('No existe el ingrediente.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

ingredientsCtrl.deleteIngredientByName = async (req, res) => {
    try {
        const { name } = req.body;
        const i = await Ingredient.findOne({
            where: { name: name }
        });
        if (i != null) {
            await Ingredient.destroy({
                where: { name: name }
            });
            res.status(200).send({})
        } else {
            res.status(500).send('No existe el ingrediente.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = ingredientsCtrl;