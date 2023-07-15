"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task_detail.belongsTo(models.Task, { foreignKey: "task_id" });
    }
  }
  Task_detail.init(
    {
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      task_detail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Task_detail",
    }
  );
  return Task_detail;
};
