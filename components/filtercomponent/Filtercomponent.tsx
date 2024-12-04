// "use client";
// import React, { useEffect } from "react";
// import Slider from "rc-slider";
// import { useState } from "react";
// import "rc-slider/assets/index.css";
// import Image from "next/image";
// import apple from "../../images/apple.png";
// import { FiSearch } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories, fetchSubCategories } from "@/redux/slices/homeSlice";
// import type { AppDispatch } from "@/redux/store";
// import { fetchFlashSales } from "@/redux/slices/flashSaleSlice";
// interface SubCategory {
//   name: string;
//   // other properties if needed
// }
// const FilterComponent = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [sliderValue, setSliderValue] = useState([0, 4000]);
//   const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
//   const [extractedCategories, setExtractedCategories] = useState([]);

//   const categoriesState = useSelector((state: any) => state.categories);
//   const subCategoriesState = useSelector((state: any) => state.subCategories);
//   const { flashSales, loading, error } = useSelector(
//     (state: any) => state.flashsale
//   );

//   const handleSliderChange = (value: any) => {
//     setSliderValue(value);
//   };

//   const categoryId = window.location.href.split("?").pop();
//   // useEffect(() => {
//   //   dispatch(fetchCategories());
//   //   dispatch(fetchFlashSales());
//   //   if (categoryId) {
//   //     dispatch(fetchSubCategories(categoryId));
//   //   }
//   //   console.log(subCategoriesState, "state");
//   //   setSubCategories(subCategoriesState?.subCategories);
//   // }, [categoryId, subCategoriesState]);

//   useEffect(() => {
//     dispatch(fetchCategories());
//     dispatch(fetchFlashSales());
//     if (categoryId) {
//       dispatch(fetchSubCategories(categoryId));
//     }
//   }, [categoryId]);

//   useEffect(() => {
//     if (subCategoriesState?.subCategories) {
//       setSubCategories(subCategoriesState.subCategories);
//     }
//   }, [subCategoriesState]);

//   return (
//     <div className="flex flex-col p-2 sm:p-5 md:p-8 w-[95%]  md:w-[30%] gap-8 sm:gap-12 md:gap-16  bg-white rounded-[5px] border border-stone-300">
//       <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 ">
//         <div className="text-black text-base sm:text-lg md:text-xl font-bold ">
//           Search now
//         </div>
//         <div className="flex   items-center gap-0.5 md:gap-1   w-full bg-white rounded-[5px] border border-zinc-300">
//           <input
//             type="text"
//             className="  outline-0   py-1 md:py-2 px-2 md:px-3  w-full h-full  bg-[white] rounded-full text-sm sm:text-base md:text-lg placeholder-neutral-400 text-neutral-400  font-semibold"
//             placeholder="Search"
//           />
//           <div className="w-6 sm:w-10 md:w-14 h-6 sm:h-10 md:h-14 text-white bg-green-500 rounded-[5px] aspect-square ">
//             <FiSearch className="h-full w-auto p-2 md:p-3" />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 ">
//         <div className="text-black text-base sm:text-lg md:text-xl font-bold ">
//           Categories
//         </div>
//         <ul className="space-y-2 sm:space-y-3.5 md:space-y-5">
//           {subCategories?.map((category, keyid) => (
//             <div className="flex justify-between">
//               <div className="text-black text-sm sm:text-base md:text-lg font-semibold ">
//                 {category.name}
//               </div>
//               <div className="text-right text-black text-sm sm:text-base md:text-lg font-semibold"></div>
//             </div>
//           ))}
//         </ul>
//       </div>

//       <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 ">
//         <div className="text-black text-base sm:text-lg md:text-xl font-bold ">
//           Filter By Price
//         </div>
//         <div>
//           <Slider
//             range
//             min={0}
//             max={4000}
//             className=" border-yellow-950"
//             defaultValue={[0, 4000]}
//             allowCross={false}
//             onChange={(e) => handleSliderChange(e)}
//           />
//         </div>

//         <div className="flex justify-between">
//           <h2 className="text-xs sm:text-sm md:text-base font-semibold">
//             Rs {sliderValue[0]}
//           </h2>
//           <h2 className="text-xs sm:text-sm md:text-base font-semibold">
//             Rs {sliderValue[1]}
//           </h2>
//         </div>
//       </div>

