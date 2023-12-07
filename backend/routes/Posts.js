const express = require("express")
const router = express.Router()
const post = require('../models/post')
const verifyToken = require('../verifyToken')



//create
router.post("/create", verifyToken, async(req,res)=>{
  try{
    const newPost = new post(req.body)
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  }
  catch(err){
   res.status(200).json(err)
  }
})




// update
router.put("/:id", verifyToken, async (req, res) => {
  try {
   
    const updateUser = await post.findByIdAndUpdate(req.params.id, { $set: req.body }, {new:true})
    res.status(200).json(updateUser)
  }
  catch (err) {
    res.status(500).json(err)

  }
})



// delete
router.delete("/:id", verifyToken,async (req, res) => {
  try {
   
    await post.findByIdAndDelete( req.params.id)
    res.status(200).json("user have been deleted")
    
  }
  catch(err) {
    res.status(500).json(err)
  }
})


// get 
router.get("/:id", async (req, res) => {
  try {
     const Posts = await post.findById(req.params.id)
     res.status(200).json(Posts)
  }
  catch(err) {
    res.status(500).json(err)
  }
})

// get all post
  router.get("/", async (req, res) => {
    const Query = req.query
    console.log(Query)
  try {
    const searchFilter = {
      title:{$regex:Query.search, $options:"i"}
    }
     // using the js in this function to get all the post
     const Post = await post.find(Query.search? searchFilter:null)    
     res.status(200).json(Post)
  }
  catch(err) {  
    res.status(500).json(err)
  }
})

// get user post
router.get("/user/:userId", async (req, res) => {
  try {
    const Post = await post.find({userId:req.params.userId})
     res.status(200).json(Post)
  }
  catch(err) {
    res.status(500).json(err)
  }
})




module.exports = router