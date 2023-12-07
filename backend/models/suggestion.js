
const mongoose = require('mongoose')


const suggestionSchema= new mongoose.Schema({
  comment:{
    type:String,
    required:true,
   
  },
  author:{
    type:String,
    required:true,
    
  },
  postId:{
    type:String,
    required:true,
    
  },
  userId:{
    type:String,
    required:true
  }
});

module.exports=mongoose.model('suggestion',suggestionSchema)