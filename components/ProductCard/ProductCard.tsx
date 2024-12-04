import { openLoginModal } from "@/redux/slices/loginModalSlice";
import { removeFromWishlistAsync } from "@/redux/slices/wishlistSlice";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface ProductProps {
  id: number;
  image?: any;
  category: string;
  name: string;
  weight: string;
  price: number;
  discountedPrice: number;
  discount: number;
  discountType: string;
  item: any;
}

const ProductCard: React.FC<ProductProps> = ({
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
  const [cart, setCart] = useState<any[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isWished, setIsWished] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // Initialize cart and wishlist from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    const productInCart = storedCart.find((prod: any) => prod.id === item?.id);
    setCartQuantity(productInCart ? productInCart.quantity : 0);

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const productInWishlist = wishlist.some((prod: any) => prod.id === id);
    setIsWished(productInWishlist);
  }, [item?.id, id]);

  const handleAddToCart = (product: any) => {
    let updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item: any) => item.id === product.id
    );

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    setCartQuantity(updatedCart[productIndex]?.quantity || 1);
    toast.success("Item added to cart.");
  };

  const toggleWishlist = async (id: number) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const productInWishlist = wishlist.some((prod: any) => prod.id === id);

    const token = localStorage.getItem("authToken");

    if (!token) {
      dispatch(openLoginModal());
      return;
    }

    if (productInWishlist) {
      // Remove from wishlist
      wishlist = wishlist.filter((prod: any) => prod.id !== id);
      setIsWished(false);
      dispatch(removeFromWishlistAsync(id));

      // Update local storage
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Item removed from wishlist.");
    } else {
      // Add to wishlist
      wishlist.push({ id });
      setIsWished(true);
      toast.success("Added to wishlist");

      // Send request to server to add to wishlist
      try {
        // const token = localStorage.getItem("authToken");
        const data = new FormData();
        data.append("product_ids[]", id.toString());

        const response = await fetch(
          "https://farmer.handpumpking.in/api/v1/customer/wish-list/add",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: data,
          }
        );

        if (!response.ok) throw new Error("Failed to add to wishlist");
      } catch (error: any) {
        toast.error(error.message);
      }
    }

    // Update local storage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  return (
    <div className="border border-[#F4F5FA] bg-white flex flex-col px-4 py-3 relative ">
      {/* <div className="absolute top-3 left-3 flex justify-between items-center">
        <p className="bg-[#E9F6F0] px-3 rounded-lg text-green-500 md:text-sm sm:text-xs text-[10px] font-semibold py-1.5">
          {discount}
          {discountType === "percent" ? "%" : discountType}
        </p>
      </div> */}
      <div className="absolute top-3 left-3 flex justify-between items-center">
        {discount > 0 && (
          <p className="bg-[#E9F6F0] px-3 rounded-lg text-green-500 md:text-sm sm:text-xs text-[10px] font-semibold py-1.5">
            {discount}
            {discountType === "percent" ? "%" : discountType}
          </p>
        )}
      </div>
      <div className="absolute top-3 right-3 flex justify-between items-center">
        <GoHeart
          className={`md:h-[26px] md:w-[26px] cursor-pointer ${
            isWished ? "text-red-500" : "text-gray-500"
          }`}
          onClick={() => toggleWishlist(id)}
        />
      </div>
      <Link href={`/product?id=${id}`}>
        <div className="w-[50%] h-auto mx-auto mb-8">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-contain "
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
        {/* <div className="flex-1 flex gap-1 sm:gap-1 md:gap-3 items-center">
          <b className="md:text-base sm:text-sm text-xs">
            Rs. {discountedPrice}
          </b>
          <p className="line-through text-red-600 md:text-sm sm:text-xs text-[10px]">
            Rs. {price}
          </p>
        </div> */}
        <div className="flex-1 flex gap-1 sm:gap-1 md:gap-3 items-center">
          {item?.discount > 0 ? (
            <>
              <b className="md:text-base sm:text-sm text-xs">
                Rs. {discountedPrice}
              </b>
              <p className="line-through text-red-600 md:text-sm sm:text-xs text-[10px]">
                Rs. {price}
              </p>
            </>
          ) : (
            <b className="md:text-base sm:text-sm text-xs">Rs. {price}</b>
          )}
        </div>

        {/* <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(item);
          }}
          className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-[5px] rounded-br-none flex justify-center items-center bg-black text-white font-semibold"
        >
          + {cartQuantity}
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
