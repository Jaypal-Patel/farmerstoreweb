// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { GrLocation } from "react-icons/gr";
// import { IoCallOutline } from "react-icons/io5";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaRegClock } from "react-icons/fa6";
// import logo from "../../images/logo.png";
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import topImg from "../../images/slider-bg-vert-1 3.svg";
// import { IoMdArrowForward } from "react-icons/io";
// import basketImg from "../../images/image 100.svg";
// import { toast } from "react-toastify";
// import Link from "next/link";
// import Popup from "./Popup";

// const DUMMY_DATA = [
//   {
//     heading: "Useful links",
//     subLinks: [
//       { name: "About", href: "about" },
//       { name: "Blogs", href: "blogs" },
//       { name: "Contact", href: "contact" },
//     ],
//   },
//   {
//     heading: "Account",
//     subLinks: [
//       { name: " Account", href: "my-account?tab=my-profile" },
//       { name: " Orders", href: "my-account?tab=my-order" },
//       { name: " Wishlist", href: "my-account?tab=my-wishlist" },
//       { name: "Payments", href: "" },
//     ],
//   },
// ];

// const DUMMY_ICONS = [
//   { icon: <FaFacebookF /> },
//   { icon: <FaLinkedinIn /> },
//   { icon: <FaInstagram /> },
//   { icon: <FaTwitter /> },
// ];

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [content, setContent] = useState<React.ReactNode>(null);

//   const handleOpen = async (tab: string) => {
//     try {
//       // Fetch data from the API
//       const response = await fetch(
//         `https://farmer.handpumpking.in/api/v1/pages`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       console.log(data);

//       // Determine which content to display based on the tab parameter
//       let content;
//       switch (tab) {
//         case "privacy-policy":
//           content = (
//             <div
//               className="max-h-[80vh] "
//               dangerouslySetInnerHTML={{
//                 __html:
//                   data.privacy_policy?.value ||
//                   "No privacy policy content available.",
//               }}
//             />
//           );
//           break;
//         case "refund_page":
//           content = (
//             <div
//               className="max-h-[80vh] "
//               dangerouslySetInnerHTML={{ __html: data.refund_page.content }}
//             />
//           );
//           break;
//         case "terms-conditions":
//           content = (
//             <div
//               className="max-h-[80vh] "
//               dangerouslySetInnerHTML={{
//                 __html:
//                   data.terms_and_conditions?.value ||
//                   "No terms and conditions content available.",
//               }}
//             />
//           );
//           break;
//         case "cancellation-policy":
//           content = (
//             <div
//               className="max-h-[80vh] "
//               dangerouslySetInnerHTML={{ __html: data.refund_page.content }}
//             />
//           );
//           break;
//         default:
//           content = <p>No content available for this tab.</p>;
//       }

