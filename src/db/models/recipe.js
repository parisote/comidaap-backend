'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.Product),
      Recipe.belongsTo(models.Ingredient)
    }
  }
  Recipe.init({
    productId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    ingredientCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};