  
   const express= require('express')
   const{ borrowBook,returnBooks}= require("../Books/BooksController")
   const route= express.Router()
       //   borrowBook route
       route.post('/api/borrowBoo/:id', borrowBook),
       //  login
      route.post('/api/returnBooks',returnBooks)


   
 module.exports=route