import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import {URL} from '../url'

                                      
const Register = () => {
  
 // Fetch the backend to frontend and their functionality

  const [username,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)
  const navigator =  useNavigate()
  // console.log(username)
  // console.log(email)
  // console.log(password)-----+

 const handelDetails = async ()=>{
      try{
        const res = await axios.post(URL+"/api/auth/register",{username,email,password})
        setUserName(res.data.username)
        setEmail(res.data.email)
        setPassword(res.data.password)
        setError(false)
        navigator("/login")
       
      }
      catch(err){
        setError(true)
        console.log(err)
      }
 }
   

   return (
   
    <>
     
     <div className="flex items-center justify-between px-4 md:px-[200px]  py-4  pz-5 flex-shrink bg-black">
        <h1 className=" text-lg md:text-4xl font-extrabold text-white "><Link to="/">Blog Market</Link></h1>
        <h3 className='px-4 cursor-pointer font-semibold xl:text-2xl text-white'><Link to="/login">Login</Link></h3>
  </div>      
    <div className=" flex items-center justify-center h-[80vh] w-full rounded z-index ">
        <div className="flex items-center justify-center flex-col space-y-4 md:w-90 w-80  " >
            <h1 className='md:text-lg textlg font-bold'>Create An Account</h1>
              <input onChange={(e)=>setUserName(e.target.value)}  className="border-2 border-black p-3 md:w-full w-full rounded-lg z-index-2 "  type="text" placeholder='Enter Your UserName'/>
                <input onChange={(e)=>setEmail(e.target.value)}   className="border-2 border-black p-3 md:w-full w-full rounded-lg "  type="text" placeholder='Enter Your Email'/>
                <input onChange={(e)=>setPassword(e.target.value)}  className="border-2 border-black p-3 md:w-full w-full rounded-lg "  type="password" placeholder='Enter Your Password'/>
                <button onClick={handelDetails} className="md:w-80% p-3 w-80 bg-black text-white rounded-full  hover:bg-gray-200 shadow-lg hover:text-black font-bold ">Register</button>
                 {error && <h3 className='text-red-500 '>something went wrong</h3>}  
                 <div>
                 <p ><span className="font-bold">Already have a Account?</span> <span className='text-gray-700 pl-2'><Link to="/Login">Login</Link></span></p> 
               
                 </div>
                 
        </div>
    </div>
  
     
   
    <Footer/>
    </>
   
  )
}

export default Register
