const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
const savedBooksController = require("../../controllers/savedBooksController");


// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/saved"
router.route("/")
  .get(savedBooksController.findAll)
  .post(savedBooksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

  // Matches with "/api/saved/:id"
router
.route("/:id")
.get(savedBooksController.findById)
.put(savedBooksController.update)
.delete(savedBooksController.remove);

module.exports = router;
