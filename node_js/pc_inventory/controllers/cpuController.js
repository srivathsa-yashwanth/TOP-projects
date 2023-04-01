const Cpu = require("../models/cpu");

const getAllCpus = (req, res, next) => {
  Cpu.find()
    .populate("category")
    .populate("manufacturer")
    .exec((err, cpus) => {
      if (err) return next(err);
      res.render("cpu_all", {
        title: "Cpus",
        cpus,
      });
    });
};

const getCpu = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const createCpuGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const createCpuPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const deleteCpuGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const deleteCpuPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const updateCpuGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const updateCpuPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

module.exports = {
  getAllCpus,
  getCpu,
  createCpuGet,
  createCpuPost,
  deleteCpuGet,
  deleteCpuPost,
  updateCpuGet,
  updateCpuPost,
};
