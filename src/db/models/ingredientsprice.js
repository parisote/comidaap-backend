'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredientsPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      IngredientsPrice.belongsTo(models.Ingredient)
    }
  }
  IngredientsPrice.init({
    ingredientId: DataTypes.INTEGER,
    cant: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'IngredientsPrice',
  });
  return IngredientsPrice;
};