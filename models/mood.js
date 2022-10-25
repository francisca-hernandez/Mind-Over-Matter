// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcryptjs');
const { User } = require('./User');
const sequelize = require('../config/connection');

class Moods extends User {
    static get tableName() {
    return'moods';
    }
}

// ask question about how to set the moods id = to what the user's primaryKey is

Moods.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: true
        }

    },
    {
        sequelize,
        tableName:'moods',
        freezeTableName: true,
    }
)

// this is calling the array from userMoodAR to disply to the html to user 

module.exports = Moods; 