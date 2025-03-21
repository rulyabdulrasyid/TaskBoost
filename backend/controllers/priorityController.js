const { Priority } = require("../models");

class PriorityController {
  static async getAll(req, res, next) {
    try {
      const data = await Priority.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async AddPriority(req, res, next) {
    try {
      const { priority_name } = req.body;
      const priority = await Priority.create({ priority_name });
      res.status(201).json(priority);
    } catch (err) {
      next(err);
    }
  }

  static async DeletePriority(req, res, next) {
    try {
      const { id } = req.params;
      const priority = await Priority.findOne({ where: { id } });
      const deleteRowsCount = await Priority.destroy({ where: { id } });

      if (deleteRowsCount !== 1) {
        throw { name: "Data Not Found" };
      }
      res
        .status(200)
        .json({ message: `Priority ${priority.priority_name} was deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PriorityController;
