'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ StageEvent }) {
      Event.hasMany(StageEvent, {
        foreignKey: 'event_id',
        as: 'stageEvents', // Rename to avoid confusion
      });
    }
  }

  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
  });

  return Event;
};
