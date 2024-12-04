"use client";

// import { fetchSingleProduct } from "@/utils/databaseService";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import discount from "../../images/Discount.svg";

interface CouponProps {
  showCoupons: boolean;
  setShowCoupons: React.Dispatch<React.SetStateAction<boolean>>;
}

const Coupon: React.FC<CouponProps> = ({ showCoupons, setShowCoupons }) => {
  const handleCouponClick = () => {
    setShowCoupons(!showCoupons);
  };

  return (
    <div
      className="flex justify-between items-center px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-white rounded-[15px] border border-stone-300 cursor-pointer gap-2 sm:gap-3 md:gap-4"
      onClick={handleCouponClick}
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-[90%] ">
        <div className="w-4 sm:w-8 md:w-12 aspect-square">
          <Image
            alt="discount"
            src={discount}
            height={1000}
            width={1000}
            className="rounded-full w-full h-full object-fill"
          />
        </div>
        <div className="flex flex-col gap-0.5  md:gap-1 ">
          <h2 className="text-black text-xs sm:text-sm md:text-base font-semibold">
            Avail Offers & Coupons
          </h2>
          <p className="text-neutral-400 text-[10px] sm:text-xs md:text-sm font-medium">
            Avail offers and coupons on your order
          </p>
        </div>
      </div>
      <div className="w-4 sm:w-5 md:w-6  aspect-square">
        <FaAngleRight className="h-full w-full" />
      </div>
    </div>
  );
};

export default Coupon;
