const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');

Mood.init (

    text: {


        type: DataTypes.STRING,
        allowNull: false,


    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mood'
    }



);


    module.exports = Mood;