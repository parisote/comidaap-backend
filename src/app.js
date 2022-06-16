const express = require('express');

const app = express();
app.set('port', process.env.PUERTO);

app.use(express.json());

app.get('/', function(req,res) {
    res.send('');
});

app.use('/clients', require('./routes/clients'));
app.use('/products', require('./routes/products'));
app.use('/alergias', require('./routes/allergy'));
app.use('/ingredients', require('./routes/ingredients'));
app.use('/recipes', require('./routes/recipes'));
app.use('/ingredientsPrice', require('./routes/ingredientsPrice'))

module.exports = app;