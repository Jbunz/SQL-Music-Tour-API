'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add the recommendation column to the 'bands' table
    await queryInterface.addColumn('Bands', 'recommendation', {
      type: DataTypes.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the recommendation column from the 'bands' table
    await queryInterface.removeColumn('Bands', 'recommendation');
  }
};
