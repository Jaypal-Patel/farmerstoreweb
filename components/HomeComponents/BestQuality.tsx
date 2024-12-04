import Image from "next/image";
import React from "react";
import bestQuality from "../../images/bestQuality.png";
import Link from "next/link";

const BestQuality = () => {
  return (
    <div className="px-body flex justify-between items-center mt-8">
      <div className="flex flex-col">
        <h4 className="text-2xl md:text-3xl font-bold">
          Best Quality Healthy And
        </h4>
        <h4 className="text-2xl md:text-3xl text-primary font-bold">
          Fresh Grocery
        </h4>
        <p className="my-4 text-[#555] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eum?
        </p>

        <div className="flex flex-col gap-2">
          <p className="font-medium">1. Delivery at your doorsteps</p>
          <p className="font-medium">2. Track and manage orders</p>
          <p className="font-medium">3. Customer Support</p>
          <p className="font-medium">3. Best Prices</p>
        </div>
        <Link href="shop">
          <button className="w-fit mt-4 px-5 bg-primary rounded-lg py-2 text-white font-medium">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="h-full hidden sm:flex items-center ">
        <div>
          <Image alt="alt" src={bestQuality}></Image>
        </div>
      </div>
    </div>
  );
};

export default BestQuality;
