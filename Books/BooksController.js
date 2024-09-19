
 const Booking= require("../Books/Books")
//   borrow a book 
  exports.borrowBook=async(req,res)=>{
    try {
        const book= await Booking.findById(req.params.id)
        if(!book && !isAvailable)
            res.status(401).json({message:"Book not available"})
        book.isAvailable=false
        await book.save()
        console.log(book);
        res.send('Book borrowed successfully');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
//  return book

exports.returnBooks=async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        if (!book && book.isAvailable) {
          return res.status(404).send('Book not found or already returned');
        }
        book.isAvailable = true;
        await book.save();
        res.send('Book returned successfully');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}