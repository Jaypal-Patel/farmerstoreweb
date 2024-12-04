"use client";
import { useScrollDirection } from "@/utils/useScroll";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SideMenu from "./SideMenu";
import { AiOutlineMenu } from "react-icons/ai";

const MobileNav = () => {
  const isScrolled = useScrollDirection();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={`md:hidden flex items-center  ${
        isScrolled ? "bg-white" : "bg-white/70"
      } px-body  w-full min-h-[90.97px]`}
    >
      <div className="flex-1 gap-3 flex items-center">
        <div className="w-[140px]">
          <Image
            src={require("../../images/logo.png")}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <button
        onClick={() => {
          document.body.classList.add("no-scroll");
          // dispatch(openSideMenu());
          setIsSidebarOpen(true);
        }}
      >
        <AiOutlineMenu className={"text-2xl"}/>
        {/* Menu */}
      </button>

      {isSidebarOpen && (
        <SideMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
    </div>
  );
};

export default MobileNav;
