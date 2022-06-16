const router = require('express').Router();
const { getAllClient, getClientById, getClientByLastName, createClient, deleteClientById, deleteClientByEmail } = require('../controllers/clients.controller');

router.get('/', getAllClient)
router.get('/getById', getClientById)
router.get('/getByLastName', getClientByLastName)
router.post('/createClient', createClient)
router.delete('/deleteClientById', deleteClientById)
router.delete('/deleteClientByEmail', deleteClientByEmail)

module.exports = router;