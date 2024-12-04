"use client";
import Image from "next/image";
import React from "react";
import appStore from "../../images/appStore.png";
import screenshot from "../../images/screenShot.png";
import playstore from "../../images/playstore.png";

const PlaystoreLinks = () => {
  return (
    <div className="flex relative sm:pl-body mt-[50px] lg:mt-[180px] mb-[20px] md:mb-[50px]">
      <div className="flex w-full">
        <div className="absolute  invisible sm:visible xl:-top-[100px] lg:-top-[50px] rounded-xl mx-[3.5%] left-0 sm:w-[240px] md:w-[300px] lg:w-[400px] xl:w-[500px] bg-[#EAFBE4] sm:h-[calc(100%-20px)] md:h-[calc(100%-10px)] lg:h-[calc(100%+10px)]">
          <div className=" absolute lg:right-0 z-20 -top-0 sm:w-[180px] md:w-[250px] lg:w-[250px]">
            <Image
              src={screenshot}
              alt="screenshot"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="sm:w-[75%] w-full px-body ml-auto flex flex-col bg-[#FDF5DE] z-10 lg:min-h-[286.37px] sm:pl-[80px] md:pl-[130px] lg:pl-[180px] justify-center py-7">
          <div>
            <h4 className="font-medium text-xl">Download the</h4>
            <h4 className="font-semibold text-primary text-2xl ">
              Mobile Application
            </h4>
            <p className="my-6 text-xs md:text-base lg:max-w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              laborum. Cumque, nobis!
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[150px] md:w-[140px] lg:w-[180px]">
              <Image
                src={appStore}
                alt="appStore"
                className="w-full h-full object-contain"
              ></Image>
            </div>
            <div className="w-[150px] md:w-[140px] lg:w-[180px]">
              <Image
                src={playstore}
                alt="playstore"
                className="w-full h-full object-contain"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaystoreLinks;
