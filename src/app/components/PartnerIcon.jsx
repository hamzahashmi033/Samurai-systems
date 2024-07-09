import Image from "next/image";
import React from "react";

const PartnerIcon = ({ imgPath }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(24, 24, 21, 0.25) 0%, rgba(24, 24, 21, 0.25) 100%)",
        // Set a fixed height for the div
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="2xl:max-w-[400px] xl:max-w-[300px] md:max-w-[180px]  xl:px-[93px] xs:px-[35px] 2xl:py-[29px] hover:px-[29px] hover:py-[31px] rounded-lg hover:border-[#fff] cursor-pointer hover:bg-[#1D1D1D] border-[#3A3A3A] border-[1px] sm:h-[80px] xs:h-[55px] 2xl:h-[150px] md:h-[60px] xl:h-[80px] xs:max-w-[200px] transition-all duration-300 ease-in-out"
    >
      <Image
        src={imgPath}
        width={100}
        height={20}
        className="xl:w-[150px] sm:w-[80px] xs:w-[40px] object-contain"
      />
    </div>
  );
};

export default PartnerIcon;
