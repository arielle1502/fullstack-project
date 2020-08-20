const { DataTypes } = require("sequelize")

module.exports = (sequelize, Sequelize) => 
  sequelize.define('User', {
    email:{
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        type: DataTypes.STRING
    }
  })
