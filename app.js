var express = require("express");
var path = require("path");
// var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./api/index");
var itemRouter = require("./api/item");
var mongoDB = "mongodb://mongo:27017/test-docker-express-mongo-app";
exports.mongoDB = mongoDB;

var app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/item", itemRouter);

module.exports = app;
