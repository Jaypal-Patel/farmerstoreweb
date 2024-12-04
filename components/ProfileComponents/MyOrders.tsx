"use client";
import React, { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import OrderCard from "./OrderCard";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

const borderStyle = "border border-[#C8C8C8] rounded-md relative";
const labelStyle =
  " lg:text-sm md:text-xs text-sm  text-[#868E97] font-medium  px-1  bg-white absolute top-[-10px] left-[10px]";
const inputStyle =
  "rounded-lg px-3 py-3 w-full outline-0 lg:text-sm md:text-xs text-sm";

const sortByOptions = [
  { id: 2, name: "This Week", unavailable: false },
  { id: 3, name: "This Month", unavailable: false },
];
const MyOrders = () => {
  const [sortBy, setSortBy] = useState(sortByOptions[0]);
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div
      className={` h-fit  ${
        pathName.includes("my-order-page")
          ? "block  w-[100%] lg:mb-24 sm:mb-10 mb-8"
          : "sm:block hidden lg:w-[68%] md:w-[68%]  w-full"
      }`}
    >
      {pathName.includes("my-order-page") && (
        <div
          onClick={() => {
            router.replace("/my-account?tab=my-profile");
          }}
          className=" flex items-center gap-2  lg:py-10 py-5 "
        >
          <FaArrowLeftLong className={` md:text-2xl text-xl cursor-pointer`} />
          <h2 className="text-primary font-bold lg:text-2xl text-xl   ">
            My Order
          </h2>
        </div>
      )}
      <div className={`flex flex-col sm:gap-8 gap-4 `}>
        <div className="flex justify-between items-center shadow-md rounded-xl  w-full md:px-5 px-3 py-3 border border-[#DFDFDF] order-history-shadow">
          <div>
            <h2 className="md:text-lg text-sm  font-bold">Order History</h2>
          </div>
          <div className="flex md:gap-5 gap-3 items-center ">
            <p className="sm:text-sm text-xs font-semibold">Sort By :</p>
            <div className=" relative flex items-center rounded-md ">
              <div className="  relative w-full py-2.5 px-3 rounded-md bg-[#ecf8ed]">
                <Listbox value={sortBy} onChange={setSortBy}>
                  <div className=" ">
                    <Listbox.Button
                      className={` w-full  font-semibold  flex justify-between sm:gap-10 gap-5 items-center text-start lg:text-sm md:text-xs text-sm`}
                    >
                      <span>{sortBy?.name || "Select"}</span>
                      <span>
                        {/* <FlatIcon className="flaticon-down-arrow text-[#9bb7d3] text-lg" /> */}
                        <div>
                          <IoIosArrowDown className={`h-[16px] w-[16px]`} />
                        </div>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options
                      className={` absolute top-[50px] px-3 py-3 rounded-md shadow-xl   bg-[#F8FAFC] text-sm flex flex-col gap-2 left-0 z-30 w-full`}
                    >
                      {sortByOptions &&
                        sortByOptions.length > 0 &&
                        sortByOptions.map((category: any) => (
                          <Listbox.Option
                            key={category.id}
                            value={category}
                            as={Fragment}
                          >
                            {({ active, selected }) => (
                              <li
                                className={`${
                                  active
                                    ? "bg-blue-500 text-white cursor-pointer"
                                    : "bg-white text-black  cursor-pointer"
                                }  flex justify-between px-2 py-1 shadow rounded-md `}
                              >
                                {/* {selected && <CheckIcon />} */}
                                <span>{category.name}</span>
                                {selected && <span>check</span>}
                              </li>
                            )}
                          </Listbox.Option>
                        ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
        <OrderCard />
      </div>
    </div>
  );
};

export default MyOrders;
