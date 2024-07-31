const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Option = require('./Option');  // Import Option model

const Question = sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    questionText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false 
  });

  Question.hasMany(Option, { foreignKey: 'questionId' });
Option.belongsTo(Question, { foreignKey: 'questionId' });
  
  module.exports = Question;