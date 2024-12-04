// "use client"
// import React, { useState } from 'react'
// import OrderedProductCard from './OrderedProductCard'
// import apple from "../../images/apple.png";
// import berries from "../../images/berries.png";
// import onion from "../../images/image 11.svg"
// import star from "../../images/Star 10.svg"
// import Image from 'next/image';
// import OrderDetails from './OrderDetails';
// import { IoReloadSharp } from "react-icons/io5";
// import { IoStarOutline } from "react-icons/io5";
// import coconut from "../../images/image 85.svg"

// const OrderCard = () => {
//     const [isOrderDetails,setIsOrderDetails]=useState(false)
//   return (
//   <>
//   {isOrderDetails?
//   <OrderDetails/>
//   :
//   <>
//   {/* {isOrderDetails? <OrderDetails/>: */}
//   <div className={``}>
//       <div className='flex items-center justify-between bg-[#E8FDEB] lg:px-5 px-3 lg:py-5 py-3 rounded-tl-2xl rounded-tr-2xl '>
//           <div className='flex flex-col gap-1  '>
//               <h4 className='text-[#777777] md:text-sm text-xs font-semibold'>Order Number</h4>
//           <h2 className='md:text-base text-sm font-semibold'>#12836463869</h2>
//           </div>
//           <div className='flex  sm:flex-row flex-col  items-center lg:gap-x-5 gap-x-2 gap-y-2 md:text-sm text-xs font-semibold'>
//               <button onClick={()=>setIsOrderDetails(true)} className={`bg-primary text-white lg:w-[166px] w-[120px]   lg:py-4 py-3 rounded-md`}>{isOrderDetails?"Help":"Order Details"}</button>
//               <button className='bg-[#4B2C10] text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md'>Download Invoice</button>

//           </div>
//       </div>
//       {/* {
//       isOrderDetails?
//         <OrderDetails/>
//         : */}
//         <div className='border-l border-l-[#EEF0F5] border-r border-r-[#EEF0F5] border-b border-b-[#EEF0F5] rounded-bl-2xl rounded-br-2xl'>
//         <OrderedProductCard
//         deliveryStatus={"Expected delivery"}
//          category="Fruits"
//           discountedPrice={69}
//           border={true}
//           image={berries}
//           name="Blue Berries"
//           price={180}
//           status={"Ongoing"}
//           weight="250 gms"/>

//           <div className={`px-5`}>
//             <div className='flex justify-between font-bold md:text-lg text-base border-t border-t-[#EEF0F5] border-b border-b-[#EEF0F5] py-6  '>
//             <h1>Total Payment</h1>
//             <h1>Rs 345</h1>
//             </div>
//           </div>
//           <div className='flex items-center justify-between py-6 px-5 '>
//           <div className='flex  gap-2  h-fit'>
//             {[1,2,3,4,5].map((item:any,idx:number)=>{
//                 return  <div key={idx}>
//                   <IoStarOutline className={`sm:text-2xl text-xl text-[#999999]`}/>
//             </div>
//             })}
//           </div>
//           <button className=' flex sm:text-base text-sm items-center gap-2 bg-primary text-white font-medium rounded-md md:px-8 px-4 md:py-3 py-2'>
//             <IoReloadSharp className={`sm:text-xl text-base font-bold`}/> <p>Reorder</p></button>
//           </div>
//           </div>
//            {/* } */}
//   </div>
//   <div className={``}>
//       <div className='flex items-center justify-between bg-[#E8FDEB] lg:px-5 px-3 lg:py-5 py-3 rounded-tl-2xl rounded-tr-2xl '>
//           <div className='flex flex-col gap-1 '>
//               <h4 className='text-[#777777] md:text-sm text-xs font-semibold'>Order Number</h4>
//           <h2 className='md:text-base text-sm font-semibold'>#12836463869</h2>
//           </div>
//           <div className='flex sm:flex-row flex-col items-center lg:gap-x-5 gap-x-2 gap-y-2 md:text-sm text-xs font-semibold'>
//               <button onClick={()=>setIsOrderDetails(true)} className='bg-primary text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md'>Order Details</button>
//               <button className='bg-[#4B2C10] text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md'>Download Invoice</button>
//           </div>
//       </div>