//       <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 ">
//         <h2 className="text-black text-base sm:text-lg md:text-xl font-bold">
//           Popular tags
//         </h2>
//         <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3">
//           {Array(7)
//             .fill(0)
//             .map((_, keyid) => (
//               <div className=" bg-[#FFFFFF] rounded-3xl text-xs sm:text-sm md:text-base border border-neutral-200  py-0.5 sm:py-1 md:py-1.5 px-3 sm:px-4 md:px-5">
//                 Fruits
//               </div>
//             ))}
//         </div>
//       </div>
//       <div className="flex flex-col gap-6">
//         <h2 className="text-black text-base sm:text-lg md:text-xl font-bold">
//           Best Selling
//         </h2>
//         <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
//           {flashSales?.slice(0, 3).map((item: any, keyid: number) => (
//             <div
//               key={item.id} // Use item's id as the unique key
//               className="mx-2 flex flex-row gap-2 md:gap-4 px-2 md:px-4 py-1.5 md:py-3"
//             >
//               <div className="w-[25%] aspect-square">
//                 {item.discount > 0 && (
//                   <p className="text-green-600 text-xs sm:text-sm md:text-base">
//                     Save{" "}
//                     {item.discount_type === "percent"
//                       ? `${item.discount}%`
//                       : `Rs. ${item.discount}`}
//                     !
//                   </p>
//                 )}
//                 <Image
//                   src={item.image_fullpath[0] || apple} // Use the first image or a placeholder
//                   alt={item.name} // Updated to use item.name for the alt text
//                   width={100} // Set your desired width
//                   height={100} // Set your desired height
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               <div className="flex flex-col justify-between">
//                 <div>
//                   <h6 className="text-sm sm:text-base md:text-lg font-semibold">
//                     {item.name}
//                   </h6>

//                   {/* Variants */}
//                   {/* Uncomment to show variants */}
//                   {/* <div className="text-sm sm:text-base md:text-lg font-semibold">
//               {item.variations?.map((variant: any) => (
//                 <p
//                   key={variant.type}
//                   className="text-xs sm:text-sm md:text-base font-semibold text-[#727272]"
//                 >
//                   Rs. {variant.price} / {variant.type}
//                 </p>
//               ))}
//             </div> */}

//                   <p className="text-xs sm:text-sm md:text-base text-[#727272]">
//                     {item.description.length > 10
//                       ? item.description
//                           .substring(0, 10)
//                           .replace(/<\/?[^>]+(>|$)/g, "") + "..."
//                       : item.description.replace(/<\/?[^>]+(>|$)/g, "")}{" "}
//                     {/* Remove HTML tags */}
//                   </p>
//                 </div>

//                 <div className="flex gap-2 md:gap-3 items-center">
//                   <p className="text-sm sm:text-base md:text-lg font-semibold">
//                     Rs.{" "}
//                     {item.variations?.[0]?.price -
//                       (item.discount_type === "percent"
//                         ? (item.variations?.[0]?.price * item.discount) / 100
//                         : item.discount)}{" "}
//                     {/* Adjusted discounted price */}
//                   </p>
//                   <p className="line-through text-red-600 text-xs sm:text-sm md:text-base">
//                     Rs. {item.variations?.[0]?.price} {/* Original price */}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;

import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";
import apple from "../../images/apple.png";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchSubCategories } from "@/redux/slices/homeSlice";
import { fetchFlashSales } from "@/redux/slices/flashSaleSlice";
import type { AppDispatch } from "@/redux/store";

interface SubCategory {
  name: string;
}

const FilterComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [sliderValue, setSliderValue] = useState([0, 4000]);
  const [searchQuery, setSearchQuery] = useState("");

  const categoriesState = useSelector((state: any) => state.categories); // Get categories from Redux state
  const subCategoriesState = useSelector((state: any) => state.subCategories); // Get subcategories from Redux state
  const { flashSales } = useSelector((state: any) => state.flashsale); // Get flash sales from Redux state

  const handleSliderChange = (value: any) => {
    setSliderValue(value);
  };

  const categoryId = window.location.href.split("?").pop();
  console.log("subCategoriesState",subCategoriesState);
  

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFlashSales());
    if (categoryId) {
      dispatch(fetchSubCategories(categoryId));
    }
  }, [categoryId, dispatch]);

  // Filter categories based on the search query
  const filteredCategories = subCategoriesState?.subCategories?.filter(
    (category: SubCategory) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("filteredCategories",filteredCategories);
  

  // Filter flash sales based on the search query
  const filteredFlashSales = flashSales.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const SuBCategorygetid = (iddata:any)=>{
    console.log(iddata);
    
  }
  return (
    <div className="flex flex-col p-2 sm:p-5 md:p-8 w-[95%] md:w-[30%] gap-8 sm:gap-12 md:gap-16 bg-white rounded-[5px] border border-stone-300">
      {/* Search Bar */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        <div className="text-black text-base sm:text-lg md:text-xl font-bold">
          Search now
        </div>
        <div className="flex items-center gap-0.5 md:gap-1 w-full bg-white rounded-[5px] border border-zinc-300">
          
            <input
            type="text"
            className="outline-0 py-1 md:py-2 px-2 md:px-3 w-full h-full bg-[white] rounded-full text-sm sm:text-base md:text-lg placeholder-neutral-400 text-neutral-400 font-semibold"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        
          
          <div className="w-6 sm:w-10 md:w-14 h-6 sm:h-10 md:h-14 text-white bg-green-500 rounded-[5px] aspect-square">
            <FiSearch className="h-full w-auto p-2 md:p-3" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        <div className="text-black text-base sm:text-lg md:text-xl font-bold">
          Categories
        </div>
        <ul className="space-y-2 sm:space-y-3.5 md:space-y-5">
          {filteredCategories?.length ? (
            filteredCategories.map((category: any, keyid: any) => (
              <div className="flex justify-between" key={keyid}>
                <div className="text-black text-sm sm:text-base md:text-lg font-semibold"
                onClick={()=>SuBCategorygetid(category.id)}>
                  {category.name}
                </div>
              </div>
            ))
          ) : (
            <div>No categories found</div>
          )}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        <div className="text-black text-base sm:text-lg md:text-xl font-bold">
          Filter By Price
        </div>
        <div>
          <Slider
            range
            min={0}
            max={4000}
            className="border-yellow-950"
            defaultValue={[0, 4000]}
            allowCross={false}
            onChange={(e) => handleSliderChange(e)}
          />
        </div>
        <div className="flex justify-between">
          <h2 className="text-xs sm:text-sm md:text-base font-semibold">
            Rs {sliderValue[0]}
          </h2>
          <h2 className="text-xs sm:text-sm md:text-base font-semibold">
            Rs {sliderValue[1]}
          </h2>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        <h2 className="text-black text-base sm:text-lg md:text-xl font-bold">
          Popular tags
        </h2>
        <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3">
          {Array(7)
            .fill(0)
            .map((_, keyid) => (
              <div className="bg-[#FFFFFF] rounded-3xl text-xs sm:text-sm md:text-base border border-neutral-200 py-0.5 sm:py-1 md:py-1.5 px-3 sm:px-4 md:px-5">
                Fruits
              </div>
            ))}
        </div>
      </div>

      {/* Best Selling */}
      <div className="flex flex-col gap-6">
        <h2 className="text-black text-base sm:text-lg md:text-xl font-bold">
          Best Selling
        </h2>
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
          {filteredFlashSales.slice(0, 3).map((item: any, keyid: number) => (
            <div
              key={item.id}
              className="mx-2 flex flex-row gap-2 md:gap-4 px-2 md:px-4 py-1.5 md:py-3"
            >
              <div className="w-[25%] aspect-square">
                {item.discount > 0 && (
                  <p className="text-green-600 text-xs sm:text-sm md:text-base">
                    Save{" "}
                    {item.discount_type === "percent"
                      ? `${item.discount}%`
                      : `Rs. ${item.discount}`}
                    !
                  </p>
                )}
                <Image
                  src={item.image_fullpath[0] || apple}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h6 className="text-sm sm:text-base md:text-lg font-semibold">
                    {item.name}
                  </h6>
                  <p className="text-xs sm:text-sm md:text-base text-[#727272]">
                    {item.description.length > 10
                      ? item.description
                          .substring(0, 10)
                          .replace(/<\/?[^>]+(>|$)/g, "") + "..."
                      : item.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>
                </div>
                <div className="flex gap-2 md:gap-3 items-center">
                  <p className="text-sm sm:text-base md:text-lg font-semibold">
                    Rs.{" "}
                    {item.variations?.[0]?.price -
                      (item.discount_type === "percent"
                        ? (item.variations?.[0]?.price * item.discount) / 100
                        : item.discount)}
                  </p>
                  <p className="line-through text-red-600 text-xs sm:text-sm md:text-base">
                    Rs. {item.variations?.[0]?.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
