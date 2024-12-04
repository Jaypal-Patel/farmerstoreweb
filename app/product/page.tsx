"use client";
import { useSearchParams } from "next/navigation";

import Productdescription from "@/components/productdescription/productdescription";
import Productqualities from "@/components/productsqualities/Productqualities";
import SameProductByOtherVendors from "@/components/SameProductByOtherVendors/SameProductByOtherVendors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "@/redux/slices/homeSlice";
import type { AppDispatch } from "../../redux/store"; // Import AppDispatch

const Page = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch type
  const detailsState = useSelector((state: any) => state.productDetails);
  const [deets, setDeets] = useState<any>();
  const [deetsre, setDeetsre] = useState<any>();

  useEffect(() => {
    const fetchProducts = async () => {
      // Get the full URL
      const url = window.location.href;

      // Split the URL at the question mark and get the part after it
      const productId = url.split("id=")[1];
      console.log("product id", productId);

      try {
        const response = await fetch(
          `https://farmer.handpumpking.in/api/v1/products/details/${productId}`
        );
        const data = await response.json();
        console.log("categories data", data); // Log the response data
        setDeets(data["product"]); // Store the data if needed
        setDeetsre(data["related_products"]); // Store the data if needed
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Productdescription
        cookie=""
        slug=""
        details={detailsState}
        deets={deets}
      />
      <Productqualities slug="" details={detailsState} deets={deets} />
      <SameProductByOtherVendors
        details={detailsState}
        title="Related Products"
        deets={deetsre}
      />
    </>
  );
};

export default Page;
