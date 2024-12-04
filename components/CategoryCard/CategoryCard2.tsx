// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef } from "react";

// export interface CategoryCardProps {
//   title: string;
//   image: any;
//   slug: string;
//   bgColor: string;
//   isHovered: boolean;
//   text: string;
//   categoryId: string;
// }

// const CategoryCard2: React.FC<CategoryCardProps> = ({
//   title,
//   image,
//   slug,
//   bgColor,
//   isHovered,
//   text,
//   categoryId,
// }) => {
//   console.log(title, "Akshayyyyyyyyyyyyyy");
//   return (
//     <Link href={"shop/category/" + slug + `?${categoryId}`}>
//       {" "}
//       <div className=" h-[170px] sm:h-[220px] md:h-[270px] ">
//         <div
//           className="flex h-[150px] sm:h-[200px] md:h-[240px] flex-col items-center justify-center gap-1 sm:gap-3 md:gap-5 px-1 sm:px-1.5 md:px-2 py-1 md:py-2  mx-2 sm:mx-3 md:mx-4 hover:scale-105 cursor-pointer hover:ease-in-out transition-all hover:h-[170px] hover:sm:h-[220px] hover:md:h-[270px] "
//           style={{ background: bgColor }}
//         >
//           <div className="w-[70%]  ">
//             <Image
//               src={image}
//               alt={slug}
//               width={200}
//               height={100}
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <div className="flex flex-col  gap-1 sm:gap-1.5 md:gap-2 items-center">
//             <h4 className="font-semibold text-lg sm:text-xl md:text-[20px]">
//               {title}
//             </h4>
//             <p
//               className={`text-[10px] sm:text-xs md:text-sm text-[#4B2C10] font-semibold text-center`}
//             >
//               {text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CategoryCard2;

import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CategoryCardProps {
  title: string;
  image: any;
  slug: string;
  bgColor: string;
  isHovered: boolean;
  text: string;
  categoryId: string;
}

const CategoryCard2: React.FC<CategoryCardProps> = ({
  title,
  image,
  slug,
  bgColor,
  isHovered,
  text,
  categoryId,
}) => {
  return (
    <Link href={`shop/category/${slug}?${categoryId}`}>
    {/* // <Link href={`shop/category/${categoryId}`}> */}

      <div className="h-[170px] sm:h-[220px] md:h-[270px]">
        <div
          className="flex h-[150px] sm:h-[200px] md:h-[240px] flex-col items-center justify-center gap-1 sm:gap-3 md:gap-5 px-1 sm:px-1.5 md:px-2 py-1 md:py-2 mx-2 sm:mx-3 md:mx-4 hover:scale-105 cursor-pointer hover:ease-in-out transition-all hover:h-[170px] hover:sm:h-[220px] hover:md:h-[270px]"
          style={{ background: bgColor }}
        >
          <div className="w-[70%]">
            <Image
              src={image}
              alt={slug}
              width={200}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 items-center">
            <h4 className="font-semibold text-lg sm:text-xl md:text-[20px]">
              {title}
            </h4>
            <p
              className={`text-[10px] sm:text-xs md:text-sm text-[#4B2C10] font-semibold text-center`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard2;
