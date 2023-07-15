"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
