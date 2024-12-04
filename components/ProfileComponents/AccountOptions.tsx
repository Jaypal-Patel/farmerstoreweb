"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { GoHeart, GoBell } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { toast } from "react-toastify";
import { updateUserProfile, userExists } from "@/redux/slices/loginModalSlice";
import type { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

interface UserData {
  f_name: string;
  l_name: string;
  email: string;
  image: string;
  image_fullpath: string;
}

const optionStyle =
  "flex items-center lg:gap-x-3 gap-x-2 lg:text-sm text-xs font-semibold py-5 cursor-pointer border-b border-b-[#EEF0F5]";

const AccountOptions = () => {
  const params = useSearchParams();
  const currTab = params.get("tab");
  const dispatch = useDispatch<AppDispatch>();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const loginState = useSelector((state: any) => state.loginModal);
  const { userInfo } = useSelector((state: any) => state.loginModal);

  console.log("userimage", userInfo);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("image", file);
      formData.append("f_name", userInfo.f_name);
      formData.append("l_name", userInfo.l_name);
      formData.append("email", userInfo.email);
      formData.append("phone", userInfo.phone);

      try {
        const resultAction = await dispatch(updateUserProfile(formData));
        if (updateUserProfile.fulfilled.match(resultAction)) {
          toast.success("Profile image updated successfully!");
          location.reload();
        } else {
          toast.error("Failed to update profile image.");
        }
      } catch (error) {
        console.error("Error dispatching updateUserProfile:", error);
      }
    }
  };

  return (
    <div className="hidden sm:block w-full filter-border h-full">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 bg-primary px-3 py-5">
          <div className="flex justify-center relative rounded-full bg-white px-3 py-3">
            <div className="flex items-center lg:gap-3 gap-1 relative w-full rounded-full">
              <div className="rounded-full p-1 border border-[#EEEEEE]">
                <div className="h-[62px] w-[62px] rounded-full z-10">
                  <img
                    src={
                      userInfo?.image_fullpath ||
                      "data:image/jpeg;base64,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"
                    }
                    alt="Profile Image"
                    height={1000}
                    width={1000}
                    className="h-full w-full object-fill rounded-full cursor-pointer"
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  />
                </div>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-black">
                  Hello, {userInfo?.f_name} {userInfo?.l_name}
                </h3>
                <p className="text-[#555555] lg:text-sm text-xs overflow-wrap break-word">
                  {userInfo?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#EEF0F5] px-5">
          {[
            { label: "Profile Info", icon: <RiUser3Line />, tab: "my-profile" },
            {
              label: "My Order",
              icon: <HiOutlineShoppingBag />,
              tab: "my-order",
            },
            { label: "My Wallet", icon: <FiShoppingCart />, tab: "my-wallet" },
            { label: "My Wishlist", icon: <GoHeart />, tab: "my-wishlist" },
            { label: "Address", icon: <IoLocationOutline />, tab: "address" },
            // { label: "Subscriptions", icon: <GoBell />, tab: "subscriptions" },
            {
              label: "Help and Support",
              icon: <AiOutlineMessage />,
              tab: "help-and-support",
            },
          ].map((option) => (
            <Link
              key={option.tab}
              href={{ pathname: "/my-account", query: { tab: option.tab } }}
              className={`${optionStyle} ${
                currTab === option.tab ? "text-primary" : "text-black"
              }`}
            >
              <div>{option.icon}</div>
              <div>{option.label}</div>
            </Link>
          ))}
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className={optionStyle}
          >
            <div>
              <GrLogout className="flaticon-user text-xl" />
            </div>
            <div>Log Out</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountOptions;
