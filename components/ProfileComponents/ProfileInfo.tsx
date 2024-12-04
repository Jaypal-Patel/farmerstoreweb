"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { userExists, updateUserProfile } from "@/redux/slices/loginModalSlice";
import { toast } from "react-toastify";
import type { AppDispatch, RootState } from "@/redux/store";

const labelStyle =
  "lg:text-small md:text-xs text-sm text-[#555555] font-medium";
const inputStyle =
  "border border-[#838383] rounded-2xl px-3 sm:py-3.5 py-3 outline-0 lg:text-sm md:text-xs text-sm";
const divStyle = "flex flex-col sm:gap-3 gap-2";
const mainDivStyle = "grid sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-3 w-full";

interface UserData {
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
}

const ProfileInfo = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const loginState = useSelector((state: RootState) => state.loginModal);
  const [formData, setFormData] = useState<UserData>({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
  });

  console.log("formData", formData);

  // Fetch user info on mount
  useEffect(() => {
    dispatch(userExists());
  }, [dispatch]);

  // Populate form with user info
  useEffect(() => {
    if (loginState?.userInfo) {
      setFormData({
        f_name: loginState.userInfo.f_name || "",
        l_name: loginState.userInfo.l_name || "",
        email: loginState.userInfo.email || "",
        phone: loginState.userInfo.phone || "",
      });
    }
  }, [loginState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(updateUserProfile(formData));
      if (updateUserProfile.fulfilled.match(resultAction)) {
        toast.success("Profile updated successfully!");
        dispatch(userExists()); // Refresh user data
      } else {
        // throw new Error(resultAction.payload);
        throw new Error("Update Unsuccessfull");
      }
    } catch (error: any) {
      toast.error(
        "Failed to update profile: " + (error?.message || "Unknown error")
      );
    }
  };

  return (
    <div
      className={`h-fit mt-10 ${
        pathName.includes("profile-info-page")
          ? "block w-[100%] mb-10"
          : "sm:block hidden lg:w-[58%] md:w-[68%] w-full"
      }`}
    >
      <h2 className="text-primary font-bold lg:text-2xl text-xl mb-10">My Profile</h2>
      {pathName.includes("profile-info-page") && (
        <div
          onClick={() => router.replace("/my-account?tab=my-profile")}
          className="flex items-center gap-2 lg:py-10 py-5 cursor-pointer"
        >
          <FaArrowLeftLong className="md:text-2xl text-xl" />
          <h2 className="text-primary font-bold lg:text-2xl text-xl">
            My Profile
          </h2>
        </div>
      )}
      <form
        className="w-full flex flex-col sm:gap-7 gap-4"
        onSubmit={handleSaveChanges}
      >
        <div className={mainDivStyle}>
          <div className={divStyle}>
            <label className={labelStyle}>First Name*</label>
            <input
              name="f_name"
              value={formData.f_name}
              onChange={handleInputChange}
              className={inputStyle}
              required
            />
          </div>
          <div className={divStyle}>
            <label className={labelStyle}>Last Name*</label>
            <input
              name="l_name"
              value={formData.l_name}
              onChange={handleInputChange}
              className={inputStyle}
              required
            />
          </div>
        </div>
        <div className={mainDivStyle}>
          <div className={divStyle}>
            <label className={labelStyle}>Email Address*</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={inputStyle}
              required
            />
          </div>
          <div className={divStyle}>
            <label className={labelStyle}>Phone No.</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputStyle}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-sm font-semibold rounded-2xl text-white md:py-4 py-2.5 mt-2"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileInfo;
