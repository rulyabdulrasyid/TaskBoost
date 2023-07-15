"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Task_details", [
      {
        task_id: 1,
        task_detail: "Desain ERD",
        status: "done",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task_id: 1,
        task_detail: "Backend",
        status: "progres",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task_id: 1,
        task_detail: "Frontend",
        status: "belum",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task_id: 2,
        task_detail: "Pelajari buku 1",
        status: "done",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task_id: 2,
        task_detail: "Pelajari buku 2",
        status: "progres",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Task_details", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
