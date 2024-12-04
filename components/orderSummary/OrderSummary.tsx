"use client";

import { placeOrder } from "@/redux/slices/orderSlice";
import { calculateDiscountedPrice } from "@/utils/calculateDiscount";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { openLoginModal } from "@/redux/slices/loginModalSlice";

interface UserAddress {
  id: any;
  address_type: string;
  address: string;
}

interface OrderSuccess {
  message: string;
}

interface UserData {
  f_name: string;
  l_name: string;
}

interface OrderSummaryProps {
  currentStep: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ currentStep }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [summary, setSummary] = useState({
    price: 0,
    subtotal: 0,
    shippingFees: 20,
    discount: 0,
    taxes: 20,
    total: 0,
    loyaltyCashback: 20,
  });
  const orderState = useSelector((state: any) => state.orders);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loyalty, setLoyalty] = useState(0);
  const [userAddress, setUserAddress] = useState<UserAddress | null>(null);
  const [placeOrderData, setPlaceOrderData] = useState({
    order_amount: "",
    delivery_address_id: "",
    order_type: "delivery",
    branch_id: 1,
    coupon_discount_amount: 0,
    cart: [],
  });
  const [orderSuccess, setOrderSuccess] = useState<OrderSuccess | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const details = JSON.parse(localStorage.getItem("customerInfo") || "[]");
      const address = JSON.parse(
        localStorage.getItem("customerAddress") || "[]"
      );
      setUserData(details.id);
      setUserAddress(address);
    }
  }, []);

  const calculateSummary = () => {
    if (typeof window !== "undefined") {
      const cartString = localStorage.getItem("cart");
      const cart = cartString ? JSON.parse(cartString) : [];
      let price = 0;

      cart.forEach((item: any) => {
        price +=
          calculateDiscountedPrice(
            item.price,
            item.discount,
            item.discount_type
          ) * item.quantity;
      });

      const subtotal = price;
      const selectedCoupon = JSON.parse(
        localStorage.getItem("selectedCoupon") || "null"
      );

      const discount = selectedCoupon ? selectedCoupon.discount : 0;

      const total = subtotal + summary.shippingFees - discount + summary.taxes;

      setSummary({
        ...summary,
        price,
        subtotal,
        discount,
        total,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const selectedAddress = JSON.parse(
      //   localStorage.getItem("selectedAddress") || "null"
      // );

      calculateSummary();

      const handleStorageChange = (event: StorageEvent) => {
        if (
          event.key === "cart" ||
          event.key === "customerAddress" ||
          event.key === "selectedCoupon"
        ) {
          calculateSummary();
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  useEffect(() => {
    calculateSummary();
  }, []);

  const placingOrder = () => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const cartQuantityDeets = cart.map((product: any) => ({
        product_id: product.id,
        quantity: product.quantity,
        variation: product.variation || "",
        variant: "",
      }));

      const selectedAddress = JSON.parse(
        localStorage.getItem("selectedAddress") || "null"
      );

      const newPlaceOrderData = {
        order_amount: summary.total.toString(),
        delivery_address_id: selectedAddress?.id.toString() || null,
        order_type: "delivery",
        branch_id: 1,
        coupon_discount_amount: summary.discount,
        cart: cartQuantityDeets,
        distance: 21.2165333,
        payment_method: "cash_on_delivery",
        order_note: "Test",
      };

      setPlaceOrderData(newPlaceOrderData);
      dispatch(placeOrder(newPlaceOrderData));
    }
  };

  useEffect(() => {
    if (
      orderState?.orderSuccess &&
      Object.keys(orderState.orderSuccess).length > 0
    ) {
      setOrderSuccess(orderState.orderSuccess);
      if (typeof window !== "undefined") {
        localStorage.removeItem("cart");
      }
    }
  }, [orderState]);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await fetch(
          "https://farmer.handpumpking.in/api/v1/customer/order/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        const totalPoints = data.reduce((total: any, order: any) => {
          return total + (order.loyalty_points || 0); 
        }, 0);
        setLoyalty(totalPoints);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 py-3 sm:py-4 md:py-5 bg-white rounded-[15px] border border-neutral-200">
      {/* Order summary display */}
      <div className="flex justify-between w-full px-2 sm:px-4 md:px-6 gap-1 md:gap-2">
        <p className="text-black text-opacity-60 text-sm sm:text-base md:text-lg font-semibold w-[65%] flex justify-start">
          Price
        </p>
        <p className="text-black text-sm sm:text-base md:text-lg font-semibold w-[35%] flex justify-end">
          Rs. {summary.price}
        </p>
      </div>
      <div className="flex justify-between w-full px-2 sm:px-4 md:px-6 gap-1 md:gap-2">
        <p className="text-black text-opacity-60 text-sm sm:text-base md:text-lg font-semibold w-[65%] flex justify-start">
          Subtotal
        </p>
        <p className="text-black text-sm sm:text-base md:text-lg font-semibold w-[35%] flex justify-end">
          Rs. {summary.subtotal}
        </p>
      </div>
      <div className="flex justify-between w-full px-2 sm:px-4 md:px-6 gap-1 md:gap-2">
        <p className="text-black text-opacity-60 text-sm sm:text-base md:text-lg font-semibold w-[65%] flex justify-start">
          Shipping Fees
        </p>
        <p className="text-black text-sm sm:text-base md:text-lg font-semibold w-[35%] flex justify-end">
          Rs. {summary.shippingFees}
        </p>
      </div>
      <div className="flex justify-between w-full px-2 sm:px-4 md:px-6 gap-1 md:gap-2">
        <p className="text-black text-opacity-60 text-sm sm:text-base md:text-lg font-semibold w-[65%] flex justify-start">
          Coupon/ Discount
        </p>
        <p className="text-[#39B54A] text-sm sm:text-base md:text-lg font-semibold w-[35%] flex justify-end">
          - Rs. {summary.discount}
        </p>
      </div>
      <div className="flex justify-between w-full px-2 sm:px-4 md:px-6 gap-1 md:gap-2">
        <p className="text-black text-opacity-60 text-sm sm:text-base md:text-lg font-semibold w-[65%] flex justify-start">
          Taxes
        </p>
        <p className="text-black text-sm sm:text-base md:text-lg font-semibold w-[35%] flex justify-end">
          Rs. {summary.taxes}
        </p>
      </div>
      <hr />
      <div className="flex justify-between w-full px-2 sm:px-4 md:px-6 gap-1 md:gap-2">
        <p className="text-black text-base sm:text-lg md:text-xl font-bold w-[65%] flex justify-start">
          Total
        </p>
        <p className="text-black text-base sm:text-lg md:text-xl font-bold w-[35%] flex justify-end">
          Rs. {summary.total}
        </p>
      </div>
      <div className="flex justify-between w-full bg-green-50 py-3 sm:py-4 md:py-5 px-2 sm:px-3 md:px-4 gap-1 md:gap-2">
        <p className="text-green-500 text-sm sm:text-base md:text-lg font-semibold w-[65%] flex justify-start">
          Loyalty Cashback Earned :
        </p>
        <p className="text-[#39B54A] text-sm sm:text-base md:text-lg font-semibold w-[35%] flex justify-end">
          {loyalty} Points
        </p>
      </div>
      {currentStep === "Review" ? (
        <div
          onClick={placingOrder}
          className="flex justify-center items-center bg-[#39B54A] rounded-md py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 mx-6 my-3 cursor-pointer"
        >
          <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
            {orderSuccess ? orderSuccess.message : "Place Order"}
          </p>
        </div>
      ) : userData ? (
        <Link href={"/checkout"}>
          <div className="flex justify-center items-center bg-[#39B54A] rounded-md py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 mx-6 my-3 cursor-pointer">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
              Proceed
            </p>
          </div>
        </Link>
      ) : (
        <div
          onClick={() => {
            dispatch(openLoginModal());
          }}
          className="flex justify-center items-center bg-[#39B54A] rounded-md py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 mx-6 my-3 cursor-pointer"
        >
          <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
            Proceed
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
