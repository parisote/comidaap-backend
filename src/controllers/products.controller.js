const productsCtrl = {};
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../db/models');

productsCtrl.getAllProducts = async (req,res) => {
    const all = await Product.findAll();
    res.send(all);
}

productsCtrl.getTotalCostByProductId = async (req,res) => {
        const { id } = req.body;
        const p = await Recipe.findAll(
            {
                where: { productId:id },
                include: [Ingredient]
            }
        )

        let totalPrice = 0;
        for (const element of p) {
            const id = element['Ingredient']['id']

            const a = await IngredientsPrice.findOne({
                where: { ingredientId: id}
            });

            totalPrice += element['ingredientCount'] * a['price'];
        }

        res.status(200).send({ totalPrice: totalPrice })
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

module.exports = productsCtrl;