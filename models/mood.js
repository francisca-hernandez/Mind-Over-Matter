const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');

// this is calling the array from userMoodAR to disply to the html to user 