//       // Set the content for the popup
//       setContent(content);
//       setIsOpen(true);
//     } catch (error) {
//       console.error(error);
//       setContent(<p>Error loading content.</p>);
//       setIsOpen(true);
//     }
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const subscribeNewsletter = async () => {
//     try {
//       const response = await fetch(
//         "https://farmer.handpumpking.in/api/v1/subscribe-newsletter",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         }
//       );

//       if (!response.ok) {
//         toast.error("Please Enter Your Mail");
//         throw new Error("Failed to subscribe");
//       }

//       const data = await response.json();
//       toast.success("Subscribed successfully!");
//       return data;
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   return (
//     <div className="h-auto bg-footer-image relative ">
//       <div className={`  absolute top-0 left-0 w-full `}>
//         <Image src={topImg} alt="" className="object-contain w-full" />
//       </div>
//       <div
//         className={`absolute z-10 top-0 left-0 left-1/2 transform -translate-x-1/2 bg-black md:px-16 sm:px-5 px-3 md:py-5 py-3 rounded-full w-[90%]  flex sm:gap-5 gap-1 items-center text-white justify-between`}
//       >
//         <h3 className="lg:text-xl sm:text-base text-sm font-semibold w-[50%] ">
//           Subscribe to newsletter
//         </h3>
//         <div
//           className={` w-[50%] flex items-center gap-1 border-b border-b-white newsletter-email sm:py-2 py-1 sm:px-5 px-2`}
//         >
//           <input
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={false}
//             type="text"
//             name=""
//             id=""
//             placeholder="Enter Email Address "
//             className="outline-0 bg-black w-[100%] text-white "
//           />
//           <div
//             className="border border-white  md:h-[28px] md:w-[28px]  h-[20px] w-[20px] flex items-center justify-center"
//             onClick={subscribeNewsletter}
//           >
//             <IoMdArrowForward className={`md:text-lg text-sm`} />
//           </div>
//         </div>
//       </div>
//       <div className={`  absolute bottom-0 right-0  xl:block hidden`}>
//         <Image src={basketImg} alt="basketImg" className="object-contain " />
//       </div>
//       <div
//         className={` sm:pt-[120px] pt-[80px]  md:pl-[6%] px-body  sm:pb-12 pb-6 relative `}
//       >
//         <div className="  grid lg:grid-cols-4 md:grid-cols-3   sm:grid-cols-2 grid-cols-1 xl:gap-x-5 md:gap-x-4 gap-x-2 gap-y-4  xl:w-[80%]  w-[100%]">
//           {DUMMY_DATA.map((item: any, idx: number) => {
//             return (
//               <div className=" flex flex-col md:gap-6 gap-4  " key={idx}>
//                 <h3 className=" relative font-bold md:text-2xl text-base text-[#4B2C10] ">
//                   {item.heading}
//                 </h3>
//                 <div className="flex flex-col md:gap-4 gap-2  cursor-pointer">
//                   {item.subLinks.map((item: any, idx: number) => {
//                     return (
//                       <Link key={idx} href={`${item.href}`}>
//                         <p className="text-sm text-black font-semibold hover:text-primary font-medium">
//                           {item.name}
//                         </p>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//           <div className=" flex flex-col md:gap-6 gap-4  ">
//             <h3 className=" relative font-bold md:text-2xl text-base text-[#4B2C10] ">
//               Help Center
//             </h3>
//             <div className="flex flex-col md:gap-4 gap-2 cursor-pointer">
//               <div onClick={() => handleOpen("privacy-policy")}>
//                 <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
//                   Privacy Policy
//                 </p>
//               </div>

//               <div onClick={() => handleOpen("terms-conditions")}>
//                 <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
//                   Terms and Conditions
//                 </p>
//               </div>

//               <div onClick={() => handleOpen("cancellation-policy")}>
//                 <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
//                   Cancellation Policy
//                 </p>
//               </div>

//               <div onClick={() => handleOpen("refund_page")}>
//                 <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
//                   Refund & Return
//                 </p>
//               </div>

//               <Popup isOpen={isOpen} onClose={handleClose} content={content} />
//             </div>
//           </div>
//           <div className=" flex flex-col md:gap-6 gap-4 text-black  ">
//             <h3 className=" relative font-bold md:text-2xl text-base text-[#4B2C10]">
//               Contact
//             </h3>
//             <div className="flex flex-col md:gap-4 gap-2  text-sm text-black font-semibold ">
//               <div className="flex md:gap-2 gap-1 cursor-pointer">
//                 <div className={`flex items-center md:gap-2 gap-1`}>
//                   <div>
//                     <GrLocation className={`text-primary md:text-xl text-lg`} />
//                   </div>
//                   <h5 className={`sm:text-sm text-small font-semibold`}>
//                     Address :
//                   </h5>
//                 </div>
//                 <div>
//                   <p className={`sm:text-small text-[#555555]`}>
//                     Pitampura, New Delhi
//                   </p>
//                 </div>
//               </div>
//               <div className="flex md:gap-2 gap-1 cursor-pointer">
//                 <div className={`flex items-center md:gap-2 gap-1`}>
//                   <div>
//                     <IoCallOutline
//                       className={`text-primary md:text-xl text-lg`}
//                     />
//                   </div>
//                   <h5 className={`text-sm font-semibold`}>Call Us :</h5>
//                 </div>
//                 <div>
//                   <p className={`text-small text-[#555555]`}>43893-3901</p>
//                 </div>
//               </div>
//               <div className="flex md:gap-2 gap-1 cursor-pointer">
//                 <div className={`flex items-center md:gap-2 gap-1`}>
//                   <div>
//                     <HiOutlineMail
//                       className={`text-primary md:text-xl text-lg`}
//                     />
//                   </div>
//                   <h5 className={`text-sm font-semibold`}>Email :</h5>
//                 </div>
//                 <div>
//                   <p className={`text-small text-[#555555] line-clamp-1`}>
//                     thefarmersstore@
//                   </p>
//                 </div>
//               </div>
//               <div className="flex md:gap-2 gap-1 cursor-pointer">
//                 <div className={`flex items-center md:gap-2 gap-1`}>
//                   <div>
//                     <FaRegClock className={`text-primary md:text-xl text-lg`} />
//                   </div>
//                   <h5 className={`text-sm font-semibold`}>Work Hours :</h5>
//                 </div>
//                 <div>
//                   <p className={`text-small text-[#555555]`}>8:00am - 12pm</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sm:flex grid grid-cols-2 sm:flex-row flex-col items-center justify-between gap-x-2 gap-y-3 px-body sm:py-5 py-5 border-t border-t-[#555555] relative z-30">
//         <div className=" md:w-1/3 sm:w-1/2 text-black sm:text-[14px] text-[12px] flex items-center sm:justify-start justify-center sm:gap-1 font-semibold ">
//           <p>
//             © 2023, All Rights Reserved by{" "}
//             <span className={`text-primary`}>The Farmer&apos;s Store</span>
//           </p>
//         </div>
//         <div className={`sm:w-1/3  md:flex justify-center hidden `}>
//           <Image src={logo} alt="logo" />
//         </div>
//         <div className="flex items-center sm:justify-end justify-center sm:gap-3 gap-2 md:w-1/3 sm:w-1/2 ">
//           {DUMMY_ICONS.map((icon: any, idx: number) => {
//             return (
//               <div
//                 key={idx}
//                 className=" sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center text-[#4B2C10] sm:text-xl text-sm"
//               >
//                 {icon.icon}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* 9023163678 */}
//       <a href="https://wa.me/+919023163678" target="_blank" id="whatsapp-icon">
//         <img
//           src="data:image/jpeg;base64,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"
//           alt="WhatsApp"
//           className="fixed bottom-5 h-14 right-1 bottom-4 md:bottom-32 z-50 rounded-full"
//         />
//       </a>
//     </div>
//   );
// };

// export default Footer;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
import logo from "../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import topImg from "../../images/slider-bg-vert-1 3.svg";
import { IoMdArrowForward } from "react-icons/io";
import basketImg from "../../images/image 100.svg";
import { toast } from "react-toastify";
import Link from "next/link";
import Popup from "./Popup";

const DUMMY_DATA = [
  {
    heading: "Useful links",
    subLinks: [
      { name: "About", href: "about" },
      { name: "Blogs", href: "blogs" },
      { name: "Contact", href: "contact" },
    ],
  },
  {
    heading: "Account",
    subLinks: [
      { name: " Account", href: "my-account?tab=my-profile" },
      { name: " Orders", href: "my-account?tab=my-order" },
      { name: " Wishlist", href: "my-account?tab=my-wishlist" },
      { name: "Payments", href: "" },
    ],
  },
];

const DUMMY_ICONS = [
  { icon: <FaFacebookF /> },
  { icon: <FaLinkedinIn /> },
  { icon: <FaInstagram /> },
  { icon: <FaTwitter /> },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribeNewsletter = async () => {
    try {
      const response = await fetch(
        "https://farmer.handpumpking.in/api/v1/subscribe-newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        toast.error("Please Enter Your Mail");
        throw new Error("Failed to subscribe");
      }

      const data = await response.json();
      toast.success("Subscribed successfully!");
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="h-auto bg-footer-image relative ">
      <div className={`  absolute top-0 left-0 w-full `}>
        <Image src={topImg} alt="" className="object-contain w-full" />
      </div>
      <div
        className={`absolute z-10 top-0 left-0 left-1/2 transform -translate-x-1/2 bg-black md:px-16 sm:px-5 px-3 md:py-5 py-3 rounded-full w-[90%]  flex sm:gap-5 gap-1 items-center text-white justify-between`}
      >
        <h3 className="lg:text-xl sm:text-base text-sm font-semibold w-[50%] ">
          Subscribe to newsletter
        </h3>
        <div
          className={` w-[50%] flex items-center gap-1 border-b border-b-white newsletter-email sm:py-2 py-1 sm:px-5 px-2`}
        >
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            disabled={false}
            type="text"
            name=""
            id=""
            placeholder="Enter Email Address "
            className="outline-0 bg-black w-[100%] text-white placeholder:text-[1px] "
          />
          <div
            className="border border-white  md:h-[28px] md:w-[28px]  h-[20px] w-[20px] flex items-center justify-center"
            onClick={subscribeNewsletter}
          >
            <IoMdArrowForward className={`md:text-lg text-sm boarder-0`} />
          </div>
        </div>
      </div>
      <div className={`  absolute bottom-0 right-0  xl:block hidden`}>
        <Image src={basketImg} alt="basketImg" className="object-contain " />
      </div>
      <div
        className={` sm:pt-[120px] pt-[80px]  md:pl-[6%] px-body  sm:pb-12 pb-6 relative `}
      >
        <div className="  grid lg:grid-cols-4 md:grid-cols-3   sm:grid-cols-2 grid-cols-1 xl:gap-x-5 md:gap-x-4 gap-x-2 gap-y-4  xl:w-[80%]  w-[100%]">
          {DUMMY_DATA.map((item: any, idx: number) => {
            return (
              <div className=" flex flex-col md:gap-6 gap-4  " key={idx}>
                <h3 className=" relative font-bold md:text-2xl text-base text-[#4B2C10] ">
                  {item.heading}
                </h3>
                <div className="flex flex-col md:gap-4 gap-2  cursor-pointer">
                  {item.subLinks.map((item: any, idx: number) => {
                    return (
                      <Link key={idx} href={`${item.href}`}>
                        <p className="text-sm text-black font-semibold hover:text-primary font-medium">
                          {item.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className=" flex flex-col md:gap-6 gap-4  ">
            <h3 className=" relative font-bold md:text-2xl text-base text-[#4B2C10] ">
              Help Center
            </h3>
            <div className="flex flex-col md:gap-4 gap-2 cursor-pointer">
              <Link href={"/pages?privacy-policy"}>
                <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
                  Privacy Policy
                </p>
              </Link>

              <Link href={"/pages?terms-conditions"}>
                <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
                  Terms and Conditions
                </p>
              </Link>

              <Link href={"/pages?cancellation-policy"}>
                <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
                  Cancellation Policy
                </p>
              </Link>

              <Link href={"/pages?refund_page"}>
                {" "}
                <p className="text-sm text-black font-semibold hover:text-primary font-medium cursor-pointer">
                  Refund & Return
                </p>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col md:gap-6 gap-4 text-black  ">
            <h3 className=" relative font-bold md:text-2xl text-base text-[#4B2C10]">
              Contact
            </h3>
            <div className="flex flex-col md:gap-4 gap-2  text-sm text-black font-semibold ">
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <div className={`flex items-center md:gap-2 gap-1`}>
                  <div>
                    <GrLocation className={`text-primary md:text-xl text-lg`} />
                  </div>
                  <h5 className={`sm:text-sm text-small font-semibold`}>
                    Address :
                  </h5>
                </div>
                <div>
                  <p className={`sm:text-small text-[#555555]`}>
                    Pitampura, New Delhi
                  </p>
                </div>
              </div>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <div className={`flex items-center md:gap-2 gap-1`}>
                  <div>
                    <IoCallOutline
                      className={`text-primary md:text-xl text-lg`}
                    />
                  </div>
                  <h5 className={`text-sm font-semibold`}>Call Us :</h5>
                </div>
                <div>
                  <p className={`text-small text-[#555555]`}>43893-3901</p>
                </div>
              </div>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <div className={`flex items-center md:gap-2 gap-1`}>
                  <div>
                    <HiOutlineMail
                      className={`text-primary md:text-xl text-lg`}
                    />
                  </div>
                  <h5 className={`text-sm font-semibold`}>Email :</h5>
                </div>
                <div>
                  <p className={`text-small text-[#555555] line-clamp-1`}>
                    {/* thefarmersstore@ */}
                    theGreenheart@
                  </p>
                </div>
              </div>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <div className={`flex items-center md:gap-2 gap-1`}>
                  <div>
                    <FaRegClock className={`text-primary md:text-xl text-lg`} />
                  </div>
                  <h5 className={`text-sm font-semibold`}>Work Hours :</h5>
                </div>
                <div>
                  <p className={`text-small text-[#555555]`}>8:00am - 12pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex grid grid-cols-2 sm:flex-row flex-col items-center justify-between gap-x-2 gap-y-3 px-body sm:py-5 py-5 border-t border-t-[#555555] relative z-30">
        <div className=" md:w-1/3 sm:w-1/2 text-black sm:text-[14px] text-[12px] flex items-center sm:justify-start justify-center sm:gap-1 font-semibold ">
          <p>
            © 2023, All Rights Reserved by{" "}
            {/* <span className={`text-primary`}>The farmer&apos;s Store</span> */}
            <span className={`text-primary`}>The GreenHeart</span>
          </p>
        </div>
        <div className={`sm:w-1/3  md:flex justify-center hidden `}>
          <Image src={logo} alt="logo" className="h-10 w-10" />
        </div>
        <div className="flex items-center sm:justify-end justify-center sm:gap-3 gap-2 md:w-1/3 sm:w-1/2 ">
          {DUMMY_ICONS.map((icon: any, idx: number) => {
            return (
              <div
                key={idx}
                className=" sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center text-[#4B2C10] sm:text-xl text-sm"
              >
                {icon.icon}
              </div>
            );
          })}
        </div>
      </div>

      {/* 9023163678 */}
      <a href="https://wa.me/+919023163678" target="_blank" id="whatsapp-icon">
        <img
          src="data:image/jpeg;base64,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"
          alt="WhatsApp"
          className="fixed bottom-5 h-14 right-1 bottom-4 md:bottom-32 z-50 rounded-full"
        />
      </a>
    </div>
  );
};

export default Footer;
