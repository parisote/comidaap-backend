const router = require('express').Router();
const { createIngredientPrice, deleteIngredientPrice } = require('../controllers/ingredientsPrice.controller');

router.post('/createIngredientPrice', createIngredientPrice)
router.delete('/deleteIngredientPrice', deleteIngredientPrice)

module.exports = router;