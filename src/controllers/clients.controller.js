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

clientsCtrl.createClient = async (req,res) => {
   try {
        await Client.create ({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        email: req.body.email,
        note: req.body.note
        })
    } catch (error) {
        return res.status(409).send({})
    }
    return res.status(201).send({})    
}

module.exports = clientsCtrl;