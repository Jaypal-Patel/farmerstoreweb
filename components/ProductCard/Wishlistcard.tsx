// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FiDelete } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { toast } from "react-toastify";

// interface ProductProps {
//   id: any;
//   image: any;
//   category: string;
//   name: string;
//   weight: string;
//   price: any;
//   discountedPrice: any;
//   discount: any;
//   discountType: any;
//   item: any;
// }

// const Wishlistcard: React.FC<ProductProps> = ({
//   id,
//   category,
//   discountedPrice,
//   image,
//   name,
//   price,
//   weight,
//   discount,
//   discountType,
//   item,
// }) => {
//   const [cart, setCart] = useState([]);
//   const [cartQuantity, setCartQuantity] = useState(0);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(cart);

//     const productInCart = cart.find((prod: any) => prod.id === item?.id);
//     if (productInCart) {
//       setCartQuantity(productInCart.quantity);
//     } else {
//       setCartQuantity(0);
//     }
//   }, [item?.id]);

//   const handleAddToCart = (product: any) => {
//     let cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     const productIndex = cart.findIndex((item: any) => item.id === product.id);

//     if (productIndex !== -1) {
//       cart[productIndex].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     toast.success("Item added to cart.");
//     updateCart(cart);
//   };

//   const updateCart = (updatedCart: any) => {
//     setCart(updatedCart);
//     const productInCart = updatedCart.find((prod: any) => prod.id === item.id);
//     if (productInCart) {
//       setCartQuantity(productInCart.quantity);
//     } else {
//       setCartQuantity(0);
//     }
//   };

//   const addtowishDelete = async (id: any) => {
//     const token = localStorage.getItem("authToken");

//     // Prepare the data to be sent in JSON format
//     const data = {
//       product_ids: [id], // Sending the product IDs as an array in JSON format
//     };

//     try {
//       const response = await fetch(
//         "https://farmer.handpumpking.in/api/v1/customer/wish-list/remove",
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json", // Send as JSON
//           },
//           body: JSON.stringify(data), // Stringify the data for sending as JSON
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       console.log("Removed from wishlist:", result);
//     } catch (error) {
//       console.error("Error removing from wishlist:", error);
//     }
//   };

//   return (
//     <div className="border border-[#F4F5FA] bg-white flex flex-col px-4 py-3 relative">
//       <div className="absolute top-3 left-3 flex justify-between items-center">
//         <p className="bg-[#E9F6F0] px-3 rounded-lg text-green-500 md:text-sm sm:text-xs text-[10px] font-semibold py-1.5">
//           - {discount}
//           {discountType === "percent" ? "%" : discountType}
//         </p>
//       </div>
//       <div className="absolute top-3 right-3 flex justify-between items-center">
//         <MdDelete
//           className="md:h-[26px] md:w-[26px] bg-[white]"
//           onClick={() => addtowishDelete(id)}
//         />
//       </div>
//       <Link href={`/product?id=${id}`}>
//         <div className="w-[50%] h-[100px] mx-auto">
//           <Image
//             src={image}
//             alt={name}
//             width={200}
//             height={80}
//             className="object-contain"
//           />
//         </div>

//         <p className="md:text-sm sm:text-xs text-[10px] text-[#727272]">
//           {category}
//         </p>
//         <h6 className="md:text-base sm:text-sm text-xs font-bold my-1 truncate">
//           {name}
//         </h6>
//         <p className="md:text-sm sm:text-xs text-[10px] text-black font-semibold">
//           {weight}
//         </p>
//       </Link>
//       <div className="flex justify-between items-center mt-2">
//         <div className="flex-1 flex gap-1 sm:gap-1 md:gap-3 items-center">
//           <b className="md:text-base sm:text-sm text-xs">
//             Rs. {discountedPrice}
//           </b>
//           <p className="line-through text-red-600 md:text-sm sm:text-xs text-[10px]">
//             Rs. {price}
//           </p>
//         </div>

