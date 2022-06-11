'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      name: 'Pan de Hamburguesa de Campo',
      description: 'Delicioso pan de campo artesanal hecho con el doble de amor',
      createdAt: new Date
    },{
      name: 'Medallón de Carne 160gr',
      description: 'Medallón de Carne premium de novillo para chuparse los dedos',
      createdAt: new Date
    }];
   await queryInterface.bulkInsert('Products', list, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
