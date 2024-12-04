import Image from "next/image";
import React from "react";
import productImg from "../../images/image 1661.svg";

const AboutUs = () => {
  return (
    <div>
      <div className="px-body lg:px-[5%] flex items-center md:gap-10 gap-5 ">
        <div className={`sm:w-[50%] w-[100%] flex flex-col md:gap-6 gap-3`}>
          <h2 className={`md:text-3xl text-2xl font-bold`}>
            <span className={`text-primary`}>About</span> <span>Us</span>
          </h2>
          <p className={`text-[#727272] font-medium sm:text-lg text-sm`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, con dipiscing elit, sed do
          </p>
        </div>
        <div className={`sm:block hidden w-[50%] h-[350px] `}>
          <Image
            src={productImg}
            alt="productImg"
            className={` h-[100%] w-[100%] object-contain`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
