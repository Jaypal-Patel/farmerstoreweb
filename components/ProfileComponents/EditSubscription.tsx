"use client"
import React from 'react'
import { GoClock } from "react-icons/go";
import berries from "../../images/berries.png";
import Image from 'next/image';
import { useRouter, useSearchParams,usePathname } from 'next/navigation'
import { FaArrowLeftLong } from "react-icons/fa6";



const EditSubscription = () => {
    const router = useRouter()
    const pathName = usePathname()
  return (
    <div className={` h-fit  ${pathName.includes("subscriptions-page")?"block w-[100%] lg:mb-24 sm:mb-10 mb-8":"sm:block hidden lg:w-[68%] md:w-[68%]  w-full"}`}>
          {
                    pathName.includes("subscriptions-page") && <div
                        onClick={() => {
                            router.replace("/my-account?tab=my-profile")
                        }}
                        className=' flex items-center gap-2  lg:py-10 py-5'>
                          <FaArrowLeftLong className={` md:text-2xl text-xl cursor-pointer`} /> 
                        <h2 className='text-primary font-bold lg:text-2xl text-xl   '>Subscriptions</h2></div>
                }
        <div className='flex flex-col md:gap-4 gap-2  border border-[#DEDEDE] rounded-2xl sm:p-8 p-4 '>
        <div className='flex'>
            <div>
                <Image src={berries} alt=""/>
            </div>
            <div className=' w-fit '>
      <p className="text-sm font-medium text-[#727272]">Fruits</p>
      <h6 className="text-base font-semibold my-1">Blue Berries</h6>
      <div className="text-sm font-semibold text-black flex items-center gap-1"><p className='font-semibold text-black'>Qty :</p>250 gms</div>
      <p className='font-bold text-black text-base mt-4'>Rs. 69</p>
      </div>
        </div>
        <div className='flex justify-between gap-3 items-center border-b border-b-[#DEDEDE] sm:py-6 py-4'>
            <div className='flex items-start gap-2'>
<div className=' '><GoClock className="lg:h-[25px] lg:w-[28px] h-[20px] w-[20px]" /></div>
<div  className='flex flex-col  md:text-small text-[14px] font-medium'>
    <p>Friday, 8 December</p>
    <p>4 AM</p>
</div>
            </div>
            <div className='flex sm:gap-3 gap-2 items-center text-white lg:text-base text-xs font-semibold '>
                <button className='bg-primary lg:px-8 px-4 sm:py-2 py-1.5 rounded-md'>Edit</button>
                <button className='bg-[#4B2C10] lg:px-8 px-4 sm:py-2 py-1.5 rounded-md'>Pause</button>

            </div>
        </div>
        <div className='flex justify-between gap-3 items-center border-b border-b-[#DEDEDE] sm:py-6 py-4'>
            <div className='flex items-start gap-2'>
<div className=' '><GoClock className="lg:h-[25px] lg:w-[28px] h-[20px] w-[20px]" /></div>
<div  className='flex flex-col   md:text-small text-[14px] font-medium'>
    <p>Friday, 10 December</p>
    <p>4 AM</p>
</div>
            </div>
            <div className='flex sm:gap-3 gap-2 items-center text-white lg:text-base text-xs font-semibold '>
                <button className='bg-primary lg:px-8 px-4 sm:py-2 py-1.5 rounded-md'>Edit</button>
                <button className='bg-[#4B2C10] lg:px-8 px-4 sm:py-2 py-1.5 rounded-md'>Pause</button>

            </div>
        </div>
        <div className='flex justify-between gap-3 items-center  sm:pt-6 pt-4'>
            <div className='flex items-start gap-2'>
<div className=' '><GoClock className="lg:h-[25px] lg:w-[28px] h-[20px] w-[20px]" /></div>
<div  className='flex flex-col   md:text-small text-[14px] font-medium'>
    <p>Friday, 12 December</p>
    <p>4 AM</p>
</div>
            </div>
            <div className='flex sm:gap-3 gap-2 items-center text-white lg:text-base text-xs font-semibold '>
                <button className='bg-primary lg:px-8 px-4 sm:py-2 py-1.5 rounded-md'>Edit</button>
                <button className='bg-[#4B2C10] lg:px-8 px-4 sm:py-2 py-1.5 rounded-md'>Pause</button>

            </div>
        </div>
        </div>
    </div>
  )
}

export default EditSubscription