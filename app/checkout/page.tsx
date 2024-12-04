"use client";
import { useEffect, useState } from "react";
import PaymentMethodTab from "../../components/checkout/PaymentMethodTab";
import ReviewTab from "../../components/checkout/ReviewTab";
import ShippingTab from "../../components/checkout/ShippingTab";
import Coupon from "@/components/couponcomponent/Coupon";
import OrderSummary from "@/components/orderSummary/OrderSummary";
import AddCoupons from "@/components/addcoupons/AddCoupons";
import { useDispatch, useSelector } from "react-redux";
// import { fetchAccountInfo } from "@/redux/slices/accountSlice";

const CheckoutPage = () => {
  const [selectedTab, setSelectedTab] = useState("Shipping");
  const tabs = ["Shipping", "Payment", "Review"];
  const [showCoupons, setShowCoupons] = useState(false);
  const dispatch = useDispatch();

  // Fetch the current step from localStorage only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentStep = localStorage.getItem("currentStep");
      if (currentStep) {
        setSelectedTab(currentStep);
      }
    }
  }, []);

  // Update localStorage whenever the selected tab changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", selectedTab);
    }
  }, [selectedTab]);

  const renderTabs = () => {
    switch (selectedTab) {
      case tabs[0]:
        return <ShippingTab />;
      case tabs[1]:
        return <PaymentMethodTab />;
      case tabs[2]:
        return <ReviewTab />;
      default:
        return <></>;
    }
  };

  return (
    <div className="px-body   mt-28 sm:mt-44 md:mt-60 mb-12 sm:mb-24 md:mb-40 ">
      <div className="w-full flex md:flex-row flex-col sm:gap-y-8 gap-y-4 gap-8 sm:gap-12 md:gap-16  ">
        <div className="w-full md:w-[65%]  flex flex-col  gap-3 sm:gap-4 md:gap-5">
          <div className="flex justify-between sm:flex-row flex-col gap-y-1 sm:gap-y-2 md:gap-y-3 items-center">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-black  ">
              Checkout
            </h2>
            <div className="flex items-center sm:justify-center">
              <div className="flex  flex-row  gap-1 sm:gap-1.5 md:gap-2 ">
                {tabs.map((tab, idx) => {
                  return (
                    <div
                      key={idx}
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedTab(tab);
                      }}
                    >
                      <p
                        className={`${
                          tab === selectedTab && "text-primary  "
                        } font-semibold md:text-lg sm:text-base text-sm text-[#555555]`}
                      >
                        {tab}
                        {(idx === 0 || idx === 1) && " >"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {renderTabs()}
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
              <OrderSummary currentStep={selectedTab} />
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

export default CheckoutPage;
