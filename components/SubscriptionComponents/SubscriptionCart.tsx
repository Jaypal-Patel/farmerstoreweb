"use client"
import React from 'react'
import apple3 from "../../images/image 99.svg"
import Image from 'next/image'
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";

const SubscriptionCart = () => {
  return (
    <div className={` px-body  `}>
      <div className={`md:pt-14 pt-7 flex items-center justify-between `}>
        <h1 className={` lg:text-3xl sm:text-xl text-lg font-semibold`}>Subscription to Apples</h1>
        <button className={`bg-[#FDF5DE] md:px-16 sm:px-10 px-4 sm:py-4 py-2 sm:rounded-xl rounded-md font-medium sm:text-base text-sm`}>+ Add More</button>
      </div>
    <div  className={`md:mt-10 mt-5 flex lg:flex-row flex-col gap-y-4 lg:items-center md:justify-between border border-[#C6C6C6] md:p-5 p-3 rounded-md`}>
        <div className={`flex gap-x-4 `}>
        <div className={`relative md:h-[180px] md:w-[180px] h-[130px] w-[130px]`}>
      <Image src={apple3} alt='apple' className='h-[100%] w-[100%] object-contain'/> 
      <div className='absolute top-3 left-3 bg-[#E9F6F0] text-primary md:text-sm text-xs font-semibold px-3 md:py-2 py-1 rounded-md'><p>- 50%</p></div>
      </div>
      <div  className={` flex flex-col sm:gap-6 gap-3`}>
        <div className='flex flex-col sm:gap-2 gap-1 '>
        <h3 className={`font-semibold md:text-base text-sm`}>Red Apples</h3>
        <p className={`font-medium md:text-base text-sm`}>500 gms</p>
        <h3 className={`font-semibold md:text-lg text-base`}>Rs. 99</h3>
        </div>
        <div className={` flex flex-col gap-2`}>
        <p className={`font-medium md:text-base text-sm`}>Select Date and Time:</p>
        <div className={` flex md:flex-row flex-col md:items-center gap-x-3 gap-y-2`}>
            <div className={` flex sm:flex-row flex-col md:items-center gap-x-3 gap-y-2`}>
        <div className={`flex items-center  border border-primary rounded-md w-fit `}>
            <h5 className={`font-semibold  md:text-[14px] text-[12px] border-r border-r-primary md:pl-3 pl-2 md:pr-5 pr-3 md:py-3  py-2`}>DD/MM/YYYY</h5>
            <div className='md:px-3 px-2.5  md:py-3  py-2'><FaRegCalendarAlt /></div>
        </div>
        <div className={`flex items-center  border border-primary rounded-md w-fit `}>
            <h5 className={`font-semibold  md:text-[14px] text-[12px] border-r border-r-primary md:pl-3 pl-2 md:pr-5 pr-3 md:py-3  py-2 `}>00:00</h5>
            <div className='md:px-3 px-2.5  md:py-3  py-2'><GoClock /></div>
        </div>
        </div>
        <div className={` flex items-center sm:gap-x-3 gap-x-2`}>
        <div className={`font-semibold text-white bg-primary md:py-3 py-2 md:px-3 px-2.5 rounded-md md:text-[14px] text-[12px]`}>AM</div>
        <div className={`font-semibold border border-primary text-primary md:py-3 py-2 md:px-3 px-2.5 rounded-md md:text-[14px] text-[12px]`}>PM</div>
        </div>
        </div>
        </div>
        </div> 
      </div>
      <div className={`flex flex-col md:gap-4 gap-2 lg:items-end `}>
        <p className={`text-primary md:text-base text-sm font-medium`}>You save Rs. 30/ month on subscription</p>
        <div className={`flex md:gap-10 gap-8 items-center border border-[#A2A2A2] w-fit rounded-md md:py-3 py-2 px-4 font-semibold`}>
            <p>-</p>
            <p>1</p>
            <p>+</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SubscriptionCart