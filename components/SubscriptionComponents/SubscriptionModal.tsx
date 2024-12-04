"use client";
import React, { FC } from "react";
import OutsideClickHandler from "../../utils/OutsideClickHandler";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import berries from "../../images/berries.png";
interface Props {
  // setIsSuccess:Boolean,
  setShowModal: any;
}
const SubscriptionModal: React.FC<Props> = ({ setShowModal }) => {
  return (
    <div>
      <div className="  h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-30 flex justify-center items-center">
        <div className="xl:w-[60%]  lg:w-[60%] md:w-[50%] sm:w-[70%] w-[90%] h-auto    flex flex-col justify-end gap-y-3  z-30 ">
          <OutsideClickHandler
            onClick={() => {
              setShowModal(false);
            }}
          >
            <div className="flex  w-full h-auto rounded-xl  bg-white  sm:px-10 px-5 sm:py-8 py-4 relative z-30">
              <div
                className=" absolute w-[50px] h-[50px]  rounded-full right-0 top-0  flex justify-center items-center   "
                onClick={() => {
                  setShowModal((prev: any) => !prev);
                }}
              >
                <button className="  rounded-full flex justify-center items-center">
                  <IoClose className={`sm:text-3xl text-2xl font-bold`} />
                </button>
              </div>
              <div className="flex flex-col sm:gap-10 gap-7 items-center  w-full">
                <div className={`flex flex-col  items-center`}>
                  <div>
                    <Image src={berries} alt={`berries`} />
                  </div>
                  <div className={`flex flex-col sm:gap-2 gap-1 items-center`}>
                    <h3 className={"sm:text-xl text-lg font-semibold"}>
                      Congratulations!
                    </h3>
                    <p className={"sm:text-base text-sm font-medium"}>
                      You have subscribed to daily plan.
                    </p>
                  </div>
                </div>
                <button
                  className={`bg-primary font-semibold text-white w-full py-3 rounded-md sm:text-lg text-sm`}
                  onClick={() => {
                    setShowModal((prev: any) => !prev);
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
