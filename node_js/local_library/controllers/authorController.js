const Author = require("../models/author");
const async = require("async");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");

// Display list of all Authors.
exports.author_list = (req, res, next) => {
  Author.find({})
    .sort({ name: 1 })
    .exec((err, authors) => {
      if (err) return next(err);
      res.render("authors_list", { title: "Authors", authors: authors });
    });
};

// Display detail page for a specific Author.
exports.author_detail = (req, res, next) => {
  async.parallel(
    {
      author(callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books(callback) {
        Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        // Error in API usage.
        return next(err);
      }
      if (results.author == null) {
        // No results.
        const err = new Error("Author not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("author_detail", {
        title: "Author Detail",
        author: results.author,
        author_books: results.authors_books,
      });
    }
  );
};

// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.render("author_form", {
    title: "Create Author",
    author: undefined,
    errors: undefined,
  });
};

// Handle Author create on POST.
exports.author_create_post = [
  body("firstName")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name cannot be empty")
    .isAlphanumeric()
    .withMessage("First name must only have alpha numeric characters"),

  body("lastName")
    .trim()
    .isLength()
    .escape()
    .withMessage("Last name cannot be empty")
    .isAlphanumeric()
    .withMessage("Last name must only have alpha numeric characters"),

  body("dateOfBirth", "Invalid date of birth")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  body("dateOfDeath", "Invalid date of death")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  (req, res, next) => {
    const errors = validationResult(req);
    const author = new Author({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      dateOfDeath: req.body.dateOfDeath,
    });
    if (!errors.isEmpty()) {
      res.render("author_form", {
        title: "Create Author",
        author,
        errors: errors.array(),
      });
    } else {
      Author.findOne({
        irstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        dateOfDeath: req.body.dateOfDeath,
      }).exec((err, authorObj) => {
        if (err) return next(err);
        if (authorObj) res.redirect(authorObj.url);
        else {
          author.save((err) => {
            if (err) return next(err);
            res.redirect(author.url);
          });
        }
      });
    }
  },
];

// Display Author delete form on GET.
exports.author_delete_get = (req, res, next) => {
  async.parallel(
    {
      author(callback) {
        Author.findById(req.params.id).exec(callback);
      },
      author_books(callback) {
        Book.find({ author: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) return next(err);
      if (!results.author) res.redirect("/catalog/authors");
      res.render("author_delete", {
        title: "Delete Author",
        author: results.author,
        author_books: results.author_books,
      });
    }
  );
};



// Handle Author delete on POST.
exports.author_delete_post = (req, res, next) => {
  async.parallel(
    {
      author(callback) {
        Author.findById(req.body.authorid).exec(callback);
      },
      authors_books(callback) {
        Book.find({ author: req.body.authorid }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      // Success
      console.log(req.body.authorid)
      if (results.authors_books.length > 0) {
        // Author has books. Render in same way as for GET route.
        res.render("author_delete", {
          title: "Delete Author",
          author: results.author,
          author_books: results.authors_books,
        });
        return;
      }
      // Author has no books. Delete object and redirect to the list of authors.
      Author.findByIdAndRemove(req.body.authorid, (err) => {
        if (err) {
          return next(err);
        }
        // Success - go to author list
        res.redirect("/catalog/authors");
      });
    }
  );
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
