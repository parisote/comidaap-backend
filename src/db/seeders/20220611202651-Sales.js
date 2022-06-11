'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const sale = []
    for (let i = 0;i<10;i++) {
      sale.push({
        clientsId:i,
        productsId:1,
        productCount:i*2,
        createdAt:new Date})
    }
    await queryInterface.bulkInsert('Sales',sale,{});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Sales',null,{});
  }
};
