const { sequelize, DataTypes } = require("../lib/sequelize");

const Categories = sequelize.define("categories", {
	category_name: {
		type: DataTypes.STRING(64),
		allowNull: false,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
});

const Products = sequelize.define("products", {
	product_name: {
		type: DataTypes.STRING(256),
		validate: {
			min: 5,
		},
		allowNull: false,
	},
	product_price: {
		type: DataTypes.STRING(120),
		allowNull: false,
	},
	product_weigth: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	product_size: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	product_warranty: {
		type: DataTypes.STRING(64),
		allowNull: false,
	},
	product_volume: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	product_aksiy_price: {
		type: DataTypes.STRING(120),
	},
	product_description: {
		type: DataTypes.TEXT,
	},
	product_image: {
		type: DataTypes.JSON,
	},
	isNew: {
		type: DataTypes.BOOLEAN,
	},
	isAcrive: {
		type: DataTypes.BOOLEAN,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
	},
});

const Users = sequelize.define('users', {
	username: {
		type: DataTypes.CHAR(45),
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 6,
			max: 14
		}
	}
})

// Products references to Category
Categories.hasMany(Products);
Products.belongsTo(Categories);

module.exports = {
	Categories,
	Products,
	Users
};
