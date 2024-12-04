// import MyOrders from '@/components/ProfileComponents/MyOrders'
// import React from 'react'

// const MyOrderPage = async() => {
//   return (
//     <div className='px-body md:px-[10%] w-full  md:mt-[162px] mt-[100px]  relative z-10 '>
//     <MyOrders />
// </div>
//   )
// }

// export default MyOrderPage

"use client";
import Headersection from "@/components/headersection/HeaderSection";
import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

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
  const [Product, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://farmer.handpumpking.in/api/v1/categories"
        );
        const data = await response.json();

        // Filter the category with the name "Made 2 Order"
        const singleCategory = data.find(
          (item: any) => item.name === "Made 2 Order"
        );

        if (singleCategory) {
          const categoryId = singleCategory.id;
          console.log("singleCategoryId", categoryId); // Log the id
          fetchProducts(categoryId); // Pass the category id to fetch products
        } else {
          console.log("Category not found");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProducts = async (id: number) => {
    try {
      const response = await fetch(
        `https://farmer.handpumpking.in/api/v1/categories/products/${id}`
      );
      const data = await response.json();
      console.log("data", data); // Log the products data
      setProducts(data); // Store the data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className=" md:pb-32  pb-10">
      <Headersection
        title="Made 2 Order"
        subtitle="Products for you that are Made 2 Order"
      />
      <div className="px-body flex flex-col sm:gap-10 gap-5">
        <h2 className={`md:text-3xl text-2xl font-bold`}>
          <span className={`text-primary`}>Made 2</span> <span>Order</span>
        </h2>

        <div
          className={`grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-x-5 gap-x-4 md:gap-y-6 gap-y-4`}
        >
          {Product.map((product: any) => (
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
