const { default: axios } = require("axios");
const { expect, assert } = require("chai");
const { Product, Recipe, Ingredient, IngredientsPrice } = require('../db/models');

describe("List all products response", () => {
    it ("Products should be an Array", async function () {
        axios.get('localhost:3000/products/getAllProducts') .then((res) => {
            assert.equal(res.status,201);
            done();
        }).catch(err => {
            assert.equal(err.res.status,500)
        });
    });
})

    it("Agrego un producto", async function () {
      const path = 'http://localhost:3000/products/createProduct'
      const properties = { name: 'Salsa Golf', description: 'Salsa natural de color rosado'}
      axios.post(path, properties).
        then((res) => {
          expect(res.res.status).to.equal(200);
        }).catch(err => {
          expect(err.res.status).to.equal(409);
        })
    });

   

/*
const { default: axios } = require("axios");
const { expect, assert } = require("chai");

     it("Chequeo si devuelve el precio de un producto, ingresando la cantidad de productos que necesito"), async function() {
        const path = 'http://localhost:3000/products/getPriceByCant'
        const result = await axios.get(path, { data: properties });
        expect(result.data.hasAllergy).to.equal(true);
    }


  it("Agrego una alergia ya existente a un cliente", async function () {
    const path = 'http://localhost:3000/alergias/addAllergyToClient'
    const properties = { clientId: 1, ingredientId: 1 }
    axios.post(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(200);
      }).catch(err => {
        expect(err.res.status).to.equal(409);
      })
  });

  it("Checkeo si un usuario tiene alergias (POR TRUE)", async function () {
    const properties = { clientId: 1 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.hasAllergy).to.equal(true);
  });

  it("Checkeo si un usuario tiene alergias (POR FALSE)", async function () {
    const properties = { clientId: 2 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.hasAllergy).to.equal(false);
  });

  it("Checkeo si un usuario tiene alergias a un ungrediente particular", async function () {
    const properties = { clientId: 1, ingredientId: 1 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientIdAndIngredientId'

    const result = await axios.get(path, { data: properties });

    expect(result.data.hasAllergy).to.equal(true);
  });
});
*/