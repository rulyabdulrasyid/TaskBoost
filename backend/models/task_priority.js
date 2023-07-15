"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task_priority extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task_priority.belongsTo(models.Priority, { foreignKey: "priority_id" });
      Task_priority.belongsTo(models.Task, { foreignKey: "task_id" });
    }
  }
  Task_priority.init(
    {
      priority_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Task_priority",
    }
  );
  return Task_priority;
};
