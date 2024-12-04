// "use client"
// import React from 'react'
// import OrderedProductCard from './OrderedProductCard'
// import apple from "../../images/apple.png";
// import berries from "../../images/berries.png";
// import onion from "../../images/image 11.svg"
// import star from "../../images/Star 10.svg"
// import Image from 'next/image';
// import { FaCartPlus } from "react-icons/fa6";
// import { FaBox } from "react-icons/fa";
// import { TfiWallet } from "react-icons/tfi";

// const OrderDetails = () => {
//   return (
//     <>
//     <div>
//       <div className=' flex items-center justify-between bg-[#E8FDEB] lg:px-5 px-3 lg:py-5 py-3 rounded-tl-2xl rounded-tr-2xl '>
//             <div className='flex flex-col gap-1 '>
//                 <h4 className='text-[#777777] md:text-sm text-xs font-semibold'>Order Number</h4>
//             <h2 className='md:text-base text-sm font-semibold'>#12836463869</h2>
//             </div>
//             <div className='flex sm:flex-row flex-col items-center lg:gap-x-5 gap-x-2 gap-y-2 md:text-sm text-xs font-semibold'>
//                 <button  className={`bg-primary text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md`}>Help</button>
//                 <button className='bg-[#4B2C10] text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md'>Download Invoice</button>

//             </div>
//         </div>
//      <div className=' sm:px-5 px-3 border-l border-l-[#EEF0F5] border-r border-r-[#EEF0F5] border-b border-b-[#EEF0F5] rounded-bl-2xl rounded-br-2xl'>
//       <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-2 gap-y-4   sm:py-6 py-4'>
//         <div className='flex items-center gap-4  '>
//           <div className='w-[20%] sm:w-auto '>
//           <div className={`bg-primary sm:w-[60px] sm:h-[60px] h-[50px] w-[50px] rounded-full flex items-center justify-center`}>
//             <FaCartPlus className={`text-white text-xl`}/></div>
//             </div>
//           <div className={`flex flex-col gap-1 sm:w-auto  w-[80%]`}>
//             <h4 className='text-base font-semibold'>Order Delivered</h4>
//             <p className='text-[#999999] text-sm'>29 Dec 2024, 08:00 pm</p>
//           </div>
//         </div>
//         <div className='flex items-center gap-4  '>
//           <div className='w-[20%] sm:w-auto '>
//           <div className={`bg-primary sm:w-[60px] sm:h-[60px] h-[50px] w-[50px] rounded-full flex items-center justify-center`}>
//             <FaBox className={`text-white sm:text-xl text-base`}/></div>
//             </div>
//           <div className={`flex flex-col gap-1 sm:w-auto  w-[80%]`}>
//             <h4 className='text-base font-semibold'>Delivered to</h4>
//             <p className='text-[#999999] text-sm '>3rd Floor, WZ Block, Vikaspuri New Delhi - 110023</p>
//           </div>
//         </div>

//       </div>
//      <div className='w-[100%] py-6  border-b  border-b-[#EEF0F5] border-t  border-t-[#EEF0F5]   '>
//       <h3 className='sm:text-lg text-base font-bold '>Product Details</h3>
//       <div className='flex w-[100%]  border-b  border-b-[#EEF0F5] border-[red] justify-between items-center  gap-x-5 sm:py-6 py-3'>
//             <div className='flex  justify-between  w-[80%] '>
//                 <div className='flex gap-4 w-[100%] '>
//          <div className="sm:w-[134px] sm:h-[126px] w-[100px] h-[90px]">
//         <Image
//           src={berries}
//           alt={"ddsg"}
//           className="w-full h-full object-contain "
//         />
//       </div>
//       <div className='flex flex-col gap-8 w-fit '>
//         <div>
//       <p className="text-sm font-medium text-[#727272]">Fruits</p>
//       <h6 className="text-base font-semibold my-1">Blue Berries</h6>
//       </div>
//       <div className="text-sm font-semibold text-black flex items-center gap-1"><p className='font-semibold text-black'>Qty :</p>250 gms</div>
//       </div>
//       </div>
//       </div>
//       <div className='w-[20%] text-end flex flex-col  gap-2'>
//       <p className='font-bold text-black sm:text-lg text-base sm:px-16 '>Rs. 69</p>
//       </div>
//     </div>
//     <div className='flex w-[100%]   justify-between items-center  gap-x-5 sm:py-6 py-3'>
//             <div className='flex  justify-between  w-[80%] '>
//                 <div className=' flex gap-4 w-[100%] '>
//          <div className="sm:w-[134px] sm:h-[126px] w-[100px] h-[90px]">
//         <Image
//           src={onion}
//           alt={"ddsg"}
//           className="w-full h-full object-contain "
//         />
//       </div>
//       <div className=' flex flex-col gap-8 w-fit '>
//         <div>
//       <p className="text-sm font-medium text-[#727272]">Fruits</p>
//       <h6 className="text-base font-semibold my-1">Blue Berries</h6>
//       </div>
//       <div className="text-sm font-semibold text-black flex items-center gap-1"><p className='font-semibold text-black'>Qty :</p>1 kg</div>
//       </div>
//       </div>
//       </div>
//       <div className='w-[20%] text-end flex flex-col  gap-2'>
//       <p className='font-bold text-black sm:text-lg text-base sm:px-16 '>Rs 45</p>
//       </div>
//     </div>
//     </div>

