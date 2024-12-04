import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "@/redux/slices/productsSlice";
import type { AppDispatch, RootState } from "@/redux/store";

const BannerSlider = ({ banners }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchText, setSearchText] = useState("");
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Change banner in every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % (banners?.banners?.length || 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners]);

  const handleSearchClick = () => {
    const body = {
      name: searchText,
      sort_by: "",
      price_low: "",
      price_high: "",
      rating: "",
      category_id: "[]",
      limit: "",
      offset: "",
    };

    dispatch(fetchProductList(body));
  };

  // State to hold the products
  const [products, setProducts] = useState([]);

  // Optionally, get loading state or error from Redux store if needed
  const { productList, loading, error } = useSelector(
    (state: RootState) => state.productsList
  );

  useEffect(() => {
    if (productList) {
      setProducts(productList); // Update state with the fetched products
    }
  }, [productList]);

  return (
    <div className="w-full relative h-[100vh]">
      <div className="h-[500px] md:h-full ">
        <Image
          src={banners?.banners?.[currentBannerIndex]?.image_fullpath}
          alt="banner image"
          className="w-full h-[95vh] object-cover md:object-fill"
          width={400}
          height={500}
        />
      </div>
      <div className="absolute bottom-0 left-0 h-[calc(100%-85px)] md:h-[calc(100%-165px)] pl-10  w-full gap-4 flex flex-col justify-center items-start ">
        <h1 className="text-green-500 text-6xl font-bold mb-10 ">
          Live Long. Have Some <br /> Veggies
        </h1>
        <p className="font-semibold text-xl">
          The treasure of good life hidden in fruits and veggies
        </p>
        <div className="bg-white overflow-hidden rounded-lg px-5 py-4 flex md:w-[75%] lg:w-[45%] sm:w-[60%] w-[90%] items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              className="outline-none pl-8 border-none px-2 w-full py-2 md:text-base text-sm placeholder:text-gray-600 placeholder:font-medium"
              placeholder="What are you looking for?"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              className="absolute top-2 left-1 fill-[#39B54A]"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>

          {/* <button
            onClick={handleSearchClick}
            className="bg-primary text-white py-2 md:text-base text-sm md:py-3 px-8 rounded-lg text-[14px] md:min-w-[175.42px] font-medium"
          >
            Search
          </button> */}

          <div>
            <button
              onClick={handleSearchClick}
              className="bg-primary text-white py-2 md:text-base text-sm md:py-3 px-8 rounded-lg text-[14px] md:min-w-[175.42px] font-medium"
            >
              Search
            </button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <div className="product-list">
              {Array.isArray(productList) && productList.length > 0 ? (
                productList.map((product: any) => (
                  <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                  </div>
                ))
              ) : (
                <></>
                // <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
