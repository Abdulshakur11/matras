const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
// Categories
const {
	GET_CATEGORIES,
	NEW_CATEGORY,
	UPDATE_CATEGORY,
	DELETE_CATEGORY,
} = require("./Categories");
// Products
const {
	GET_PRODUCTS,
	NEW_PRODUCTS,
	UPDATE_PRODUCTS,
	DELETE_PRODUCTA,
} = require("./Products");
// Users "Agar user qo'shish kerak bo'lsa"
const { GET_USERS, NEW_USER } = require("./Users");
// Login
const { POST_LOGIN } = require("./Login");
// Orders
const { GET_ORDERS, NEW_ORDERS, DELETE_ORDERS } = require("./Orders");
// Customers
const { GET_CUSTOMERS, NEW_CUSTOMER, DELETE_CUSTOMER } = require("./Customers");
// Intro slider
const { GET_SLIDERS, NEW_SLIDER, GET_STATUS, NEW_STATUS, UPDATE_STATUS } = require("./global");

router
	// Categories CRUD
	.get("/categories", GET_CATEGORIES)
	.post("/categories", NEW_CATEGORY)
	.put("/categories", UPDATE_CATEGORY)
	.delete("/categories", DELETE_CATEGORY)
	// Products CRUD
	.get("/products", GET_PRODUCTS)
	.post("/products", upload.array("media"), NEW_PRODUCTS)
	.put("/products", UPDATE_PRODUCTS)
	.delete("/products", DELETE_PRODUCTA)
	// Users
	.get("/users", GET_USERS)
	.post("/users", NEW_USER)
	// Login
	.post("/login", POST_LOGIN)
	// Orders
	.get("/orders", GET_ORDERS)
	.post("/orders", NEW_ORDERS)
	.delete("/orders", DELETE_ORDERS)
	// Customers
	.get("/customers", GET_CUSTOMERS)
	.post("/customers", NEW_CUSTOMER)
	.delete("/customers", DELETE_CUSTOMER)
	// Intro Slider
	.get("/slider", GET_SLIDERS)
	.post("/slider", upload.array("media"), NEW_SLIDER)
	// Status
	.get("/status", GET_STATUS)
	.post("/status", NEW_STATUS)
	.put("/status", UPDATE_STATUS)

module.exports = router;
