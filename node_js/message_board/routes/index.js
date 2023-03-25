var express = require("express");
var router = express.Router();

/* GET home page. */

let messages = [
  {
    name: "sharan",
    message: "hello papalu",
    dateAdded: new Date(),
  },

  {
    name: "Sashe",
    message: "this is sashi",
    dateAdded: new Date(),
  },
  {
    name: "Yash",
    message: "sup world",
    dateAdded: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res, next) => {
  const { name, message } = req.body;
  messages = [{ name, message, dateAdded: new Date() }, ...messages];
  res.redirect("/");
});

module.exports = router;
