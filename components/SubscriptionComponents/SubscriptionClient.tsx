"use client";
import React from "react";
import SubscriptionCart from "./SubscriptionCart";
import PaymentMethod from "./PaymentMethod";
import ChoosePlans from "./ChoosePlans";
import ProductCarousel from "../HomeComponents/ProductCarousel";
import { useSelector } from "react-redux";

const SubscriptionClient = () => {
  return (
    <div className={`  md:mt-[162px] mt-[100px] md:pb-32 pb-16 relative z-30`}>
      <SubscriptionCart />
      {/* <ProductCarousel heading="Similar Products" weight="font-semibold" /> */}
      <ChoosePlans />
      <PaymentMethod />
    </div>
  );
};

export default SubscriptionClient;
