import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export interface CategoryCardProps {
  key: string;
  title: string;
  image: any;
  slug: string;
  bgColor: string;
  isHovered: boolean;
  text: string;
  width: number;
  height: number;
  categoryId: string;
  subcategories: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  key,
  title,
  image,
  slug,
  bgColor,
  isHovered,
  text,
  width,
  height,
  categoryId,
  subcategories,
}) => {
  // useEffect(() => {
  //   const setCategoryId = async () => {
  //     localStorage.setItem("categoryId", categoryId);
  //     localStorage.setItem("categoryName", title);
  //   };

  //   setCategoryId();
  // }, [categoryId]);

  useEffect(() => {
    const setCategoryId = async () => {
      if (typeof window !== "undefined") {
        localStorage.setItem("categoryId", categoryId);
        localStorage.setItem("categoryName", title);
      }
    };

    setCategoryId();
  }, [categoryId, title]); // Added title to dependencies if it's used in the effect

  return (
    <Link href={"shop/category/" + slug + `?${categoryId}`}>
    {/* <Link href={`shop/category/${categoryId}`}> */}

      <div className="h-auto mb-10">
        <div
          className="flex relative flex-col items-center justify-start gap-4 px-2 py-6 mx-4 hover:scale-105 cursor-pointer hover:ease-in-out transition-all"
          style={{ background: bgColor, height: "auto" }}
        >
          <div className="w-[40%] mx-auto ">
            <img
              src={image}
              alt={slug}
              style={{ width: "100%" }}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 items-center ">
            <h4 className="font-bold text-xlw-[70%] truncate">{title}</h4>
            {/* <p>Shop Now &gt;</p> */}
            <p
              className={`text-[13px] text-[#4B2C10] font-semibold text-center px-8`}
            >
              {subcategories.slice(0, 4).map((subcategory: any) => (
                <div key={subcategory.id}>{subcategory.name}</div>
              ))}{" "}
            </p>
          </div>

          <div
            className={` absolute transition-all ${
              !isHovered ? "scale-0" : "scale-100"
            } -bottom-5 left-0 right-0 mx-auto w-full flex justify-center z-10`}
          >
            <div className="bg-primary  rounded-full aspect-square w-10 h-10 flex justify-center items-center text-white">
              {/* &gt; */}
              <BsArrowRight className={`text-xl font-bold`} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
