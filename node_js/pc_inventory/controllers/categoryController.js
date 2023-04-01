const Category = require("../models/category");

const getAllCategories = (req, res, next) => {
  Category.find({}).exec((err, categories) => {
    if (err) return next(err)
    res.render('category_all', {
      title: 'Categories',
      categories,
    })
  })
};

const getCategory = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const createCategoryGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const createCategoryPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const deleteCategoryGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const deleteCategoryPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

const updateCategoryGet = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};
const updateCategoryPost = (req, res, next) => {
  res.send("NOT IMPLEMENTED:");
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategoryGet,
  createCategoryPost,
  deleteCategoryGet,
  deleteCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
};
