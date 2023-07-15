"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Task_priorities", [
      {
        priority_id: 1,
        task_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        priority_id: 2,
        task_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Task_priorities", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
