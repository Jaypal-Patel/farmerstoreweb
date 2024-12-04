"use client";
import React from "react";
import Headersection from "../headersection/HeaderSection";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number;
  image_fullpath: string[];
  weight: string;
  discount?: number;
  discountType?: string;
  item?: string;
}

const MadeOrder = () => {
  const [categoryProduct, setCategoryProduct] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://farmer.handpumpking.in/api/v1/categories/products/5"
        );
        const data = await response.json();
        setCategoryProduct(data); // Store the data if needed
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className=" md:pb-32  pb-10">
      <Headersection
        title="Made 2 Order"
        subtitle="Products for you that are Made 2 Order"
      />
      <div className="px-body flex flex-col sm:gap-10 gap-5">
        {/*  */}
        <h2 className={`md:text-3xl text-2xl font-bold`}>
          <span className={`text-primary`}>Made 2</span> <span>Order</span>
        </h2>

        <div
          className={`grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-x-5 gap-x-4 md:gap-y-6 gap-y-4`}
        >
          {categoryProduct.map((product: any) => (
            <ProductCard
              key={product.id}
              category="Made 2 Order"
              discountedPrice={product.price}
              image={product.image_fullpath[0]}
              name={product.name}
              price={product.price}
              weight={product.weight}
              id={product.id}
              discount={product.discount}
              discountType={product.discountType}
              item={product.item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MadeOrder;
