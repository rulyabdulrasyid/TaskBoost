"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Priority extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Priority.belongsToMany(models.Task, {
        through: models.Task_priority,
        foreignKey: "priority_id",
      });
    }
  }
  Priority.init(
    {
      priority_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Priority",
    }
  );
  return Priority;
};
