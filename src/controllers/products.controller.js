const productsCtrl = {};
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../db/models');

productsCtrl.getAllProducts = async (req, res) => {
    try {
        const all = await Product.findAll();
        res.status(200).send(all)
    } catch (error) {
        res.status(500).send(error)
    }
}

productsCtrl.getPriceByCant = async (req, res) => {
    try {
        const { id } = req.body;
        const { cant } = req.body;
        const product = await Recipe.findOne({
            where: { productId: id }
        });
        if ((!isNaN(id) || !isNaN(cant)) && product != null) {
            const ingredients = await Recipe.findAll({
                where: { productId: id },
                include: [Ingredient]
            });

            let totalPrice = 0;
            for (const element of ingredients) {
                const idIngredient = element['Ingredient']['id']

                const a = await IngredientsPrice.findOne({
                    where: { ingredientId: idIngredient }
                });

                totalPrice += (element['ingredientCount'] * a['price']) * cant;
            }
            res.status(200).send({ ProductPrice: totalPrice })

        } else {
            res.status(500).send('Parámetros inválidos.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


productsCtrl.getTotalCostByProductId = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await Recipe.findOne({
            where: { productId: id }
        });
        if (!isNaN(id) && product != null) {

            const ingredients = await Recipe.findAll(
                {
                    where: { productId: id },
                    include: [Ingredient]
                });

            let totalPrice = 0;
            for (const element of ingredients) {
                const idIngredient = element['Ingredient']['id']
                const a = await IngredientsPrice.findOne({
                    where: { ingredientId: idIngredient }
                });

                totalPrice += element['ingredientCount'] * a['price'];
            }
            res.status(200).send({ ProductPrice: totalPrice })

        } else {
            res.status(500).send('Parámetros inválidos.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

productsCtrl.getIngredientCostByProductId = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await Recipe.findOne({
            where: { productId: id }
        });
        if (!isNaN(id) && product != null) {
            const p = await Recipe.findAll({
                where: { productId: id },
                include: [Ingredient]
            });

            let ingredientPrice = [];
            for (const element of p) {
                const id = element['Ingredient']['id']

                const a = await IngredientsPrice.findOne({
                    where: { ingredientId: id }
                });
                const i = element['Ingredient']['name']

                ingredientPrice.push({ name: i, price: element['ingredientCount'] * a['price'] });
            }
            res.status(200).send({ ingredientPrice })

        } else {
            res.status(500).send('Parámetros inválidos.')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

productsCtrl.createProduct = async (req, res) => {
    try {
        const name = req.body.name;
        const tryName = await Product.findOne({
            where: { name: name }
        })
        if (tryName == null) {
            await Product.create({
                name: name,
                description: req.body.description,
                createdAt: new Date()
            })
            res.status(201).send({})

        } else {
            res.status(500).send('Product already exists')
        }
    } catch (error) {
        res.status(500).send(error)
    }

}

productsCtrl.deleteProductById = async (req, res) => {
    try {
        const { id } = req.body;
        const p = await Product.findOne({
            where: { id: id }
        })
        if (p != null) {
            await Product.destroy({
                where: { id: id }
            })
            res.status(200).send({})

        } else {
            res.status(500).send('No existe el producto')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

productsCtrl.deleteProductByName = async (req, res) => {
    try {
        const { name } = req.body;
        const p = await Product.findOne({
            where: { name: name }
        });
        if (p != null) {

            await Product.destroy({
                where: { name: name }
            })
            res.status(200).send({})

        } else {
            res.status(500).send('No existe el producto')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = productsCtrl;