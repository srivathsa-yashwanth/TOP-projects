var express = require("express");
var router = express.Router();
const categoryController = require("../controllers/categoryController");
const manufacturerController = require("../controllers/manufacturerController");
const cpuController = require("../controllers/cpuController");
const gpuController = require("../controllers/gpuController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/home");
});

router.get("/home", (req, res, next) => {
  res.render("index", { title: "PC Parts" });
});

router.get("/categories", categoryController.getAllCategories);
router.get("/manufacturers", manufacturerController.getAllManufacturers);
router.get("/cpus", cpuController.getAllCpus);
router.get("/gpus", gpuController.getAllGpus);

router.get("/category/:id", categoryController.getCategory);
router.get("/manufacturer/:id", manufacturerController.getManufacturer);
router.get("/cpu/:id", cpuController.getCpu);
router.get("/gpu/:id", gpuController.getGpu);

module.exports = router;
