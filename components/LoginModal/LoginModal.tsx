"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import OutsideClickHandler from "@/utils/OutsideClickHandler";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import {
  addUser,
  closeLoginModal,
  getUserAddress,
  loginUser,
  userExists,
  verifyUser,
} from "@/redux/slices/loginModalSlice";
import type { AppDispatch, RootState } from "@/redux/store";

const LoginModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loginState = useSelector((state: RootState) => state.loginModal);

  // Local UI States
  const [showOtp, setShowOtp] = React.useState(1);
  const [phoneNo, setPhoneNo] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");

  // Handlers for switching between steps
  const switchToRegistration = () => {
    setShowOtp(3);
  };

  const switchToLogin = () => {
    setShowOtp(1);
  };

  // Handler for registering a new user
  const onNewUserDetailsHandler = async () => {
    const details = {
      fname: firstName,
      lname: lastName,
      email: email,
      phone: phoneNo,
      gender: gender,
      password: "A@12345678",
    };
    try {
      if (firstName && lastName && email && gender && phoneNo ) {
        dispatch(addUser(details));
      } else {
        toast.error("Please fill all the details.");
      }
    } catch (error) {
      toast.error(`Something went wrong!`);
    }
  };

  // Handler for initiating login with phone number
  const loginWithPhoneNumber = async () => {
    dispatch(loginUser(phoneNo));
  };

  // Handler for verifying OTP
  const verifyWithOtpCode = async () => {
    const data = {
      phone: phoneNo,
      otp: otp,
    };
    dispatch(verifyUser(data));
  };

  // Effect to handle toast messages based on Redux state
  useEffect(() => {
    if (loginState.message) {
      toast.success(loginState.message);
    }
  }, [loginState.message]);

  // Effect to handle errors based on Redux state
  useEffect(() => {
    if (loginState.error) {
      toast.error(loginState.error);
    }
  }, [loginState.error]);

  // Effect to handle OTP sent response
  useEffect(() => {
    if (loginState.otp) {
      setShowOtp(2);
    }
  }, [loginState.otp]);

  // Effect to handle OTP verification response
  useEffect(() => {
    if (loginState.verify) {
      const { status } = loginState.verify;

      if (status) {
        dispatch(userExists());
      } else {
        toast.error("User Not Registered");
      }
    }
  }, [loginState.verify, dispatch]);

  // Effect to handle registration response
  useEffect(() => {
    if (loginState.registeredData) {
      setShowOtp(2);
    }
  }, [loginState.registeredData]);

  // Effect to handle registration errors
  useEffect(() => {
    if (loginState.registeredDataError) {
      toast.error(loginState.registeredDataError);
    }
  }, [loginState.registeredDataError]);

  // Effect to handle user information after verification
  useEffect(() => {
    if (loginState.userInfo) {
      localStorage.setItem("customerInfo", JSON.stringify(loginState.userInfo));
      dispatch(getUserAddress());
      dispatch(closeLoginModal());
      location.reload();
    }
  }, [loginState.userInfo, dispatch]);

  // Effect to handle user address information
  useEffect(() => {
    if (loginState.userAddress) {
      localStorage.setItem(
        "customerAddress",
        JSON.stringify(loginState.userAddress)
      );
    }
  }, [loginState.userAddress]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] grid place-content-center">
      <OutsideClickHandler
        onClick={() => {
          dispatch(closeLoginModal());
          document.body.classList.remove("no-scroll");
        }}
      >
        <div className="w-[90vw] lg:w-[60vw] h-auto flex bg-white rounded-[20px] sm:items-center ">
          <div className="flex-1 hidden md:block h-auto">
            <div className="h-[460px]">
              <Image
                src={require("../../images/loginImage.png")}
                alt="login"
                className="w-full h-full"
              />
            </div>
            <div className="rounded-[20px] text-[#555555] pb-10 flex flex-col gap-1 items-center bg-[#FCFCFC] font-semibold text-xl">
              <p>Get your Organic groceries with</p>
              <h1 className="text-black text-2xl font-bold">
                The Farmers Store
              </h1>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col py-6">
            <div className="w-[150px]">
              <Image
                src={require("../../images/logo.png")}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            {showOtp === 2 ? (
              <>
                <h5 className="mt-6 text-lg font-semibold">
                  Verification Code
                </h5>
                <p className="text-[#A9A9A9] text-center text-sm mt-3 px-6">
                  We will be sending a verification code to the provided contact
                  number.
                </p>
                <div className="flex gap-2 mt-4 w-full sm:px-6 px-3 justify-center ">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputStyle={"outline-none"}
                    renderSeparator={
                      <span className="sm:mx-2 mx-1"> &nbsp; </span>
                    }
                    renderInput={(props) => (
                      <div className="sm:py-2 py-1 sm:px-3.5 px-2 border border-[#868e97c0] rounded-sm">
                        <input {...props} />
                      </div>
                    )}
                  />
                </div>
                <div className="px-6 w-full mt-4">
                  <button
                    onClick={verifyWithOtpCode}
                    className="bg-primary w-full sm:text-base text-sm py-2.5 text-white rounded-lg font-semibold"
                    disabled={loginState.loading}
                  >
                    {loginState.loading ? "Submitting OTP..." : "Submit OTP"}
                  </button>
                </div>
                <button className="mt-2" onClick={switchToLogin}>
                  Back to Login
                </button>
              </>
            ) : showOtp === 3 ? (
              <>
                <h5 className="mt-6 text-lg font-semibold">
                  Create Your Account
                </h5>
                <p className="text-[#A9A9A9] text-center text-sm mt-3 px-6">
                  Please enter the following details to register.
                </p>
                <div className="flex flex-col gap-4 mt-4 w-full px-6">
                  <div className="w-full input-placeholder">
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      maxLength={30}
                      placeholder="First Name"
                      className="text-sm border border-[#DEDEDE] rounded-md py-2 px-3 outline-0 w-[100%]"
                    />
                  </div>
                  <div className="w-full input-placeholder">
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      maxLength={30}
                      placeholder="Last Name"
                      className="text-sm border border-[#DEDEDE] rounded-md py-2 px-3 outline-0 w-[100%]"
                    />
                  </div>
                  <div className="w-full input-placeholder">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      maxLength={30}
                      placeholder="Email"
                      className="text-sm border border-[#DEDEDE] rounded-md py-2 px-3 outline-0 w-[100%]"
                    />
                  </div>
                  <div className="w-full input-placeholder">
                    <input
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      type="number"
                      maxLength={10}
                      placeholder="Phone Number"
                      className="text-sm border border-[#DEDEDE] rounded-md py-2 px-3 outline-0 w-full"
                    />
                  </div>
                  <div className="w-full input-placeholder flex items-center gap-4">
                    <label className="text-sm">Gender:</label>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                        className="mr-1"
                      />
                      <label className="text-sm">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="mr-1"
                      />
                      <label className="text-sm">Female</label>
                    </div>
                  </div>
                </div>

                <div className="px-6 w-full mt-6">
                  <button
                    onClick={onNewUserDetailsHandler}
                    className="bg-primary w-full py-2.5 text-white rounded-lg font-semibold"
                    disabled={loginState.loading}
                  >
                    {loginState.loading ? "Registering..." : "Register"}
                  </button>
                  <button className="mt-2" onClick={switchToLogin}>
                    Already have an account? Log in.
                  </button>
                </div>
              </>
            ) : (
              <>
                <h5 className="mt-6 text-lg font-semibold">
                  Add Contact Information
                </h5>
                <p className="text-[#A9A9A9] text-center text-sm mt-3 px-6">
                  {showOtp
                    ? `Enter OTP Sent to +91 ${phoneNo}`
                    : "We will be sending a verification code to the provided contact number."}
                </p>
                <div className="flex gap-2 mt-4 w-full px-6">
                  <div className="p-2 border border-[#868e97c0] flex items-center gap-2">
                    <ReactCountryFlag countryCode={"IN"} svg /> <p>+91</p>
                  </div>
                  <div className="border-[#868e97c0] border flex-1">
                    <input
                      type="number"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      inputMode="numeric"
                      maxLength={10}
                      className="h-full pl-3 text-sm flex-1 w-full outline-none"
                    />
                  </div>
                </div>
                <div className="px-6 w-full mt-4">
                  <button
                    onClick={loginWithPhoneNumber}
                    className={` ${
                      phoneNo.length < 10 ? "bg-gray-400" : "bg-primary"
                    } w-full sm:text-base text-sm py-2.5 text-white rounded-lg font-semibold`}
                    disabled={phoneNo.length < 10 && loginState.loading}
                  >
                    {loginState.loading ? "Verifying..." : "Verify"}
                  </button>
                  <button className="mt-2" onClick={switchToRegistration}>
                    Don't have an account? Register here.
                  </button>
                  <div id="recaptcha-container"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default LoginModal;
