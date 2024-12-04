"use client";

import SameProductByOtherVendors from "@/components/SameProductByOtherVendors/SameProductByOtherVendors";
import CartItem from "@/components/cartItem/CartItem";

import React, { useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
  discount_type?: string;
  image_fullpath?: string[];
  min_order_qty?: number;
  unit?: string;
}

const Page = async ({ params }: any) => {
  const detailsArray: Product[] = []; // Define this based on your needs
  const deetsArray: Product[] = [
    {
      id: 1,
      name: "Apple",
      price: 1.2,
      discount: 0,
      image_fullpath: ["/images/apple.png"],
      min_order_qty: 1,
      unit: "kg",
    },
    {
      id: 2,
      name: "Banana",
      price: 0.8,
      discount: 0,
      image_fullpath: ["/images/banana.png"],
      min_order_qty: 1,
      unit: "kg",
    },
    // Add more products as necessary
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartItemsString = localStorage.getItem("cart") || "[]";
      try {
        const cartItems: CartItem[] = JSON.parse(cartItemsString);
        console.log(cartItems);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
      }
    }
  }, []);
  return (
    <>
      {/* <Hydrate state={dehydratedState}> */}
      <CartItem />
      <SameProductByOtherVendors
        title="Similar Products"
        details={detailsArray} // Ensure this is defined
        deets={deetsArray} // Ensure this is provided
      />
      {/* </Hydrate> */}
    </>
  );
};

export default Page;
