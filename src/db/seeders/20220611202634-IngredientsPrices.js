'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list =[
      {
        ingredientId: 1,
        cant:100,
        price: 12,
        createdAt: new Date
      },{
        ingredientId: 2,
        cant:100,
        price: 13.5,
        createdAt: new Date
      },{
        ingredientId: 3,
        cant:1000,
        price: 145,
        createdAt: new Date
      },{
        ingredientId: 4,
        cant:1,
        price: 21,
        createdAt: new Date
      },{
        ingredientId: 6,
        cant:1000,
        price: 110,
        createdAt: new Date
      },{
        ingredientId: 7,
        cant:1000,
        price: 115,
        createdAt: new Date
      },{
        ingredientId: 5,
        cant:100,
        price: 15,
        createdAt: new Date
      },{
        ingredientId: 8,
        cant:5,
        price: 10,
        createdAt: new Date
      },{
        ingredientId: 9,
        cant:1000,
        price: 700,
        createdAt: new Date
      },{
        ingredientId: 10,
        cant:1000,
        price: 1000,
        createdAt: new Date
      },{
        ingredientId: 11,
        cant:100,
        price: 15,
        createdAt: new Date
      },{
        ingredientId: 12,
        cant:100,
        price: 152,
        createdAt: new Date
      },{
        ingredientId: 13,
        cant:100,
        price: 252,
        createdAt: new Date
      },{
        ingredientId: 14,
        cant:100,
        price: 25,
        createdAt: new Date
      },{
        ingredientId: 15,
        cant:50,
        price: 13.5,
        createdAt: new Date
      }
    ]
    await queryInterface.bulkInsert('IngredientsPrices', list, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('IngredientsPrices', null, {});
  }
};
