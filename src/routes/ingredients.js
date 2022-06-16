const router = require('express').Router();
const { createIngredient } = require('../controllers/ingredients.controller');

router.post('/createIngredient', createIngredient)

module.exports = router;