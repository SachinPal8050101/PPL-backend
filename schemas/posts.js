const mongoose = require('mongoose')


// Shema for the post 


let postSchema=new mongoose.Schema({
  userId:String,
  title:String,
  category:String,
  image:String,
  time :{type: Date, default: Date.now()},
  fullName:String
})
module.exports=mongoose.model('posts',postSchema);