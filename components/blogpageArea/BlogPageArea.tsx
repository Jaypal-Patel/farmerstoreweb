"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogById } from "@/redux/slices/blogSlice"; // Import your thunk
import Image from "next/image";
import moment from "moment";
import { IoHeart } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import contributor from "../../images/Ellipse 206.svg";
import { AppDispatch } from "@/redux/store";

interface MyComponentProps {
  category: string;
  createdAt: Date;
  numberOfLikes: number;
  title: string;
  coverPic: any;
}

const BlogPageArea: React.FC<MyComponentProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const { singlePost, loading, error } = useSelector(
    (state: any) => state.blog
  );

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    if (id) {
      dispatch(fetchBlogById(Number(id)));
    }
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog: {error}</p>;
  if (!singlePost) return <p>No blog found.</p>;

  const {
    title,
    created_at,
    number_of_likes,
    cover_pic,
    content,
    youtube_url,
  } = singlePost;

  const handleShare = async () => {
    const url = `${window.location}`;
    const shareData = {
      title: title,
      text: `Check out this blog: ${title}`,
      url: url,
    };
    try {
      await navigator.share(shareData);
      console.log("Blog shared successfully!");
    } catch (error: any) {
      console.error("Error sharing the blog:", error);
    }
  };
  console.log(youtube_url);

  return (
    <div className="px-body mt-28 sm:mt-44 md:mt-60">
      <div className="flex flex-col md:flex-row justify-center gap-8 sm:gap-12 md:gap-16">
        <div className="md:w-[60%] flex gap-4 sm:gap-6 md:gap-8 flex-col">
          <div className="flex flex-col aspect-[5/4] bg-opacity-70 bg-black rounded-[25px]">
            <div className="flex w-full aspect-[3/2] justify-center items-center rounded-tl-[25px] rounded-tr-[25px]">
              <img
                src={`https://farmer.handpumpking.in/storage/app/public/blog/${singlePost?.image}`}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex w-full rounded-bl-[25px] rounded-br-[25px] items-center my-auto">
              <div className="flex w-full justify-between items-center px-4 sm:px-6 md:px-8">
                <div className="flex w-full gap-2 sm:gap-4 md:gap-6 justify-start items-center">
                  <div className="bg-[#4E93FC] rounded-full gap-1 w-fit px-4 sm:px-6 md:px-8 text-white py-1 sm:py-2 md:py-3 flex justify-center items-center cursor-pointer">
                    <IoHeart className="h-[18px] sm:h-[22px] md:h-[26px] w-[18px] sm:w-[22px] md:w-[26px] aspect-square" />
                    <p className="text-base sm:text-lg md:text-xl font-semibold">
                      {number_of_likes}
                    </p>
                  </div>
                  <div className="bg-zinc-600 rounded-full w-fit p-2 sm:p-3 md:p-4 text-white flex justify-center items-center cursor-pointer">
                    <FaComment className="h-[18px] sm:h-[22px] md:h-[26px] w-[18px] sm:w-[22px] md:w-[26px] aspect-square" />
                  </div>
                </div>

                <div className="bg-zinc-600 rounded-full w-fit p-1 sm:p-1.5 md:p-2 text-white flex justify-center items-center cursor-pointer">
                  <button onClick={handleShare}>
                    <IoIosShareAlt className="h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] w-[24px] sm:w-[28px] md:w-[32px] lg:w-[36px] aspect-square" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-neutral-950">
            Contributor
          </h2>

          <div className="flex flex-row w-full justify-between items-center gap-2 md:gap-4 lg:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white rounded-[15px] border border-stone-300">
            <div className="flex flex-row w-[70%] gap-2 sm:gap-3 md:gap-4">
              <div className="w-[20%] aspect-square">
                <Image
                  src={contributor}
                  alt=""
                  height={1000}
                  width={1000}
                  className="rounded-full w-[100%] h-[100%] object-fill"
                />
              </div>

              <div className="flex lg:flex-row md:flex-col sm:flex-row items-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-1.5 lg:gap-4">
                  <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2 justify-center">
                    <h2 className="md:text-2xl sm:text-xl text-lg text-black font-semibold">
                      Jerome Bell
                    </h2>
                    <p className="text-neutral-400 font-semibold text-xs sm:text-sm md:text-base">
                      Admin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500 rounded-[32px] px-4 sm:px-6 md:px-8 py-1 sm:py-1.5 md:py-2 cursor-pointer">
              <button className="text-white text-xs sm:text-sm md:text-base font-medium">
                Follow
              </button>
            </div>
          </div>
          {youtube_url ? (
            <iframe
              width="1000" // You can adjust the width as needed
              height="450" // You can adjust the height as needed
              src={`https://www.youtube.com/embed/${youtube_url}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div>No video available</div>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:w-[50%] pt-2 sm:pt-3 md:pt-4">
          <div className="flex w-full">
            <p className="text-zinc-500 text-lg sm:text-xl md:text-2xl font-normal">
              {moment(created_at).format("DD MMM, YYYY")}
            </p>
          </div>

          <div className="text-black text-2xl sm:text-3xl md:text-4xl font-bold w-[70%]">
            {title}
          </div>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium w-[90%]">
            {content.replace(/<[^>]+>/g, "")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPageArea;
