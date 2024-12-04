// "use client";

// import React, { useState, useEffect, Fragment } from "react";
// import { Listbox } from "@headlessui/react";
// import { PiListDashesLight } from "react-icons/pi";
// import { RxGrid } from "react-icons/rx";
// import { FaSortAmountDown } from "react-icons/fa";
// import FilterComponent from "../filtercomponent/Filtercomponent";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa6";
// import ProductCard from "../ProductCard/ProductCard";
// import { Menu } from "@headlessui/react";
// import { Transition } from "@headlessui/react";
// import ReactPaginate from "react-paginate";
// import { useDispatch, useSelector } from "react-redux";
// import { calculateDiscountedPrice } from "@/utils/calculateDiscount";
// import type { AppDispatch } from "@/redux/store";

// const options = ["Default Sorting", "Ascending Sorting", "Descending Sorting"];

// const Productlistcomponent = () => {
//   const exploreByCategoriesState = useSelector(
//     (state: any) => state.productsExplore
//   );
//   const [viewMode, setViewMode] = useState("grid");
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage] = useState(12);
//   const [categoryProduct, setCategoryProduct] = useState([]);

//   const dispatch = useDispatch<AppDispatch>();

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const urlPath = window.location.pathname;
//         const categoryId = urlPath.split("/").pop();
//         const response = await fetch(
//           `https://farmer.handpumpking.in/api/v1/categories/products/${categoryId}/all`
//         );
//         const data = await response.json();
//         setCategoryProduct(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const isMobileView = windowWidth < 768;

//   // Handle page change
//   const handlePageChange = ({ selected }: any) => {
//     setCurrentPage(selected);
//   };

//   // Calculate the start and end indices of the items to be displayed on the current page
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = categoryProduct.slice(startIndex, endIndex);

//   return (
//     <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start px-[3.5%] gap-2 sm:gap-4 md:gap-6 py-[1.5%] ">
//       <FilterComponent />
//       <div className="w-[95%] md:w-[65%] mt-4 sm:mt-12 md:mt-0 h-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between mt-3 mb-8 rounded-[10px] shadow border border-neutral-200 p-4 w-full">
//           <h2 className="text-neutral-500 text-sm sm:text-lg md:text-2xl font-medium">
//             Showing {Math.min(currentItems.length, itemsPerPage)} results
//           </h2>
//           {!isMobileView && (
//             <div className="flex gap-2 sm:gap-4 md:gap-6 items-center md:w-[70%] lg:w-[40%] justify-between">
//               <Menu
//                 as="div"
//                 className="relative flex flex-col gap-0.5 md:gap-1 w-full lg:w-[60%] rounded-full items-center justify-evenly cursor-pointer"
//               >
//                 <Menu.Button className="w-full h-full rounded-full flex flex-row items-center gap-1 lg:gap-8">
//                   <span className="text-xs sm:text-sm md:text-lg lg:text-2xl font-medium w-full">
//                     Sort By
//                   </span>
//                   <span className="pointer-events-none flex items-center">
//                     <IoIosArrowDown className="h-3 md:h-4 lg:h-5 aspect-square" />
//                   </span>
//                 </Menu.Button>

//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <Menu.Items className="z-50 absolute right-0 mt-2 top-full w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     {options.map((option, keyid) => (
//                       <div className="px-1 py-1" key={keyid}>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <button
//                               className={`${
//                                 active
//                                   ? "bg-primary text-white"
//                                   : "text-gray-900"
//                               } group flex w-full items-center rounded-md px-2 py-2 text-xs sm:text-sm md:text-base`}
//                             >
//                               {option}
//                             </button>
//                           )}
//                         </Menu.Item>
//                       </div>
//                     ))}
//                   </Menu.Items>
//                 </Transition>
//               </Menu>

//               <div className="flex gap-1 md:gap-2">
//                 <div
//                   className={`rounded-xl aspect-square flex items-center justify-center p-2 lg:p-4 ${
//                     viewMode === "grid" ? "bg-green-100 text-green-500" : ""
//                   }`}
//                   onClick={() => setViewMode("grid")}
//                 >
//                   <RxGrid className="md:h-[20px] lg:h-[25px] md:w-[25px] lg:w-[30px]" />
//                 </div>
//                 <div
//                   className={`rounded-xl aspect-square flex items-center justify-center p-2 lg:p-4 ${
//                     viewMode === "list" ? "bg-green-100 text-green-500" : ""
//                   }`}
//                   onClick={() => setViewMode("list")}
//                 >
//                   <PiListDashesLight className="md:h-[25px] lg:h-[30px] md:w-[30px] lg:w-[35px]" />
//                 </div>
//               </div>
//             </div>
//           )}
//           {/* ... (keep your existing sorting and view mode selection UI here) */}
//         </div>

