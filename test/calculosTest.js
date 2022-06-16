const { default: axios } = require("axios");
const { expect, assert } = require("chai");
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../src/db/models');

 describe("Creación de productos, ingredientes, recetas y clientes", () => {
    it("Create product", async () => {
      const path = 'http://localhost:3000/products/createProduct'
      const properties = { name: 'Pollo al Espiedo', description: 'Pollo con salsita una delicia'}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        })
    });

    it("Create recipe", async () => {
      const path = 'http://localhost:3000/recipes/createRecipe'
      const properties = { productId: 1, ingredientId: 7, ingredientCount: 10}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        })
    });

    it("Create ingredient", async () => {
      const path = 'http://localhost:3000/ingredients/createIngredient'
      const properties = { name: 'Jugo de limón', typeMeasureId: 1}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(200);
        })
    });
    it("Create ingredient price", async () => {
      const path = 'http://localhost:3000/ingredientsPrice/createIngredientPrice'
      const properties = { ingredientId: 16, cant: 1, price: 200}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        })
    });

    it("Create client", async () => {
      const path = 'http://localhost:3000/clients/createClient'
      const properties = {
        last_name: 'Bareiro',
        first_name: 'Ádam',
        email: 'adam_casla@gmail.com',
        note: 'El 9 de San Lorenzo'
      }
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(201);
        })
    });
  })


  describe("Cálculos de precios de productos e ingredientes", () => {    
  it ("Products should be an Array", async () => {
    axios.get('localhost:3000/products/getAllProducts') .then((res) => {
        assert.equal(res.status,200);
        done();
    })
});

    it("Chequeo si devuelve el precio de un producto, ingresando la cantidad de productos que necesito", async function() {
      const properties = { id: 1, cant: 2 }
      const path = 'http://localhost:3000/products/getPriceByCant'
      const result = await axios.get(path, { data: properties });
      expect(result.data.ProductPrice).to.equal(64950);
  });

  it("Chequeo que devuelva el precio total de un producto, según la suma de los preicios de sus ingredientes", async function() {
    const properties = { id: 2}
    const path = 'http://localhost:3000/products/getTotalCostByProductId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.ProductPrice).to.equal(28728);
});

it ("Chequeo que devuelva un array de los ingredientes del producto ingresado, con su precio", async function () {
  const properties = {id: 2}
  const path = 'http://localhost:3000/products/getIngredientCostByProductId'
  axios.get(path, {data: properties}) .then((res) => {
      assert.equal(res.status,201)&&assert.equal(res.data.ingredientsPrice.length,1)
      done();
  })
});
it ("Chequeo que devuelva el cliente de por su apellido", async function () {
  const properties = {last_name: 'Parry'}
  const path = 'http://localhost:3000/clients/getClientByLastName'
  axios.get(path, {data: properties}) .then((res) => {
      assert.equal(res.status,201)&&assert.equal(res.data.last_name,'Parry')
      done();
  })
});
it ("Chequeo que devuelva el cliente de por su ID", async function () {
  const properties = {id: 7}
  const path = 'http://localhost:3000/clients/getClientById'
  axios.get(path, {data: properties}) .then((res) => {
      assert.equal(res.status,201)&&assert.equal(res.data.id,7)
      done();
  })
});


});

describe("Delete de cliente, ingrediente, producto y receta", () => { 
  it("Delete client by email", async function () {
    const path = 'http://localhost:3000/clients/deleteClientByEmail'
    const properties = {email: 'adam_casla@gmail.com'}
    axios.delete(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(200);
      })
  });
  it("Delete ingredient price", async function () {
    const path = 'http://localhost:3000/ingredientsPrice/deleteIngredientPrice'
    const properties = {ingredientId:16}
    axios.delete(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(200);
      })
  });
  it("Delete ingredient by name", async function () {
    const path = 'http://localhost:3000/ingredients/deleteIngredientByName'
    const properties = {name:'Jugo de limón'}
    axios.delete(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(200);
      })
  });
  it("Delete product by name", async function () {
    const path = 'http://localhost:3000/products/deleteProductByName'
    const properties = {name:'Pollo al Espiedo'}
    axios.delete(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(200);
      })
  });
  it("Delete recipe", async function () {
    const path = 'http://localhost:3000/recipes/deleteRecipe'
    const properties = {productId:1,ingredientId:3}
    axios.delete(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(200);
      })
  });

});
