const mongoose = require('mongoose');
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.pass,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
      
        });
        console.log("mongodb connected");
        
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}

module.exports =connectDB;