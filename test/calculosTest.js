const { default: axios } = require("axios");
const { expect, assert } = require("chai");
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../src/db/models');

/* describe("POST", () => {
    it("Create product", async function () {
      const path = 'http://localhost:3000/products/createProduct'
      const properties = { name: 'Salsa Golf', description: 'Salsa natural de color rosado', createdAt: new Date()}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        }).catch(err => {
          expect(err.res.status).to.equal(500);
        })
    });

    it("Create recipe", async function () {
      const path = 'http://localhost:3000/recipes/createRecipe'
      const properties = { productId: 1, ingredientId: 2, ingredientCount: 5, createdAt: new Date()}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        }).catch(err => {
          expect(err.res.status).to.equal(500);
        })
    });

    it("Create ingredient", async function () {
      const path = 'http://localhost:3000/ingredients/createIngredient'
      const properties = { name: 'Champiñón australiano', typeMeasureId: 1, createdAt: new Date}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        }).catch(err => {
          expect(err.res.status).to.equal(500);
        })
    });


    it("Create client", async function () {
      const path = 'http://localhost:3000/clients/createClient'
      const properties = {
        last_name: 'Pérez',
        first_name: 'Juan Gonzalo',
        email: 'juangonpe@gmail.com',
        note: 'Esto es una nota'
      }
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        }).catch(err => {
          expect(err.res.status).to.equal(500);
        })
    });
  })
 */
  describe("GET", () => {    
  it ("Products should be an Array", async function () {
    axios.get('localhost:3000/products/getAllProducts') .then((res) => {
        assert.equal(res.status,200);
        done();
    }).catch(err => {
        assert.equal(err.res.status,500)
    });
});

    it("Chequeo si devuelve el precio de un producto, ingresando la cantidad de productos que necesito", async function() {
      const properties = { id: 1, cant: 2 }
      const path = 'http://localhost:3000/products/getPriceByCant'
      const result = await axios.get(path, { data: properties });
      expect(result.data.ProductPrice).to.equal(3.088);
  });

  it("Chequeo que devuelva el precio total de un producto, según la suma de los preicios de sus ingredientes", async function() {
    const properties = { id: 2}
    const path = 'http://localhost:3000/products/getTotalCostByProductId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.ProductPrice).to.equal(1710);
});

it ("Chequeo que devuelva un array de los ingredientes del producto ingresado, con su precio", async function () {
  const properties = {id: 1}
  const path = 'http://localhost:3000/products/getIngredientCostByProductId'
  axios.get(path, {data: properties}) .then((res) => {
      assert.equal(res.status,201)&&assert.equal(res.data.ingredientsPrice.length,3)
      done();
  }).catch(err => {
      assert.equal(err.res.status,500)
  });
});


})