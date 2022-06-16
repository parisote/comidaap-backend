const router = require('express').Router();
const { getAllProducts, getTotalCostByProductId, getIngredientCostByProductId, getPriceByCant, createProduct, deleteProductById, deleteProductByName } = require('../controllers/products.controller');

router.get('/getAllProducts', getAllProducts)
router.get('/getTotalCostByProductId', getTotalCostByProductId)
router.get('/getIngredientCostByProductId', getIngredientCostByProductId)
router.get('/getPriceByCant', getPriceByCant)
router.post('/createProduct', createProduct)
router.delete('/deleteProductById', deleteProductById)
router.delete('/deleteProductByName', deleteProductByName)

module.exports = router;