"use client";

import { useEffect, useState } from "react";

interface AddCouponsProps {
  showCoupons: boolean;
  setShowCoupons: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CouponItem {
  id: number;
  title: string;
  code: string;
  discount: number;
  discount_type: string;
}

const AddCoupons: React.FC<AddCouponsProps> = ({
  showCoupons,
  setShowCoupons,
}) => {
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponData, setCouponData] = useState<CouponItem[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState<CouponItem | null>(null);
  const [token, setToken] = useState<string | null>(null); // State for token

  useEffect(() => {
    // Access localStorage safely within useEffect
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      setToken(storedToken);

      // Load previously selected coupon from local storage
      const savedCoupon = localStorage.getItem("selectedCoupon");
      
      if (savedCoupon) {
        setSelectedCoupon(JSON.parse(savedCoupon));
      }
    }
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await fetch(
          "https://farmer.handpumpking.in/api/v1/coupon/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch coupons");
        }

        const data = await response.json();
        setCouponData(data);
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };

    if (token) {
      fetchCoupons();
    }
  }, [token]);

  const handleCouponClick = (coupon: CouponItem) => {
    setAppliedDiscount(coupon.discount);
    setSelectedCoupon(coupon); // Store the selected coupon
    setShowCoupons(false);
    localStorage.setItem("selectedCoupon", JSON.stringify(coupon)); // Save to local storage
  };

  const handleApplyCoupon = () => {
    const coupon = couponData.find((item) => item.code === couponCode);
    if (coupon) {
      handleCouponClick(coupon);
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <>
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-neutral-950">
        Coupons
      </h2>

      <div className="flex w-full p-2 rounded-[10px] border border-yellow-950">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="outline-none w-full border-none rounded-[10px] px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5 md:py-2 md:text-base sm:text-sm text-xs font-medium placeholder:text-gray-600 placeholder:font-medium"
          placeholder="Enter Coupon Code"
        />
        <div
          className="flex justify-between items-center rounded-md bg-[#39B54A] py-0.5 sm:py-1 md:py-2 px-4 sm:px-6 md:px-8 cursor-pointer"
          onClick={handleApplyCoupon}
        >
          <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
            Apply
          </p>
        </div>
      </div>

      {couponData.length > 0 ? (
        couponData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col p-2 sm:p-3 md:p-4 justify-between gap-2 sm:gap-3 md:gap-4 rounded-[10px] border border-yellow-950 ${
              selectedCoupon?.id === item.id ? "bg-green-100" : ""
            }`}
          >
            <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
              <h3 className="text-xs sm:text-sm md:text-base text-black font-semibold">
                {item.title}
              </h3>
              <p className="text-neutral-600 font-semibold text-xs md:text-sm">
                Minimum order value Rs. 1,299 or more.
              </p>
            </div>
            <hr />
            <div className="flex justify-between gap-2">
              <div className="flex justify-center items-center w-24 sm:w-28 md:w-32 lg:w-36 bg-green-50 rounded-md border border-dashed border-green-500">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#39B54A]">
                  {item.code}
                </p>
              </div>
              <div
                className="flex justify-center items-center rounded-md bg-[#39B54A] py-0.5 sm:py-1 md:py-2 px-4 sm:px-6 md:px-8 cursor-pointer"
                onClick={() => handleCouponClick(item)}
              >
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  Apply
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No coupons available.</p>
      )}
    </>
  );
};

export default AddCoupons;