//         <div className='border-l border-l-[#EEF0F5] border-r border-r-[#EEF0F5] border-b border-b-[#EEF0F5] rounded-bl-2xl rounded-br-2xl'>
//           <OrderedProductCard   category="Fruits"
//           deliveryStatus={"Delivered"}
//           discountedPrice={100}
//           status={"Completed"}
//           border={false}
//           image={coconut}
//           name="Coconut Water"
//           price={180}
//           weight="1 piece"/>
//           <div className={`px-5`}>
//             <div className='flex justify-between font-bold md:text-lg text-base border-t border-t-[#EEF0F5] border-b border-b-[#EEF0F5] py-6  '>
//             <h1>Total Payment</h1>
//             <h1>Rs 345</h1>
//             </div>
//           </div>
//           <div className='flex items-center justify-between py-6 px-5 '>
//           <div className='flex  gap-2  h-fit'>
//             {[1,2,3,4,5].map((item:any,idx:number)=>{
//                 return  <div key={idx}>
//                   <IoStarOutline className={`sm:text-2xl text-xl text-[#999999]`}/>
//             </div>
//             })}
//           </div>
//           <button className=' flex sm:text-base text-sm items-center gap-2 bg-primary text-white font-medium rounded-md md:px-8 px-4 md:py-3 py-2'>
//             <IoReloadSharp className={`sm:text-xl text-base font-bold`}/> <p>Reorder</p></button>
//           </div>
//           </div>
//   </div>

//   </>
//   }
//   </>
//   )
// }

// export default OrderCard

// "use client";
// import React, { useState } from "react";
// import OrderedProductCard from "./OrderedProductCard";
// import apple from "../../images/apple.png";
// import berries from "../../images/berries.png";
// import onion from "../../images/image 11.svg";
// import star from "../../images/Star 10.svg";
// import Image from "next/image";
// import OrderDetails from "./OrderDetails";
// import { IoReloadSharp } from "react-icons/io5";
// import { IoStarOutline } from "react-icons/io5";
// import coconut from "../../images/image 85.svg";

// const OrderCard = () => {
//   const [isOrderDetails, setIsOrderDetails] = useState(false);
//   return (
//     <>
//       {isOrderDetails ? (
//         <OrderDetails />
//       ) : (
//         <>
//           {/* {isOrderDetails? <OrderDetails/>: */}
//           <div className={``}>
//             <div className="flex items-center justify-between bg-[#E8FDEB] lg:px-5 px-3 lg:py-5 py-3 rounded-tl-2xl rounded-tr-2xl ">
//               <div className="flex flex-col gap-1  ">
//                 <h4 className="text-[#777777] md:text-sm text-xs font-semibold">
//                   Order Number
//                 </h4>
//                 <h2 className="md:text-base text-sm font-semibold">
//                   #12836463869
//                 </h2>
//               </div>
//               <div className="flex  sm:flex-row flex-col  items-center lg:gap-x-5 gap-x-2 gap-y-2 md:text-sm text-xs font-semibold">
//                 <button
//                   onClick={() => setIsOrderDetails(true)}
//                   className={`bg-primary text-white lg:w-[166px] w-[120px]   lg:py-4 py-3 rounded-md`}
//                 >
//                   {isOrderDetails ? "Help" : "Order Details"}
//                 </button>
//                 <button className="bg-[#4B2C10] text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md">
//                   Download Invoice
//                 </button>
//               </div>
//             </div>
//             {/* {
//       isOrderDetails?
//         <OrderDetails/>
//         : */}
//             <div className="border-l border-l-[#EEF0F5] border-r border-r-[#EEF0F5] border-b border-b-[#EEF0F5] rounded-bl-2xl rounded-br-2xl">
//               <OrderedProductCard
//                 deliveryStatus={"Expected delivery"}
//                 category="Fruits"
//                 discountedPrice={69}
//                 border={true}
//                 image={berries}
//                 name="Blue Berries"
//                 price={180}
//                 status={"Ongoing"}
//                 weight="250 gms"
//               />

