var express = require("express");
var router = express.Router();

var targetModel = require("../models/target.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  targetModel.find((err, targets) => {
    res.render("tragets", { targets: targets });
  });
});

router.post("/save", function(req, res, next) {
    targetModel.find((err, targets) => {
      res.render("tragets", { targets: targets });
    });
  });

module.exports = router;
