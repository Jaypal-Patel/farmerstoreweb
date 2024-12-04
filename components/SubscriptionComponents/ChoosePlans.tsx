"use client"
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const ChoosePlans = () => {
  return (
    <div className={` md:mt-16 mt-8 px-body `}>
        <div  className={`flex flex-col gap-1 items-center `}> 
            <h2 className={`lg:text-3xl sm:text-xl text-lg font-semibold`}>Choose your Plan</h2>
            <p className={`sm:text-base text-sm font-medium`}>Choose the pricing plan that works best for you</p>
            </div>
            <div className={`md:mt-14 mt-7 flex justify-center lg:gap-x-10 gap-x-5 md:flex-nowrap flex-wrap gap-y-5`}>
            {/* blue card start  */}
            <div className={`flex flex-col gap-10 bg-[#E9F6F0] w-[250px] rounded-xl p-5 border border-primary`}>
              <div className={`flex flex-col gap-4  `}>
                <div  className={`flex flex-col gap-3 `}>
                <div className={`flex items-center justify-between`}>
                    <h3 className={`text-base text-primary font-semibold`}>DAILY</h3>
                </div>
                <h1 className={`text-xl  font-bold`}>Rs. 399</h1>
                <p className={`text-sm text-[#4B2C10] font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing eli labore </p>
                </div>
               <div className={`flex flex-col gap-2 `}>
               {[1,2,3].map((item:any,idx:number)=>{
                  return <div key={idx} className='flex items-center gap-2'>
                  <div className={`bg-[#e9f6f0] h-[18px] w-[18px] rounded-full flex items-center justify-center`}>
                    <IoMdCheckmark className={`text-primary text-sm`}/></div>
                  <p className={`text-sm  font-medium`}>Ut enim ad</p>
                </div>
                })}
               </div>
               </div>
                <button className={`text-white text-base w-full bg-primary flex gap-2 items-center justify-center rounded-xl py-2`}>
                  Choose Plan{""}<GoArrowRight className={`text-white text-base`}/>
                  </button>
            </div>

            {/* blue card end */}


            {/* black card start  */}
            <div className={`flex flex-col gap-8 bg-black w-[269px] rounded-xl p-5`}>
              <div className={`flex flex-col gap-4  `}>
                <div  className={`flex flex-col gap-2 `}>
                <div className={`flex items-center justify-between`}>
                    <h3 className={`text-lg text-primary font-semibold`}>WEEKLY</h3>
                    <div className={`text-xs bg-white text-center font-semibold  rounded-full p-2 px-5`}>POPULAR</div>
                </div>
                <h1 className={`text-2xl text-white font-bold`}>Rs. 499</h1>
                <p className={`text-sm text-[#BBBBBB] font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing eli labore </p>
                </div>
               <div className={`flex flex-col gap-2 `}>
               {[1,2,3].map((item:any,idx:number)=>{
                  return <div key={idx} className='flex items-center gap-2'>
                  <div className={`bg-[#E9F6F0] h-[18px] w-[18px] rounded-full flex items-center justify-center`}>
                    <IoMdCheckmark className={`text-primary text-sm`}/></div>
                  <p className={`text-sm text-white font-medium`}>Ut enim ad</p>
                </div>
                })}
               </div>
               </div>
                <button className={`text-white text-base w-full bg-primary flex gap-2 items-center justify-center rounded-xl py-2`}>
                  Choose Plan{""}<GoArrowRight className={`text-white text-base`}/>
                  </button>
            </div>
            {/* black card end  */}
               {/* blue card start  */}
               <div className={`flex flex-col gap-10 bg-[#E9F6F0] w-[250px] rounded-xl p-5 border border-primary`}>
              <div className={`flex flex-col gap-4  `}>
                <div  className={`flex flex-col gap-3 `}>
                <div className={`flex items-center justify-between`}>
                    <h3 className={`text-base text-primary font-semibold`}>MONTHLY</h3>
                </div>
                <h1 className={`text-xl  font-bold`}>Rs. 599</h1>
                <p className={`text-sm text-[#4B2C10] font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing eli labore </p>
                </div>
               <div className={`flex flex-col gap-2 `}>
               {[1,2,3].map((item:any,idx:number)=>{
                  return <div key={idx} className='flex items-center gap-2'>
                  <div className={`bg-[#E9F6F0] h-[18px] w-[18px] rounded-full flex items-center justify-center`}>
                    <IoMdCheckmark className={`text-primary text-sm`}/></div>
                  <p className={`text-sm  font-medium`}>Ut enim ad</p>
                </div>
                })}
               </div>
               </div>
                <button className={`text-white text-base w-full bg-primary flex gap-2 items-center justify-center rounded-xl py-2`}>
                  Choose Plan{""}<GoArrowRight className={`text-white text-base`}/>
                  </button>
            </div>
            </div>

    </div>
  )
}

export default ChoosePlans