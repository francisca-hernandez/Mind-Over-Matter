require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;


if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(
        process.env.MYSQL_DB,
        process.env.MYSQL_USER,
        process.env.MYSQL_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: process.env.PORT || 3000,
        }
    );
}

module.exports = sequelize;