//         <div className="grid gap-2 sm:gap-4 md:gap-6">
//           <div
//             className={
//               viewMode === "grid"
//                 ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2"
//                 : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2"
//             }
//           >
//             {currentItems.map((product: any, idx: number) => (
//               <ProductCard
//                 key={product.id}
//                 category="Made 2 Order"
//                 discountedPrice={product.price}
//                 image={product.image_fullpath[0]}
//                 name={product.name}
//                 price={product.price}
//                 weight={product.weight}
//                 id={product.id}
//                 discount={product.discount}
//                 discountType={product.discountType}
//                 item={product}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-end mt-8 absolute bottom-4 right-14">
//           <ReactPaginate
//             previousLabel={"Prev"}
//             nextLabel={"Next"}
//             breakLabel={"..."}
//             breakClassName={"hidden"} // Hide the break label
//             pageCount={Math.ceil(categoryProduct.length / itemsPerPage)}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageChange}
//             containerClassName={"flex space-x-2"} // Flex container for spacing
//             activeClassName={"bg-primary text-white"} // Active page styles
//             pageClassName={
//               "flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
//             } // Square pagination item styles
//             pageLinkClassName={"text-gray-700"} // Default text color
//             previousClassName={
//               "flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
//             } // Previous button styles
//             previousLinkClassName={"text-gray-700"}
//             nextClassName={
//               "flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
//             } // Next button styles
//             nextLinkClassName={"text-gray-700"}
//             breakLinkClassName={"hidden"} // Hide the break link
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productlistcomponent;

"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { PiListDashesLight } from "react-icons/pi";
import { RxGrid } from "react-icons/rx";
import apple from "../../images/apple.png";
import { FaSortAmountDown } from "react-icons/fa";
import FilterComponent from "../filtercomponent/Filtercomponent";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import ProductCard from "../ProductCard/ProductCard";
import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { calculateDiscountedPrice } from "@/utils/calculateDiscount";
import type { AppDispatch } from "@/redux/store";
import { fetchCategories, fetchSubCategories } from "@/redux/slices/homeSlice";
import { fetchFlashSales } from "@/redux/slices/flashSaleSlice";
import { log } from "console";
import Image from "next/image";
import Slider from "react-slick";
import { FiSearch } from "react-icons/fi";

const options = ["Default Sorting", "Ascending Sorting", "Descending Sorting"];

interface ProductlistComponentProps {
  params: {
    slug?: string;
    subCategorySlug?: string;
    subSubCategorySlug?: string;
  };
  queryKey: string[];
}

