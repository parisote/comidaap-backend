'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodAllergyClient extends Model {
   
    static associate(models) {
      FoodAllergyClient.belongsTo(models.Client),
      FoodAllergyClient.belongsTo(models.Ingredient)
    }
  }
  FoodAllergyClient.init({
    clientId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FoodAllergyClient',
  });
  return FoodAllergyClient;
};