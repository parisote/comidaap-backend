const clientsCtrl = {};
const { Client } = require('../db/models');

clientsCtrl.getAllClient = async (req,res) => {
    const all = await Client.findAll();
    res.send(all);
}

clientsCtrl.getClientById = async (req,res) => {
    const { id } = req.body;
    if (!isNaN(id)) {
        const c = await Client.findOne({ 
            where: { id: id } 
        });
        if (c!=null) {    
            res.send(c);
        } else {
            res.status(500).send('Cliente no encontrado')
        }    
    } else {
        res.status(500).send('Debe ingresar un número.')
    }    
}

clientsCtrl.getClientByLastName = async (req,res) => {
    const { last_name } = req.body;
    const c = await Client.findOne({ 
        where: { last_name: last_name } 
    })
    if (c != null) {
        res.send(c);
    } else {
        res.status(500).send('Cliente no encontrado')
    }    
}

clientsCtrl.createClient = async (req,res) => {
   const email = req.body.email;
   const client = Client.findOne ({
    where: {email:email}
   })
   if (client == null) {
        try {
            await Client.create ({
                last_name: req.body.last_name,
                first_name: req.body.first_name,
                email: req.body.email,
                note: req.body.note,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            })
            res.status(201)
        } catch (error) {
            res.status(500).send(error)
        }
   } else {
    res.status(500).send('Client already exists')
   }
}

clientsCtrl.deleteClientById = async (req,res) => {
    const {id} = req.body;
    const c = Client.findOne({
        where: {id:id}
    })
    if (c != null) {
        try {    
            await Client.delete ({
                where: {id:id}
            });
            res.status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('No existe el cliente.')
    }
}
clientsCtrl.deleteClientByEmail = async (req,res) => {
    const {email} = req.body;
    const c = Client.findOne({
        where: {email:email}
    })
    if (c != null) {
        try {    
            await Client.delete ({
                where: {email:email}
            });
            res.status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('No existe el cliente.')
    }
}

module.exports = clientsCtrl;