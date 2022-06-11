'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list =[
      {
        ingredientId: 1,
        cant:1,
        price: 0.06,
        createdAt: new Date
      },{
        ingredientId: 2,
        cant:1,
        price: 0.08,
        createdAt: new Date
      },{
        ingredientId: 3,
        cant:1,
        price: 0.05,
        createdAt: new Date
      },{
        ingredientId: 4,
        cant:1,
        price: 21.667,
        createdAt: new Date
      },{
        ingredientId: 6,
        cant:1,
        price: 0.031,
        createdAt: new Date
      },{
        ingredientId: 7,
        cant:1,
        price: 0.052,
        createdAt: new Date
      }
    ]
    await queryInterface.bulkInsert('IngredientsPrices', list, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('IngredientsPrices', null, {});
  }
};
