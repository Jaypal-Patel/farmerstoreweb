"use client";

import React, { useState } from "react";
import cashImg from "../../images/cashpay.svg";
import cardImg from "../../images/cardpay.svg";
import appleImg from "../../images/applepay.svg";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const paymentMethods = [
  {
    name: "Apple Pay",
    value: "applepay",
    img: appleImg,
  },

  {
    name: "Credit/ Debit Card",
    value: "card",
    img: cardImg,
  },
  {
    name: "Pay On Delivery",
    value: "cod",
    img: cashImg,
  },
];

const PaymentMethodTab = (
  {
    // selectedPaymentMethod,
    // setSelectedPaymentMethod,
    // setSelectedTab,
    // setCompletedSteps,
    // showCod,
  }
) => {
  const [selectionIndex, setSelectionIndex] = useState(-1);
  return (
    <div className="flex flex-col mt-2 sm:mt-3 md:mt-4 w-full   gap-4 sm:gap-6 md:gap-8">
      <h6 className="font-medium md:text-lg sm:text-base text-sm text-black ">
        Choose Payment Method
      </h6>

      <div
        className="flex justify-between items-center w-full  bg-green-50 rounded-[10px] py-6 sm:py-8 md:py-10 
     px-4 sm:px-6  md:px-8"
      >
        <p className=" text-xl sm:text-2xl md:text-3xl font-semibold text-center text-black">
          Wallet
        </p>

        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center justify-end  w-[65%] sm:w-[55%] md:w-[45%] lg:w-[35%] ">
          <div className="flex flex-col gap-0.5 md:gap-1">
            <p className="text-center text-black  text-xs sm:text-sm md:text-base font-semibold">
              Your Balance
            </p>
            <p className="text-center text-green-500  font-bold  text-base sm:text-xl md:text-2xl ">
              Rs 1,560
            </p>
          </div>

          <div className="w-4 sm:w-5 md:w-6  h-4 sm:h-5 md:h-6  aspect-square">
            <FaAngleRight className="h-full w-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 w-full">
        {paymentMethods.map((method, idx) => {
          return (
            <div
              style={{ opacity: method.name == "Pay On Delivery" ? 1 : 0.5 }}
              onClick={() => {
                if (method.name === "Pay On Delivery") {
                  setSelectionIndex(idx);
                  // localStorage.setItem("paymentMethod", method.name);
                  if (typeof window !== "undefined") {
                    localStorage.setItem("paymentMethod", method.name);
                  }
                }
              }}
              className="flex justify-between items-center px-4 sm:px-6  md:px-8 py-1 sm:py-1.5 md:py-2
              ${selectionIndex === idx ? 'bg-[#E9F6F0] border-primary' : 'bg-[#FFFFFF] border-neutral-200'}
              h-12 sm:h-16 md:h-20  rounded-[15px] border border-neutral-200  cursor-pointer w-full "
              key={idx}
            >
              <div className="flex gap-4 sm:gap-6 md:gap-8 items-center w-[70%]">
                <div className="aspect-square w-8 sm:w-12 md:w-16 ">
                  <Image
                    src={method.img}
                    alt=""
                    height={1000}
                    width={1000}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-black md:text-base sm:text-sm text-xs font-semibold">
                  {method.name}
                </p>
              </div>
              <div className="flex gap-2 sm:gap-3 md:gap-4 justify-end w-[10%]">
                {selectionIndex === idx && <p>✔️</p>}

                <div className="w-4 sm:w-5 md:w-6  h-4 sm:h-5 md:h-6 aspect-square">
                  <FaAngleRight className="h-full w-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethodTab;
