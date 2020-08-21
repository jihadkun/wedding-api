"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("infos", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      mempelaiPria: {
        type: Sequelize.STRING,
      },
      keluargaPria: {
        type: Sequelize.STRING,
      },
      mempelaiWanita: {
        type: Sequelize.STRING,
      },
      keluargaWanita: {
        type: Sequelize.STRING,
      },
      lokasi: {
        type: Sequelize.STRING,
      },
      tanggal: {
        type: Sequelize.STRING,
      },
      waktu: {
        type: Sequelize.STRING,
      },
      kronologiPertemuan: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("infos");
  },
};
