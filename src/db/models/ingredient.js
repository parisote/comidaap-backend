'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {

    static associate(models) {
      Ingredient.hasMany(models.Recipe),
      Ingredient.hasMany(models.IngredientsPrice)
    }

  }
  Ingredient.init({
    name: DataTypes.STRING,
    typeMeasuresId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};