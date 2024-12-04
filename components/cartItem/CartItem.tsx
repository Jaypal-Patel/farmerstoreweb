"use client";
import React, { useEffect } from "react";
import {
  FaAngleRight,
  FaRegFaceSmile,
  FaRegFaceSmileBeam,
  FaRegFaceSmileWink,
} from "react-icons/fa6";

import { FaArrowRight } from "react-icons/fa6";
import DelevieryDate from "../../images/1.svg";
import DelevieryDate2 from "../../images/2.svg";

import Image from "next/image";

import FamilyAddedProducts from "../familyaddedproducts/FamilyAddedProducts";
import Coupon from "../couponcomponent/Coupon";
import OrderSummary from "../orderSummary/OrderSummary";
import { useState } from "react";
import AddCoupons from "../addcoupons/AddCoupons";
import { toast } from "react-toastify";
import { calculateDiscountedPrice } from "@/utils/calculateDiscount";
import { MdDelete } from "react-icons/md";
interface CartItem {
  id: string;
  quantity: number;
  deliveryDate: string;
  deliveryDateText: string;
  image_fullpath: string;
  discount_type: string;
  name: string;
  unit: string;
  price: string;
  discount: any;
  total_stock: number;
  variation: any;
  // Add other properties as needed
}

const CartItem = () => {
  const [showCoupons, setShowCoupons] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartItemsString = localStorage.getItem("cart") || "[]";
      try {
        const cartItems: CartItem[] = JSON.parse(cartItemsString);
        setCart(cartItems);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
        setCart([]);
      }
    }
  }, []);

  const handleQuantityChange = (index: number, amount: number) => {
    const newCart: CartItem[] = [...cart];
    const newQuantity = Math.max(1, newCart[index].quantity + amount);
    const totalStock = newCart[index].total_stock;
    if (newQuantity <= totalStock) {
      newCart[index].quantity = newQuantity;
      setCart(newCart);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
    } else {
      toast.success("stock full");
    }
  };

  const handleRemoveItem = (index: number) => {
    const newCart = [...cart];
    const removedItem = newCart.splice(index, 1)[0];
    setCart(newCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    toast.success(`${removedItem.name} removed from cart`);
  };

  const currentStep = 1;

  return (
    <div className="px-body mt-28 sm:mt-44 md:mt-60">
      <div className="flex flex-col md:flex-row justify-center gap-8 sm:gap-12 md:gap-16">
        <div className="w-full md:w-[65%] flex flex-col gap-4 sm:gap-6 md:gap-8">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-neutral-950">
            Cart ({cart.length} item{cart.length !== 1 && "s"})
          </h2>

          {cart.length === 0 ? (
            <div className="flex justify-center items-center mt-4">
              <p className="text-gray-500">Your cart is empty!</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="w-full relative">
                  <Image
                    alt="DelevieryDate"
                    src={
                      item.deliveryDate === "DelevieryDate2"
                        ? DelevieryDate2
                        : DelevieryDate
                    }
                    height={1000}
                    width={1000}
                    className="w-full h-full object-fill"
                  />
                  <h2 className="text-white text-xs sm:text-sm md:text-base font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                    {item.deliveryDateText}
                  </h2>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-3 justify-between items-start md:items-center px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-white rounded-b-[15px] border border-stone-300">
                  <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3.5 md:gap-5">
                    <div className="w-full h-40 sm:h-44 aspect-[2/1] md:w-[35%] md:aspect-square relative">
                      <Image
                        alt="ProductImage"
                        src={item?.image_fullpath?.[0]}
                        height={200}
                        width={200}
                        className="w-[200px] h-[150px] object-contain"
                      />
                      {item?.discount > 0 && (
                        <div className="absolute top-3 left-3 flex justify-between items-center">
                          <div className="bg-[#E9F6F0] px-1 sm:px-2 md:px-3 rounded-lg text-green-500 text-base sm:text-lg md:text-xl py-0.5 sm:py-1 md:py-1.5 font-semibold">
                            {item.discount}
                            {item.discount_type === "percent"
                              ? "%"
                              : item.discount_type}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">
                          {item.name}
                        </h2>
                        <p className="font-semibold text-base sm:text-lg md:text-xl">
                          varient :{" "}
                          {item?.variation.map((variation: any) => (
                            <span>
                              {variation.type / 1000} {item.unit}
                              {/* - Rs.{" "} */}
                              {/* {variation.price} */}
                            </span>
                          ))}{" "}
                        </p>
                        <p className="font-semibold text-base sm:text-lg md:text-xl">
                          Qty :{item.quantity}
                          {/* {item.unit} */}
                        </p>
                      </div>
                      {/* <div className="flex gap-8 sm:gap-12 md:gap-16 items-center">
                        <div className="text-lg sm:text-xl md:text-2xl text-center text-black font-bold">
                          Rs{" "}
                          {calculateDiscountedPrice(
                            item?.price,
                            item?.discount,
                            item?.discount_type
                          )}
                        </div>

                        <div className="text-base sm:text-lg md:text-xl line-through font-medium text-center text-[#FF402F]">
                          Rs. {item.price}
                        </div>
                      </div> */}
                      <div className="flex gap-8 sm:gap-12 md:gap-16 items-center">
                        <div className="text-lg sm:text-xl md:text-2xl text-center text-black font-bold">
                          Rs{" "}
                          {item?.discount > 0
                            ? calculateDiscountedPrice(
                                item.price,
                                item.discount,
                                item.discount_type
                              )
                            : item?.price}
                        </div>

                        {item?.discount > 0 && (
                          <div className="text-base sm:text-lg md:text-xl line-through font-medium text-center text-[#FF402F]">
                            Rs. {item.price}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex bg-white rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] mr-2 sm:mr-4 md:mr-6 w-fit">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="px-1 md:px-2 flex-[0.4] flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium cursor-pointer select-none text-[#555555]"
                    >
                      -
                    </button>

                    <div className="flex-1 px-2 sm:px-3 md:px-4 lg:px-5 flex justify-center items-center text-xs sm:text-sm md:text-base">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                        {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="px-1 md:px-2 flex-[0.4] flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium cursor-pointer select-none text-[#555555]"
                    >
                      +
                    </button>
                  </div>
                  <MdDelete
                    className="md:h-[26px] md:w-[26px] bg-[white]"
                    onClick={() => handleRemoveItem(index)}
                    title="Remove Item"
                  />
                </div>
              </div>
            ))
          )}

          <FamilyAddedProducts title="Products Added by Family Members" />

          {/* <div className="flex-col justify-between items-center bg-green-50 rounded-[15px] border border-green-500">
            <div className="flex flex-col px-2 sm:px-4 md:px-6 pt-1 sm:pt-2 md:pt-3 pb-4 sm:pb-6 md:pb-8 gap-1 md:gap-2 rounded-t-[15px]">
              <div className="flex flex-col gap-0.5 md:gap-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">
                  Try <span className="text-green-500">FarmerOne </span>
                </h2>
                <p className="text-black font-semibold text-[10px] sm:text-xs md:text-sm">
                  Get extra discount on 500+ products & unlimited free delivery
                  on orders above Rs 199
                </p>
              </div>
            </div>
            <div className="flex justify-between bg-green-500 rounded-b-xl px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 cursor-pointer">
              <button className="text-white text-xs sm:text-sm md:text-base font-medium">
                Buy Now @ Rs 199 for 3 Months
              </button>
              <FaArrowRight className="md:h-[22px] lg:h-[26px] md:w-[22px] lg:w-[26px] text-white" />
            </div>
          </div> */}
        </div>

        <div
          className={`flex flex-col gap-4 sm:gap-6 md:gap-8 md:w-[32%] ${
            !showCoupons ? "mt-[1.5rem] sm:mt-[3rem] md:mt-[4.5rem]" : ""
          }`}
        >
          {!showCoupons && (
            <>
              <Coupon
                showCoupons={showCoupons}
                setShowCoupons={setShowCoupons}
              />

              {/* <OrderSummary /> */}
              <OrderSummary currentStep={String(currentStep)} />

              <div className="flex flex-col p-4 sm:p-6 md:p-8 justify-between gap-4 sm:gap-6 md:gap-8 bg-opacity-40 bg-orange-100 rounded-[10px] border border-yellow-950">
                <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
                  <h2 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">
                    Delivery Partner Tip
                  </h2>
                  <p className="text-neutral-600 font-semibold text-xs md:text-sm">
                    Your Kindness means a lot! 100% of your tip will go directly
                    to your delivery partner.
                  </p>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="flex flex-col px-3 sm:px-5 md:px-6 py-2 bg-white border rounded-lg cursor-pointer items-center gap-2">
                    <FaRegFaceSmile className="text-yellow-400 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                    <p className="text-neutral-600 font-semibold text-xs sm:text-sm md:text-base">
                      Rs. 5
                    </p>
                  </div>
                  <div className="flex flex-col px-3 sm:px-5 md:px-6 py-2 bg-white border rounded-lg cursor-pointer items-center gap-2">
                    <FaRegFaceSmileBeam className="text-yellow-400 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                    <p className="text-neutral-600 font-semibold text-xs sm:text-sm md:text-base">
                      Rs. 10
                    </p>
                  </div>
                  <div className="flex flex-col px-3 sm:px-5 md:px-6 py-2 bg-white border rounded-lg cursor-pointer items-center gap-2">
                    <FaRegFaceSmileWink className="text-yellow-400 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                    <p className="text-neutral-600 font-semibold text-xs sm:text-sm md:text-base">
                      Rs. 15
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {showCoupons && (
            <AddCoupons
              showCoupons={showCoupons}
              setShowCoupons={setShowCoupons}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
