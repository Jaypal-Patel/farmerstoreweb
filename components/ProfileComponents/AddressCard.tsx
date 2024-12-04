"use client"
import React from 'react'

const AddressCard = () => {
  return (
    <div>
        <div className='flex items-center justify-between py-4 px-5 border-l border-l-[#E0E0E0] border-r border-r-[#E0E0E0] border-t border-t-[#E0E0E0] rounded-tr-2xl rounded-tl-2xl'>
            <h2 className='text-base font-semibold'>Shipping Address</h2>
            <div className='flex items-center gap-3'>
                <button className='h-[36px] w-[36px] border border-[#4B2C10] rounded-full flex justify-center items-center'>v</button>
            <button className='h-[36px] w-[36px]  border border-[#4B2C10] rounded-full flex justify-center items-center'>v</button>
            </div>
        </div>
        <div className='px-5 py-5 pt-8 border border-[#E0E0E0] flex flex-col gap-5 rounded-bl-2xl rounded-br-2xl relative'>
            <div className='absolute top-0 left-5 text-primary bg-[#dcf2e3] text-xs px-2 py-1'><p>Default Address</p></div>
            <div className=''>
            <h2 className='text-base font-semibold'>Henry V. Derr</h2>
            <p className='text-[#555555] text-sm font-medium  w-[70%] mt-1'>1354 Green Street Nashville Drive Dodge City, KS 67801 United States </p>
            </div>
            <div>
            <div className='flex text-sm items-center gap-1 '><h2 className='text-sm font-semibold'>Email :</h2><p className='text-[#555555] font-medium'> dhananjaypre</p></div>
            <div className='flex text-sm items-center gap-1 '><h2 className='text-sm font-semibold'>Call :</h2><p className='text-[#555555] font-medium'>+91 458 753 6924</p></div>
            </div>
        </div>
    </div>
  )
}

export default AddressCard
