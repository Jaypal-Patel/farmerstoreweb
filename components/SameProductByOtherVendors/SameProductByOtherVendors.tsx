// "use client";

// import ProductCard from "@/components/ProductCard/ProductCard";
// // import { fetchSingleProduct } from "@/utils/databaseService";
// import { useQuery } from "@tanstack/react-query";
// import React, { useRef, useState,useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useMediaQuery } from "@mui/material";
// import apple from "../../images/apple.png";
// import berries from "../../images/berries.png";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import { calculateDiscountedPrice } from "@/utils/calculateDiscount";

// interface SimilarProducts {
//   title: string;
//   details:any
// }
// interface SameProductByOtherVendorsProps {
//   title: string;
//   details: any;
// }

// const SameProductByOtherVendors: React.FC<SameProductByOtherVendorsProps> = ({ title,details }) => {
//   const [deets,setDeets]=useState([])
//   useEffect(()=>{
//     setDeets(details?.productDetails?.related_products)
//     console.log(details?.productDetails,"111")
//     },[])

//   const slider = useRef<any>(null);
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1242,
//         settings: {
//           slidesToShow: 4.4,
//           slidesToScroll: 4,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 1515,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 5,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3.5,
//           slidesToScroll: 5,
//           infinite: true,
//           dots: false,
//         },
//       },

//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2.3,
//           slidesToScroll: 2,
//           initialSlide: 1,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1.4,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//     ],
//   };

//   // if (!productInfo?.otherVendors || productInfo?.otherVendors?.length === 0 || productInfo?.otherVendors?.filter((prod: any) => prod?.slug !== slug)?.length===0) {
//   //   return <></>;
//   // }

//   return (
//     <div className="px-body mt-4 sm:mt-8 md:mt-12 mb-12 sm:mb-24 md:mb-40">
//       <div className="flex justify-between items-center  gap-3 sm:gap-4 md:gap-5">
//         <h2 className="font-bold text-2xl md:text-3xl flex-1">{title}</h2>
//         <div className="flex gap-1 md:gap-2">
//           <button
//             className="bg-[#4B2C10] text-white w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex justify-center items-center"
//             onClick={() => {
//               if (slider) {
//                 slider.current?.slickPrev();
//               }
//             }}
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             onClick={() => {
//               if (slider) {
//                 slider.current?.slickNext();
//               }
//             }}
//             className="bg-[#4B2C10] text-white w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex justify-center items-center"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//       <Slider
//         {...settings}
//         arrows={false}
//         ref={slider}
//         className="mt-6 sm:mt-8 md:mt-10 "
//       >
//         {
//           deets?.map((newArrivalProduct:any)=>{
//             return(
//               <div className="px-1 md:px-2">
//               <ProductCard
//               id={newArrivalProduct?.id}
//                 category="Fruits"
//                 discount={newArrivalProduct?.discount}
//                 discountType={newArrivalProduct?.discount_type}
//                 discountedPrice={calculateDiscountedPrice(newArrivalProduct?.price,newArrivalProduct?.discount,
//                   newArrivalProduct?.discount_type)}
//                 image={newArrivalProduct?.image_fullpath?.[0]}
//                 name={newArrivalProduct?.name}
//                 price={newArrivalProduct?.price}
//                 weight={newArrivalProduct?.min_order_qty + " "+ newArrivalProduct?.unit}
//                 item={newArrivalProduct}

//               />
//             </div>
//             )
//           })
//         }

//       </Slider>
//     </div>
//   );
// };

// export default SameProductByOtherVendors;

// //// tarun sir ka code

"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
// import { fetchSingleProduct } from "@/utils/databaseService";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import apple from "../../images/apple.png";
import berries from "../../images/berries.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { calculateDiscountedPrice } from "@/utils/calculateDiscount";

interface SimilarProducts {
  title: string;
  details: any;
}
interface SameProductByOtherVendorsProps {
  title: string;
  details: any;
  deets?: any;
}

const SameProductByOtherVendors: React.FC<SameProductByOtherVendorsProps> = ({
  title,
  details,
  deets,
}) => {

  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 4.4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.4,
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
    <div className="px-body mt-4 sm:mt-8 md:mt-12 mb-12 sm:mb-24 md:mb-40">
      <div className="flex justify-between items-center  gap-3 sm:gap-4 md:gap-5">
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
        {deets?.map((newArrivalProduct: any) => {
          return (
            <div className="px-1 md:px-2">
              <ProductCard
                id={newArrivalProduct?.id}
                category="Fruits"
                discount={newArrivalProduct?.discount}
                discountType={newArrivalProduct?.discount_type}
                discountedPrice={calculateDiscountedPrice(
                  newArrivalProduct?.price,
                  newArrivalProduct?.discount,
                  newArrivalProduct?.discount_type
                )}
                image={newArrivalProduct?.image_fullpath?.[0]}
                name={newArrivalProduct?.name}
                price={newArrivalProduct?.price}
                weight={
                  newArrivalProduct?.min_order_qty +
                  " " +
                  newArrivalProduct?.unit
                }
                item={newArrivalProduct}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SameProductByOtherVendors;
