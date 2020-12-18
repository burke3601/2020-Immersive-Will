'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DinnerIdea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DinnerIdea.belongsTo(models.User, {
        foreignKey: 'dinnerID',
        onDelete: 'CASCADE'
      });
    }
  };
  DinnerIdea.init({
    dinner: DataTypes.STRING,
    category: DataTypes.STRING,
    dinnerID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DinnerIdea',
  });
  return DinnerIdea;
};