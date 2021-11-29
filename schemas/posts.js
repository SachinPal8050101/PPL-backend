const mongoose = require('mongoose')


// Shema for the post 


let postSchema=new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  userId:String,
  title:String,
  category:String,
  image:String,
  time :String,
  date:String,
  like:Array,
  unlike:Array,
  fullName:String
})
module.exports=mongoose.model('posts',postSchema);