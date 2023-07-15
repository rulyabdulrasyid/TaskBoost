"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task_due extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task_due.belongsTo(models.Task, { foreignKey: "task_id" });
      Task_due.belongsTo(models.Due, { foreignKey: "due_id" });
    }
  }
  Task_due.init(
    {
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      due_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Task_due",
    }
  );
  return Task_due;
};
