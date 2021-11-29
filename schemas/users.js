const mongoose = require('mongoose')
let userSchema= new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  username:String,
  password:String,
  email:String,
  firstname:String,
  lastname:String
})
module.exports=mongoose.model('users',userSchema);

// Shema for the post 

