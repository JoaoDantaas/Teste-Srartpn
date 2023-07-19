"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TalkNotes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      talkId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Talks",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    // await queryInterface.addIndex("TalkNotes", ["talkId"]);
    // await queryInterface.addIndex("TalkNotes", ["userId"]);
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.removeIndex("TalkNotes", ["talkId"]);
    // await queryInterface.removeIndex("TalkNotes", ["userId"]);
    await queryInterface.dropTable("TalkNotes");
  },
};
