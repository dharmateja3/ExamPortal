const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Option = sequelize.define('Option', {
  optionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
    timestamps: false 
});

module.exports = Option;
