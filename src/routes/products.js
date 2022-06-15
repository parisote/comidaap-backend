const router = require('express').Router();
const { getAllProducts, getTotalCostByProductId, getIngredientCostByProductId, getProductByRecipeId, createProduct } = require('../controllers/products.controller');

router.get('/', getAllProducts)
router.get('/getTotalCostByProductId', getTotalCostByProductId)
router.get('/getIngredientCostByProductId', getIngredientCostByProductId)
router.get('/getProductByRecipeId', getProductByRecipeId)
router.post('/createProduct', createProduct)

module.exports = router;