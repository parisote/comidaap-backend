const router = require('express').Router();
const { getAllProducts, getTotalCostByProductId, getIngredientCostByProductId, getProductByRecipeId } = require('../controllers/products.controller');

router.get('/', getAllProducts)
router.get('/getTotalCostByProductId', getTotalCostByProductId)
router.get('/getIngredientCostByProductId', getIngredientCostByProductId)
router.get('/getProductByRecipeId', getProductByRecipeId)

module.exports = router;