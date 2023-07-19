"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TalkPoints", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      checked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    await queryInterface.addIndex("TalkPoints", ["talkId"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("TalkPoints", ["talkId"]);
    await queryInterface.dropTable("TalkPoints");
  },
};
