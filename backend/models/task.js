"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, { foreignKey: "user_id" });
      Task.hasMany(models.Task_detail, { foreignKey: "task_id" });
      Task.belongsToMany(models.Priority, {
        through: models.Task_priority,
        foreignKey: "task_id",
      });
      Task.belongsToMany(models.Due, {
        through: models.Task_due,
        foreignKey: "task_id",
      });
    }
  }
  Task.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
