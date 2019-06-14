import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/saved");
  },
  // Gets the book with the given id
  viewBook: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved/", bookData);
  },
  getGoogleBooks: function(term) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + term);
  }
};
