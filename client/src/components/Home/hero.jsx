import React, { useState } from 'react'
import slugify from "slugify";

function Hero() {

    const [showLinks, setShowLinks] = useState(false);

    const isShowLinks = () => {
        setShowLinks(true);
    }

    const isNotShowLinks = () => {
        setShowLinks(false);
    }

  return (
    <div className="p-3 flex justify-evenly w-full items-center 
    flex-col h-[400px] mt-4 pt-4">
      <h2 className='text-[50px]' >
        Elevate Dreams, Fund Futures
      </h2>
      <div className='flex flex-col items-center h-[60%] justify-center'>
        <h3 className='text-[25px] flex items-center text-normal'>Education is the key to unloacking a brighter future, and every contribution counts.</h3>
        <h3 className='text-[25px] flex items-center text-normal'>Begin by searching through the various categories below.</h3>
      </div>
      <div className="items-center h-[70px] w-[60%] rounded-full flex-row flex"
      style={{
        backgroundColor: showLinks ? "#ffffff" : "#f5f5f5",
      }}>
        <button className="flex items-center justify-center w-3/12 h-full
        bg-primary rounded-full hover:duration-500 hover:bg-[#12c77c] transition-all  " 
        onClick={isShowLinks}
        style={{
            display: showLinks ? "none" : "flex",
        }}>
            <h3 className="text-white text-[18px] font-medium">
                Categories
            </h3>
        </button>
        <input type="text" className="w-9/12 h-full bg-[#f5f5f5] rounded-full outline-none pl-5
         text-[20px] font-normal text-[#333333]" 
        placeholder="Search..." 
        style={{
          display: showLinks ? "none" : "flex",
        }}
        />
        <ul className="flex justify-between items-center w-full h-full rounded-full"
        style={{
            display: showLinks ? "flex" : "none",
        }}>
          {["campaign", "school", "supplies","student living", "tuition"].map((link) => {
            return (
              <li key={link} className='p-4 border-2 border-primary rounded-full h-full
              items-center w-[19%] justify-center flex hover:bg-[#2ecc71]
              hover:duration-500 cursor-pointer hover:text-white '>
                <h3 className="capitalize text-primary font-medium">{link}</h3>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=' items-center justify-between w-[60%] flex-row flex cursor-pointer p-2'
      onClick={isNotShowLinks}
      style={{
        opacity: showLinks ? 1 : 0,
      }}>
        <div className='p-[1px] w-[45%] bg-primary rounded-full'/>
        <h3 className='text-primary font-[15px]'>Close</h3>
        <div className='p-[1px] w-[45%] bg-primary rounded-full'/>
      </div>
    </div>
  );
}
export default Hero;