//        <div className='flex sm:flex-row flex-col gap-y-4  w-full  sm:py-5 py-3'>
//        <h1 className='sm:w-[50%] w-[100%] sm:text-lg text-base font-bold'>Payment Details</h1>
//         <div className='sm:w-[50%] w-[100%]  flex flex-col sm:gap-4 gap-2'>
//             <div className='flex sm:text-base text-sm justify-between'>
//                 <h4 className='font-semibold text-[#727272]'>Price</h4>
//                 <h4 className='font-semibold text-black '>Rs. 99</h4>
//             </div>
//             <div className='flex sm:text-base text-sm justify-between'>
//                 <h4 className='font-semibold text-[#727272]'>Subtotal</h4>
//                 <h4 className='font-semibold text-black '>Rs. 99</h4>
//             </div>
//             <div className='flex sm:text-base text-sm justify-between'>
//                 <h4 className='font-semibold text-[#727272]'>Shipping Fees</h4>
//                 <h4 className='font-semibold text-black '>Rs. 20</h4>
//             </div>
//             <div className='flex sm:text-base text-sm justify-between'>
//                 <h4 className='font-semibold text-[#727272]'>Coupon/ Discount</h4>
//                 <h4 className='font-semibold text-black '>Rs. 40</h4>
//             </div>
//             <div className='flex sm:text-base text-sm justify-between'>
//                 <h4 className='font-semibold text-[#727272]'>Taxes</h4>
//                 <h4 className='font-semibold text-black '>Rs. 20</h4>
//             </div>
//             <div className='h-1 w-full border-b border-b-[#EEF0F5]'>
//                 {/* <h4 className='font-semibold text-[#727272]'>Price</h4>
//                 <h4 className='font-semibold text-black '>Rs. 99</h4> */}
//             </div>
//             <div className='flex sm:text-lg text-base justify-between text-black font-bold'>
//                 <h4 className='font-semibold '>Total</h4>
//                 <h4 className='font-semibold  '>Rs. 89</h4>
//             </div>

//         </div>
//        </div>
//        <div className='flex justify-between font-bold sm:text-lg text-base  sm:py-6 py-3   border-t border-t-[#EEF0F5]'>
//             <h1>Payment Method</h1>
//             <h1 className='font-semibold text-[#39B54A] flex items-center gap-2'><TfiWallet className={`text-xl font-bold`}/> Wallet</h1>
//           </div>
//        <div></div>
//           </div>
//           </div>
//     </>
//   )
// }

// export default OrderDetails

// // tarun sir ka code
"use client";
import React from "react";
import OrderedProductCard from "./OrderedProductCard";
import Image from "next/image";
import { FaCartPlus, FaBox } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";

interface ProductDetail {
  product_details: string;
  quantity: number;
  unit: string;
  price: number;
}

interface DeliveryAddress {
  house: string;
  floor: string;
  city: string;
}

