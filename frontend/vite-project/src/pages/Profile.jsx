import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProfilePost from "../components/ProfilePost"

const Profile = () => {
  return (
    <>
      <Navbar/>
            <div className=" px-8 md:px-[180px] mt-2 flex flex-col-reverse md:flex-row text-white ">
                <div className="flex flex-col w-full md:w-[70%]"> 
                  <h1 className=" md:text-2xl text-lg mt-2 font-bold text-black mb-4 "> Your Post: </h1>
                  <ProfilePost/>
                  <ProfilePost/>
                  <ProfilePost/>
                  <ProfilePost/>
                  </div>
                  <div className=" md:items-center md:justify-start  md:w-[30%] w-full gap-2 ">
                   <div className="flex flex-col space-y-4">
                   <h1 className="md:text-2xl text-lg font-bold mb-4 text-black">Profile:</h1>

                    <input  className="border-2 rounded-md px-4 py-2 text-gray-500 md:w-[70%]"type="text" placeholder="Your UserName  "/>

                    <input className=" md:w-[70%] border-2 rounded-md px-4 py-2 text-gray-500"type="emil" placeholder="Your Email  "/>

                    <input className=" md:w-[70%] border-2 rounded-md px-4 py-2 text-gray-500"type="password" placeholder="Your Password"/>

                    <div className="flex items-center space-x-10 mt-8">
                    <button className="bg-black  px-6 py-2 rounded-md hover:text-gray-400 text-white font-semibold">Update</button>
                    <button  className="bg-black px-6 py-2 rounded-md hover:text-gray-400 text-whitefont-semibold ">Delete</button>
                    </div>
                    </div> 
                    
          </div>
       </div>  
      <Footer/>
    </>
  )
}

export default Profile
