"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cardImg from "../../images/cardpay.svg";
import Link from "next/link";
interface Address {
  contact_person_name?: string;
  address?: string;
  contact_person_number?: string;
  // Add other properties as needed
}
const ReviewTab = () => {
  const [isClient, setIsClient] = useState(false);
  const [address, setAddress] = useState<Address>();
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  // useEffect(() => {
  //   setIsClient(true);
  //   const addressString = localStorage.getItem("selectedAddress") || "{}";
  //   const address: Address = JSON.parse(addressString);
  //   setAddress(address);

  //   setAddress(address);
  //   const method = localStorage.getItem("paymentMethod") || "";
  //   setPaymentMethod(method);
  // }, []);

  useEffect(() => {
    // Set client state
    setIsClient(true);

    // Only access localStorage on the client
    if (typeof window !== "undefined") {
      const addressString = localStorage.getItem("selectedAddress") || "{}";
      const address: Address = JSON.parse(addressString) || null; // Use null if parsing fails
      setAddress(address);

      const method = localStorage.getItem("paymentMethod") || "";
      setPaymentMethod(method);
    }
  }, []);
  const paymentSummary = {};
  const selectedPaymentMethod = "cod";

  return (
    <div className="flex flex-col mt-2 sm:mt-3 md:mt-4 w-full   gap-4 sm:gap-6 md:gap-8">
      <h6 className="font-medium md:text-lg sm:text-base text-sm text-black ">
        Please review your order details.
      </h6>

      <div className="w-full flex flex-col md:gap-5 sm:gap-4 gap-3">
        <div className="bg-white rounded-[15px] border border-neutral-200 mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-3 md:gap-4 flex flex-col md:flex-row justify-between items-start px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6  ">
          <div className="flex-1 flex flex-col md:gap-2 sm:gap-1.5 gap-1 ">
            <p className=" text-black md:text-lg sm:text-base text-sm font-bold ">
              Address Details
            </p>
            <div className="flex flex-col md:gap-2 sm:gap-1.5 gap-1">
              <p className="text-black md:text-sm sm:text-xs text-[10px] font-semibold">
                {/* {isClient && props.userData?.defaultAddress?.name}{" "}
                    {isClient && props.userData?.defaultAddress?.lastName} */}
                {address?.contact_person_name}
              </p>
              <p className="text-black md:text-sm sm:text-xs text-[10px] font-semibold">
                {/* {isClient && props.userData?.defaultAddress?.address} */}
                {address?.address}
              </p>
              <p className="text-black md:text-sm sm:text-xs text-[10px] font-semibold">
                {/* {isClient && props.userData?.defaultAddress?.phoneNo} */}
                {address?.contact_person_number}
              </p>
            </div>
          </div>
          {/* <div className="bg-primary  border-2 border-primary  text-white py-1 sm:py-2 md:py-3 px-5 sm:px-7 md:px-9 rounded-[10px] hover:bg-white hover:text-black cursor-pointer  ">
            <p className=" md:text-sm sm:text-xs text-[10px] font-semibold">
              <Link href="">
              Change/ Add Address
              </Link>
            </p>
          </div> */}
        </div>

        <div className="bg-white rounded-[15px] border border-neutral-200 mt-2 sm:mt-3 md:mt-4  px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6  ">
          <div className="flex-1 flex flex-col md:gap-2 sm:gap-1.5 gap-1 ">
            <p className=" text-black md:text-lg sm:text-base text-sm font-bold ">
              Payment Method
            </p>
            {paymentMethod}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTab;
