"use client";
import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogCard from "../BlogCard/BlogCard";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { fetchBlogs } from "@/redux/slices/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/redux/store";

const BlogWidget: React.FC = () => {
  const slider = useRef<Slider | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const { posts, loading, error } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="px-body mt-11">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl md:text-3xl flex-1">
          From the <span className="text-primary"> Blog</span>
        </h2>
        <div className="flex gap-2">
          <button
            className="bg-primary w-8 text-white h-8 flex justify-center items-center"
            onClick={() => slider.current?.slickPrev()}
          >
            <IoArrowBackSharp />
          </button>
          <button
            className="bg-primary w-8 text-white h-8 flex justify-center items-center"
            onClick={() => slider.current?.slickNext()}
          >
            <IoArrowForward />
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="px-5 rounded-full bg-primary py-2 text-white text-sm">
          Nutrition
        </button>
        <button className="px-5 rounded-full bg-[#EBF8ED] py-2 text-sm">
          Recipes
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading posts: {error}</p>
      ) : (
        <Slider {...settings} arrows={false} ref={slider} className="mt-10">
          {posts.map((post) => (
            <BlogCard
              key={post.id} // Always provide a key for list items
              id={post.id}
              category={post.content}
              createdAt={new Date(post.created_at)}
              numberOfLikes={42} // Placeholder for likes
              title={post.title}
              coverPic={`https://farmer.handpumpking.in/storage/app/public/blog/${post.image}`}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BlogWidget;
