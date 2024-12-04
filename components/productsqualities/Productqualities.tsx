"use client";

import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import productvideo from "../../images/qualityvideo.svg";
import { useQuery } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa6";
import playBtn from "../../images/Stroke 3.svg"


const DUMMY_DATA = {
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  keyfeatures:
    "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
  ingredients:
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
};

const Productqualities = ({ slug,details,deets }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="px-body my-16 sm:my-20 md:my-24">
      {/* <div className="flex flex-col md:flex-row justify-center gap-[60px]">
        <div className="flex flex-col gap-[2rem] md:w-[100%]">
          <div className="flex  gap-20">
            {DUMMY_DATA?.desc && (
              <div
                className={` text-xl md:text-2xl text-yellow-950  font-bold ${
                  selectedTab === 0 && "underline"
                }  underline-offset-8 cursor-pointer`}
                onClick={() => setSelectedTab(0)}
              >
                Description
              </div>
            )}
            {DUMMY_DATA?.keyfeatures && (
              <div
                className={`text-xl md:text-2xl text-yellow-950  font-bold ${
                  selectedTab === 1 && "underline"
                }  underline-offset-8 cursor-pointer`}
                onClick={() => setSelectedTab(1)}
              >
                Information
              </div>
            )}
            {DUMMY_DATA?.ingredients && (
              <div
                className={`text-xl md:text-2xl text-yellow-950  font-bold ${
                  selectedTab === 2 && "underline"
                }  underline-offset-8 cursor-pointer`}
                onClick={() => setSelectedTab(2)}
              >
                Reviews
              </div>
            )}
          </div>
          {selectedTab === 0 ? (
            <div dangerouslySetInnerHTML={{ __html: DUMMY_DATA?.desc }}></div>
          ) : selectedTab === 1 ? (
            <div
              dangerouslySetInnerHTML={{ __html: DUMMY_DATA?.keyfeatures }}
            ></div>
          ) : selectedTab === 2 ? (
            <div className="">{DUMMY_DATA?.ingredients}</div>
          ) : (
            <div className=""></div>
          )}
        </div>
      </div> */}

      <div className="flex flex-col-reverse md:flex-row justify-center gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 md:w-[50%] ">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-950 ">
            Product Details
          </h2>

          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h2 className="font-bold text-black text-lg sm:text-xl md:text-2xl ">Description</h2>
            <p
              className=" text-neutral-600 text-[10px] sm:text-xs md:text-sm font-medium w-full md:w-[90%]"
              dangerouslySetInnerHTML={{ __html: deets?.description }}
            ></p>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h2 className="font-bold text-black text-lg sm:text-xl md:text-2xl">How To Cook</h2>
            <p
              className=" text-neutral-600 text-[10px] sm:text-xs md:text-sm font-medium w-full md:w-[90%]"
              dangerouslySetInnerHTML={{ __html: deets?.how_to_cook }}
            ></p>
          </div>
          {/* <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h2 className="font-bold text-black text-lg sm:text-xl md:text-2xl">Ingredients</h2>
            <p
              className=" text-neutral-600 text-[10px] sm:text-xs md:text-sm font-medium  w-full md:w-[90%]"
              dangerouslySetInnerHTML={{ __html: DUMMY_DATA?.ingredients }}
            ></p>
          </div> */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <div className="border border-[#CCCCCC]"></div>
            <div className="flex justify-between w-full px-2 sm:px-4 md:px-6 gap-1 md:gap-2 ">
              <div className="flex gap-1 sm:gap-2 md:gap-3 items-center">
                <FaPlus className="h-[18px] sm:h-[22px] md:h-[26px]  w-[18px] sm:w-[22px] md:w-[26px]   aspect-square " />
                <p className="text-black  text-lg sm:text-xl md:text-2xl font-semibold ">
                  Review
                </p>
              </div>
              <div className="flex gap-1 sm:gap-2 md:gap-3 items-center">
                <div className="flex gap-0.5 sm:gap-1 md:gap-1.5">
                  {Array(5)
                    .fill(0)
                    .map((_, keyid) => (
                      <IoStar className="h-[18px] sm:h-[22px] md:h-[26px]  w-[18px] sm:w-[22px] md:w-[26px] aspect-square text-[#FFBD15]" />
                    ))}
                </div>

                <p
                  className="text-black text-sm sm:text-base md:text-lg font-semibold
                 "
                >
                  4.2
                </p>
              </div>
            </div>
            <div className="border border-[#CCCCCC]"></div>
          </div>
        </div>
        <div className="md:w-[45%] ">
          <div className=" relative  w-full h-[13rem] sm:h-[20rem] md:h-[27rem]  bg-white bg-opacity-40 rounded-[20px]">
            
              <Image
                src={productvideo}
                alt=""
                className="w-full h-full object-contain "
                width={1000}
                height={1000}
              
              />
              <button className="flex items-center justify-center bg-white sm:w-[60px] sm:h-[60px] h-[50px] w-[50px] rounded-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><Image src={playBtn} alt=""/></button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productqualities;
