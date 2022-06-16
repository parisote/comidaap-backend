const router = require('express').Router();
const { createIngredient, deleteIngredientById, deleteIngredientByName } = require('../controllers/ingredients.controller');

router.post('/createIngredient', createIngredient)
router.delete('/deleteIngredientById', deleteIngredientById)
router.delete('/deleteIngredientByName', deleteIngredientByName)

module.exports = router;