const express = require("express")
const router = express.Router()
const user = require("../models/user")
const bcrypt = require('bcrypt')
const post = require('../models/post')
const suggestion = require('../models/suggestion')
const verifyToken = require('../verifyToken')


// update
router.put("/:id",verifyToken ,async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      req.body.password = await bcrypt.hashSync(req.body.password, salt)
    }
    const updateUser = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updateUser)
  }
  catch (err) {
    res.status(500).json(err)

  }
})



// delete
router.delete("/:id",verifyToken ,async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id)
    await post.DeleteMany({ userId: req.params.id })
    await suggestion.DeleteMany({ userId:req.params.id })
    res.status(200).json("user have been deleted")
    console.log(router.delete)
  }
  catch(err) {
    res.status(500).json(err)

  }
})





// get User
router.get("/:id", async (req, res) => {
  try {
     const User = await user.findById(req.params.id)
     const {password,...info} = User._doc
     res.status(200).json(info)
     console.log("passed")
  }
  catch(err) {
    res.status(500).json(err)
   
  }
})



module.exports = router