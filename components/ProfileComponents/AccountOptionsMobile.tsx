"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { useRouter, useSearchParams } from "next/navigation";
import profilePic from "../../images/Ellipse 77 (1).svg"
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { IoStarOutline } from "react-icons/io5";


const AccountOptionsMobile = () => {
const optionStyle = "flex lg:gap-x-4 gap-x-2  lg:text-sm text-sm font-semibold py-5  cursor-pointer border-b border-b-[#EEF0F5]";

  return (
    <>
    <div className={`w-[100%] filter-border  h-full sm:hidden block`}>
        {/* <div><h1 className='text-xl font-bold'>My Account</h1></div> */}
      {/* top section  */}
      <div className={`flex flex-col `}>
      <div className="flex flex-col gap-2  bg-primary px-3 py-5 ">
        <div className="flex justify-center relative  rounded-full bg-white px-3 py-3">
          <div className="flex  items-center gap-3 relative w-full  rounded-full">
        <div className='rounded-full p-1 border border-[#EEEEEE]'>
              <div className="h-[62px] w-[62px] rounded-full  z-10">
                <Image
                  src={profilePic}
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-[100%] w-[100%] object-fill  rounded-full"
                />
              </div>
              </div>
              <div>
                <h3 className='text-base font-bold text-black'>Hello, Arjun Rawat</h3>
                <p className='text-[#555555] text-sm'>rajun.rawat@gmail.com</p>
              </div>
          </div>
        </div>
       
      
      </div>
      <div className=" flex flex-col   border border-[#EEF0F5] px-5">
        {/* option  */}
        <Link href={"/profile-info-page"}   
        className={`${optionStyle}  `}>
            <div>
              <RiUser3Line className="flaticon-user sm:text-xl text-lg" />
            </div>
            <div>Profile Info</div>
        </Link>
        <Link href={"/family-page"}   
        className={`${optionStyle}  `}>
           <div>
              <AiOutlineUsergroupAdd className="flaticon-user text-2xl" />
            </div>
            <div>Family</div>
        </Link>
        <Link href={"/my-order-page"}  
        className={`${optionStyle}  `}>
      <div>
              <HiOutlineShoppingBag className="flaticon-user sm:text-xl text-lg" />
            </div>
            <div>My Order</div>
        </Link>
        <Link href={"/my-wallet-page"}   
        className={`${optionStyle}  `}>
        <div>
              <FiShoppingCart className="flaticon-user sm:text-xl text-lg" />
            </div>
            <div>My Wallet</div>
        </Link>
        <Link href={"/my-wishlist-page"}   
        className={`${optionStyle} `}>
     <div>
              <GoHeart className="flaticon-user sm:text-xl text-lg" />
            </div>
            <div>My Wishlist</div>
        </Link>
        <Link href={"/address-page"}      
        className={`${optionStyle}  `}>
            <div>
              <IoLocationOutline className="flaticon-user sm:text-xl text-lg" />
            </div>
            <div>Address</div>
        </Link>
        <Link href={"/subscriptions-page"}     
        className={`${optionStyle}  `}>
            <div>
              <GoBell className="flaticon-user sm:text-xl text-lg" />
            </div>
            <div>Subscriptions</div>
        </Link>
        {/* <Link href={"#"}   
        className={`${optionStyle} `}>
            <div>
              <FlatIcon className="flaticon-user text-2xl" />
            </div>
            <div>Notifications</div>
        </Link> */}
       
         <div    
        className={`${optionStyle}  `}>
            <div>
            <IoStarOutline className="flaticon-user sm:text-xl text-lg"/>
            </div>
            <div>Rate Us</div>
        </div>
        {/* <Link href={"#"}   
        className={`${optionStyle} `}>
            <div>
              <FlatIcon className="flaticon-user text-2xl" />
            </div>
            <div>Terms and Policies</div>
        </Link> */}
        <Link href={"/help-and-support-page"}   
        className={`${optionStyle}  `}>
         <div>
              <AiOutlineMessage className="flaticon-user sm:text-xl text-lg" />
            </div>
            <div>Help and Support</div>
        </Link>
       
       
      
       
     
        <button onClick={()=>{    localStorage.clear();
        window.location.href="/"
}} className={`${optionStyle}`}>
        <div><GrLogout className="flaticon-user sm:text-xl text-lg"/></div>
    
          <div>Log Out</div>
        </button>
      </div>
      </div>
    </div>
  </>
  )
}

export default AccountOptionsMobile