const router = require('express').Router();
const { createRecipe, deleteRecipe } = require('../controllers/recipes.controller');

router.delete('/deleteRecipe', deleteRecipe)

module.exports = router;