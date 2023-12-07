const jwt = require('jsonwebtoken')

const verifyToken =  (req,res,next)=>{
  
 const Token = req.cookies.token
 if(!Token){
  return res.status(401).json("your are not authenicated!!!")
 }
 jwt.verify(Token,process.env.SECRET, async(err,data)=>{
  if(err){
    return res.status(403).json("token is not valid!!")
  }
  req.userId= data.id
  next()
 })

}

module.exports = verifyToken