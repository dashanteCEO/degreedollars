import React, { useState } from 'react'
import slugify from "slugify";
import { MdFilterList } from 'react-icons/md'

function Hero() {
  return (
    <div className="p-3 flex justify-evenly w-full items-center 
    flex-col h-[400px] mt-8 pt-4">
      <h2 className='text-6xl font-medium '>
        Elevate Dreams, Fund Futures
      </h2>
      <div className='flex flex-col items-center h-[60%] justify-center'>
        <h3 className='text-xl flex items-center text-normal'>Education is the key to unloacking a brighter future, and every contribution counts.</h3>
        <h3 className='text-xl flex items-center text-normal'>Begin by searching through the various categories below.</h3>
      </div>
      <div className="items-center w-[60%] rounded-xl flex-row flex justify-between h-16 ">        
      <input type="text" className="w-[78%] h-full bg-[#f5f5f5] 
        rounded-xl outline-none pl-5 text-[20px] font-normal 
        text-[#333333]" placeholder="Search..."/>
      <button className="flex items-center justify-center w-[20%] h-full
        bg-primary rounded-xl hover:duration-500 hover:bg-[#12c77c] transition-all">
        <MdFilterList className="text-white text-[25px] ml-2"/>
      </button>
      </div>
      <div className="flex justify-between items-center w-[60%]  ">
        <ul className="flex justify-between items-center w-[77.3%]  rounded-xl  ">
          {["campaign", "school", "supplies","student living", "tuition"].map((link) => {
            return (
              <li key={link} className='p-2 px-4 border-2 border-[#f5f5f5] bg-[#f5f5f5] rounded-xl h-full
              items-center justify-center flex hover:bg-white mt-2
              hover:duration-500 cursor-pointer hover:text-primary hover:border-primary
              capitalize text-black font-medium'>
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
