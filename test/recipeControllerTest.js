const { default: axios } = require("axios");
const { expect, assert } = require("chai");
const { Product, Recipe, Ingredient, IngredientsPrice} = require("../src/db/models");
const app = require('../src/app.js')
require('dotenv').config();
const myPath = "http://localhost:"+process.env.PUERTO+"/recipes/createRecipe"

describe("Test Recipes", () => {
  describe("Fail Validations ", () => {
    it("Test validation of recipes is null", async () => {
      const properties = { id: 1, cant: 2 };
      const path = myPath;
      axios.post(path, { products: null, ingredients: [
            {id: 28,amount: 4},
            {id: 14,amount: 4}
          ],
          producedAmount: 4,
          typeMeasure: 2,
        })
        .then((res) => {assert.equal(res.status, 201) &&
                        assert.equal(res.data.ingredientsPrice.length, 3);
          done();
        })
        .catch((err) => {
          assert.equal(err.res.status, 400);
        });
    });

    it("Test one field ingredient is null", async () => {
      const properties = { id: 1, cant: 2 };
      const path = myPath;
      axios.post(path, { products: {
            name: "Pan de Hamburguesa de Campo con Oliva",
            description: "Algo de texto"
          },
          ingredients: [
            { id: 2, amount: 1200 },
            { id: 4, amount: 8 },
            { id: 10, amount: 150 },
            { id: 6, amount: 15 },
            { id: null, amount: 14 }
          ],
          producedAmount: 4,
          typeMeasure: 3,
        })
        .then((res) => {
          assert.equal(res.status, 201) &&
          assert.equal(res.data.ingredientsPrice.length, 3);
          done();
        })
        .catch((err) => {
          assert.equal(err.res.status, 400);
        });
    });

    it("Test name recipe is null", async () => {
      const properties = { id: 1, cant: 2 };
      const path = myPath;
      axios.post(path, {
          products: {
            name: "Pan de Hamburguesa de Campo",
            description: "Algo de texto"
          },
          ingredients: [
            { id: 2, amount: 1200 },
            { id: 4, amount: 8 },
            { id: 10, amount: 150 },
            { id: 6, amount: 15 },
            { id: 8, amount: 14 }
          ],
          producedAmount: 4,
          typeMeasure: 3,
        })
        .then((res) => {
            assert.equal(res.status, 201) &&
            assert.equal(res.data.ingredientsPrice.length, 3);
          done();
        })
        .catch((err) => {
            assert.equal(err.res.status, 400);
        });
    });

    it("Test Recipe name Alredy exists", async () => {
      const properties = { id: 1, cant: 2 };
      const path = myPath;
        axios.post(path, { products: {
            name: "Pan de Hamburguesa de Campo",
            description: "Algo de texto"
        },
        ingredients: [
          { id: 2, amount: 1200 },
          { id: 4, amount: 8 },
          { id: 10, amount: 150 },
          { id: 6, amount: 15 }
        ],
        producedAmount: 4,
        typeMeasure: 3,
      })
      .then((res) => {
        assert.equal(res.status, 201) &&
        assert.equal(res.data.ingredientsPrice.length, 3);
        done();
      })
      .catch((err) => {
        assert.equal(err.res.status, 400);
    });
});

it("Ingredient ID doesn't Exist", async () => {
  const properties = { id: 1, cant: 2 };
  const path = myPath;
  axios.post(path, { products: {
        name: "Pan de Hamburguesa de Campo",
        description: "Algo de texto"
      },
      ingredients: [
        { id: 2, amount: 1200 },
        { id: 4, amount: 8 },
        { id: 10, amount: 150 },
        { id: 66, amount: 15 }    //non existing ID
      ],
      producedAmount: 4,
      typeMeasure: 3,
    })
    .then((res) => {
      assert.equal(res.status, 201) &&
        assert.equal(res.data.ingredientsPrice.length, 3);
      done();
    })
    .catch((err) => {
      assert.equal(err.res.status, 400);
    });
});

it("MesureType ID doesn't Exist", async () => {
  const properties = { id: 1, cant: 2 };
  const path = myPath;
  axios.post(path, { products: {
        name: "Pan de Hamburguesa de Campo",
        description: "Algo de texto"
      },
      ingredients: [
        { id: 2, amount: 1200 },
        { id: 4, amount: 8 },
        { id: 10, amount: 150 },
        { id: 6, amount: 15 }    
      ],
      producedAmount: 4,
      typeMeasure: 33,       //non existing measureType ID
    })
    .then((res) => {
      assert.equal(res.status, 201) &&
        assert.equal(res.data.ingredientsPrice.length, 3);
      done();
    })
    .catch((err) => {
      assert.equal(err.res.status, 400);
    });
});

  })
});

