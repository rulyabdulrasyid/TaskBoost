"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Priorities", [
      {
        priority_name: "urgent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        priority_name: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        priority_name: "slow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Priorities", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
