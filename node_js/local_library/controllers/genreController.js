const Genre = require("../models/genre");
const Book = require("../models/book");
const async = require("async");
const { body, validationResult } = require("express-validator");

// Display list of all Genre.
exports.genre_list = (req, res, next) => {
  Genre.find({})
    .sort({ name: 1 })
    .exec((err, genres) => {
      if (err) return next(err);
      res.render("genre_list", { title: "Genres", genres });
    });
};

// Display detail page for a specific Genre.
exports.genre_detail = (req, res, next) => {
  async.parallel(
    {
      genre(callback) {
        Genre.findById(req.params.id).exec(callback);
      },
      genre_books(callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) return next(err);
      if (results.genre === null) {
        const Err = new Error("Genre not found");
        Err.status = 404;
        return next(Err);
      }
      res.render("genre_detail", {
        title: "Genre Details",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};

// Display Genre create form on GET.
exports.genre_create_post = [
  body("name", "Genre name is required").trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    console.log('inside post ')
    const genre = new Genre({ name: req.body.name });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("genre_form", {
        title: "Create a Genre",
        genre,
        errors: errors.array(),
      });
      return;
    } else {
      Genre.findOne({ name: req.body.name }).exec((err, genreObj) => {
        if (err) return next(err);
        if (genreObj) {
          res.redirect(genreObj.url);
        } else {
          genre.save((err) => {
            if (err) return next(err);
            res.redirect(genre.url);
          });
        }
      });
    }
  },
];

// Handle Genre create on POST.
exports.genre_create_get = (req, res, next) => {
  console.log('inside get')
  res.render("genre_form", { title: "Create a Genre", genre: undefined, errors: undefined });
};

// Display Genre delete form on GET.
exports.genre_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
