const router = require('express').Router();
const { createRecipe, deleteRecipe } = require('../controllers/recipes.controller');

router.post('/createRecipe', createRecipe)

module.exports = router;