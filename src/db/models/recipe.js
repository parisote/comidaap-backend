'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
  
    static associate(models) {
      Recipe.belongsTo(models.Product),
      Recipe.belongsTo(models.Ingredient)
    }
  }
  Recipe.init({
    productId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    ingredientCount: DataTypes.DECIMAL(10,3)
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    
  });
  return Recipe;
};