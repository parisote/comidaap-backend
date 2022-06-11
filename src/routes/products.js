const router = require('express').Router();
const { getAllProducts, getTotalCostByProductId, getIngredientCostByProductId } = require('../controllers/products.controller');

router.get('/', getAllProducts)
router.get('/getTotalCostByProductId', getTotalCostByProductId)
router.get('/getIngredientCostByProductId', getIngredientCostByProductId)

module.exports = router;