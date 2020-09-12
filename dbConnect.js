var mongoose = require("mongoose");
var mongoDB = "mongodb://mongo123:27017/test-docker-express-mongo-app";

function dbConnect() {
  mongoose
    .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => console.log(err));
}

exports.dbConnect = dbConnect;
