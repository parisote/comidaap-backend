const router = require('express').Router();
//const { createRecipe, deleteRecipe } = require('../controllers/recipes.controller');
const { createRecipe } = require('../controllers/recipes.controller.js');

router.post('/createRecipe', createRecipe)
//router.delete('/createRecipe', deleteRecipe)

module.exports = router;