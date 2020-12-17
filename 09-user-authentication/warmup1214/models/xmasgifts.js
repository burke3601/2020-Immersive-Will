'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class XmasGifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  XmasGifts.init({
    name: DataTypes.STRING,
    recipient: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    vendor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'XmasGifts',
  });
  return XmasGifts;
};