"use client";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";
import { IoIosHeart } from "react-icons/io";
import shareIcon from "../../images/fi_2550209.svg";

interface BlogProps {
  id: number;
  title: string;
  createdAt: any; // Assuming it's a string from the API
  numberOfLikes: number;
  category: string; // This should always be a string
  coverPic: string; // Assuming coverPic is a URL string
}

const BlogCard: React.FC<BlogProps> = ({
  id,
  category,
  coverPic,
  createdAt,
  numberOfLikes,
  title,
}) => {
  const sanitizedCategory = category
    ? category.replace(/<[^>]+>/g, "")
    : "Uncategorized";

  const handleShare = async () => {
    const url = `${window.location.origin}/blogs/${id}`;
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

  return (
    <div className="mx-3">
      <Link href={`/blogs/${id}`}>
        <div className="overflow-hidden max-h-[250px] relative">
          <Image
            src={coverPic}
            alt={title}
            className="w-full h-full object-cover"
            width={300} // Use an appropriate width
            height={200} // Use an appropriate height
          />
          {/* <div className="text-white text-base font-medium bg-black absolute right-5 top-5 px-3 py-1 rounded-lg">
            25:00
          </div> */}
          <div className="absolute bottom-4 left-6 bg-[#E9F6F0] px-5 py-2 font-medium text-primary text-sm">
            {title}
          </div>
        </div>
      </Link>
      <div className="flex flex-col px-8 pt-4 pb-6 border border-[#B1B1B1] rounded-br-3xl rounded-bl-3xl">
        <div className="flex justify-end w-full">
          <p>{moment(createdAt).format("DD MMM, YYYY")}</p>
        </div>
        <h4 className="line-clamp-2 font-semibold">{sanitizedCategory}</h4>

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 bg-[#4E93FC] rounded-full w-fit px-3 text-white py-1 text-sm flex justify-center items-center">
            <div>
              <IoIosHeart className="text-base text-white" />
            </div>
            {numberOfLikes}
          </div>
          <button onClick={handleShare}>
            <Image src={shareIcon} alt="share" className="w-[22px] h-[22px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
