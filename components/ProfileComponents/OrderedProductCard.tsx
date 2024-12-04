// "use client"
// import Image from 'next/image';
// import React from 'react'
// interface ProductProps {
//     image: any;
//     status:string,
//     category: string;
//     name: string;
//     weight: string;
//     price: any;
//     discountedPrice: any;
//     border:boolean
//     deliveryStatus:string
//   }

// const OrderedProductCard: React.FC<ProductProps>= ({
//     category,
//   discountedPrice,
//   image,
//   name,
//   price,
//   weight,
//   status,
//   border,
//   deliveryStatus
// }) => {
//   return (
//     <div className='w-[100%]'>
//         <div className={`flex lg:flex-row flex-col gap-y-2  w-[100%] ${border&&"border-b  border-b-[#EEF0F5]"}   justify-between lg:items-center px-5 gap-x-5 py-6`}>
//             <div className=' flex items-center justify-between  lg:w-[60%] w-[100%]'>
//                 <div className='flex gap-2 w-[60%] '>
//          <div className="sm:w-[134px] sm:h-[126px] h-[100px] w-[90px] ">
//         <Image
//           src={image}
//           alt={name}
//           className="w-full h-full object-contain "
//         />
//       </div>
//       <div className=' w-fit '>
//       <p className="md:text-sm text-xs font-medium text-[#727272]">{category}</p>
//       <h6 className="md:text-base text-sm font-semibold my-1">{name}</h6>
//       <div className="md:text-sm text-xs font-semibold text-black flex items-center gap-1"><p className='font-semibold text-black'>Qty :</p> {weight}</div>
//       <p className='font-bold text-black md:text-base text-sm mt-4'>Rs. {discountedPrice}</p>
//       </div>
//       </div>
//       <div className='  w-[40%] flex justify-end'>
//         <p className={`sm:w-[70%] w-[60%]  text-center h-fit  md:text-sm text-xs font-semibold  py-2 ${status==="Completed"?"bg-[#E8FDEB] text-[#52C074]":"bg-[#feede6] text-[#ED4300]"}  `}>{status}</p>
//         </div>

//       </div>
//       <div className=' lg:w-[40%] w-[100%] lg:text-end flex flex-col  lg:gap-2 gap-1'><h3 className='md:text-base text-sm font-semibold'>{deliveryStatus} on :</h3>
//       <h4 className='text-[#999999] md:text-sm text-xs lg:text-end'>22nd August 2023</h4>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default OrderedProductCard

// // //  tarun sir ka code

"use client";
import Image from "next/image";
import React from "react";

interface ProductProps {
  image: string;
  status: string;
  category: string;
  name: string;
  weight: string;
  price: any;
  discountedPrice: any;
  border: boolean;
  deliveryStatus: string;
  payment_status: string;
  quantity: any;
  variation: any;
  variant: any;
}

const OrderedProductCard: React.FC<ProductProps> = ({
  category,
  discountedPrice,
  image,
  name,
  price,
  weight,
  status,
  border,
  deliveryStatus,
  payment_status,
  quantity,
  variation,
  variant,
}) => {
  const numericVariant = variant
    ? Number(variant.replace(/[^0-9.-]+/g, ""))
    : null;
  console.log(variant);
  return (
    <div className="w-[100%]">
      <div
        className={`flex lg:flex-row flex-col gap-y-2  w-[100%] ${
          border && "border-b  border-b-[#EEF0F5]"
        }   justify-between lg:items-center px-5 gap-x-5 py-6`}
      >
        <div className="flex items-center justify-between  lg:w-[60%] w-[100%]">
          <div className="flex gap-2 w-[60%]">
            <div className="sm:w-[134px] sm:h-[126px] h-[100px] w-[90px]">
              <Image
                src={image}
                alt={name}
                width={134} // Specify the width of the image
                height={126} // Specify the height of the image
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-fit">
              <p className="md:text-sm text-xs font-medium text-[#727272]">
                {/* {category} */}
              </p>
              <h6 className="md:text-base text-sm font-semibold my-1">
                {name}
              </h6>
              {/* <div className="md:text-sm text-xs font-semibold text-black flex items-center gap-1">
                <p className="font-semibold text-black">Qty :{quantity} </p>{" "}
                {weight}
              </div> */}
              <div className="md:text-sm text-xs font-semibold text-black flex items-center gap-1">
                <p className="font-semibold text-black">
                  Qty :{" "}
                  {/* {weight.includes("kg") ? Number(variant) / 1000 : quantity}{" "} */}
                  {variant}
                </p>
                {/* {variant} */}
                {weight}
              </div>

              <p className="font-bold text-black md:text-base text-sm mt-4">
                Rs. {discountedPrice}
              </p>
            </div>
          </div>
          <div className="w-[40%] flex justify-end">
            <p
              // className={`sm:w-[70%] w-[60%] text-center h-fit md:text-sm text-xs font-semibold py-2 ${
              //   status === "Completed"
              //     ? "bg-[#E8FDEB] text-[#52C074]"
              //     : "bg-[#feede6] text-[#ED4300]"
              // }`}
              className={`sm:w-[70%] w-[60%] text-center h-fit md:text-sm text-xs font-semibold py-2 ${
                status === "delivered"
                  ? "bg-[#E8FDEB] text-[#52C074]"
                  : status === "ongoing"
                  ? "bg-[#E8FDEB] text-[#52C074]"
                  : status === "pending"
                  ? "bg-[#feede6] text-[#ED4300]"
                  : "bg-[#feede6] text-[#ED4300]"
              }`}
            >
              {status}
            </p>
          </div>
        </div>
        <div className="lg:w-[40%] w-[100%] lg:text-end flex flex-col lg:gap-2 gap-1">
          <h1
            className={`font-semibold py-2  ${
              payment_status === "paid" ? " text-[#52C074]" : "text-[#ED4300]"
            }`}
          >
            {payment_status === "paid" ? "Paid" : "Unpaid"}
          </h1>{" "}
          <h3 className="md:text-base text-sm font-semibold">
            {deliveryStatus} on :
          </h3>
          <h4 className="text-[#999999] md:text-sm text-xs lg:text-end">
            22nd August 2023
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderedProductCard;
