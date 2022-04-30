const express = require("express");
const app = express();
const { PORT } = require("./config");
const { sequelize } = require("./lib/sequelize");
const router = require("./Controllers");

sequelize.sync({ force: false }).then(() => console.log("OK"));

app.use("/public", express.static("public"));

app.use(express.json());
app.use(router);

app.listen(PORT, console.log(PORT));
