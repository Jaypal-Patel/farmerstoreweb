"use client";

import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { fetchFlashSales } from "@/redux/slices/flashSaleSlice";
import type { AppDispatch, RootState } from "@/redux/store";

import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number; 
  discount: number;
  discount_type: string;
  image_fullpath: string[];
  unit: string;
  description?: string; 
}

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { flashSales, loading, error } = useSelector(
    (state: any) => state.flashsale
  );
  const slider = useRef<Slider | null>(null);
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [loading1, setLoading1] = useState(true);
  const [flashSale, setFlashSale] = useState(null);

  useEffect(() => {
    const fetchFlashSaleData = async () => {
      try {
        const response = await axios.get(
          "https://farmer.handpumpking.in/api/v1/flash-sale"
        );
        setFlashSale(response.data.flash_sale);
        startCountdown(
          response.data.flash_sale.start_date,
          response.data.flash_sale.end_date
        );
      } catch (error) {
        console.error("Error fetching flash sale data:", error);
      } finally {
        setLoading1(false);
      }
    };

    const startCountdown = (startDate: string, endDate: string) => {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        let remaining;

        if (now < start) {
          remaining = start - now; // Time until the flash sale starts
        } else if (now < end) {
          remaining = end - now; // Time until the flash sale ends
        } else {
          clearInterval(interval);
          setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        // Calculate remaining time
        const hours = Math.floor(
          (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        setTimeRemaining({ hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
    };

    fetchFlashSaleData();
    dispatch(fetchFlashSales());
  }, [dispatch]);

  // Loading and error handling
  if (loading || loading1) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!flashSale) return <div>No Flash Sale data available.</div>;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:pt-[100px] px-body bg-gradient-to-b from-white to-blue-100">
      <div className="mx-auto grid md:grid-cols-[25%_auto] h-[80vh] md:h-[50vh] py-0">
        <div className="bg-[#2C8D68] text-white rounded-r-2xl flex flex-col justify-center gap-0 md:gap-16 items-center h-[30vh] md:h-full p-8 border-l-20 border-r-4 border-white">
          <h2 className="text-3xl font-bold text-center">Deal of The Day</h2>
          <div className="flex justify-center items-center space-x-4">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-white text-black text-2xl font-bold px-4 py-2 rounded-md">
                {timeRemaining.hours < 10
                  ? `0${timeRemaining.hours}`
                  : timeRemaining.hours}
              </div>
              <span className="text-sm mt-2">Hours</span>
            </div>

            {/* Divider */}
            <div className="text-2xl font-bold ">:</div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-white text-black text-2xl font-bold px-4 py-2 rounded-md">
                {timeRemaining.minutes < 10
                  ? `0${timeRemaining.minutes}`
                  : timeRemaining.minutes}
              </div>
              <span className="text-sm mt-2">Minutes</span>
            </div>

            {/* Divider */}
            <div className="text-2xl font-bold">:</div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-white text-black text-2xl font-bold px-4 py-2 rounded-md">
                {timeRemaining.seconds < 10
                  ? `0${timeRemaining.seconds}`
                  : timeRemaining.seconds}
              </div>
              <span className="text-sm mt-2">Seconds</span>
            </div>
          </div>
        </div>

        <div className="grid relative">
          <div className="absolute bottom-8 grid grid-cols-1 gap-4 md:gap-20 w-full md:pl-4">
            <div className="flex gap-2 justify-end">
              <button
                className="bg-primary w-8 text-white h-8 flex justify-center items-center"
                onClick={() => slider.current?.slickPrev()}
              >
                <IoArrowBackSharp />
              </button>
              <button
                onClick={() => slider.current?.slickNext()}
                className="bg-primary w-8 text-white h-8 flex justify-center items-center"
              >
                <IoArrowForward />
              </button>
            </div>

            <Slider {...settings} arrows={false} ref={slider}>
              {flashSales.map((product: Product) => (
                <div className="px-1 md:px-2" key={product.id}>
                  <ProductCard
                    category="Fruits"
                    discountedPrice={product.discountedPrice || product.price}
                    image={product.image_fullpath[0]}
                    name={product.name}
                    price={product.price}
                    weight={product.unit}
                    id={product.id}
                    discount={product.discount}
                    discountType={product.discount_type}
                    item={product.description}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
