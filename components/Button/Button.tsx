"use client";
import React from "react";
import Image from "next/image";
// import triangle from "../../images/Rectangle 23990.svg";
import { FC, useState } from "react";
// import { RotatingLines } from "react-loader-spinner";

interface Props {
  className: string;
  text: string;
  isLoading?: boolean;
  onClickHandler?: any;
}

const Button: FC<Props> = ({ className, text, onClickHandler, isLoading }) => {
  return (
    <>
      {/* <div
        onClick={onClickHandler}
        className={`${className} relative border-[2px] border-[#588F27]  text-base font-bold w-fit`}
      >
        {isLoading ? (
          <RotatingLines
          strokeColor="#588F27"
          strokeWidth="5"
          animationDuration="0.75"
          width="25"
          visible={true}
        />
        ) : (
          text
        )}
        <Image
          src={triangle}
          alt=""
          className="absolute bottom-0 right-0"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div> */}
    </>
  );
};

export default Button;
