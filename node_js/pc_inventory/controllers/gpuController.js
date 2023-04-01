const Gpu = require("../models/gpu");

const getAllGpus = (req, res, next) => {
  Gpu.find()
    .populate("category")
    .populate("manufacturer")
    .exec((err, gpus) => {
      if (err) return next(err);
      res.render("gpu_all", {
        title: "Gpus",
        gpus,
      });
    });
};

const getGpu = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const createGpuGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const createGpuPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const deleteGpuGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const deleteGpuPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const updateGpuGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const updateGpuPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

module.exports = {
  getAllGpus,
  getGpu,
  createGpuGet,
  createGpuPost,
  deleteGpuGet,
  deleteGpuPost,
  updateGpuGet,
  updateGpuPost,
};
