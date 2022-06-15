const router = require('express').Router();
const { getAllProducts, getTotalCostByProductId, getIngredientCostByProductId, getPriceByCant, createProduct } = require('../controllers/products.controller');

router.get('/', getAllProducts)
router.get('/getTotalCostByProductId', getTotalCostByProductId)
router.get('/getIngredientCostByProductId', getIngredientCostByProductId)
router.get('/getPriceByCant', getPriceByCant)
router.post('/createProduct', createProduct)

module.exports = router;