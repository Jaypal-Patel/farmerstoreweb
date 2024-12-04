// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import Wishlistcard from "../ProductCard/Wishlistcard";

// const MyWishlist = () => {
//   const router = useRouter();
//   const pathName = usePathname();
//   const [wishlist, setWishlist] = useState([]); // State to hold wishlist products
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // State for error handling

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       const token = localStorage.getItem("authToken"); // Move inside useEffect

//       if (!token) {
//         setError("No authentication token found.");
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await axios.get(
//           "https://farmer.handpumpking.in/api/v1/customer/wish-list",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setWishlist(response.data.products);
//         console.log("data", response);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching wishlist data:", error);
//         setLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, []); // Add token as a dependency

//   return (
//     <div
//       className={`h-fit ${
//         pathName.includes("my-wishlist-page")
//           ? "block w-[100%] lg:mb-20 sm:mb-10 mb-5"
//           : "sm:block hidden lg:w-[68%] md:w-[68%] w-full"
//       }`}
//     >
//       {pathName.includes("my-wishlist-page") && (
//         <div
//           onClick={() => {
//             router.replace("/my-account?tab=my-profile");
//           }}
//           className="flex items-center gap-2 lg:py-10 py-5"
//         >
//           <FaArrowLeftLong className={`md:text-2xl text-xl cursor-pointer`} />
//           <h2 className="text-primary font-bold lg:text-2xl text-xl">
//             My Wishlist
//           </h2>
//         </div>
//       )}

//       {loading ? (
//         <p>Loading...</p> // Loading state UI
//       ) : (
//         <div
//           className={`grid lg:gap-y-8 lg:gap-x-8 gap-x-4 gap-y-4 ${
//             pathName.includes("my-wishlist-page")
//               ? "lg:grid-cols-4 sm:grid-cols-3 grid-cols-2"
//               : "sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2"
//           }`}
//         >
//           {wishlist.map((product: any) => (
//             <Wishlistcard
//               key={product.id} // Unique key for each product
//               category={
//                 product.category_ids.length > 0
//                   ? product.category_ids[0].id
//                   : "Uncategorized"
//               } // Adjust as per your data structure
//               discountedPrice={product.price * (1 - product.discount / 100)} // Calculate discounted price
//               image={product.image_fullpath[0]} // Use full image path
//               name={product.name}
//               price={product.price}
//               weight={product.unit} // Adjust this if you want to show something else
//               id={product.id}
//               discount={product.discount} // Discount from API
//               discountType={product.discount_type} // Discount type from API
//               item={product.description} // Provide a valid item description
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyWishlist;

"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import Wishlistcard from "../ProductCard/Wishlistcard";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchWishlist } from "@/redux/slices/wishlistSlice";

interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  discount: number;
  image_fullpath: string[];
  category_ids: { id: number }[];
  unit: string;
  discount_type: string;
  description: string;
}

const MyWishlist: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const {
    items: wishlist,
    loading,
    error,
  } = useSelector((state: RootState) => state.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  return (
    <div
      className={`h-fit ${
        pathName.includes("my-wishlist-page")
          ? "block w-[100%] lg:mb-20 sm:mb-10 mb-5"
          : "sm:block hidden lg:w-[68%] md:w-[68%] w-full"
      }`}
    >
      {pathName.includes("my-wishlist-page") && (
        <div
          onClick={() => {
            router.replace("/my-account?tab=my-profile");
          }}
          className="flex items-center gap-2 lg:py-10 py-5"
        >
          <FaArrowLeftLong className={`md:text-2xl text-xl cursor-pointer`} />
          <h2 className="text-primary font-bold lg:text-2xl text-xl">
            My Wishlist
          </h2>
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : wishlist.length === 0 ? (
        <p className="text-center text-gray-600 h-[30vh]">
          {/* Your wishlist is empty. */}
          <div className="flex flex-col items-center justify-center h-[30vh]">
            <p className="text-center text-gray-600 mt-4">
              Your wishlist is empty.
            </p>
          </div>{" "}
        </p>
      ) : (
        <>
          <h2 className="text-primary font-bold lg:text-2xl text-xl py-4">
            My Wishlist
          </h2>
          <div
            className={`grid lg:gap-y-8 lg:gap-x-8 gap-x-4 gap-y-4 ${
              pathName.includes("my-wishlist-page")
                ? "lg:grid-cols-4 sm:grid-cols-3 grid-cols-2"
                : "sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2"
            }`}
          >
            {wishlist.map((product: any) => (
              <Wishlistcard
                key={product.id}
                category={
                  product.category_ids.length > 0
                    ? product.category_ids[0].id
                    : "Uncategorized"
                }
                discountedPrice={product.price * (1 - product.discount / 100)}
                image={product.image_fullpath[0]}
                name={product.name}
                price={product.price}
                weight={product.unit}
                id={product.id}
                discount={product.discount}
                discountType={product.discount_type}
                item={product.description}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyWishlist;
