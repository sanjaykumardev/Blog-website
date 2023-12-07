const express = require("express")
const router = express.Router()
const suggestion = require('../models/suggestion')
const verfiyToken = require("../verifyToken")



// create
router.post("/create",verfiyToken, async(req,res)=>{
  try{
    const newComment = new suggestion(req.body)
    const saveComment = await newComment.save()
    res.status(200).json(saveComment)
  }
  catch(err){
   res.status(200).json(err)
  }
})


// update
router.put("/:id",verfiyToken, async(req, res) => {
  try {
    const updateComment = await suggestion.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updateComment)
  }
  catch (err) {
    res.status(500).json(err)
  }
})



// delete
router.delete("/:id",verfiyToken, async (req, res) => {
  try {
    await suggestion.findByIdAndDelete(req.params.id )
    res.status(200).json( "Comment have been deleted")
  }
  catch(err) {
    res.status(500).json(err)
  }
})


// get post comment
router.get("/post/:postId", async (req, res) => {
  try {
     const Post= await suggestion.find({postId:req.params.userId})
     res.status(200).json(Post)
  }
  catch(err) {
    res.status(500).json(err)
  }
})



module.exports = router