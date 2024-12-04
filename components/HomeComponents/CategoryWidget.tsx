"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchExploreByCategoriesProducts,
} from "../../redux/slices/homeSlice";
import type { AppDispatch } from "@/redux/store";
import { RootState } from "@/redux/store";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const colors = ["#FDF5DE", "#E0F7FA", "#FFEBEE", "#E8F5E9", "#FFF3E0"];

interface Category {
  id: string;
  name: string;
  image_fullpath: string;
  subcategories: any;
  // Add other properties if needed
}
const CategoryWidget = ({ category }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 833,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const slider = useRef<Slider>(null);
  const dispatch = useDispatch<AppDispatch>();
  const categoriesState = useSelector((state: RootState) => state.categories);

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  // Memoize categories to prevent unnecessary re-renders
  const memoizedCategories: Category[] = useMemo(() => {
    return categoriesState?.categories || [];
  }, [categoriesState]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-body mt-14 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-bold text-2xl md:text-3xl flex-1">
            {category?.[0]?.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-black">
              <span className="text-primary">Categories</span>
            </span>
          </h2>
          <Link className="text-xs text-primary hover:underline" href="/shop">
            (See All)
          </Link>
        </div>

        <div className="flex gap-2">
          <button
            className="bg-primary w-8 text-white h-8 flex justify-center items-center"
            onClick={() => {
              if (slider.current) {
                slider.current.slickPrev();
              }
            }}
          >
            <IoArrowBackSharp />
          </button>
          <button
            onClick={() => {
              if (slider.current) {
                slider.current.slickNext();
              }
            }}
            className="bg-primary w-8 text-white h-8 flex justify-center items-center"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>
      {categoriesState && (
        <Slider {...settings} arrows={false} ref={slider} className="mt-10">
          {memoizedCategories.map((category, index: any) => (
            <div
              key={category.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <CategoryCard
                key={category.id}
                text={""}
                title={category?.name}
                image={category?.image_fullpath}
                isHovered={hoveredIndex === index}
                slug={category?.name}
                bgColor={colors[index % colors.length]}
                width={50}
                height={50}
                categoryId={category?.id}
                subcategories={category?.subcategories}
              />
              {hoveredIndex === index && (
                <div className="absolute top-2 right-2">
                  {/* <FaArrowRight className="h-6 w-6 text-gray-700" /> */}
                </div>
              )}
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CategoryWidget;
