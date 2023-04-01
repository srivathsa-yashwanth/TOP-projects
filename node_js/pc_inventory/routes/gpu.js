const express = require("express");
const router = express.Router();
const gpuController = require("../controllers/gpuController");

router.get("/create", gpuController.createGpuGet);
router.post("/create", gpuController.createGpuPost);

router.get("/delete/:id", gpuController.deleteGpuGet);
router.post("/delete/:id", gpuController.deleteGpuPost);

router.get("/update/:id", gpuController.updateGpuGet);
router.post("/update/:id", gpuController.updateGpuPost);

module.exports = router;
