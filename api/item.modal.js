const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemModelSchema = new Schema({
  name: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
// Compile model from schema
module.exports = ItemModel = mongoose.model("ItemModel", ItemModelSchema);
