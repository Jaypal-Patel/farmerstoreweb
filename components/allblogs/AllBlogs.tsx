"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../BlogCard/BlogCard";
import { fetchBlogs } from "@/redux/slices/blogSlice";
import { AppDispatch } from "@/redux/store";

const AllBlogs = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: any) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="p-10">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <BlogCard
            id={post.id}
            category={post.content}
            createdAt={new Date(post.created_at)}
            numberOfLikes={42}
            title={post.title}
            coverPic={`https://farmer.handpumpking.in/storage/app/public/blog/${post.image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
