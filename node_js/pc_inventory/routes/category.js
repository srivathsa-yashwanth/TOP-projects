const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");


router.get("/create", categoryController.createCategoryGet);
router.post("/create", categoryController.createCategoryPost);

router.get("/delete/:id", categoryController.deleteCategoryGet);
router.post("/delete/:id", categoryController.deleteCategoryPost);

router.get("/update/:id", categoryController.updateCategoryGet);
router.post("/update/:id", categoryController.updateCategoryPost);

module.exports = router;
