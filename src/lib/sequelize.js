const { Sequelize, DataTypes } = require("sequelize");
const { elephantConnection } = require('../config');
const sequelize = new Sequelize(elephantConnection);

module.exports = { sequelize, DataTypes }