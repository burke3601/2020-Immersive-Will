'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.DinnerIdea, {
        foreignKey: 'dinnerID'
      })
    }
  };
  User.init({
    username: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};