const router = require('express').Router();
const { getAllClient, getClientById, getClientByLastName } = require('../controllers/clients.controller');

router.get('/', getAllClient)
router.get('/getById', getClientById)
router.get('/getByLastName', getClientByLastName)

module.exports = router;