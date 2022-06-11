'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FoodAllergyClients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientsId: {
        type: Sequelize.INTEGER
      },
      ingredientsId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FoodAllergyClients');
  }
};