const { default: axios } = require("axios");
const { expect, assert } = require("chai");
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../db/models');

describe("Costos y cantidades de productos e ingredientes", () => {
    it ("Products should be an Array", async function () {
        axios.get('localhost:3000/products/getAllProducts') .then((res) => {
            assert.equal(res.status,201);
            done();
        }).catch(err => {
            assert.equal(err.res.status,409)
        });
    });


    it("Create product", async function () {
      const path = 'http://localhost:3000/products/createProduct'
      const properties = { name: 'Salsa Golf', description: 'Salsa natural de color rosado'}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(200);
        }).catch(err => {
          expect(err.res.status).to.equal(409);
        })
    });

    it("Create recipe", async function () {
      const path = 'http://localhost:3000/recipes/createRecipe'
      const properties = { productId: 1, ingredientId: 2, ingredientCount: 5}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(200);
        }).catch(err => {
          expect(err.res.status).to.equal(409);
        })
    });

    it("Create ingredient", async function () {
      const path = 'http://localhost:3000/ingredients/createIngredient'
      const properties = { name: 'Champiñón australiano', typeMeasureId: 1}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(200);
        }).catch(err => {
          expect(err.res.status).to.equal(409);
        })
    });

    it("Chequeo si devuelve el precio de un producto, ingresando la cantidad de productos que necesito"), async function() {
      const properties = { id: 1, cant: 2 }
      const path = 'http://localhost:3000/products/getPriceByCant'
      const result = await axios.get(path, { data: properties });
      expect(result.data.totalPrice).to.equal(1.488);
  }

  it("Chequeo que devuelva el precio total de un producto, según la suma de los preicios de sus ingredientes"), async function() {
    const properties = { id: 2}
    const path = 'http://localhost:3000/products/getTotalCostByProductId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.ingredientPrice).to.equal(1710);
}

it("Chequeo que devuelva un array de los ingredientes del producto ingresado, con su precio"), async function() {
  const properties = { id: 2}
  const path = 'http://localhost:3000/products/getIngredientCostByProductId'
  const result = await axios.get(path, { data: properties });
  expect(result.data.totalPrice).to.be(Array);
}

})