const router = require("express").Router();
const bookRoutes = require("./books");
const savedBookRoutes = require("./savedBooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/saved", savedBookRoutes);

module.exports = router;
