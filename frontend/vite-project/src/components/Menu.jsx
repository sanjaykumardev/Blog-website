import React from 'react'
import { useContext ,UserContext} from 'react'
import axios from 'axios'
import {URL} from '../url'
import { useNavigate } from 'react-router-dom'



const Menu = () => {
  const {user} = useContext(UserContext)
  const {setUser }= useContext(UserContext)
  const navigate = useNavigate()


  const LogoutDetails = async()=>{
    try {
      const res = await axios.get(URL +"/api/auth/logout",{withCredentials:true}) 
      setUser(null,res)
      navigate('/login')
    }
    catch(err){
     console.log(err)
    }
   

  }
     
  return (
    <>
     <div className='bg-black w-[200px]  flex flex-col md:right-32 items-start absolute p-4  right-2 rounded-lg  border-2 shadow-md gap-2 '> 
     { !user && <h3 className='text-white ml-2 mt-2 font-bold cursor-pointer hover:text-red-600 text-sm' >Login</h3>}
     {!user && <h3 className='text-white ml-2 mt-7  font-bold cursor-pointer hover:text-blue-600 text-sm' >Profile</h3> }
     { user && <h3 className='text-white ml-2  text-sm cursor-pointer font-bold  hover:text-blue-600 '>MY Blog</h3>}
     { user && <h3 className='text-white ml-2  font-bold cursor-pointer hover:text-blue-600 text-sm' >Write</h3>}
    { user && <h3 onClick={LogoutDetails} className='text-white ml-2  text-sm hover:text-blue-600 cursor-pointer font-bold'>Logout</h3>}
    </div>
    </>
   
  )
}

export default Menu
