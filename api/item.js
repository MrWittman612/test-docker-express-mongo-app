var express = require("express");
var router = express.Router();
const Item = require("./item.modal");
/* GET users listing. */
router.post("/add", function (req, res, next) {
  var newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.redirect("/"));
});

module.exports = router;
