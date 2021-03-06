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
		type: DataTypes.JSON,
		allowNull: false,
	},
	product_size: {
		type: DataTypes.JSON,
		allowNull: false,
	},
	product_warranty: {
		type: DataTypes.JSON,
		allowNull: false,
	},
	product_volume: {
		type: DataTypes.JSON,
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
	isActive: {
		type: DataTypes.BOOLEAN,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
	},
});

const Users = sequelize.define("users", {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

const Orders = sequelize.define("orders", {
	name: {
		type: DataTypes.STRING(64),
		allowNull: false,
	},
	phone_number: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	product_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	product_qountity: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
	},
});

const Customers = sequelize.define("customers", {
	phone_number: {
		type: DataTypes.STRING,
	},
	feed_back: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
	},
});

const Techology = sequelize.define("technology", {
	tech_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	tech_description: {
		type: DataTypes.TEXT,
	},
	tech_image: {
		type: DataTypes.JSON,
	},
	tech_video: {
		type: DataTypes.STRING,
	},
	isNew: {
		type: DataTypes.BOOLEAN,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
	},
});

const Location = sequelize.define("location", {
	address: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	location: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	location_image: {
		type: DataTypes.JSON
	},
	isActive: {
		type: DataTypes.BOOLEAN,
	},
	description: {
		type: DataTypes.TEXT,
	},
	isDelete: {
		type: DataTypes.BOOLEAN,
	},
});

const SliderTable = sequelize.define("slider_table", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image_url: {
		type: DataTypes.STRING,
	},
});

const statusTable = sequelize.define("status_table", {
	status_num: {
		type: DataTypes.STRING,
	},
	status_text: {
		type: DataTypes.STRING,
	},
});

// Products references to Category
Categories.hasMany(Products);
Products.belongsTo(Categories);

module.exports = {
	Categories,
	Products,
	Techology,
	Location,
	Users,
	Orders,
	Customers,
	SliderTable,
	statusTable,
};
