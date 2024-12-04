"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams,usePathname } from 'next/navigation'
import EditSubscription from './EditSubscription';
import { FaArrowLeftLong } from "react-icons/fa6";


const Subscriptions = () => {
    const [isEditSubscription,setIsEditSubscription]=useState(false)
    const params = useSearchParams()
    const currTab = params.get("tab")
    const router = useRouter()
    const pathName = usePathname()
    console.log(currTab);
    
  return (
    <>
    {
        !isEditSubscription?
    
    <div className={` h-fit ${pathName.includes("subscriptions-page") ? "block  w-[100%] lg:mb-24 sm:mb-10 mb-8":"sm:block hidden lg:w-[68%] md:w-[68%]  w-full"}`}>
         {
                    pathName.includes("subscriptions-page") && <div
                        onClick={() => {
                            router.replace("/my-account?tab=my-profile")
                        }}
                        className=' flex items-center gap-2  lg:py-10 py-5'>
                          <FaArrowLeftLong className={` md:text-2xl text-xl cursor-pointer`} /> 
                        <h2 className='text-primary font-bold lg:text-2xl text-xl   '>Subscriptions</h2></div>
                }
        <div className={`flex flex-col lg:gap-4 gap-2`}>
<h1 className='lg:text-3xl md:text-2xl text-xl font-bold'>
Create and manage Subscriptions
</h1>
<div className='w-full '>
    <div className='cursor-pointer flex justify-between border-b border-b-[#4B2C10] sm:px-5 px-3 lg:py-8 md:py-6 py-4 '>
        <h3 className='text-[#555555] font-medium sm:text-base lg:text-base md:text-sm text-sm'>Create a New Subscription</h3>
        <div><IoIosArrowForward   className="text-[#555555] lg:text-xl text-base"/></div>

    </div>
    {/* <Link href={{ pathname: "/my-account", query: { tab: "edit-subscription" } }} > */}
    <div onClick={()=>setIsEditSubscription(true)} className='cursor-pointer flex justify-between border-b border-b-[#4B2C10] sm:px-5 px-3 lg:py-8 md:py-6 py-4 '>
        <h3 className='text-[#555555] font-medium sm:text-base lg:text-base md:text-sm text-sm'>Edit an existing subscription</h3>
        <div><IoIosArrowForward   className="text-[#555555] lg:text-xl text-base"/></div>
    </div>
    {/* </Link> */}
</div>
</div>
    </div>
    :
    <EditSubscription/>
}
    </>
  )
}

export default Subscriptions