var express = require("express");
var router = express.Router();

/* GET home page. */

const messages = [
  {
    name: "Yash",
    message: "sup world",
    dateAdded: new Date(),
  },
  {
    name: "Sashe",
    message: "this is sashi",
    dateAdded: new Date(),
  },
  {
    name: "sharan",
    message: "hello papalu",
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
  messages.push({ name, message, dateAdded: new Date() });
  res.redirect("/");
});

module.exports = router;