//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             handleAddToCart(item);
//             toast.success("Item added to cart");
//           }}
//           className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-[5px] rounded-br-none flex justify-center items-center bg-black text-white font-semibold"
//         >
//           + {cartQuantity}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Wishlistcard;

import { removeFromWishlistAsync } from "@/redux/slices/wishlistSlice";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface ProductProps {
  id: number;
  image: string;
  category: string;
  name: string;
  weight: string;
  price: number;
  discountedPrice: number;
  discount: number;
  discountType: string;
  item: {
    id: number;
    name: string;
    price: number;
    discount: number;
    image_fullpath: string[];
    category_ids: { id: number }[];
    description: string;
    unit: string;
  };
}

const Wishlistcard: React.FC<ProductProps> = ({
  id,
  category,
  discountedPrice,
  image,
  name,
  price,
  weight,
  discount,
  discountType,
  item,
}) => {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);

    const productInCart = cartData.find(
      (prod: { id: number }) => prod.id === item.id
    );
    setCartQuantity(productInCart ? productInCart.quantity : 0);
  }, [item.id]);

  const handleAddToCart = (product: any) => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");

    const productIndex = cartData.findIndex(
      (item: { id: number }) => item.id === product.id
    );

    if (productIndex !== -1) {
      cartData[productIndex].quantity += 1;
    } else {
      cartData.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    toast.success("Item added to cart.");
    updateCart(cartData);
  };

  const updateCart = (updatedCart: { id: number; quantity: number }[]) => {
    setCart(updatedCart);
    const productInCart = updatedCart.find((prod) => prod.id === item.id);
    setCartQuantity(productInCart ? productInCart.quantity : 0);
  };

  const handleRemoveFromWishlist = (id: number) => {
    // Dispatch the action to remove from the wishlist
    dispatch(removeFromWishlistAsync(id));

    // Update local storage
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const updatedWishlist = wishlist.filter((item: any) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Item removed from wishlist.");
  };

  return (
    <div className="border border-[#F4F5FA] bg-white flex flex-col px-4 py-3 relative">
      <div className="absolute top-3 left-3 flex justify-between items-center">
        <p className="bg-[#E9F6F0] px-3 rounded-lg text-green-500 md:text-sm sm:text-xs text-[10px] font-semibold py-1.5">
          {discount}
          {discountType === "percent" ? "%" : discountType}
        </p>
      </div>
      <div className="absolute top-3 right-3 flex justify-between items-center">
        <IoIosHeartEmpty
          className="md:h-[26px] md:w-[26px] bg-[white] cursor-pointer text-red-500 hover:text-black"
          onClick={() => handleRemoveFromWishlist(id)}
        />
      </div>
      <Link href={`/product?id=${id}`}>
        <div className="w-[50%] h-[100px] mx-auto">
          <Image
            src={image}
            alt={name}
            width={200}
            height={80}
            className="object-contain"
          />
        </div>

        <p className="md:text-sm sm:text-xs text-[10px] text-[#727272]">
          {category}
        </p>
        <h6 className="md:text-base sm:text-sm text-xs font-bold my-1 truncate">
          {name}
        </h6>
        <p className="md:text-sm sm:text-xs text-[10px] text-black font-semibold">
          {weight}
        </p>
      </Link>
      <div className="flex justify-between items-center mt-2">
        <div className="flex-1 flex gap-1 sm:gap-1 md:gap-3 items-center">
          <b className="md:text-base sm:text-sm text-xs">
            Rs. {discountedPrice}
          </b>
          <p className="line-through text-red-600 md:text-sm sm:text-xs text-[10px]">
            Rs. {price}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(item);
          }}
          className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-[5px] rounded-br-none flex justify-center items-center bg-black text-white font-semibold"
        >
          + {cartQuantity}
        </button>
      </div>
    </div>
  );
};

export default Wishlistcard;
