'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      productId: 1,
      ingredientId: 5,
      ingredientCount: 24,
      createdAt: new Date
    },{
      productId: 2,
      ingredientId: 13,
      ingredientCount: 114,
      createdAt: new Date
    },
    ];
    await queryInterface.bulkInsert('Recipes', list, {});    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  }
};
