var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./api/index");
var itemRouter = require("./api/item");
const { dbConnect } = require("./dbConnect");

var app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Set up default mongoose connection
dbConnect();

app.use("/", indexRouter);
app.use("/item", itemRouter);

module.exports = app;
