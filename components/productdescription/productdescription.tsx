"use client";
import { useEffect, useState } from "react";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { TbLocation } from "react-icons/tb";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { calculateDiscountedPrice } from "@/utils/calculateDiscount";
import { stripHtmlTags } from "../../utils/stripHtml";
import { Card } from "@mui/material";

interface Product {
  id: string;
  name: string;
  price: number;
  image_fullpath: string[];
  description: string;
  variations: { type: string; price: number; stock: number }[];
  discount?: number;
  discount_type?: string;
}

interface AddToCartButtonProps {
  product: Product;
  selectedVariantIndex: number; // Added to handle variant price
  updateCart: (product: Product) => void;
}

interface ProductDescriptionProps {
  cookie: any;
  slug: any;
  details: any;
  deets: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  selectedVariantIndex, // Use the variant index to access price
  updateCart,
}) => {
  // const handleAddToCart = () => {
  //   let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  //   const productIndex = cart.findIndex((item: any) => item.id === product.id);
  //   console.log("cart", cart);

  //   // Check if the product has variations
  //   const selectedVariant = product.variations && product.variations.length > 0
  //     ? {
  //         type: product.variations[selectedVariantIndex].type,
  //         price: product.variations[selectedVariantIndex].price,
  //         stock: product.variations[selectedVariantIndex].stock,
  //       }
  //     : null; // If no variation, selectedVariant will be null

  //   if (productIndex !== -1) {
  //     // If the product already exists in the cart, increase the quantity
  //     cart[productIndex].quantity += 1;
  //   } else {
  //     // If the product doesn't exist in the cart, add it
  //     cart.push({
  //       ...product,
  //       price: selectedVariant ? selectedVariant.price : product.price, // Use the variant price if available, otherwise use product price
  //       quantity: 1,
  //       variation: selectedVariant ? [selectedVariant] : [], // Include selected variant if available, otherwise empty array
  //     });
  //   }

  //   console.log("cart1", cart);

  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   toast.success("Item added to cart.");
  //   updateCart(cart);
  // };
  // const handleAddToCart = () => {
  //   let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  //   const selectedVariant =
  //     product.variations && product.variations.length > 0
  //       ? product.variations[selectedVariantIndex]
  //       : null;

  //   // Create a unique variant ID if it's available
  //   const variantId = selectedVariant
  //     ? `${product.id}-${selectedVariant.type}`
  //     : product.id;

  //   const productIndex = cart.findIndex(
  //     (item: any) => item.variantId === variantId
  //   );

  //   // If the product already exists in the cart (by variant ID), increase the quantity
  //   if (productIndex !== -1) {
  //     cart[productIndex].quantity += 1;
  //   } else {
  //     // Add the product with its variant to the cart
  //     cart.push({
  //       ...product,
  //       variantId: variantId, // Use unique ID for the variant
  //       price: selectedVariant ? selectedVariant.price : product.price,
  //       quantity: 1,
  //       variation: selectedVariant ? [selectedVariant] : [], // Add selected variant info
  //     });
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   toast.success("Item added to cart.");
  //   updateCart(cart);
  // };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const selectedVariant =
      product.variations && product.variations.length > 0
        ? product.variations[selectedVariantIndex]
        : null;

    // Create a unique variant ID by combining product ID and variant type
    const variantId = selectedVariant
      ? `${product.id}-${selectedVariant.type}`
      : product.id;

    // Check if the product with this variant is already in the cart
    const productIndex = cart.findIndex(
      (item: any) => item.variantId === variantId
    );

    if (productIndex !== -1) {
      // If the variant is already in the cart, merge by increasing the quantity
      cart[productIndex].quantity += 1;
    } else {
      // If the variant is not in the cart, add it as a new item
      cart.push({
        ...product,
        variantId: variantId, // Unique ID for the variant
        price: selectedVariant ? selectedVariant.price : product.price,
        quantity: 1,
        variation: selectedVariant ? [selectedVariant] : [], // Include the selected variant
      });
    }

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show success toast
    toast.success("Item added to cart.");

    // Update the cart state in the parent component
    updateCart(cart);
  };
  return (
    <button
      type="button"
      className="text-white text-xs sm:text-sm md:text-base font-semibold bg-green-500 rounded-md h-8 sm:h-12 md:h-16 w-[90%] px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 flex justify-center items-center"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
};

