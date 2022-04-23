const { sequelize, DataTypes } = require("../lib/sequelize");

const Categories = sequelize.define("categories", {
	category_name: {
		type: DataTypes.STRING(64),
		allowNull: false,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	}
	
});


module.exports = {
	Categories,
};
