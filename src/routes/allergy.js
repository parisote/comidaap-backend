const router = require('express').Router();
const { checkAllergyByClientId, checkAllergyByClientIdAndIngredientId, addAllergyToClient } = require('../controllers/allergy.controller');

router.get('/checkAllergyByClientId', checkAllergyByClientId)
router.get('/checkAllergyByClientIdAndIngredientId', checkAllergyByClientIdAndIngredientId)
router.post('/addAllergyToClient', addAllergyToClient)

module.exports = router;