interface Order {
  id: string;
  order_amount: number;
  delivery_charge: number;
  coupon_discount_amount: number;
  total_tax_amount: number;
  payment_method: string;
  details: ProductDetail[];
  // delivery_address: DeliveryAddress;
}

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onClose }) => {
  const {
    id,
    order_amount,
    delivery_charge,
    coupon_discount_amount,
    total_tax_amount,
    payment_method,
    details,
    // delivery_address,
  } = order;

  return (
    <>
      <div>
        <div className="flex items-center justify-between bg-[#E8FDEB] lg:px-5 px-3 lg:py-5 py-3 rounded-tl-2xl rounded-tr-2xl">
          <div className="flex flex-col gap-1">
            <h4 className="text-[#777777] md:text-sm text-xs font-semibold">
              Order Number
            </h4>
            <h2 className="md:text-base text-sm font-semibold">#{order.id}</h2>
          </div>
          <div className="flex sm:flex-row flex-col items-center lg:gap-x-5 gap-x-2 gap-y-2 md:text-sm text-xs font-semibold">
            <button className="bg-primary text-white lg:w-[166px] w-[120px] lg:py-4 py-3 rounded-md">
              Help
            </button>
            <button className="bg-[#4B2C10] text-white lg:w-[166px] w-[120px] lg:py-4 py-3 rounded-md">
              Download Invoice
            </button>
          </div>
        </div>

        <div className="sm:px-5 px-3 border-l border-l-[#EEF0F5] border-r border-r-[#EEF0F5] border-b border-b-[#EEF0F5] rounded-bl-2xl rounded-br-2xl">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-2 gap-y-4 sm:py-6 py-4">
            <div className="flex items-center gap-4">
              <div className="w-[20%] sm:w-auto">
                <div className="bg-primary sm:w-[60px] sm:h-[60px] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <FaCartPlus className="text-white text-xl" />
                </div>
              </div>
              <div className="flex flex-col gap-1 sm:w-auto w-[80%]">
                <h4 className="text-base font-semibold">Order Delivered</h4>
                <p className="text-[#999999] text-sm">29 Dec 2024, 08:00 pm</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[20%] sm:w-auto">
                <div className="bg-primary sm:w-[60px] sm:h-[60px] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <FaBox className="text-white sm:text-xl text-base" />
                </div>
              </div>
              <div className="flex flex-col gap-1 sm:w-auto w-[80%]">
                <h4 className="text-base font-semibold">Delivered to</h4>
                {/* <p className="text-[#999999] text-sm">
                  {delivery_address
                    ? `${delivery_address.house}, ${delivery_address.floor}, ${delivery_address.city}`
                    : "Address not available"}
                </p> */}
              </div>
            </div>
          </div>

          <div className="w-[100%] py-6 border-b border-b-[#EEF0F5] border-t border-t-[#EEF0F5]">
            <h3 className="sm:text-lg text-base font-bold">Product Details</h3>
            {order.details.map((detail: any, index: number) => {
              let productDetails;
              try {
                productDetails = JSON.parse(detail.product_details);
              } catch (error) {
                console.error("Error parsing product details:", error);
                productDetails = {};
              }

              return (
                <div
                  key={index}
                  className="flex w-[100%] justify-between items-center gap-x-5 sm:py-6 py-3"
                >
                  <div className="flex justify-between w-[80%]">
                    <div className="flex gap-4 w-[100%]">
                      <div className="sm:w-[134px] sm:h-[126px] w-[100px] h-[90px]">
                        {productDetails.image_fullpath &&
                        productDetails.image_fullpath.length > 0 ? (
                          <Image
                            src={productDetails.image_fullpath[0]}
                            alt={productDetails.name}
                            className="w-full h-full object-contain"
                            width={134}
                            height={126}
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-gray-200">
                            <p>No Image Available</p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-8 w-fit">
                        <div>
                          <p className="text-sm font-medium text-[#727272]">
                            {productDetails.category_ids
                              ? productDetails.category_ids[0].name
                              : "No Category"}
                          </p>
                          <h6 className="text-base font-semibold my-1">
                            {productDetails.name}
                          </h6>
                        </div>
                        <div className="text-sm font-semibold text-black flex items-center gap-1">
                          <p className="font-semibold text-black">Qty :</p>
                          {detail.quantity} {detail.unit}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] text-end flex flex-col gap-2">
                    <p className="font-bold text-black sm:text-lg text-base sm:px-16">
                      Rs. {detail.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex sm:flex-row flex-col gap-y-4 w-full sm:py-5 py-3">
            <h1 className="sm:w-[50%] w-[100%] sm:text-lg text-base font-bold">
              Payment Details
            </h1>
            <div className="sm:w-[50%] w-[100%] flex flex-col sm:gap-4 gap-2">
              <div className="flex sm:text-base text-sm justify-between">
                <h4 className="font-semibold text-[#727272]">Price</h4>
                <h4 className="font-semibold text-black">
                  Rs. {order.order_amount}
                </h4>
              </div>
              <div className="flex sm:text-base text-sm justify-between">
                <h4 className="font-semibold text-[#727272]">Subtotal</h4>
                <h4 className="font-semibold text-black">
                  Rs. {order.order_amount}
                </h4>
              </div>
              <div className="flex sm:text-base text-sm justify-between">
                <h4 className="font-semibold text-[#727272]">Shipping Fees</h4>
                <h4 className="font-semibold text-black">
                  Rs. {order.delivery_charge}
                </h4>
              </div>
              <div className="flex sm:text-base text-sm justify-between">
                <h4 className="font-semibold text-[#727272]">
                  Coupon/Discount
                </h4>
                <h4 className="font-semibold text-black">
                  Rs. {order.coupon_discount_amount}
                </h4>
              </div>
              <div className="flex sm:text-base text-sm justify-between">
                <h4 className="font-semibold text-[#727272]">Taxes</h4>
                <h4 className="font-semibold text-black">
                  Rs. {order.total_tax_amount}
                </h4>
              </div>
              <div className="flex sm:text-lg text-base justify-between text-black font-bold">
                <h4 className="font-semibold">Total</h4>
                <h4 className="font-semibold">
                  Rs.{" "}
                  {order.order_amount +
                    order.delivery_charge +
                    order.total_tax_amount -
                    order.coupon_discount_amount}
                </h4>
              </div>
            </div>
          </div>

          <div className="flex justify-between font-bold sm:text-lg text-base sm:py-6 py-3 border-t border-t-[#EEF0F5]">
            <h1>Payment Method</h1>
            <h1 className="font-semibold text-[#39B54A] flex items-center gap-2">
              <TfiWallet className="text-xl font-bold" />{" "}
              {payment_method === "cash_on_delivery"
                ? "Cash on Delivery"
                : "Wallet"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
