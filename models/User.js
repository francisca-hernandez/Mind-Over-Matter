const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');


//User Input Model 
User.init(
    {
       
        Name: {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
    
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
           
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true

            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }

            //hooks hooks: {
         //   async beforeCreate(newUserData) {
        // newUserData.password = await bcrypt.hash(newUserData.password, 10);
        // return newUserData;

        },

    },


    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }

);

module.exports = User