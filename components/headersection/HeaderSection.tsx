"use client";

import React, { FC } from "react";
import headingsectionimage from "../../images/Group header.svg";
import Image from "next/image";
// import { fetchSingleProduct } from "@/utils/databaseService";
import { useQuery } from "@tanstack/react-query";

interface Props {
 title: string;
 subtitle:string
}

const Headersection: FC<Props> = ({ title, subtitle }) => {
 
  return (
    <div className="relative mt-24 sm:mt-32 md:mt-40  mb-8 sm:mb-16 mb:mt-24 ">
      <Image
        src={headingsectionimage}
        className="h-auto w-[100vw] object-cover"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      ></Image>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 ">
        <div className="flex flex-col text-white gap-1 sm:gap-1.5 md:gap-2 justify-center items-center">
          <p className="text-black text-xl sm:text-2xl md:text-3xl font-semibold">
            {title}
          </p>

          <p className="text-black text-sm sm:text-base md:text-lg font-medium">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Headersection;
