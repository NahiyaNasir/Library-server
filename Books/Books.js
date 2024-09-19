const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
     
    },

    title: { type: String, required: true },
    author: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("books", BookSchema);
