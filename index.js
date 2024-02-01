var express = require("express");
var router = express.Router();

const userModle = require("./users");

router.get("/", function (req, res) {
  res.render("readme");
});

router.get("/addData", async function (req, res) {
  res.render("index");
});

router.post("/create", async function (req, res) {
  try {
    const userCreated = await userModle.create({
      name: req.body.PName,
      description: req.body.Description,
    });
  } catch (err) {
    res.render("index");
  }
});

router.get("/GoBack", function (req, res) {
  res.render("goBack");
});


module.exports = router;
