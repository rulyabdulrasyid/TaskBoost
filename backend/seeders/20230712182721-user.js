"use strict";

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        first_name: "admin",
        last_name: "admin",
        username: "admin",
        password: await bcrypt.hash("admin", 10),
        email: "admin@gmail.com",
        phone_number: "+6287000000",
        date_of_birth: "16 November 1995",
        photo:
          "https://images.unsplash.com/photo-1552661397-4233881ea8c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=665&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "admin2",
        last_name: "admin2",
        username: "admin2",
        password: await bcrypt.hash("admin2", 10),
        email: "admin2@gmail.com",
        phone_number: "+6287000000",
        date_of_birth: "16 November 1995",
        photo:
          "https://images.unsplash.com/photo-1552661397-4233881ea8c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=665&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
