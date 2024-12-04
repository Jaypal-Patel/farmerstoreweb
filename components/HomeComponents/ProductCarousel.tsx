"use client";
import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import {
  fetchMade2OrderProducts,
  fetchTopHealthRecipes,
  fetchNewArrivals,
  fetchsnackProducts,
  fetchsubscriptionProducts,
} from "../../redux/slices/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateDiscountedPrice } from "../../utils/calculateDiscount";
import type { AppDispatch, RootState } from "@/redux/store";

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  discount_type: string;
  image_fullpath: string[];
  min_order_qty: number;
  unit: string;
  // Add other relevant fields
}

interface ProductCarouselProps {
  heading: string;
  category: { name: string; id: string }[];
  weight?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  heading,
  category,
  weight,
}) => {

  const [slidesToShow, setSlidesToShow] = useState(6);
  const slider = useRef<any>(null);
  const dispatch = useDispatch<AppDispatch>();

  const productsMade2OrderState = useSelector(
    (state: RootState) => state.made2order
  );
  const topHealthyRecipesState = useSelector(
    (state: RootState) => state.healthRecipes
  );
  const topsnackRecipesState = useSelector((state: RootState) => state.snack);
  const SubscriptionProductsRecipesState = useSelector(
    (state: RootState) => state.subscriptionProduct
  );

  useEffect(() => {
    dispatch(fetchNewArrivals());
  }, [dispatch]);

  useEffect(() => {
    if (category?.[0]?.name === "Made 2 Order") {
      dispatch(fetchMade2OrderProducts(category?.[0]?.id));
    } else if (category?.[0]?.name === "Snacks & Munchies") {
      dispatch(fetchsnackProducts(category?.[0]?.id));
    } else if (category?.[0]?.name === "Top Health Recipes") {
      dispatch(fetchTopHealthRecipes(category?.[0]?.id));
    } else if (category?.[0]?.name === "Subscription Products") {
      dispatch(fetchsubscriptionProducts(category?.[0]?.id));
    }
  }, [category, dispatch]);

  const calculateSlidesToShow = (width: number, count: number): number => {
    if (width < 500) {
      return Math.min(1.4, count);
    } else if (width < 768) {
      return Math.min(2.3, count);
    } else if (width < 1024) {
      return Math.min(3.5, count);
    } else if (width < 1242) {
      return Math.min(4.4, count);
    } else if (width < 1515) {
      return Math.min(4, count);
    } else {
      return Math.min(6, count);
    }
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      let categoryCount = 0;

      if (category?.[0]?.name === "Made 2 Order") {
        categoryCount = productsMade2OrderState?.made2order?.length || 0;
      } else if (category?.[0]?.name === "Snacks & Munchies") {
        categoryCount = topsnackRecipesState?.snack?.length || 0;
      } else if (category?.[0]?.name === "Subscription Products") {
        categoryCount =
          SubscriptionProductsRecipesState?.subscriptionProduct?.length || 0;
      } else if (category?.[0]?.name === "Top Health Recipes") {
        categoryCount = topHealthyRecipesState?.healthRecipes?.length || 0;
      }

      const slides = calculateSlidesToShow(width, categoryCount);
      setSlidesToShow(slides);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [
    category,
    productsMade2OrderState?.made2order?.length,
    topsnackRecipesState?.snack?.length,
    topHealthyRecipesState?.healthRecipes?.length,
    SubscriptionProductsRecipesState?.subscriptionProduct?.length,
  ]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div
      className={`px-body ${
        weight ? `md:mt-14 mt-7` : "mt-14"
      } bg-gradient-to-b from-white to-pink-100 py-10`}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`${
            weight
              ? `${weight} lg:text-3xl sm:text-xl text-lg`
              : "font-bold text-2xl md:text-3xl"
          } flex-1`}
        >
          {category?.[0]?.name.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-primary">
            {category?.[0]?.name.split(" ").slice(-1)[0]}
          </span>
        </h2>
        <div className="flex gap-2">
          <button
            className="bg-primary w-8 text-white h-8 flex justify-center items-center"
            onClick={() => {
              if (slider) {
                slider.current?.slickPrev();
              }
            }}
          >
            <IoArrowBackSharp />
          </button>
          <button
            onClick={() => {
              if (slider) {
                slider.current?.slickNext();
              }
            }}
            className="bg-primary w-8 text-white h-8 flex justify-center items-center"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>

      {category?.[0]?.name === "Made 2 Order" ? (
        <Slider
          {...settings}
          arrows={false}
          ref={slider}
          className={`${weight ? `md:mt-10 mt-5` : "mt-10"}`}
        >
          {productsMade2OrderState?.made2order?.map((product: Product) => (
            <div className="px-1 md:px-2" key={product.id}>
              <ProductCard
                id={product.id}
                category="Made 2 Order"
                discount={product.discount}
                discountType={product.discount_type}
                discountedPrice={calculateDiscountedPrice(
                  product.price,
                  product.discount,
                  product.discount_type
                )}
                image={product.image_fullpath?.[0]}
                name={product.name}
                price={product.price}
                weight={`${product.min_order_qty} ${product.unit}`}
                item={product}
              />
            </div>
          ))}
        </Slider>
      ) : category?.[0]?.name === "Snacks & Munchies" ? (
        <Slider
          {...settings}
          arrows={false}
          ref={slider}
          className={`${weight ? `md:mt-10 mt-5` : "mt-10"}`}
        >
          {topsnackRecipesState?.snack?.map((product: Product) => (
            <div className="px-1 md:px-2" key={product.id}>
              <ProductCard
                id={product.id}
                category="Snacks & Munchies"
                discount={product.discount}
                discountType={product.discount_type}
                discountedPrice={calculateDiscountedPrice(
                  product.price,
                  product.discount,
                  product.discount_type
                )}
                image={product.image_fullpath?.[0]}
                name={product.name}
                price={product.price}
                weight={`${product.min_order_qty} ${product.unit}`}
                item={product}
              />
            </div>
          ))}
        </Slider>
      ) : category?.[0]?.name === "Top Health Recipes" ? (
        <Slider
          {...settings}
          arrows={false}
          ref={slider}
          className={`${weight ? `md:mt-10 mt-5` : "mt-10"}`}
        >
          {topHealthyRecipesState?.healthRecipes?.map((product: Product) => (
            <div className="px-1 md:px-2" key={product.id}>
              <ProductCard
                id={product.id}
                category="Top Health Recipes"
                discount={product.discount}
                discountType={product.discount_type}
                discountedPrice={calculateDiscountedPrice(
                  product.price,
                  product.discount,
                  product.discount_type
                )}
                image={product.image_fullpath?.[0]}
                name={product.name}
                price={product.price}
                weight={`${product.min_order_qty} ${product.unit}`}
                item={product}
              />
            </div>
          ))}
        </Slider>
      ) : category?.[0]?.name === "Subscription Products" ? (
        <Slider
          {...settings}
          arrows={false}
          ref={slider}
          className={`${weight ? `md:mt-10 mt-5` : "mt-10"}`}
        >
          {SubscriptionProductsRecipesState?.subscriptionProduct?.map(
            (product: Product) => (
              <div className="px-1 md:px-2" key={product.id}>
                <ProductCard
                  id={product.id}
                  category="Subscription Products"
                  discount={product.discount}
                  discountType={product.discount_type}
                  discountedPrice={calculateDiscountedPrice(
                    product.price,
                    product.discount,
                    product.discount_type
                  )}
                  image={product.image_fullpath?.[0]}
                  name={product.name}
                  price={product.price}
                  weight={`${product.min_order_qty} ${product.unit}`}
                  item={product}
                />
              </div>
            )
          )}
        </Slider>
      ) : (
        <div>No Products Available</div>
      )}
    </div>
  );
};

export default ProductCarousel;
