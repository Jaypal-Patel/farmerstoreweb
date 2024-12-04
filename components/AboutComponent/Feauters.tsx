import Image from "next/image";
import React from "react";
import image from "../../images/wepik-export-20231226080423Rhri 1.svg";
import brownImg from "../../images/Group (1).svg";
import brownImg1 from "../../images/main.svg";
import brownImg2 from "../../images/Group.svg";
import brownImg4 from "../../images/Group 37242.svg";

const Feauters = () => {
  return (
    <div>
      <div
        className={`px-body md:mt-20 mt-10 flex md:flex-row flex-col items-center xl:gap-x-14 gap-x-6 md:gap-y-10 gap-y-5`}
      >
        <div className={`lg:w-1/3 md:w-1/2   flex flex-col md:gap-10 gap-5`}>
          <div className={`flex flex-col gap-5  `}>
            <div
              className={`flex  gap-4 md:gap-6  md:justify-end justify-center  items-center `}
            >
              <h1 className={`md:text-2xl text-xl font-bold`}>
                Customer Support
              </h1>
              <div
                className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] bg-[#EDEAE7] flex items-center justify-center rounded-md`}
              >
                <Image
                  src={brownImg4}
                  alt=""
                  className={`md:h-[50px] md:w-[50px] h-[30px] w-[30px]`}
                />
              </div>
            </div>
            <div className={` flex md:justify-end justify-center`}>
              <p
                className={`text-[#727272] text-small font-medium md:text-end text-center md:w-[80%] w-[100%] `}
              >
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur t consectetur Lorem ipsum dolor sit amet
                consectetur{" "}
              </p>
            </div>
          </div>
          <div className={`flex flex-col gap-5 `}>
            <div
              className={`flex  gap-4 md:gap-6  md:justify-end justify-center items-center `}
            >
              <h1 className={`md:text-2xl text-xl font-bold`}>Best Prices</h1>
              <div
                className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] bg-[#EDEAE7] flex items-center justify-center rounded-md`}
              >
                <Image
                  src={brownImg}
                  alt=""
                  className={`md:h-[50px] md:w-[50px] h-[30px] w-[30px]`}
                />
              </div>
            </div>
            <div className={` flex md:justify-end justify-center`}>
              <p
                className={`text-[#727272] text-small font-medium md:text-end text-center md:w-[80%] w-[100%] `}
              >
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur t consectetur Lorem ipsum dolor sit amet
                consectetur{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={`w-1/3  lg:block hidden `}>
          <Image
            src={image}
            alt=""
            className={`w-[100%] h-[100%] object-contain`}
          />
        </div>
        <div className={`lg:w-1/3 md:w-1/2 flex flex-col md:gap-10 gap-5  `}>
          <div className={`flex flex-col gap-5`}>
            <div
              className={`flex md:justify-start justify-center md:flex-row flex-row-reverse items-center gap-4 md:gap-6`}
            >
              <div
                className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] bg-[#EDEAE7] flex items-center justify-center rounded-md`}
              >
                <Image
                  src={brownImg1}
                  alt=""
                  className={`md:h-[50px] md:w-[50px] h-[30px] w-[30px]`}
                />
              </div>

              <h1 className={`md:text-2xl text-xl font-bold`}>Fast Delivery</h1>
            </div>
            <div>
              <p
                className={`text-[#727272] text-small font-medium md:text-start text-center md:w-[80%] w-[100%]`}
              >
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur t consectetur Lorem ipsum dolor sit amet
                consectetur{" "}
              </p>
            </div>
          </div>
          <div className={`flex flex-col gap-5`}>
            <div
              className={`flex md:justify-start justify-center md:flex-row flex-row-reverse items-center gap-4 md:gap-6`}
            >
              <div
                className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] bg-[#EDEAE7] flex items-center justify-center rounded-md`}
              >
                <Image
                  src={brownImg2}
                  alt=""
                  className={`md:h-[50px] md:w-[50px] h-[30px] w-[30px]`}
                />
              </div>

              <h1 className={`md:text-2xl text-xl font-bold`}>
                Easy Payements
              </h1>
            </div>
            <div>
              <p
                className={`text-[#727272] text-small font-medium md:text-start text-center md:w-[80%] w-[100%]`}
              >
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur t consectetur Lorem ipsum dolor sit amet
                consectetur{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feauters;
