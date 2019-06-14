const db = require("../models");

// Defining methods for the savedBooksController
module.exports = {
  findAll: function(req, res) {
    db.savedBook
      .find(req.query)
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.savedBook
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.savedBook
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(433).json(err));
  },
  update: function(req, res) {
    db.savedBook
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    //console.log("id: ", req.params.id);
    db.savedBook
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(444).json(err));
  }
};
