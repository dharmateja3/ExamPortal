const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Assessment = sequelize.define('Assessment', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Assessment;
