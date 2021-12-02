const mongoose = require('mongoose')


// Shema for the post 


let postSchema=new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  userId:String,
  title:String,
  category:String,
  image:String,
  time :String,
  fullName:String
})
module.exports=mongoose.model('posts',postSchema);