//               <div className={`px-5`}>
//                 <div className="flex justify-between font-bold md:text-lg text-base border-t border-t-[#EEF0F5] border-b border-b-[#EEF0F5] py-6  ">
//                   <h1>Total Payment</h1>
//                   <h1>Rs 345</h1>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between py-6 px-5 ">
//                 <div className="flex  gap-2  h-fit">
//                   {[1, 2, 3, 4, 5].map((item: any, idx: number) => {
//                     return (
//                       <div key={idx}>
//                         <IoStarOutline
//                           className={`sm:text-2xl text-xl text-[#999999]`}
//                         />
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <button className=" flex sm:text-base text-sm items-center gap-2 bg-primary text-white font-medium rounded-md md:px-8 px-4 md:py-3 py-2">
//                   <IoReloadSharp className={`sm:text-xl text-base font-bold`} />{" "}
//                   <p>Reorder</p>
//                 </button>
//               </div>
//             </div>
//             {/* } */}
//           </div>
//           <div className={``}>
//             <div className="flex items-center justify-between bg-[#E8FDEB] lg:px-5 px-3 lg:py-5 py-3 rounded-tl-2xl rounded-tr-2xl ">
//               <div className="flex flex-col gap-1 ">
//                 <h4 className="text-[#777777] md:text-sm text-xs font-semibold">
//                   Order Number
//                 </h4>
//                 <h2 className="md:text-base text-sm font-semibold">
//                   #12836463869
//                 </h2>
//               </div>
//               <div className="flex sm:flex-row flex-col items-center lg:gap-x-5 gap-x-2 gap-y-2 md:text-sm text-xs font-semibold">
//                 <button
//                   onClick={() => setIsOrderDetails(true)}
//                   className="bg-primary text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md"
//                 >
//                   Order Details
//                 </button>
//                 <button className="bg-[#4B2C10] text-white lg:w-[166px] w-[120px]  lg:py-4 py-3 rounded-md">
//                   Download Invoice
//                 </button>
//               </div>
//             </div>

//             <div className="border-l border-l-[#EEF0F5] border-r border-r-[#EEF0F5] border-b border-b-[#EEF0F5] rounded-bl-2xl rounded-br-2xl">
//               <OrderedProductCard
//                 category="Fruits"
//                 deliveryStatus={"Delivered"}
//                 discountedPrice={100}
//                 status={"Completed"}
//                 border={false}
//                 image={coconut}
//                 name="Coconut Water"
//                 price={180}
//                 weight="1 piece"
//               />
//               <div className={`px-5`}>
//                 <div className="flex justify-between font-bold md:text-lg text-base border-t border-t-[#EEF0F5] border-b border-b-[#EEF0F5] py-6  ">
//                   <h1>Total Payment</h1>
//                   <h1>Rs 345</h1>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between py-6 px-5 ">
//                 <div className="flex  gap-2  h-fit">
//                   {[1, 2, 3, 4, 5].map((item: any, idx: number) => {
//                     return (
//                       <div key={idx}>
//                         <IoStarOutline
//                           className={`sm:text-2xl text-xl text-[#999999]`}
//                         />
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <button className=" flex sm:text-base text-sm items-center gap-2 bg-primary text-white font-medium rounded-md md:px-8 px-4 md:py-3 py-2">
//                   <IoReloadSharp className={`sm:text-xl text-base font-bold`} />{" "}
//                   <p>Reorder</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default OrderCard;

// OrderCard.tsx

// // Tar7un sir ka code

"use client";

