const productsCtrl = {};
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../db/models');

productsCtrl.getAllProducts = async (req,res) => {
    try {
    const all = await Product.findAll();
    res.status(200).send(all)
    } catch (error) {
        res.status(500).send({})
    }
}

 productsCtrl.getPriceByCant = async (req,res) => {
    const {id} = req.body;
    const {cant} = req.body;
    const ingredients = await Recipe.findAll(
        {
            where: { productId:id },
            include: [Ingredient]
        }
    )

    let totalPrice = 0;
    for (const element of ingredients) {
        const idIngredient = element['Ingredient']['id']
     
        const a = await IngredientsPrice.findOne({
            where: { ingredientId: idIngredient}
        });

        totalPrice += (element['ingredientCount'] * a['price']) * cant;
    }

    res.status(200).send({ProductPrice: totalPrice})
}


productsCtrl.getTotalCostByProductId = async (req,res) => {
    try {   
        const { id } = req.body;
        const ingredients = await Recipe.findAll(
            {
                where: { productId:id },
                include: [Ingredient]
            }
        )
        console.log(ingredients)

        let totalPrice = 0;
        for (const element of ingredients) {
            const idIngredient = element['Ingredient']['id']
            console.log(idIngredient)
            const a = await IngredientsPrice.findOne({
                where: { ingredientId: idIngredient}
            });
            console.log(a)
            totalPrice += element['ingredientCount'] * a['price'];
        }
    } catch (error) {
        res.status(500).send({})
    }
        res.status(200).send({ProductPrice: totalPrice})
}

productsCtrl.getIngredientCostByProductId = async (req,res) => {
    const { id } = req.body;
    const p = await Recipe.findAll(
        {
            where: { productId:id },
            include: [Ingredient]
        }
    )

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
}

productsCtrl.createProduct = async (req,res) => {
    try {    
        await Product.create ({
            name: req.body.name,
            description: req.body.description,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        })
    } catch(error) {
     res.status(500).send(error)
    }
     res.status(200).send({})
}



module.exports = productsCtrl;