const Productdescription: React.FC<ProductDescriptionProps> = ({
  cookie,
  slug,
  details,
  deets,
}) => {
  const [isSubscription, setIsSubscription] = useState(false);
  const [selectedImage, setSelectedImage] = useState(deets?.image_fullpath[0]);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const DUMMY_ICONS = [
    { icon: <FaFacebookF /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaInstagram /> },
    { icon: <FaTwitter /> },
  ];

  const updateCart = (updatedCart: any) => {
    setCart(updatedCart);
    const productInCart = updatedCart.find((item: any) => item.id === deets.id);
    setCartQuantity(productInCart ? productInCart.quantity : 0);
  };
  console.log("selectedVariantIndex", selectedVariantIndex);

  return (
    <div className="px-body mt-28 sm:mt-44 md:mt-60">
      <div className="flex flex-col md:flex-row justify-center gap-8 sm:gap-12 md:gap-16">
        <div className="md:w-[45%]">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            <div className="flex justify-center items-center bg-[#FAFAFA] p-16 sm:p-20 md:p-24 aspect-square">
              <Image
                src={selectedImage || deets?.image_fullpath[0]}
                alt={deets?.name}
                className="w-full h-full"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex gap-2 sm:gap-3 md:gap-4 w-full">
              {deets?.image_fullpath?.map((image: string, index: number) => (
                <div
                  className="w-[25%] bg-[#FAFAFA] p-1 sm:p-1.5 md:p-2"
                  key={index}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt=""
                    width={1000}
                    height={1000}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:w-[50%]">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-neutral-950">
            {deets?.name}
          </h2>

          <div className="flex gap-4 sm:gap-8 md:gap-12 items-center">
            <div className="text-xl sm:text-2xl md:text-3xl text-center text-green-500 font-bold">
              Rs{" "}
              {calculateDiscountedPrice(
                deets?.variations[selectedVariantIndex]?.price || deets?.price,
                deets?.discount,
                deets?.discount_type
              )}
            </div>
            {deets?.variations[selectedVariantIndex]?.price && (
              <div className="text-base sm:text-lg md:text-xl line-through font-medium text-center text-zinc-400">
                Rs {deets?.variations[selectedVariantIndex]?.price}
              </div>
            )}
          </div>
          <p className="text-neutral-600 text-xs sm:text-sm md:text-base font-medium w-full md:w-[90%]">
            {stripHtmlTags(deets?.description)}
          </p>
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <h2 className="text-black text-sm sm:text-base md:text-lg font-semibold">
              Quantity: {cartQuantity}
            </h2>
            <div className="my-1 md:my-2 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {deets?.variations && deets.variations.length > 0 ? (
                deets.variations.map((variant, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedVariantIndex(index);
                      setSelectedImage(deets.image_fullpath[index]);
                    }}
                    className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 bg-white rounded-md border ${
                      selectedVariantIndex === index
                        ? "border-primary"
                        : "border-stone-300"
                    } shadow-sm cursor-pointer`}
                  >
                    <p
                      className={`text-xs sm:text-sm md:text-base ${
                        selectedVariantIndex === index && "text-primary"
                      }`}
                    >
                      {variant.type}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No variations available</p>
              )}
            </div>
          </div>

          <AddToCartButton
            product={deets}
            selectedVariantIndex={selectedVariantIndex} // Pass variant index
            updateCart={updateCart}
          />
          <div className="flex justify-between items-center">
            <h2 className="text-black text-sm sm:text-base md:text-lg font-semibold">
              Share:
            </h2>
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              {DUMMY_ICONS.map((icon, index) => (
                <div key={index} className="cursor-pointer">
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdescription;
