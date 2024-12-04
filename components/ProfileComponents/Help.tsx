"use client"
import React from 'react'
import { Disclosure } from "@headlessui/react";
import { usePathname,useRouter } from 'next/navigation';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const DUMMY_DATA = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    },
  ];

const Help = () => {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div className={` h-fit  ${pathName.includes("help-and-support-page") ? "block  w-[100%] lg:mb-24 sm:mb-10 mb-8":"sm:block hidden lg:w-[68%] md:w-[68%]  w-full"}`}>
         {
                    pathName.includes("help-and-support-page") && <div
                        onClick={() => {
                            router.replace("/my-account?tab=my-profile")
                        }}
                        className=' flex items-center gap-2  lg:py-10 py-5'>
                          <FaArrowLeftLong className={` md:text-2xl text-xl cursor-pointer`} /> 
                        <h2 className='text-primary font-bold lg:text-2xl text-xl   '>Help and Support</h2></div>
                }
      <div>
        <h1 className={`lg:text-3xl md:text-2xl text-xl font-semibold  ${pathName.includes("help-and-support-page")?"pb-5":"py-6"}`}>Need Help?</h1>
        <div className='flex justify-between border border-[#4B2C10] p-1 rounded-2xl mt-2'>
            <input type="text" />
            <button className='flex items-center justify-center bg-[#4B2C10] sm:w-[50px] sm:h-[50px] h-[40px] w-[40px] sm:rounded-2xl rounded-xl'>
              < FiSearch className={`text-xl text-white fonr-bold`}/></button>
        </div>
        <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold md:pt-10 pt-5 md:pb-5'>Frequently Asked Question (FAQs)</h1>
        {DUMMY_DATA.map((item: any, idx: number) => (
          <Disclosure key={idx}>
            <Disclosure.Button className="xl:py-7 py-4 flex justify-between  items-center border-b-[1px] border-[#4B2C10] w-full sm:pl-5 pl-3 sm:pr-10 pr-3">
              <span className="xl:text-base sm:text-sm text-xs font-medium text-[#555555]">
                {item.question}
              </span>
              <div><IoIosArrowDown className={`text-[#555555] sm:text-lg text-sm`}/></div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 w-full sm:text-sm text-xs bg-gray-50 xl:py-7 py-4 sm:pl-5 pl-3 sm:pr-10 pr-3">
              {item.answer}
            </Disclosure.Panel>
          </Disclosure>
        ))}
        </div>
    </div>
  )
}

export default Help