const productsCtrl = {};
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../db/models');

productsCtrl.getAllProducts = async (req,res) => {
    try {
    const all = await Product.findAll();
    res.status(200).send(all)
    } catch (error) {
        res.status(500).send(error)
    }
}

 productsCtrl.getPriceByCant = async (req,res) => {
    const {id} = req.body;
    const {cant} = req.body;
    const product = await Recipe.findOne ({
        where: {productId:id}
    });
    if ((!isNaN(id)||!isNaN(cant))&&product!=null) {
        try {
            const ingredients = await Recipe.findAll({
                where: { productId:id },
                include: [Ingredient]
            });

            let totalPrice = 0;
            for (const element of ingredients) {
                const idIngredient = element['Ingredient']['id']
     
                const a = await IngredientsPrice.findOne({
                    where: { ingredientId: idIngredient}
                });

                totalPrice += (element['ingredientCount'] * a['price']) * cant;
            }
            res.status(200).send({ProductPrice: totalPrice})
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('Parámetros inválidos.')
    }
}
 

productsCtrl.getTotalCostByProductId = async (req,res) => {
    const {id} = req.body;
    const product = await Recipe.findOne ({
        where: {productId:id}
    });
    if (!isNaN(id)&&product!=null) {
        try {
            const ingredients = await Recipe.findAll(
                {
                    where: { productId:id },
                    include: [Ingredient]
                }); 

            let totalPrice = 0;
            for (const element of ingredients) {
                const idIngredient = element['Ingredient']['id']
                const a = await IngredientsPrice.findOne({
                    where: { ingredientId: idIngredient}
                });
      
                totalPrice += element['ingredientCount'] * a['price'];
            }
            res.status(200).send({ProductPrice: totalPrice})
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('Parámetros inválidos.')
    }    
}

productsCtrl.getIngredientCostByProductId = async (req,res) => {
    const {id} = req.body;
    const product = await Recipe.findOne ({
        where: {productId:id}
    });
    if (Number.isNaN(id)&&product!=null) {
        try {
            const p = await Recipe.findAll({
                where: { productId:id },
                include: [Ingredient]
            });

            let ingredientPrice = [];
            for (const element of p) {
                const id = element['Ingredient']['id']

                const a = await IngredientsPrice.findOne({
                    where: { ingredientId: id}
                });
                const i = element['Ingredient']['name']
       
                ingredientPrice.push({ name: i,  price:element['ingredientCount'] * a['price'] });
            }
            res.status(200).send({ ingredientPrice })
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('Parámetros inválidos.')
    }
}

productsCtrl.createProduct = async (req,res) => {
    const name = req.body.name;
    const tryName= await Product.findOne ({
        where: {name:name}
    })
    if (tryName == null) {
    try {    
        await Product.create ({
            name: name,
            description: req.body.description,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        })
        res.status(200)
    } catch(error) {
     res.status(500).send(error)
    }    
} else {
    res.status(500).send('Product already exists')
}
}

productsCtrl.deleteProductById = async (req,res) => {
    const {id} = req.body;
    const p = Product.findOne({
        where: {id:id}
    })
    if (p != null) {
        try {    
            await Product.delete ({
                where: {id:id}
            })
            res.status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(500).send('No existe el producto')
    }
}

productsCtrl.deleteProductByName = async (req,res) => {
    const {name} = req.body;
    const p = Product.findOne({
        where: {name:name}
    });
if (p != null) {
    try {    
        await Product.delete ({
            where: {name:name}
        })
        res.status(200)
    } catch (error) {
        res.status(500).send(error)
    }
} else {
    res.status(500).send('No existe el producto')
}
}

module.exports = productsCtrl;