// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Cart from "../../images/Buy.png";
// import Link from "next/link";
// import NavCategories from "./NavCategories";
// import MobileNav from "./MobileNav";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getUserAddress,
//   openLoginModal,
//   userExists,
// } from "@/redux/slices/loginModalSlice";
// import LoginModal from "../LoginModal/LoginModal";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlinePerson } from "react-icons/md";
// import { GoHeart } from "react-icons/go";
// import { fetchAddresses } from "@/redux/slices/accountSlice";
// import { useScrollDirection } from "@/utils/useScroll";
// import { RootState, AppDispatch } from "@/redux/store";

// interface UserAddress {
//   address_type?: string;
//   address: string;
//   id: string;
// }

// const NavbarClient: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const [cartCount, setCartCount] = useState<number>(0);
//   const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
//   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);
//   const isScrolled = useScrollDirection();

//   const { isLoginOpen, userInfo } = useSelector(
//     (state: RootState) => state.loginModal
//   );
//   const { addresses } = useSelector((state: RootState) => state.accountInfo);

//   const getCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     return cart.length;
//   };

//   useEffect(() => {
//     // Set cart count
//     setCartCount(getCartCount());

//     // Fetch addresses and update loading state
//     dispatch(fetchAddresses()).finally(() => setLoading(false));

//     // Retrieve the selected address from local storage
//     const storedAddress = localStorage.getItem("selectedAddress");
//     if (storedAddress) {
//       setSelectedAddress(storedAddress);
//     }

//     // Check if user exists
//     dispatch(userExists());
//   }, [dispatch]);

//   const handleAddressSelect = (address: string) => {
//     setSelectedAddress(address);
//     localStorage.setItem("selectedAddress", address); // Save selected address to local storage
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="fixed top-0 w-full z-40 flex flex-col justify-center">
//       <MobileNav />
//       <div
//         className={`hidden md:flex ${
//           isScrolled ? "bg-white" : "bg-white/100"
//         } px-body w-full min-h-[90.97px]`}
//       >
//         <div className="flex-1 gap-8 flex items-center">
//           <Link href={"/"} className="max-w-[150px]">
//             <Image
//               src={require("../../images/logo.png")}
//               alt="logo"
//               className="w-full h-16 object-contain"
//             />
//           </Link>
//           <div className="flex gap-1 relative">
//             <IoLocationOutline />
//             <div
//               className="text-[14px] font-medium cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               Delivery to {selectedAddress || "Select Address"}
//             </div>
//             {dropdownOpen && (
//               <div className="absolute top-4 z-10 bg-gray-100 shadow-lg rounded mt-2 w-60">
//                 <ul className="max-h-48 overflow-y-auto">
//                   {loading ? (
//                     <li className="p-2">Loading addresses...</li>
//                   ) : addresses.length > 0 ? (
//                     addresses
//                       .filter(
//                         (address): address is UserAddress => !!address.address
//                       ) // Type guard
//                       .map((address, index) => (
//                         <li
//                           key={index}
//                           className="p-2 hover:bg-gray-200 cursor-pointer"
//                           onClick={() =>
//                             handleAddressSelect(
//                               `${address.address_type} - ${address.address}`
//                             )
//                           }
//                         >
//                           {address.address_type} - {address.address}
//                         </li>
//                       ))
//                   ) : (
//                     <li className="p-2">No addresses found.</li>
//                   )}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex gap-8 items-center justify-center">
//           <Link href="/my-wishlist-page">
//             <GoHeart className="md:h-[26px] md:w-[26px] bg-[white] text-primary" />
//           </Link>
//           <Link className="text-[14px] font-medium relative" href={"/cart"}>
//             <div className="flex flex-row items-center">
//               <Image src={Cart} alt="productImg" />
//               My Cart
//             </div>
//             {cartCount > 0 && (
//               <span className="absolute bottom-3.5 left-4 bg-green-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-[12px]">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           {userInfo ? (
//             <Link
//               href={"/my-account?tab=my-profile"}
//               className="flex items-center"
//             >
//               {userInfo.f_name} {userInfo.l_name}
//               {userInfo.image_fullpath ? (
//                 <img
//                   src={userInfo.image_fullpath}
//                   alt="User profile"
//                   className="w-10 h-10 rounded-full p-2"
//                 />
//               ) : (
//                 <MdOutlinePerson className="text-3xl text-primary" />
//               )}
//             </Link>
//           ) : (
//             <Link
//               className="flex items-center text-[14px] font-medium gap-1"
//               href="/login"
//               onClick={(e) => {
//                 e.preventDefault();
//                 dispatch(openLoginModal());
//                 document.body.classList.add("no-scroll");
//               }}
//               aria-label="Login or Signup"
//             >
//               <MdOutlinePerson className="text-3xl text-primary" />
//               <span>Login/Signup</span>
//             </Link>
//           )}
//         </div>
//       </div>
//       <NavCategories />
//       {isLoginOpen && <LoginModal />}
//     </div>
//   );
// };

