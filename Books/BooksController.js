const Book = require("../Books/Books");
const mongoose = require('mongoose');
//   borrow a book
exports.borrowBook = async (req, res) => {
  try {
    // Get the ID from the route parameter
    const bookId = req.params.id;
    console.log(bookId);
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({ message: "Invalid Book ID" });
    }

    // Find the book by ID
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (!book.isAvailable) {
      return res.status(409).json({ message: "Book is currently unavailable" });
    }

    book.isAvailable = false;
    await book.save();

    res.status(200).json({
      message: "Book borrowed successfully",
      book: {
        title: book.title,
        author: book.author,
        isAvailable: book.isAvailable,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//  return book

exports.returnBooks = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book && book.isAvailable) {
      return res.status(404).send("Book not found or already returned");
    }
    book.isAvailable = true;
    await book.save();
    res.send("Book returned successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// add books
exports.addBooks = async (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  try {
    const book = new Book({ title, author });
    console.log(book);
    await book.save();
    res.status(201).send("Book added successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
