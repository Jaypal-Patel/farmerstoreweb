"use client";
import React, { useEffect, useState } from "react";
import BannerSlider from "./BannerSlider";
import InformationWidget from "./InformationWidget";
import CategoryWidget from "./CategoryWidget";
import ImageBanner from "./ImageBanner";
import ProductCarousel from "./ProductCarousel";
import PlaystoreLinks from "./PlaystoreLinks";
import BlogWidget from "./BlogWidget";
import BestQuality from "./BestQuality";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners, fetchCategories } from "@/redux/slices/homeSlice";
import type { AppDispatch } from "@/redux/store";
import axios from "axios";

interface Category {
  id: string; 
  name: string;
}

interface CategoriesState {
  categories: Category[];
}
const HomeClient = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categoriesState = useSelector((state: any) => state.categories);
  const bannersState = useSelector((state: any) => state.banners);

  const [extractedCategories, setExtractedCategories] = useState<Category[]>(
    []
  );
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBanners());
  }, []);

  useEffect(() => {
    if (categoriesState) {
      const extractedData = categoriesState?.categories?.map(
        (category: Category) => ({ name: category.name, id: category.id })
      );
      setExtractedCategories(extractedData);
    }
  }, [categoriesState]);

  return (
    <div className="flex flex-col gap-3 pb-20">
      <BannerSlider banners={bannersState} />
      <InformationWidget />
      <CategoryWidget
        category={extractedCategories.filter(
          (category) => category?.name === "Explore by Categories"
        )}
      />
      {/* <ImageBanner banners={bannersState} length={2} /> */}
      <ProductCarousel
        category={extractedCategories.filter(
          (category) => category?.name === "Top Health Recipes"
        )}
        heading="Top Health Recipes"
      />
      {/* <ImageBanner banners={bannersState} length={1} /> */}
      {/* {/ <ProductCarousel heading="Deals of the day" /> /} */}
      {/* flash sale component  */}
      {/* <ProductList />  */}
      <ProductCarousel
        category={extractedCategories.filter(
          (category) => category?.name === "Made 2 Order"
        )}
        heading="Made 2 Order"
      />
      <ProductCarousel
        category={extractedCategories.filter(
          (category) => category?.name === "Snacks & Munchies"
        )}
        heading="Snacks & Munchies"
      />
      <ProductCarousel
        category={extractedCategories.filter(
          (category) => category?.name === "Subscription Products"
        )}
        heading="Subscription Products"
      />
      <PlaystoreLinks />
      <BlogWidget />
      <BestQuality />
    </div>
  );
};

export default HomeClient;