// export default NavbarClient;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cart from "../../images/Buy.png";
import Link from "next/link";
import NavCategories from "./NavCategories";
import MobileNav from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAddress,
  openLoginModal,
  userExists,
} from "@/redux/slices/loginModalSlice";
import LoginModal from "../LoginModal/LoginModal";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { fetchAddresses } from "@/redux/slices/accountSlice";
import { useScrollDirection } from "@/utils/useScroll";
import { RootState, AppDispatch } from "@/redux/store";

interface UserAddress {
  address_type?: string;
  address: string;
  id: string;
}

const NavbarClient: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const isScrolled = useScrollDirection();

  const { isLoginOpen, userInfo } = useSelector(
    (state: RootState) => state.loginModal
  );
  const { addresses } = useSelector((state: RootState) => state.accountInfo);

  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.length;
  };

  useEffect(() => {
    // Set cart count
    setCartCount(getCartCount());

    // Fetch addresses and update loading state
    dispatch(fetchAddresses()).finally(() => setLoading(false));

    // Retrieve the selected address from local storage
    const storedAddress = localStorage.getItem("selectedAddress");
    if (storedAddress) {
      setSelectedAddress(storedAddress);
    }

    // Check if user exists
    dispatch(userExists());
  }, [dispatch]);

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address);
    localStorage.setItem("selectedAddress", address); // Save selected address to local storage
    setDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-40 flex flex-col justify-center">
      <MobileNav />
      <div
        className={`hidden md:flex ${
          isScrolled ? "bg-white" : "bg-white/100"
        } px-body w-full min-h-[90.97px]`}
      >
        <div className="flex-1 gap-8 flex items-center">
          <Link href={"/"} className="max-w-[150px]">
            <Image
              src={require("../../images/logo.png")}
              alt="logo"
              className="w-full h-16 object-contain"
            />
          </Link>
          <div className="flex gap-1 relative">
            <IoLocationOutline />
            <div
              className="text-[14px] font-medium cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {/* Show the selected address or 'Select Address' */}
              Delivery to {selectedAddress || "Select Address"}
            </div>
            {dropdownOpen && (
              <div className="absolute top-4 z-10 bg-gray-100 shadow-lg rounded mt-2 w-60">
                <ul className="max-h-48 overflow-y-auto">
                  {loading ? (
                    <li className="p-2">Loading addresses...</li>
                  ) : addresses.length === 0 ? (
                    <li className="p-2">No addresses found.</li>
                  ) : (
                    addresses
                      .filter(
                        (address): address is UserAddress => !!address.address
                      ) // Type guard
                      .map((address, index) => (
                        <li
                          key={index}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() =>
                            handleAddressSelect(
                              `${address.address_type} - ${address.address}`
                            )
                          }
                        >
                          {address.address_type} - {address.address}
                        </li>
                      ))
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8 items-center justify-center">
          <Link href="/my-wishlist-page">
            <GoHeart className="md:h-[26px] md:w-[26px] bg-[white] text-primary" />
          </Link>
          <Link className="text-[14px] font-medium relative" href={"/cart"}>
            <div className="flex flex-row items-center">
              <Image src={Cart} alt="productImg" />
              My Cart
            </div>
            {cartCount > 0 && (
              <span className="absolute bottom-3.5 left-4 bg-green-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-[12px]">
                {cartCount}
              </span>
            )}
          </Link>

          {userInfo ? (
            <Link
              href={"/my-account?tab=my-profile"}
              className="flex items-center"
            >
              {userInfo.f_name} {userInfo.l_name}
              {userInfo.image_fullpath ? (
                <img
                  src={userInfo.image_fullpath}
                  alt="User profile"
                  className="w-10 h-10 rounded-full p-2"
                />
              ) : (
                <MdOutlinePerson className="text-3xl text-primary" />
              )}
            </Link>
          ) : (
            <Link
              className="flex items-center text-[14px] font-medium gap-1"
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                dispatch(openLoginModal());
                document.body.classList.add("no-scroll");
              }}
              aria-label="Login or Signup"
            >
              <MdOutlinePerson className="text-3xl text-primary" />
              <span>Login/Signup</span>
            </Link>
          )}
        </div>
      </div>
      <NavCategories />
      {isLoginOpen && <LoginModal />}
    </div>
  );
};

export default NavbarClient;
