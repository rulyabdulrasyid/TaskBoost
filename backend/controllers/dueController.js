const { Due } = require("../models");

class DueController {
  static async getAll(req, res, next) {
    try {
      const data = await Due.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async addDue(req, res, next) {
    try {
      const { due_date } = req.body;
      const due = await Due.create({ due_date });
      res.status(201).json(due);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = DueController;
