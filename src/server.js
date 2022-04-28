const express = require("express");
const app = express();
const { PORT } = require("./config");
const { sequelize } = require("./lib/sequelize");
const router = require("./modules");

sequelize.sync({ force: false }).then(() => console.log("OK"));

app.use("/assets", express.static("uploads"));
app.use(express.static("uploads"))

app.use(express.json());
app.use(router);

app.listen(PORT, console.log(PORT));
