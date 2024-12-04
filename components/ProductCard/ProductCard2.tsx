import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

interface ProductProps {
  image: any;
  category: string;
  name: string;
  weight: string;
  price: any;
  discountedPrice: any;
}

const ProductCard2: React.FC<ProductProps> = ({
  category,
  discountedPrice,
  image,
  name,
  price,
  weight,
}) => {
  return (
    <div className="mx-2 sm:mx-3 md:mx-4 bg-white rounded-[15px] border border-neutral-200 flex flex-col gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4  py-1 sm:py-2 md:py-3 relative">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ">
        <div className="w-[30%] ">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          ></Image>
        </div>

        <div className="flex-col flex gap-0.5 md:gap-1 ">
          <h6 className="text-xs sm:text-sm md:text-base font-semibold ">
            {name}
          </h6>
          <p className="text-xs md:text-sm text-[#727272]">{weight}</p>

          <div className="flex-1 flex gap-3 sm:gap-5 md:gap-7 mt-1 md:mt-2 items-center">
            <p className="text-sm sm:text-base md:text-lg text-black font-bold">
              Rs. {discountedPrice}
            </p>
            <p className="line-through text-xs md:text-sm text-red-600 font-medium">
              Rs. {price}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          toast.success("Item added to cart");
        }}
        className="w-full   py-1 sm:py-2 md:py-3  flex justify-center items-center bg-green-500 rounded-[10px] text-white font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard2;
