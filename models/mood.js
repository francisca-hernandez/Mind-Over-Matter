const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcryptjs');
// const { User } = require('./User');
const sequelize = require('../config/connection');

class Moods extends Model{

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
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
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