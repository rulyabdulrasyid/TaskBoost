"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Dues", [
      {
        due_date: "today",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        due_date: "tommorow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        due_date: "next week",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dues", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
