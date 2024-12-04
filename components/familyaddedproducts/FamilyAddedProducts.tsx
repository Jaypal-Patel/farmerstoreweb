"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
// import { fetchSingleProduct } from "@/utils/databaseService";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import apple from "../../images/apple.png";
import berries from "../../images/berries.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

interface FamilyAddedProducts {
  title: string;
}

const FamilyAddedProducts: React.FC<FamilyAddedProducts> = ({ title }) => {
  // const { data: productInfo }: any = useQuery({
  //   queryKey: ["product", slug],
  //   queryFn: () => fetchSingleProduct({ slug }),
  // });

  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  // if (!productInfo?.otherVendors || productInfo?.otherVendors?.length === 0 || productInfo?.otherVendors?.filter((prod: any) => prod?.slug !== slug)?.length===0) {
  //   return <></>;
  // }

  return (
    <div className="px-body mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-4 md:mb-6">
      <div className="flex justify-between items-center gap-3 sm:gap-4 md:gap-5">
        <h2 className="font-bold text-2xl md:text-3xl flex-1">{title}</h2>
        <div className="flex gap-1 md:gap-2">
          <button
            className="bg-[#4B2C10] text-white w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex justify-center items-center"
            onClick={() => {
              if (slider) {
                slider.current?.slickPrev();
              }
            }}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => {
              if (slider) {
                slider.current?.slickNext();
              }
            }}
            className="bg-[#4B2C10] text-white w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex justify-center items-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Slider
        {...settings}
        arrows={false}
        ref={slider}
        className="mt-6 sm:mt-8 md:mt-10 "
      >
        <div className="px-1 md:px-2">
          <ProductCard
            category="Fruits"
            discountedPrice={99}
            image={apple}
            name="Red Apples"
            price={199}
            weight="500 gms"
            id={1}
            discount={10} // Provide a valid discount value
            discountType="Percentage" // Provide a valid discount type
            item="Apple item" // Provide a valid item description
          />
        </div>
        <div className="px-1 md:px-2">
          <ProductCard
            category="Fruits"
            discountedPrice={69}
            image={berries}
            name="Blue Berries"
            price={99}
            weight="1 Box"
            id={1}
            discount={10} // Provide a valid discount value
            discountType="Percentage" // Provide a valid discount type
            item="Apple item" // Provide a valid item description
          />
        </div>

        <div className="px-1 md:px-2">
          {" "}
          <ProductCard
            category="Vegetables"
            discountedPrice={90}
            image={apple}
            name="Capsicum"
            price={180}
            weight="250 gms"
            id={1}
            discount={10} // Provide a valid discount value
            discountType="Percentage" // Provide a valid discount type
            item="Apple item" // Provide a valid item description
          />
        </div>

        <div className="px-1 md:px-2">
          <ProductCard
            category="Vegetable"
            discountedPrice={60}
            image={berries}
            name="Onions"
            price={25}
            weight="500 gms"
            id={1}
            discount={10} // Provide a valid discount value
            discountType="Percentage" // Provide a valid discount type
            item="Apple item" // Provide a valid item description
          />
        </div>

        <div className="px-1 md:px-2">
          {" "}
          <ProductCard
            category="Fruits"
            discountedPrice={99}
            image={apple}
            name="Red Apples"
            price={199}
            weight="500 gms"
            id={1}
            discount={10} // Provide a valid discount value
            discountType="Percentage" // Provide a valid discount type
            item="Apple item" // Provide a valid item description
          />
        </div>

        <div className="px-1 md:px-2">
          <ProductCard
            category="Vegetables"
            discountedPrice={120}
            image={berries}
            name="Potato"
            price={60}
            weight="300 gms"
            id={1}
            discount={10} // Provide a valid discount value
            discountType="Percentage" // Provide a valid discount type
            item="Apple item" // Provide a valid item description
          />
        </div>

        <div className="px-1 md:px-2">
          <ProductCard
            category="Fruits"
            discountedPrice={99}
            image={apple}
            name="Red Apples"
            price={199}
            weight="500 gms"
            id={1}
            discount={10} // Provide a valid discount value
            discountType="Percentage" // Provide a valid discount type
            item="Apple item" // Provide a valid item description
          />
        </div>
      </Slider>
    </div>
  );
};

export default FamilyAddedProducts;
