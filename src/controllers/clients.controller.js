const clientsCtrl = {};
const { Client } = require('../db/models');

clientsCtrl.getAllClient = async (req,res) => {
    const all = await Client.findAll();
    res.send(all);
}

clientsCtrl.getClientById = async (req,res) => {
    const { id } = req.body;
    const c = await Client.findOne({ where: { id: id } })
    res.send(c);
}

clientsCtrl.getClientByLastName = async (req,res) => {
    const { last_name } = req.body;
    const c = await Client.findOne({ where: { last_name: last_name } })
    res.send(c);
}

module.exports = clientsCtrl;