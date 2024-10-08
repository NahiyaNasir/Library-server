
const mongoose= require("mongoose")
const UserSchemaMethod = require("./userSchemaMethod")

 const UserSchema= new  mongoose.Schema({
     name:{
        type:String,
        required:true,

     },
     email:{
        type:String,
        required:true,
        unique:true

     },
     password:{
        type:String,
        required:true,

     },
 },{
    timestamps:true
 })
 UserSchemaMethod(UserSchema)
  module.exports= mongoose.model('user',UserSchema)