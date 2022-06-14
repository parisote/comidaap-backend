const router = require('express').Router();
const { getAllProducts, getTotalCostByProductId, getIngredientCostByProductId, getRecipeCostById , getProductByRecipeId } = require('../controllers/products.controller');

router.get('/', getAllProducts)
router.get('/getTotalCostByProductId', getTotalCostByProductId)
router.get('/getIngredientCostByProductId', getIngredientCostByProductId)
router.get('/getRecipeCostById',getRecipeCostById)
router.get('/getProductByRecipeId', getProductByRecipeId)

module.exports = router;