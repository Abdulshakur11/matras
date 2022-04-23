const { Sequelize, DataTypes } = require("sequelize");
const { sequelizeConnection } = require('../config');
const sequelize = new Sequelize(sequelizeConnection);

module.exports = { sequelize, DataTypes }