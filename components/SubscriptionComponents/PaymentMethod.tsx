"use client"
import React, { useState } from 'react'
import creditCard from "../../images/fi_9334539.svg"
import cash from "../../images/fi_2454274.svg"
import aaplePay from "../../images/fi_5977576.svg"
import { IoMdArrowForward } from "react-icons/io";
import Image from 'next/image';
import OrderSummary from './OrderSummary';

const PaymentMethod = () => {
 
  return (
    <div className={`md:mt-16 mt-8 px-body flex md:gap-12 gap-6 flex-col  `}>
      <div className={`flex  flex-col lg:gap-2 gap-1`}>
      <h2 className={`lg:text-3xl sm:text-xl text-lg font-semibold`}>Payment Method</h2>
        <p className={`lg:text-base text-sm font-medium`}>Choose suitable payment method that works best for you</p>
      </div>
        <div className={` flex md:flex-row flex-col xl:gap-x-10 gap-x-5 gap-y-5`}>
            <div className={`lg:w-[70%] md:w-[60%] w-[100%]  flex flex-col gap-4`}>
            <div className={`border border-[#8E8E8E] rounded-md lg:px-5 px-3 py-1 flex items-center justify-between`}>
                <div className={` flex items-center lg:gap-3 gap-2`}>
                <div className={`lg:h-[55px] h-[45px] w-[70px] `}>
                    <Image src={aaplePay} alt="" className={`h-[100%] w-[100%] object-contain `}/> </div>
                <div className='lg:text-base text-sm font-semibold'>Apple Pay</div>
                </div>
                <div className={`border-2 border-black rounded-md p-1`}><IoMdArrowForward className={`lg:text-xl text-sm`}/></div>
            </div>
            <div className={`border border-[#8E8E8E] rounded-md lg:px-5 px-3 py-1 flex items-center justify-between`}>
                <div className={` flex items-center lg:gap-3 gap-2`}>
                <div className={`lg:h-[55px] h-[45px] w-[70px] `}>
                    <Image src={creditCard} alt="" className={`h-[100%] w-[100%] object-contain `}/> </div>
                <div className='lg:text-base text-sm font-semibold'>Credit/ Debit Card</div>
                </div>
                <div className={`border-2 border-black rounded-md p-1`}><IoMdArrowForward className={`lg:text-xl text-sm`}/></div>
            </div>
            <div className={`border border-[#8E8E8E] rounded-md lg:px-5 px-3 py-1 flex items-center justify-between`}>
                <div className={` flex items-center lg:gap-3 gap-2`}>
                <div className={`lg:h-[55px] h-[45px] w-[70px] `}>
                    <Image src={cash} alt="" className={`h-[100%] w-[100%] object-contain `}/> </div>
                <div className='lg:text-base text-sm font-semibold'>Pay On Delivery</div>
                </div>
                <div className={`border-2 border-black rounded-md p-1`}><IoMdArrowForward className={`lg:text-xl text-sm`}/></div>
            </div>
            </div>
            <div className={`lg:w-[30%] md:w-[40%] w-[100%]`}>
            <OrderSummary/>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethod