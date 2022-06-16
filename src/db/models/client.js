'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate(models) {
      Client.hasMany(models.FoodAllergyClient)
    }
  }
  Client.init({
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    email: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};