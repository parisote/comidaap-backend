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
      // define association here
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