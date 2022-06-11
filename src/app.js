const express = require('express');

const app = express();
app.set('port', process.env.PUERTO);

app.use(express.json());

app.get('/', function(req,res) {
    res.send('');
});

app.use('/clients', require('./routes/clients'));
app.use('/products', require('./routes/products'));

module.exports = app;