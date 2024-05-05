'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add a unique constraint to the stage_id column in the stages table
    await queryInterface.addConstraint('stages', {
      type: 'unique',
      fields: ['stage_id'],
      name: 'unique_stage_id'
    });

    await queryInterface.createTable('stage_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'events', // Change to lowercase
          key: 'event_id'
        }
      },
      stage_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'stages', // Change to lowercase
          key: 'stage_id'
        }
      },
      // Add other columns here
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');

    // Remove the unique constraint on the stage_id column in the stages table
    await queryInterface.removeConstraint('stages', 'unique_stage_id');
  }
};
