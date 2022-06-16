const clientsCtrl = {};
const { Client } = require('../db/models');

clientsCtrl.getAllClient = async (req,res) => {
    try{
        const all = await Client.findAll();
        res.status(200).send(all);
    } catch(err){
        res.status(500).send(err)
    }
}

clientsCtrl.getClientById = async (req,res) => {
    try{
        const { id } = req.body;
        const c = await Client.findOne({ where: { id: id } })
        res.status(200).send(c);
    } catch(err){
        res.status(500).send(err)
    }
}

clientsCtrl.getClientByLastName = async (req,res) => {
    try{
        const { last_name } = req.body;
        const c = await Client.findOne({ where: { last_name: last_name } })
        res.status(200).send(c);
    } catch(err){
        res.status(500).send(err)
    }
}

module.exports = clientsCtrl;