

const ProfilePost = () => {
  return (
    <>
      
      <div className="w-full flex mt-3 md:items-center md:justify-center md:space-x-0 space-x-0 md:ml-2 text-black" >
              {/* left */}
            <div className="md:w-[full] h-[210px]  flex justify-center items-center mb-3  ">
            <img className=" w-full  h-full md:h-[100%] md:w-[100%] object-cover" src="https://imgs.search.brave.com/bdqumWYmvNHm6hFNXbwydo2wzg7rEd2eL3X9IMqc6Lg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwODY0/OC8xOTg5Mi9pLzYw/MC9kZXBvc2l0cGhv/dG9zXzE5ODkyNjUz/NC1zdG9jay1waG90/by1kaWdpdGFsLWFy/dGlmaWNpYWwtaW50/ZWxsaWdlbmNlLXRl/eHQtaG9sb2dyYW0u/anBn"></img>
          </div>


 {/* right */} 
            <div className='flex flex-col w-[60%] md:w-[55%] md:ml-0 '>
              <h1 className=" text-1xl ml-2  font-extrabold md:font-bold md:md-2  md:text-2xl md:ml-5 ">
                10 Uses of Artifical Intelligence in day to day life
              </h1>
              <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-5 '>
                <p className='md:pt-1 ml-2 mt-0 mr-4 text-xs md:text-sm '>@Sanjaykumardev</p>
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

export default ProfilePost
