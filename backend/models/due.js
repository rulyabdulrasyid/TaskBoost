"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Due extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Due.belongsToMany(models.Task, {
        through: models.Task_due,
        foreignKey: "due_id",
      });
    }
  }
  Due.init(
    {
      due_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Due",
    }
  );
  return Due;
};
