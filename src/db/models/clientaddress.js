'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientAddress extends Model {
   
    static associate(models) {
    
    }
  }
  ClientAddress.init({
    clientId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    department: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClientAddress',
  });
  return ClientAddress;
};