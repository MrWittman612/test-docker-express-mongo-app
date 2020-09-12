var mongoose = require("mongoose");
const { mongoDB } = require("./app");

//Set up default mongoose connection
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));
