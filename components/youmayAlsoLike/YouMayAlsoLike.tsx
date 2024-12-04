"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
// import { fetchSingleProduct } from "@/utils/databaseService";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import apple from "../../images/apple.png";
import berries from "../../images/berries.png";
import ProductCard2 from "../ProductCard/ProductCard2";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const YouMayAlsoLike = ({ slug }: any) => {
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
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1242,
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
          slidesToShow: 1,
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
    <div className="px-body mt-8 sm:mt-16 md:mt-24 mb-16 sm:mb-28 md:mb-40">
      <div className="flex justify-between items-center">
        <h2 className="font-bold  text-xl sm:text-2xl md:text-3xl flex-1">
          You may also like
        </h2>
        <div className="flex gap-2 sm:gap-3.5 md:gap-5">
          <button
            className="bg-[#4B2C10] w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white  flex justify-center items-center"
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
            className="bg-[#4B2C10] w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white flex justify-center items-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Slider {...settings} arrows={false} ref={slider} className="mt-10">
        <ProductCard2
          category="Fruits"
          discountedPrice={90}
          image={apple}
          name="Red Apples"
          price={180}
          weight="500 gms"
        />
        <ProductCard2
          category="Fruits"
          discountedPrice={69}
          image={berries}
          name="Blue Berries"
          price={99}
          weight="1 Box"
        />
        <ProductCard2
          category="Vegetables"
          discountedPrice={90}
          image={apple}
          name="Capsicum"
          price={180}
          weight="250 gms"
        />
        <ProductCard2
          category="Vegetable"
          discountedPrice={60}
          image={berries}
          name="Onions"
          price={25}
          weight="500 gms"
        />
        <ProductCard2
          category="Fruits"
          discountedPrice={99}
          image={apple}
          name="Red Apples"
          price={199}
          weight="500 gms"
        />
        <ProductCard2
          category="Vegetables"
          discountedPrice={120}
          image={berries}
          name="Potato"
          price={60}
          weight="300 gms"
        />
        <ProductCard2
          category="Fruits"
          discountedPrice={99}
          image={apple}
          name="Red Apples"
          price={199}
          weight="500 gms"
        />
      </Slider>
    </div>
  );
};

export default YouMayAlsoLike;
