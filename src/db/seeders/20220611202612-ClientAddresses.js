'use strict';
const address = require('@ngneat/falso')
const cantAddress = 10;

module.exports = {
  async up (queryInterface, Sequelize) {
    const addressList = [];

    for(let i = 0; i < cantAddress; i++){
     let aux =  address.randAddress();
      addressList.push({
                      clientId: i,
                      city: aux.city,
                      zipCode: aux.zipCode, 
                      street: aux.street,
                      number: (i*i+1),
                      floor: (i+2),
                      department: 'A',
                      note: "Tocar Timbre al lado",
                    createdAt:new Date})
    }
    await queryInterface.bulkInsert('ClientAddresses', addressList, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClientAddresses', null, {}); 
  }
};
