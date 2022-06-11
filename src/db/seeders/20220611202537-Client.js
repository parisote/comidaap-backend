'use strict';
const f = require('@ngneat/falso');

module.exports = {
  async up (queryInterface, Sequelize) {
    const client = []
    for (let i = 0;i<10;i++) {
      client.push({
        first_name:f.randFirstName(),
        last_name:f.randLastName(),
        email:f.randEmail(),
        note:'Nota',
        createdAt:new Date,
        updatedAt:new Date})
    }   
    await queryInterface.bulkInsert('clients',client,{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients',null,{});
  }
};
