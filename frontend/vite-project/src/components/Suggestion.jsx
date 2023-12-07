import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
const Suggestion = () => {
  return (
    <>
     
     <div className=" bg-gray-200 rounded-lg px-2 py-2 mb-2">
                <div className='flex items-center justify-between'>
                    <h3 className="font-bold text-gray-600">@jhon</h3>
                <div className='flex justify-center items-center space-x-4'>
                    <p className='text-gray-500 text-sm'>16/06/2023</p>
                    <p className='text-gray-500 text-sm'>16:45</p>
                <div className="flex item-center justify-between space-x-2">
                     <p><BiEdit/></p>
                     <p><MdDelete/></p>
                </div>
                </div>
                </div>
                  <p className='px-4 mt-2 '>Nice imformation!!</p>
      </div>
     
    </>
   
  )
}

export default Suggestion
