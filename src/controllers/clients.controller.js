const clientsCtrl = {};
const { Client } = require('../db/models');

clientsCtrl.getAllClient = async (req, res) => {
    const all = await Client.findAll();
    res.send(all);
}

clientsCtrl.getClientById = async (req, res) => {
    try {
        const { id } = req.body;
        if (!isNaN(id)) {
            const c = await Client.findOne({
                where: { id: id }
            });
            if (c != null) {
                res.send(c);
            } else {
                res.status(500).send('Cliente no encontrado')
            }
        } else {
            res.status(500).send('Debe ingresar un número.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

clientsCtrl.getClientByLastName = async (req, res) => {
    try {
        const { last_name } = req.body;
        const c = await Client.findOne({
            where: { last_name: last_name }
        })
        if (c != null) {
            res.send(c);
        } else {
            res.status(500).send('Cliente no encontrado')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

clientsCtrl.createClient = async (req, res) => {
    try {
        const email  = req.body.email;
        const c = await Client.findOne({
            where: { email: email }
        })
        if (c == null) {
            await Client.create({
                last_name: req.body.last_name,
                first_name: req.body.first_name,
                email: email,
                note: req.body.note,
                createdAt: new Date()
            })
            res.status(201).send({})
        } else {
            res.status(500).send('Client already exists')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

clientsCtrl.deleteClientById = async (req, res) => {
    try {
        const { id } = req.body;
        const c = await Client.findOne({
            where: { id: id }
        })
        if (c != null) {
            await Client.destroy({
                where: { id: id }
            });
            res.status(200).send({})
        } else {
            res.status(500).send('No existe el cliente.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
clientsCtrl.deleteClientByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const c = await Client.findOne({
            where: { email: email }
        })
        if (c != null) {
            await Client.destroy({
                where: { email: email }
            });
            result = { result: 'OK' };
            res.status(200).send(result)

        } else {
            res.status(500).send('No existe el cliente.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = clientsCtrl;