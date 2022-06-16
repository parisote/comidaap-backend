'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      name: 'Harina 000',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Harina 0000',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Leche 3%',
      typeMeasuresId: 1,
      createdAt: new Date
    },{
      name: 'Huevo Blanco Granja',
      typeMeasuresId: 3,
      createdAt: new Date
    },{
      name: 'Sal',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Azucar',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Agua',
      typeMeasuresId: 1,
      createdAt: new Date
    },{
      name: 'Levadura Fresca',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Aceite de Oliva',
      typeMeasuresId: 1,
      createdAt: new Date
    },{
      name: 'Carne picada Común',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Cebolla',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Ketchup',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Mostaza Dijón',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Lechuga',
      typeMeasuresId: 2,
      createdAt: new Date
    },{
      name: 'Tomate',
      typeMeasuresId: 2,
      createdAt: new Date
    }];
    
   await queryInterface.bulkInsert('ingredients', list, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredients', null, {});
  }
};
