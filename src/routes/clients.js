const router = require('express').Router();
const { getAllClient, getClientById, getClientByLastName, createClient } = require('../controllers/clients.controller');

router.get('/', getAllClient)
router.get('/getById', getClientById)
router.get('/getByLastName', getClientByLastName)
router.post('/createClient', createClient)

module.exports = router;