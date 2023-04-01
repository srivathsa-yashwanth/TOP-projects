const express = require("express");
const router = express.Router();
const cpuController = require("../controllers/cpuController");

router.get("/create", cpuController.createCpuGet);
router.post("/create", cpuController.createCpuPost);

router.get("/delete/:id", cpuController.deleteCpuGet);
router.post("/delete/:id", cpuController.deleteCpuPost);

router.get("/update/:id", cpuController.updateCpuGet);
router.post("/update/:id", cpuController.updateCpuPost);

module.exports = router;