const Productlistcomponent: React.FC<ProductlistComponentProps> = ({
  params,
  queryKey,
}) => {
  const exploreByCategoriesState = useSelector(
    (state: any) => state.productsExplore
  );
  interface SubCategory {
    name: string;
  }
  const [viewMode, setViewMode] = useState("grid");
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(12);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [categoryId, setCategoryId] = useState(""); // Add state for categoryId
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Default category ID from the URL
        const defaultCategoryId = window.location.href.split("?").pop() || "";

        // Use `categoryId` or fallback to the default category ID
        const idToFetch = categoryId || defaultCategoryId;

        if (idToFetch) {
          console.log("Fetching data for categoryId:", idToFetch);

          const response = await fetch(
            `https://farmer.handpumpking.in/api/v1/categories/products/${idToFetch}`
          );
          const data = await response.json();
          setCategoryProduct(data);
          console.log("Fetched data:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const isMobileView = windowWidth < 768;

  // Handle page change
  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  // Calculate the start and end indices of the items to be displayed on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = categoryProduct.slice(startIndex, endIndex);


  // const dispatch = useDispatch<AppDispatch>();
  const [sliderValue, setSliderValue] = useState([0, 4000]);
  const [searchQuery, setSearchQuery] = useState("");

  const categoriesState = useSelector((state: any) => state.categories); // Get categories from Redux state
  const subCategoriesState = useSelector((state: any) => state.subCategories); // Get subcategories from Redux state
  const { flashSales } = useSelector((state: any) => state.flashsale); // Get flash sales from Redux state

  const handleSliderChange = (value: any) => {
    setSliderValue(value);
  };

  const categoryId1 = window.location.href.split("?").pop();
  console.log("subCategoriesState",subCategoriesState);
  

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFlashSales());
    if (categoryId1) {
      dispatch(fetchSubCategories(categoryId1));
    }
  }, [categoryId1, dispatch]);

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

  const SuBCategorygetid = (iddata: string) => {
    console.log("Subcategory clicked, id:", iddata);
   
    setActiveCategoryId(iddata);
    setCategoryId(iddata); // Update the `categoryId` state to fetch data for the clicked subcategory
  };

  return (
    <div className="relative flex h-auto flex-col md:flex-row justify-between items-center md:items-start px-[3.5%] gap-2 sm:gap-4 md:gap-6 py-[1.5%] ">
      {/* <FilterComponent /> */}
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
        {/* <ul className="space-y-2 sm:space-y-3.5 md:space-y-5">
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
        </ul> */}
        <ul className="space-y-2 sm:space-y-3.5 md:space-y-5">
      {filteredCategories?.length ? (
        filteredCategories.map((category: any) => (
          <div className="flex justify-between" key={category.id}>
            <div
              className={`text-black text-sm sm:text-base md:text-lg font-semibold cursor-pointer ${
                activeCategoryId === category.id ? "text-green-600" : "text-black"
              }`} // Apply active styles if this category is active
              onClick={() => SuBCategorygetid(category.id)}
            >
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
          {/* <Slider
            range
            min={0}
            max={4000}
            className="border-yellow-950"
            defaultValue={[0, 4000]}
            allowCross={false}
            onChange={(e:any) => handleSliderChange(e)}
          /> */}
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
      <div className="w-[95%] md:w-[65%] mt-4 sm:mt-12 md:mt-0 h-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mt-3 mb-8 rounded-[10px] shadow border border-neutral-200 p-4 w-full">
          <h2 className="text-neutral-500 text-sm sm:text-lg md:text-2xl font-medium">
            Showing {Math.min(currentItems.length, itemsPerPage)} results
          </h2>
          {!isMobileView && (
            <div className="flex gap-2 sm:gap-4 md:gap-6 items-center md:w-[70%] lg:w-[30%] justify-between">
              <Menu
                as="div"
                className="relative flex flex-col gap-0.5 md:gap-1 w-full lg:w-[60%] rounded-full items-center justify-evenly cursor-pointer"
              >
                <Menu.Button className="w-full h-full rounded-full flex flex-row items-center gap-1 lg:gap-0">
                  <span className="text-xs sm:text-sm md:text-lg lg:text-2xl font-medium w-full">
                    Sort By
                  </span>
                  <span className="pointer-events-none flex items-center">
                    <IoIosArrowDown className="h-3 md:h-4 lg:h-5 aspect-square" />
                  </span>
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="z-50 absolute right-0 mt-2 top-full w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {options.map((option, keyid) => (
                      <div className="px-1 py-1" key={keyid}>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-primary text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-xs sm:text-sm md:text-base`}
                            >
                              {option}
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>

              <div className="flex gap-1 md:gap-2">
                <div
                  className={`rounded-xl aspect-square flex items-center justify-center p-2 lg:p-4 ${
                    viewMode === "grid" ? "bg-green-100 text-green-500" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <RxGrid className="md:h-[20px] lg:h-[25px] md:w-[25px] lg:w-[30px]" />
                </div>
                {/* <div
                  className={`rounded-xl aspect-square flex items-center justify-center p-2 lg:p-4 ${
                    viewMode === "list" ? "bg-green-100 text-green-500" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <PiListDashesLight className="md:h-[25px] lg:h-[30px] md:w-[30px] lg:w-[35px]" />
                </div> */}
              </div>
            </div>
          )}
          {/* ... (keep your existing sorting and view mode selection UI here) */}
        </div>

        <div className="grid gap-2 sm:gap-4 md:gap-6 mb-10">
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2"
                : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2"
            }
          >
            {currentItems.map((product: any, idx: number) => (
              <ProductCard
                key={product.id}
                category="Made 2 Order"
                discountedPrice={product.price}
                image={product.image_fullpath[0]}
                name={product.name}
                price={product.price}
                weight={product.weight}
                id={product.id}
                discount={product.discount}
                discountType={product.discountType}
                item={product}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-8 absolute bottom-4 right-14 h-auto">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"hidden"} // Hide the break label
            pageCount={Math.ceil(categoryProduct.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"flex space-x-2"} // Flex container for spacing
            activeClassName={"bg-primary text-white"} // Active page styles
            pageClassName={
              "flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
            } // Square pagination item styles
            pageLinkClassName={"text-gray-700"} // Default text color
            previousClassName={
              "flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
            } // Previous button styles
            previousLinkClassName={"text-gray-700"}
            nextClassName={
              "flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
            } // Next button styles
            nextLinkClassName={"text-gray-700"}
            breakLinkClassName={"hidden"} // Hide the break link
          />
        </div>
      </div>
    </div>
  );
};

export default Productlistcomponent;
