"use client";

import { useSelector } from "react-redux";
import CategoryCard2 from "../CategoryCard/CategoryCard2";
import { stripHtmlTags } from "../../utils/stripHtml";

const AllCategories = () => {
  const categoriesState = useSelector((state: any) => state.categories);

  const handleCategoryClick = (categoryId: string) => {
    console.log("Category ID clicked:", categoryId);
    // Add any additional logic you want to execute on category click
  };

  const colors = [
    "#FDF5DE",
    "#E0F7FA",
    "#FFEBEE",
    "#FFF3E0",
    "#E8F5E9",
    "#FFECDF",
  ];

  return (
    <div className="px-body flex flex-col mt-24 sm:mt-32 md:mt-40 mb-8 sm:mb-16 md:mb-24">
      <div className="flex items-center sm:my-10 my-5">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl flex-1">
          Browse <span className="text-primary">Categories</span>
        </h1>
      </div>
      <div className="grid w-full xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-2 sm:gap-y-3.5 md:gap-y-5 lg:gap-y-6 gap-x-2 sm:gap-x-3.5 md:gap-x-5 lg:gap-x-6">
        {categoriesState?.categories?.map(
          (singleCategory: any, index: number) => {
            const cardColor = colors[index % colors.length];

            return (
              <div
                key={singleCategory.id}
                onClick={() => handleCategoryClick(singleCategory.id)}
              >
                <CategoryCard2
                  title={singleCategory.name}
                  image={singleCategory?.image_fullpath}
                  isHovered={false}
                  bgColor={cardColor}
                  slug={singleCategory.name}
                  text={stripHtmlTags(singleCategory?.description)}
                  categoryId={singleCategory.id}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default AllCategories;
