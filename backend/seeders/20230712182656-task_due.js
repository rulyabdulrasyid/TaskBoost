"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Task_dues", [
      {
        task_id: 1,
        due_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task_id: 2,
        due_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Task_dues", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
