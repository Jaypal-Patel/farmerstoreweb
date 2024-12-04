"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const DUMMY_DATA = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
  },
];

const HaveQuestions = () => {
  return (
    <div className="bg-questions-image px-body md:py-14 py-6 md:mt-20 mt-10 flex flex-col md:gap-5 gap-2">
      <h2 className={`md:text-4xl text-2xl font-bold text-center`}>
        <span>Have</span> <span className={`text-primary`}>Questions?</span>
      </h2>

      <div>
        {DUMMY_DATA.map((item: any, idx: number) => (
          <Disclosure key={idx}>
            <Disclosure.Button className="xl:py-7 py-4 flex justify-center  items-center border-b-[1px] border-gray-300 2xl:w-[40%] lg:w-[60%] md:w-[80%] w-[100%] mx-auto md:px-10 px-3 md:gap-20 gap-10">
              <span className="xl:text-base text-sm  font-medium text-black">
                {item.question}
              </span>
              <div>
                <IoIosArrowDown className={`text-black sm:text-base text-sm`} />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 w-full sm:text-sm text-xs bg-gray-50 xl:py-7 py-4 md:px-10 px-3 2xl:w-[40%] lg:w-[60%] md:w-[80%] w-[100%] mx-auto">
              {item.answer}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default HaveQuestions;
