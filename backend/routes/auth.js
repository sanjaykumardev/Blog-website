
const express = require("express")
const router = express.Router()
const user = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



// REGISTER 

router.post("/register", async (req, res) => {
  try {
    const {username,email,password}=req.body
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hashSync(password,salt)
    const newUser=new user({username,email,password:hashedPassword})
    const savedUser=await newUser.save()
    res.status(200).json(savedUser)

  }
  catch (err) {
    res.status(500).json(err) 
  }
})

 // for not to get a password on show box when the user in login we are using this jwt with cookie and to know about the   

 

// LOGIN
// for the user login this the method

router.post("/login", async (req, res) => {
  try {

    const User = await user.findOne({ email:req.body.email })
    if (!User) {
      return res.status(404).json("User not found!")
    }
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) {
      return res.status(401).json("wrong credentials")
    }
   
    const token = jwt.sign({ id: user._id,username:user.username,email:user.email }, process.env.SECRET, { expiresIn: "3d" })
    const {password,...info} = user._doc
    res.cookie("token", token).status(200).json(info)
  }
  catch (err) {
    res.status(500).json(err)
  }
})




//LOGOUT
// for logot we need to use get to get the user detail and we have their password in cookies for that also  we need to use clear cookie to 

router.get("/logout", async (req, res) => {
  try {
    res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("logout successfully")
  }
  catch (err) {
    res.status(500).json(err)
  }
})



//refetch 
 router.get("/refetch", (req,res)=>{
  const Token= req.cookies.token 
  jwt.verify(Token,process.env.SECRET,{},async (err,data)=>{
    if(err){
      return res.status(404).json(err)
    } 
    res.status(200).json(data)
  })
 
})

module.exports = router