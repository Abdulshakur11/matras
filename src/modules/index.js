const express = require("express");
const router = express.Router();

const { GET_CATEGORIES, NEW_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } = require("./Categories/Categories");

router
.get("/categories", GET_CATEGORIES)
.post('/categories', NEW_CATEGORY)
.put('/categories', UPDATE_CATEGORY)
.delete('/categories', DELETE_CATEGORY)

module.exports = router;
