const router = require('express').Router();
const { getAllProducts, getTotalCostByProductId, getIngredientCostByProductId, createProduct } = require('../controllers/products.controller');

router.get('/', getAllProducts)
router.get('/getTotalCostByProductId', getTotalCostByProductId)
router.get('/getIngredientCostByProductId', getIngredientCostByProductId)
router.post('/createProduct', createProduct)

module.exports = router;