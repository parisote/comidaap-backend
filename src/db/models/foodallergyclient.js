'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodAllergyClient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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