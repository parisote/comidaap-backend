const router = require('express').Router();
const { createRecipe } = require('../controllers/recipes.controller');

router.post('/createRecipe', createRecipe)

module.exports = router;