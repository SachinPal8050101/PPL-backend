const mongoose = require('mongoose')
let likeSchema=new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  userId:String,
  like:String
})
module.exports=mongoose.model('likes',likeSchema);