const {
  Task,
  Priority,
  Due,
  Task_detail,
  Task_priority,
  Task_due,
  sequelize,
} = require("../models");

class TaskController {
  static async getAll(req, res, next) {
    const userId = req.user.id;

    try {
      const data = await Task.findAll({
        where: { user_id: userId },
        include: [Priority, Due],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async getOne(req, res, next) {
    const userId = req.user.id;
    const { id } = req.params;
    try {
      const data = await Task.findOne({
        where: { id, user_id: userId },
        include: [Priority, Task_detail, Due],
      });
      if (data) {
        res.status(200).json(data);
      } else {
        throw { name: "ErrorNotFound" };
      }
    } catch (err) {
      next(err);
    }
  }
  static async create(req, res, next) {
    const { user_id, name, task_detail, status, priority_id, due_id } =
      req.body;

    try {
      // Buat task baru
      const task = await sequelize.transaction(async (t) => {
        const createdTask = await Task.create(
          { user_id, name },
          { transaction: t }
        );

        // Buat detail tugasnya
        const taskDetails = task_detail.map((detail, index) => ({
          task_id: createdTask.id,
          task_detail: detail,
          status: status[index],
        }));

        await Task_detail.bulkCreate(taskDetails, { transaction: t });

        // Priority
        await Task_priority.create(
          { task_id: createdTask.id, priority_id },
          { transaction: t }
        );

        // Due
        await Task_due.create(
          { task_id: createdTask.id, due_id },
          { transaction: t }
        );

        return createdTask;
      });
      res.status(201).json(task);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    const taskId = req.params.id;
    try {
      await sequelize.transaction(async (t) => {
        await Task_detail.destroy({
          where: { task_id: taskId },
          transaction: t,
        });

        await Task_priority.destroy({
          where: { task_id: taskId },
          transaction: t,
        });

        await Task_due.destroy({ where: { task_id: taskId }, transaction: t });

        const deleteTask = await Task.destroy({ where: { id: taskId } });

        return deleteTask;
      });
      res.status(200).json({ message: `Task deleted successffuly` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TaskController;
