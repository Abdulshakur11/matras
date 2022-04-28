const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const {
	GET_CATEGORIES,
	NEW_CATEGORY,
	UPDATE_CATEGORY,
	DELETE_CATEGORY,
} = require("./Categories/Categories");

const {
	GET_PRODUCTS,
	NEW_PRODUCTS,
	UPDATE_PRODUCTS,
	DELETE_PRODUCTA,
} = require("./Products/Products");

const { GET_USERS, NEW_USER } = require("./Users/Users");
const { POST_LOGIN } = require('./Login/Login')

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
	.post('/login', POST_LOGIN)

module.exports = router;
