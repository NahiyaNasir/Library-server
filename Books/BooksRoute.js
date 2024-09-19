const express = require("express");
const {
  borrowBook,
  returnBooks,
  addBooks,
} = require("../Books/BooksController");
const auth = require("../Middleware/auth");
const route = express.Router();
//   borrowBook route
route.post("/borrowBook/:id", auth, borrowBook),
  //  return book
  route.post("/returnBooks/:id", auth, returnBooks);

//   add book
route.post("/addBooks", auth, addBooks);

module.exports = route;
