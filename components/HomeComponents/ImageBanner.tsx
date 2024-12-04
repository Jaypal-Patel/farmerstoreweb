import React from "react";
import Image from "next/image";
const ImageBanner = ({ banners, length }: any) => {
  return (
    <>
      {length === 2 ? (
        <div className="px-body flex md:flex-row flex-col justify-between gap-10 mt-4">
          <div className="flex-1 flex justify-center items-center">
            <Image
              alt="banner"
              src={banners?.banners?.[1]?.image_fullpath}
              className="w-full "
              width={200}
              height={200}
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              alt="banner"
              src={banners?.banners?.[2]?.image_fullpath}
              className="w-full "
              width={200}
              height={200}
            />
          </div>
        </div>
      ) : (
        <div className="px-body mt-4 md:h-full h-[180px]">
          <Image
            src={banners?.banners?.[3]?.image_fullpath}
            alt="banner"
            className="w-full h-full object-fill"
            width={400}
            height={200}
          ></Image>
        </div>
      )}
    </>
  );
};

export default ImageBanner;
