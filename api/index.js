var express = require("express");
var router = express.Router();
var Item = require("./item.modal");

/* GET home page. */
router.get("/", function (req, res, next) {
  Item.find()
    .then((items) => res.render("index", { items }))
    .catch((err) => res.status(404).json({ msg: "No Item found" }));
});

module.exports = router;
