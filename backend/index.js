const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRoute = require("./routes/auth")
const UserRoute = require("./routes/Users")
const PostRoute = require("./routes/Posts")
const SuggestionRoute = require("./routes/Suggestions")


// database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("database is connected successfully!!!!")

  }
  catch (err) {
    console.log(err)
  }
}

// middelware
dotenv.config();
app.use(express.json())
app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use(cookieParser)
app.use('/api/auth', authRoute)
app.use('/api/Users', UserRoute)
app.use('/api/Posts', PostRoute)
app.use('/api/Suggestions', SuggestionRoute)


app.listen(process.env.PORT, () =>{
  console.log("app is running on port " +process.env.PORT)
  connectDB()
})




