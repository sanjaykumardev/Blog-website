import Navbar from '../components/Navbar'
import HomePost from '../components/HomePost'
import Footer from '../components/Footer'
import axios from "axios"
// import { useEffect,useState } from 'react'
// import {URL} from '../url'

const Home = () => {
  //  const [posts,setPosts] = useState([])

  // const fetchPosts = async()=>{
  //   try{
  //     const res = await axios.get(URL+"/api/Posts/")
  //     // console.log(res.data)
  //     // setPosts(res.data)
  //   }
  //   catch(err){
  //   console.log(err)
  //   }
  // }
  // useEffect(()=>{
  //   fetchPosts()
  // },[])
 
  return (
    <>
     <Navbar/>
     <div className='p-5 md-px[200px] '>
      {/* {posts.map((post)=>{
       <HomePost key={post._id} post={post}/>
      })} */}
       <HomePost/>
       <HomePost/>
       <HomePost/>
       <HomePost/>
       <HomePost/>
    </div>
    <Footer/>
    </>
   
  )
}

export default Home


