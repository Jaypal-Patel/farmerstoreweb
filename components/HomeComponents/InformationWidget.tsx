import Image from "next/image";
import React from "react";
import customerSupport from "../../images/customerSupport.svg";
import bestPrices from "../../images/bestPrices.svg";
import fastDelivery from "../../images/fastDelivery.svg";
import easyPayments from "../../images/easyPayments.svg";

const information = [
  {
    title: "Customer Support",
    img: customerSupport,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum  numquam repellendus labore",
  },
  {
    img: bestPrices,
    title: "Best Prices",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum  numquam repellendus labore",
  },
  {
    img: fastDelivery,
    title: "Fast Delivery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum  numquam repellendus labore",
  },
  {
    img: easyPayments,
    title: "Easy Payments",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum  numquam repellendus labore",
  },
];

const InformationWidget = () => {
  return (
    <div className="px-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-8">
      {information.map((info) => {
        return (
          <div key={info.title} className="flex gap-5 items-center ">
            <div className="bg-[#E9F6F0] rounded-lg  h-full  aspect-square flex items-center justify-center">
              <Image
                src={info.img}
                alt="icon"
                className="object-contain w-[50%]"
              ></Image>
            </div>
            <div className="flex flex-col h-full gap-2">
              <h3 className="font-semibold">{info.title}</h3>
              <p className="text-[14px] text-gray-400 font-medium line-clamp-2">
                {info.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InformationWidget;
