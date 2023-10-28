import React, { useState } from 'react'
import slugify from "slugify";
import { MdFilterList } from 'react-icons/md'

function Hero() {

  const [ placeholder, setPlaceholder ] = useState('Search...')

  return (
    <div className="p-3 flex justify-evenly w-full items-center 
    flex-col h-[380px] mt-8 pt-4">
      <h2 className='text-6xl font-semibold '>
        Elevate Dreams, Fund Futures
      </h2>
      <div className='flex flex-col items-center h-[60%] justify-center'>
        <h3 className='text-xl flex items-center text-normal'>We're thrilled to have you here, joining us in our mission to support education and create opportunities for those in need.</h3>
        <h3 className='text-lg flex items-center text-normal text-center '>Your presence means a lot to us, and your contribution will play a vital role in empowering individuals  <br/> to access quality learning resources and a brighter future. </h3>
      </div>
      <div className="items-center w-[60%] rounded-xl flex-row flex justify-between h-16 ">        
      <input type="text" className="w-[78%] h-full bg-[#f5f5f5] 
        rounded-xl outline-none pl-5 text-[20px] font-normal 
        text-[#333333]" placeholder={placeholder}/>
      <button className="flex items-center justify-center w-[10%] h-full 
        bg-primary rounded-xl hover:duration-500 hover:bg-[#12c77c] transition-all">
        <MdFilterList className="text-white text-[25px] "/>
      </button>
      </div>
      <div className="flex justify-between items-center w-[60%]">
        <ul className="flex justify-between items-center w-[78%] rounded-xl  ">
          {["campaign", "school", "supplies","student living", "tuition"].map((link) => {
            return (
              <li key={link} className='p-2 px-4 border-2 border-[#f5f5f5] bg-[#f5f5f5] rounded-xl h-full
              items-center justify-center flex hover:bg-white mt-2
              hover:duration-500 cursor-pointer hover:text-primary hover:border-primary
              capitalize text-black font-medium' onClick={()=> setPlaceholder("Search " + link)} >
              {link}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Hero;
