'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('typeMeasures', [{
        name: 'Volumen',
        description: 'ml',
        createdAt: new Date
      },{
        name: 'Peso',
        description: 'gr',
        createdAt: new Date
      },{
        name: 'Unidad',
        description: 'un',
        createdAt: new Date
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('typeMeasures', null, {});
  }
};

