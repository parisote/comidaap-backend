const { assert } = require('chai')
const { axios } = require('axios')
const { DESCRIBE } = require('sequelize')
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