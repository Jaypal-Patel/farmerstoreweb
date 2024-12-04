"use client"
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import apple from "../../images/apple.png";
import berries from "../../images/berries.png";
import { usePathname,useRouter } from 'next/navigation';
import { FaArrowLeftLong } from "react-icons/fa6";

const Family = () => {
    const router = useRouter()
    const pathName = usePathname()
  return (
   <>
     <div className={` h-fit ${pathName.includes("family-page") ? "block  w-[100%] lg:mb-24 sm:mb-10 mb-8":"sm:block hidden  lg:w-[68%] md:w-[68%]  w-full"}  `}>
   {
                    pathName.includes("family-page") && <div
                        onClick={() => {
                            router.replace("/my-account?tab=my-profile")
                        }}
                        className=' flex items-center gap-2  lg:py-10 py-5'>
                          <FaArrowLeftLong className={` md:text-2xl text-xl cursor-pointer`} /> 
                        <h2 className='text-primary font-bold lg:text-2xl text-xl   '>Family</h2></div>
                }
                <div>
<div className={`flex flex-col sm:gap-8 gap-6`}>
    <div>
    <div className={`text-white bg-black text-[13px] font-medium md:w-28 w-20 flex items-center justify-center md:py-2.5 py-1.5  rounded-tr-md rounded-tl-md`}><p>Brother</p></div>
<div className={`flex items-center justify-between border-[1.5px] border-[#39B54A] md:p-5 p-3`}>
    <div className={`flex flex-col md:gap-2 gap-1`}>
        <h3 className='font-bold text-base'>Aryan Rawat</h3>
        <p className={`text-sm font-normal text-[#555555]`}>+91-98243-21467</p>
        <p className={`text-sm font-normal text-[#555555]`}>aryan.rawat@gmail.com</p>
    </div>
    <div className={`flex sm:flex-row flex-col items-center gap-x-4 gap-y-2`}>
        <button className={`text-[#39B54A] lg:text-sm text-xs font-semibold lg:px-7 px-4 sm:py-3.5 py-2 bg-[#EBF8ED] rounded-md`}>Accept Request</button>
        <button className={`text-[#FF0000] lg:text-sm text-xs font-semibold  lg:px-7 px-4 sm:py-3.5 py-2 bg-[#FFE6E6] rounded-md`}>Decline Request</button>
        </div>
 </div>
 </div>

<div className={`flex flex-col sm:gap-6 gap-4`}>
    <h2 className={`text-base font-semibold`}>Family Members</h2>
    <div className={`flex flex-col sm:gap-6 gap-4`}>
    <div>
    <div className={`flex items-center justify-between border-[1.5px] border-[#F5F5F5] md:p-5 p-3`}>
    <div className={`flex flex-col md:gap-2 gap-1`}>
        <h3 className='font-bold text-base'>Aryan Rawat</h3>
        <p className={`text-sm font-normal text-[#555555]`}>+91-98243-21467</p>
        <p className={`text-sm font-normal text-[#555555]`}>aryan.rawat@gmail.com</p>
    </div>
    <div className={`text-white bg-black text-[13px] font-medium md:w-28 w-20 flex items-center justify-center md:py-2.5 py-1.5 rounded-bl-md rounded-tr-md rounded-tl-md`}><p>Brother</p></div>

   
 </div>  
    </div>
    <div>
    <div className={`flex items-center justify-between border-[1.5px] border-[#F5F5F5] md:p-5 p-3`}>
    <div className={`flex flex-col md:gap-2 gap-1`}>
        <h3 className='font-bold text-base'>Jennie Rawat</h3>
        <p className={`text-sm font-normal text-[#555555]`}>+91-98243-21467</p>
        <p className={`text-sm font-normal text-[#555555]`}>aryan.rawat@gmail.com</p>
    </div>
    <div className={`text-white bg-black text-[13px] font-medium md:w-28 w-20 flex items-center justify-center md:py-2.5 py-1.5 rounded-bl-md rounded-tr-md rounded-tl-md`}><p>Wife</p></div>

   
 </div>  
    </div>
    </div>
    
    <button className='w-full bg-primary text-sm font-semibold rounded-2xl text-white md:py-4 py-2.5 mt-2 '>+ Add Family Member</button>

</div>
</div>
</div>
   </div>
   </>
  )
}

export default Family