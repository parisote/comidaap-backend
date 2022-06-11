'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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