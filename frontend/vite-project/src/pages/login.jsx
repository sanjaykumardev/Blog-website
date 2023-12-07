import {Link, useNavigate} from 'react-router-dom'
import Footer from '../components/Footer'
import { useContext,useState } from 'react'
import axios  from "axios"
import { UserContext } from '../context/UserContext'

const login = () => {
         
      const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")
      const [error,setError] = useState(false)
      const {setUser} = useContext(UserContext)
      const navigator = useNavigate()
    

      const  LoginDetails = async()=>{
            try{
                  const res = await axios.post(URL + "/api/auth/login", {email,password },{withCredentials:true} )
                  navigator("/")
                  setUser(res.data)
                  console.log(res)
                  setError(false)
                  alert({message:"login succssffully"})
            }
            catch(err){
                  setError(true)
                  console.log(err)
            }
           
      } 

  return (
    <> 
   
                    <div className="flex items-center justify-between px-4 md:px-[200px] py-4  pz-5 flex-shrink bg-black  ">
                         <h1 className=" text-lg md:text-4xl font-extrabold  text-white"><Link to="/">Blog Market</Link></h1> 
                          <h3 className='px-4 cursor-pointer font-semibold xl:text-2xl text-white'><Link to="/register">Register</Link></h3>
                    </div>
                         <div className="w-full flex justify-center items-center  h-[80vh]">
                         <div className="flex flex-col justify-center items-center space-y-6 w-[80%] md:w-[25%]">
                         <h1 className=" font-bold md:text-1xl gap-3">Log in to Your Account</h1>
                         <input  onChange={(e)=>setEmail(e.target.value)} className="p-2 w-80 mb-20 border-2 border-black rounded-lg " type="text" placeholder='Enter your email' />
                         <input  onChange={(e)=>setPassword(e.target.value)}  className="p-2 w-80  border-2 border-black rounded-lg " type="password" placeholder='Enter your Password' />
                         <button  onClick={LoginDetails} className="md:w-80 w-80 bg-black text-white rounded-full p-3 hover:bg-gray-200 shadow-lg hover:text-black font-bold  text-lg" >Log in</button>
                         {error && <h3 className='text-red-500 '>something went wrong</h3>}  
                         <p><span className="font-bold">Create New here?</span> <span  className="cursor-pointer text-gray-700 pl-2" ><Link to='/Register'>Register</Link> </span></p>
                      </div>
                    </div>
          <Footer/>
    </>

  )
}

export default login