import React, { useEffect, useState } from "react";
import OrderedProductCard from "./OrderedProductCard";
import OrderDetails from "./OrderDetails";
import { IoReloadSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import Image from "next/image";

export interface ProductDetail {
  id: string;
  product_details: string;
  discount_on_product: number;
  price: number;
  unit: string;
  quantity: number;
  variation: any;
  variant: any;
}

export interface Order {
  id: string;
  order_status: string;
  order_amount: number;
  details: ProductDetail[];
  delivery_charge: number;
  coupon_discount_amount: number;
  total_tax_amount: number;
  payment_method: string;
  delivery_address: string;
  payment_status: string;
  quantity: any;
  variation: any;
  variant: any;
}

const OrderCard = () => {
  const [isOrderDetails, setIsOrderDetails] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await fetch(
          "https://farmer.handpumpking.in/api/v1/customer/order/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data: Order[] = await response.json();

        // Transform the order details to include quantity
        const transformedOrders = data.map((order) => ({
          ...order,
          details: order.details.map((detail) => ({
            ...(detail as ProductDetail),
            quantity: detail.quantity || 1,
          })),
        }));

        setOrders(transformedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  const handleOrderDetails = (order: Order) => {
    console.log("order", order);

    setSelectedOrder(order);
    setIsOrderDetails(true);
  };

  return (
    <>
      {isOrderDetails && selectedOrder ? (
        <OrderDetails
          onClose={() => setIsOrderDetails(false)}
          order={selectedOrder}
        />
      ) : (
        <>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="mb-6">
                <div className="flex items-center justify-between bg-[#E8FDEB] lg:px-5 px-3 lg:py-5 py-3 rounded-tl-2xl rounded-tr-2xl">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[#777777] md:text-sm text-xs font-semibold">
                      Order Number
                    </h4>
                    <h2 className="md:text-base text-sm font-semibold">
                      #{order.id}
                    </h2>
                  </div>
                  <div className="flex sm:flex-row flex-col items-center lg:gap-x-5 gap-x-2 gap-y-2 md:text-sm text-xs font-semibold">
                    <button
                      onClick={() => handleOrderDetails(order)}
                      className="bg-primary text-white lg:w-[166px] w-[120px] lg:py-4 py-3 rounded-md"
                    >
                      Order Details
                    </button>
                    <button className="bg-[#4B2C10] text-white lg:w-[166px] w-[120px] lg:py-4 py-3 rounded-md">
                      Download Invoice
                    </button>
                  </div>
                </div>

                <div className="border-l border-l-[#EEF0F5] border-r border-r-[#EEF0F5] border-b border-b-[#EEF0F5] rounded-bl-2xl rounded-br-2xl">
                  {order.details.map((detail) => {
                    const productDetails = JSON.parse(detail.product_details);
                    const imageUrl =
                      productDetails.image_fullpath?.[0] ||
                      "/default-image.png"; // Fallback image
                      const numericVariant = !isNaN(Number(detail?.variant)) ? Number(detail?.variant) : null;

                    return (
                      <OrderedProductCard
                        key={detail.id}
                        deliveryStatus={
                          order.order_status === "pending"
                            ? "Expected delivery"
                            : "Delivered"
                        }
                      
                        category={
                          productDetails?.category_ids
                            ? (() => {
                                try {
                                  const parsed = JSON.parse(
                                    productDetails?.category_ids
                                  );
                                  return parsed[0]?.id ?? "Unknown"; // return the id if available, else "Unknown"
                                } catch (e) {
                                  console.error(
                                    "Error parsing category_ids:",
                                    e
                                  );
                                  return "Unknown"; // fallback in case of error
                                }
                              })()
                            : "Unknown"
                        }
                        payment_status={order?.payment_status}
                        discountedPrice={detail.discount_on_product}
                        status={order.order_status}
                        border={order.order_status === "pending"}
                        image={imageUrl}
                        name={productDetails.name}
                        price={detail.price}
                        weight={detail.unit}
                        quantity={detail?.quantity}
                        variation={detail?.variation}
                        variant={detail?.variant}
                      />
                    );
                  })}

                  <div className="px-5">
                    <div className="flex justify-between font-bold md:text-lg text-base border-t border-t-[#EEF0F5] border-b border-b-[#EEF0F5] py-6">
                      <h1>Total Payment</h1>
                      <h1>Rs {order.order_amount}</h1>
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between py-6 px-5">
                    <div className="flex gap-2 h-fit">
                      {[1, 2, 3, 4, 5].map((item: any, idx: number) => (
                        <div key={idx}>
                          <IoStarOutline className="sm:text-2xl text-xl text-[#999999]" />
                        </div>
                      ))}
                    </div>
                    <button className="flex sm:text-base text-sm items-center gap-2 bg-primary text-white font-medium rounded-md md:px-8 px-4 md:py-3 py-2">
                      <IoReloadSharp className="sm:text-xl text-base font-bold" />{" "}
                      <p>Reorder</p>
                    </button>
                  </div> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No orders found.</p>
          )}
        </>
      )}
    </>
  );
};

export default OrderCard;
