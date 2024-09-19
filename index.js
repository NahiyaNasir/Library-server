const express = require('express');
const UserRoute=require("./User/UserRoute")
const BooksRoute =require("./Books/BooksRoute");
  const connectDB=require("./Config/db")
  const cookieParser=require("cookie-parser");
const addBooks  = require('./Books/BooksRoute');
const app = express();
require('dotenv').config();
connectDB();
// middleware
app.use(express.json());
app.use(cookieParser());

//  routes
app.use("/api/users",UserRoute )
app.use("/api/books",BooksRoute  )
app.use("/api/books",addBooks  )

//Home
app.get('/',(req,res)=>{
    res.send("hello from library ")
  })

   const PORT= process.env.PORT || 5000;
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  })