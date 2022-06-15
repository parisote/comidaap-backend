'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodAllergyClient extends Model {
   
    static associate(models) {
      
    }
  }
  FoodAllergyClient.init({
    clientsId: DataTypes.INTEGER,
    ingredientsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FoodAllergyClient',
  });
  return FoodAllergyClient;
};