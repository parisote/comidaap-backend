const router = require('express').Router();
const { checkAllergyByClientId, checkAllergyByClientIdAndIngredientId, addAllergyToClient, deleteAllAllergiesToClient } = require('../controllers/allergy.controller');

router.get('/checkAllergyByClientId', checkAllergyByClientId)
router.get('/checkAllergyByClientIdAndIngredientId', checkAllergyByClientIdAndIngredientId)
router.post('/addAllergyToClient', addAllergyToClient)
router.delete('/deleteAllAllergiesToClient', deleteAllAllergiesToClient)

module.exports = router;