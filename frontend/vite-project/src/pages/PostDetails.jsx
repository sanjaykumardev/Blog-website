import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Suggestion from '../components/Suggestion'

const PostDetails = () => {
  return (
    <>
      <div>
          <Navbar/>
          <div className="px-8 md:px-[200px]  w-full mt-8">
          <div className="flex justify-between items-center md:text-2xl text-xl font-bold">10 Uses of Artifical Intelligence in day to day life
              <h1 className="text-2xl font-bold text-black md:text-3xl "></h1>
              <div className="flex item-center justify-between space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
       </div>
       <div className="flex items-center justify-between mt-2 md:mt-4">
       <p >@Sanjaykumardev</p>
       <div className="flex space-x-2">
        <p>16/06/2023</p>
        <p>16:45</p>
       </div>
       </div>
       <img src="https://imgs.search.brave.com/darqD6r-Cg4xwicNBQDKv1mgawPlPnuOaxiZM4_Ryy8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pdGNo/cm9uaWNsZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzExL0FJLXN1YnBh/Z2UtNC1GZWF0dXJl/LTEwMjR4NTEyLnBu/Zw" className="w-full mx-auto mt-8" />
       <p className="mx-auto mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed itaque quisquam error magnam maiores voluptate adipisci dignissimos aliquam? Magnam, quidem laudantium sint porro tenetur eum maiores illo natus ad officia alias officiis consequuntur quas odit pariatur impedit neque minima culpa voluptatum id repellat commodi. Aliquid id quas doloribus eius? ipsum, dolor sit amet consectetur adipisicing elit. Ratione, maxime est. Fuga cumque, ratione nisi veritatis beatae, impedit consequatur quam corporis rem exercitationem ullam doloribus et voluptate necessitatibus eos? Nostrum ipsum ratione porro eos est deserunt sapiente perferendis doloremque quasi at odit alias fuga quo eaque modi a, itaque voluptate reiciendis tempore excepturi sunt. Consequatur distinctio iure ea perspiciatis, magni veritatis quia consequuntur nam eligendi omnis eius accusamus ducimus dolor non eaque impedit molestias autem ipsa quisquam doloribus dicta! Odit explicabo quis tempora rem, impedit error eum delectus aspernatur dignissimos nesciunt, asperiores sunt esse aliquam odio dolorem, fugit suscipit sint! Consequuntur quod, ex sint molestias porro modi sequi sunt ea omnis, delectus molestiae perferendis aut, est ipsa. Deleniti cumque error, perferendis eligendi tempora nemo. Saepe, in suscipit ea perspiciatis quae penisi architecto vitae deserunt ullam suscipit exercitationem cum maiores? Suscipit eligendi mollitia velit, ipsum sint cum? Maiores inventore fuga incidunt deserunt quibusdam quos, natus officia, amet aut fugiat sed nulla voluptates aspernatur praesentium? Cumque placeat recusandae di officia veniam, cum praesentium doloribus, a minima rem sit natus neque id eaque hic placeat quos expedita cupiditate harum dolorum ut quis tenetur aperiam beatae porro quo? Adipisci dolor, sit nisi deleniti nostrum veritatis ut odio nihil. Natus est consequuntur ab quo. Debitis doloremque reiciendis iusto qui tempore. Numquam, dolores. Sequi adipisci recusandae quaerat delectus culpa illo praesentium porro doloribus beatae ducimus. Expedita doloremque natus non aliquam exercitationem obcaecati accusamus illo delectus? Sed ut tempora commodi nostrum repellat atque culpa aperiam. Similique reprehenderit quasi enim dicta delectus quisquam eius rem ipsum nostrum maxime, aut sed perferendis sapiente repudiandae at voluptatem eos vero corporis dolore distinctio illum tenetur reiciendis soluta nesciunt. Magnam eaque nobis officia sunt sed magni, doloremque itaque ratione labore placeat quos, dolorum ea culpa, praesentium deserunt. Accusamus molestiae cumque, fuga amet necessitatibus fugiat odit quisquam sunt veniam ab itaque qui illum numquam facere aliquid debitis ipsum sequi delectus impedit, enim velit quos quaerat? Fugiat nulla nam illum g elit. Temporibus esse molestiae, nisi ducimus alias sapiente dicta quisquam similique. Ea officia libero perspiciatis culpa blanditiis! Eius est minima porro vel nemo.</p>

                           {/* sub-section */}
       <div className="flex items-center mt-8 space-x-6 font-semibold ">
        <p>Categories:</p>
        <div className="flex justify-betweeen items-center space-x-2 ">
          <div className="bg-gray-400 rounded-lg px-3 py-1">Tech</div>
          <div className="bg-gray-400 rounded-lg px-3 py-1">AI</div>
        </div>
       </div>
                            {/* comment-section   */}
                <div className='flex flex-col  mt-4 '>
                    <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
        
                               {/* comment */}
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
        
        </div>
                                     {/* write a comment */}

               <div className="  w-full flex flex-col mt-4 space-x-5">
                 <div className='flex justify-between items-center'>
                    <input className="outline-none p-2 mt-2 md:-mt-0 md:w-[80%] " type="text" placeholder='write a comment here'/>

            {/* button */}
             
                   
                    <button className='bg-black text-white py-2 px-5 mt-2 rounded-md md:w-[10%] '>Add Comment</button>
                        
                 </div>
              </div>
              
                                     
      </div>
      <Footer/>
    </div>
    </>
  
  )
}

export default PostDetails
