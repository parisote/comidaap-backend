'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      clientId: 1,
      ingredientId: 1,
      createdAt: new Date
    },{
      clientId: 1,
      ingredientId: 2,
      createdAt: new Date
    },{
      clientId: 1,
      ingredientId:5,
      createdAt: new Date
    }
  ]
  await queryInterface.bulkInsert('foodallergyclients', list, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foodallergyclients', null, {});
  }
};
