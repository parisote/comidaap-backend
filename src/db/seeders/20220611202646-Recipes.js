'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      productId: 1,
      ingredientId: 1,
      ingredientCount: 500,
      createdAt: new Date
    },{
      productId: 2,
      ingredientId: 13,
      ingredientCount: 114,
      createdAt: new Date
    },{
      productId: 1,
      ingredientId: 3,
      ingredientCount: 100,
      createdAt: new Date
    },{
      productId: 1,
      ingredientId: 9,
      ingredientCount: 2,
      createdAt: new Date
    },{
      productId: 1,
      ingredientId: 10,
      ingredientCount: 10,
      createdAt: new Date
    }
    ];
    await queryInterface.bulkInsert('Recipes', list, {});    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  }
};
