const router = require("express").Router();
const booksController = require("../../controllers/booksController");
//const savedBooksController = require("../../controllers/savedBooksController");


// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// // Matches with "/api/books/saved"
// router.route("/saved/books/")
//   .get(savedBooksController.findAll)
//   .post(savedBooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

//   // Matches with "/api/books/saved/:id"
// router
// .route("/saved/books/:id")
// .get(savedBooksController.findById)
// .put(savedBooksController.update)
// .delete(savedBooksController.remove);

module.exports = router;
