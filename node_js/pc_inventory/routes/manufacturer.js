const express = require("express");
const router = express.Router();
const manufacturerController = require("../controllers/manufacturerController");

router.get("/create", manufacturerController.createManufacturerGet);
router.post("/create", manufacturerController.createManufacturerPost);

router.get("/delete/:id", manufacturerController.deleteManufacturerGet);
router.post("/delete/:id", manufacturerController.deleteManufacturerPost);

router.get("/update/:id", manufacturerController.updateManufacturerGet);
router.post("/update/:id", manufacturerController.updateManufacturerPost);

module.exports = router;
