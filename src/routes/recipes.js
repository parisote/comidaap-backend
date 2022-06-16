const router = require('express').Router();
const { createRecipe, deleteRecipe } = require('../controllers/recipes.controller');

router.post('/createRecipe', createRecipe)
router.delete('/deleteRecipe', deleteRecipe)

module.exports = router;