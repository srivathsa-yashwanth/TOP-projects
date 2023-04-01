const Manufacturer = require("../models/manufacturer");

const getAllManufacturers = (req, res, next) => {
  Manufacturer.find({}).populate('productCategories').exec((err, mans) => {
    if (err) return next(err);
    res.render("manufacturer_all", {
      title: "Manufacturers",
      manufacturers: mans,
    });
  });
};

const getManufacturer = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const createManufacturerGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const createManufacturerPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const deleteManufacturerGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const deleteManufacturerPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const updateManufacturerGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const updateManufacturerPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

module.exports = {
  getAllManufacturers,
  getManufacturer,
  createManufacturerGet,
  createManufacturerPost,
  deleteManufacturerGet,
  deleteManufacturerPost,
  updateManufacturerGet,
  updateManufacturerPost,
};
