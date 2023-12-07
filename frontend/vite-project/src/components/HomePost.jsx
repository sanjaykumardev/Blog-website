import React from 'react'

const HomePost = () => {
  return (
    <>
  <div className="w-full flex mt-8 md:items-center md:justify-center md:space-x-0 space-x-0 md:ml-2" >
              {/* left */}
            <div className="md:w-auto h-[200px]  flex justify-center items-center mb-3  ">
            <img className=" w-full  h-full md:h-[100%] md:w-[100%] object-cover" src="https://imgs.search.brave.com/0Ok1Tj7zxylFEOCf5jghrDCUrbol7mcs7-b-OEiRqhc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NjkwNDQwOS9waG90/by9hcnRpZmljaWFs/LWludGVsbGlnZW5j/ZS1hbmQtdGVjaG5v/bG9neS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LURGaExo/U2s5YWxjNGlBTy1r/eTJrOUJNdzAxdWtk/UUVpdzBldEQ3eTRk/cz0"></img>
          </div>


 {/* right */} 
            <div className='flex flex-col w-[60%] md:w-[55%] md:ml-0 '>
              <h1 className=" text-1xl ml-2  font-extrabold md:font-bold md:md-2  md:text-2xl md:ml-5 ">
                10 Uses of Artifical Intelligence in day to day life
              </h1>
              <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-5 '>
                <p className='md:pt-2 ml-2 mr-4 text-xs md:text-sm '>@Sanjaykumardev</p>
                <div className="flex space-x-2">
                  <p className='text-xs md:text-sm'>16/06/2023</p>
                  <p className='text-xs md:text-sm'>16:45</p>
                </div>
              </div>
              <p className=" text-sm ml-2 md:text-xl">AI has been highly instrumental in optimizing the way we entertain ourselves, interact with our mobile devices, to even driving vehicles for us. We tend to encounter Machine Learning (ML) algorithms and the nature of the technology have their.entertain ourselves, interact with our mobile devices, to even driving vehicles for us.</p>
            </div>
            </div>
            
    </>
          
  )
}



// const HomePost = (post) => {
//   return (
//     <>
//   <div className="w-full flex mt-8 md:items-center md:justify-center md:space-x-0 space-x-0 md:ml-2" >
//               {/* left */}
//             <div className="md:w-auto h-[200px]  flex justify-center items-center mb-3  ">
//             <img className=" w-full  h-full md:h-[100%] md:w-[100%] object-cover" src={post.photo}></img>
//           </div>


//  {/* right */} 
//             <div className='flex flex-col w-[60%] md:w-[55%] md:ml-0 '>
//               <h1 className=" text-1xl ml-2  font-extrabold md:font-bold md:md-2  md:text-2xl md:ml-5 ">
//               {post.title}
//               </h1>
//               <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-5 '>
//                 <p className='md:pt-2 ml-2 mr-4 text-xs md:text-sm '>{post.usename}</p>
//                 <div className="flex space-x-2">
//                   <p className='text-xs md:text-sm'>16/06/2023</p>
//                   <p className='text-xs md:text-sm'>16:45</p>
//                 </div>
//               </div>
//               <p className=" text-sm ml-2 md:text-xl">{(post.desc.splice(0,200)+ "...read more ")}</p>
//             </div>
//             </div>
            
//     </>
          
//   )
// }

export default HomePost
