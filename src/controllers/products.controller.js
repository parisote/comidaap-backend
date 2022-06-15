const productsCtrl = {};
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../db/models');

productsCtrl.getAllProducts = async (req,res) => {
    const all = await Product.findAll();
    res.send(all);
}

productsCtrl.getProductByRecipeId = async (req,res) => {
    const { id } = req.body;
    const products = await Recipe.findAll(
        {
            where: { id:id },
            include: [Product]
        }
    )
    res.status(200).send({ products })
}

productsCtrl.getTotalCostByProductId = async (req,res) => {
        const { id } = req.body;
        const recipes = await Recipe.findAll(
            {
                where: { productId:id },
                include: [Ingredient]
            }
        )

        let totalPrice = 0;
        for (const element of recipes) {
            const idIngredient = element['Ingredient']['id']
         
            const a = await IngredientsPrice.findOne({
                where: { ingredientId: idIngredient}
            });

            totalPrice += element['ingredientCount'] * a['price'];
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
        console.log(i)
        ingredientPrice.push({ name: i,  price:element['ingredientCount'] * a['price'] });
    }

    res.status(200).send({ ingredientPrice })
}

productsCtrl.createProduct = async (req,res) => {
    try {    
        Product.create ({
            name: req.body.name,
            description: req.body.description
        })
    } catch(error) {s
        return res.status(501).send({})
    }
    return res.status(200).send({})
}



module.exports = productsCtrl;