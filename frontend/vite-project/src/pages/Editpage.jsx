import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'




const Editpage = () => {

                            {/* funtionality */}
  const [cat, setCat] = useState("")
  const [cats, setCats] = useState([])


   function addCategory() {

    let UpdateCats = [...cats]
    UpdateCats.push(cat)
    setCat("")
    setCats(UpdateCats)


  }

    function delectCategory(i) {
      let UpdateCats = [...cats]
      UpdateCats.splice(i)
      setCats(UpdateCats)
      setCat("")

    }


  return (
    <>
                          
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className='font-bold md:text-2xl text-xl'>Update a Post</h1>
        <form className='w-full flex flex-col space-y-5 md:space-y-8 mt-4'>
          <input className='px-4 py-2  outline-none' type="text" placeholder='Enter post title' />
          <input className='px-4' type="file" />
          <div className='flex flex-col'>
            <div className='flex items-center  space-x-4 md:space-x-8'>

              {/* functionality  */}

              <input value={cat} onChange={(e) => setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category ' type="text" />

              <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
            </div>

            {/* categaries */}
            <div className=' flex px-4 mt-3'>
              {cats?.map((c, i) => (
                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1  mt-4  rounded-md'>
                  <p>{c}</p>
                  <p onClick={() => delectCategory(i)} className='text-white rounded-full p-1 bg-black cursor-pointer text-sm'><ImCross /></p>
                </div>
              ))}

            </div>


          </div>
        </form>
        <textarea rows={15} cols={50} className='px-6 py-5  outline-4 mt-3' placeholder='Enter post description ' />
        <div className='flex md:justify-center  mt-7 '>
          <button className='bg-black  mx-3 md:w-[20%] w-[50%] text-white  font-semibold px-4 py-2 md:text-xl text-lg '>Update</button>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Editpage
