"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tasks", [
      {
        user_id: 1,
        name: "finishing todo list App",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: "learn toefl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
