'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band }) {
      // Define associations here
      MeetGreet.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band',
      });
    }
  }

  MeetGreet.init(
    {
      meet_greet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'MeetGreet',
    }
  );

  return MeetGreet;
};
