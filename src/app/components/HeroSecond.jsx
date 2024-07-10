import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Icons = [
  {
    id: 1,
    Num: "01",
    Title: "Cybersecurity Expertise at Your Fingertips",
    Description:
      "Gain access to experts with extensive experience leading cybersecurity programs for global enterprises.",
  },
  {
    id: 2,
    Num: "02",
    Title: "End-to-end Cyber Risk Management",
    Description:
      "Count on one trusted source for a comprehensive range of cybersecurity consulting and managed services.",
  },
  {
    id: 3,
    Num: "03",
    Title: "Security Investment Optimization",
    Description:
      "Utilize a shared model to access enterprise-level cybersecurity capabilities at a reasonable cost.",
  },
];
const Img = [
  { path: "/Hassana.svg" },
  { path: "/Stc.svg" },
  { path: "/Saudi.svg" },
  { path: "/Bussma.svg" },
  { path: "/Edarat.svg" },
];
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1480 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1480, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HeroSecondComp = () => {
  return (
    <div className="bg-Black xs:overflow-hidden h-[100vh] font-ClashDisplay flex items-center  px-8">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(24, 24, 21, 0.25) 0%, rgba(24, 24, 21, 0.25) 100%)",
        }}
        className="  xl:container overflow-hidden 2xl:h-[80vh] xs:h-[80vh]  xs:w-[95vw]  bg my-auto border border-[#3A3A3A] rounded-2xl px-4 sm:px-10 xs:py-2 xl:h-[95vh] lg:h-[90vh] sm:py-8 mx-auto"
      >
        <div className="flex gap-4   items-center">
          <Image
            src={"/Line4.svg"}
            width={129}
            height={100}
            className="xl:w-[100px] xs:w-[40px] 2xl:w-[129px]"
          />
          <p className="2xl:text-[20px] xs:text-[10px] xl:text-[16px] font-[300] text-White leading-[19px]">
            WHAT SETS US APART?
          </p>
        </div>
        <div className="text-White xs:mb-8 sm:mb-0 flex xs:flex-col sm:flex-row lg:justify-between lg:items-start  ">
          <div>
            {" "}
            <h2 className="2xl:text-[40px] xl:text-[32px] font-Neuropal xs:text-[18px] sm:text-[28px] font-[400] 2xl:leading-[44px] 2xl:mt-[31px]  sm:text-left">
              <span className="text-Red">Bridging The Gap</span> Between
            </h2>
            <p className="2xl:text-[40px] xl:text-[32px] xs:text-[16px] sm:text-[28px]  2xl:leading-[44px] font-[500] mt-[6px] lg:text-left">
              you and your audience
            </p>
          </div>

          <p className="xl:text-[18px]  lg:text-[12px]  hidden lg:block text-left">
            We not only deliver high quality enterprise solutions but also
            provide
            <br /> seamless integration with back office system and mobile
            interface
            <br /> as a single stack.
          </p>
        </div>{" "}
        <div className="flex xs:flex-col xs:mb-16  sm:mb-0 xl:mb-16   sm:flex-row 2xl:mt-16 sm:gap-[40px]  lg:mt-2 justify-between xs:ml-20 lg:ml-10 2xl:py-10 2xl:px-8 xs:py-0 xs:px-6  ">
          {Icons.map((icon) => (
            <div className="relative mt-10 md:w-[20%] mx-auto ">
              <p className="text-[#252525] font-Poppins sm:top-[-53px] sm:left-[-65px] xs:top-[-13px] xs:left-[-55px] sm:text-[86px] xs:text-[40px] font-[800] absolute z-10">
                {icon.Num}
              </p>
              <p className="text-white  z-50 font-[600] xs:text-[12px] sm:text-[16px] relative">
                {icon.Title}
              </p>
              <p className="text-White  sm:text-[14px]  2xl:text-[18px] xs:hidden xl:block xs:text-[10px] font-[300] xs:mt-4  sm:mt-6">
                {" "}
                {icon.Description}
              </p>
            </div>
          ))}
        </div>
        <div className="xs:mt-2 overflow-x-hidden xs:mb-8  sm:mb-0 xl:mb-8  2xl:h-[84px] 2xl:mt-32 xs:w-[50vw] sm:w-[80vw] lg:w-[90vw] 2xl:w-[50vw] mx-auto ">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            arrows={false}
          >
            {Img.map((img, index) => (
              <div
                key={index}
                className="bg-[#1D1D1D] sm:h-[60px] xs:h-[60px] 2xl:h-[84px] flex justify-center items-center sm:w-[25vw] xs:w-[50vw] 2xl:w-[10vw] rounded-lg"
              >
                <Image
                  src={img.path}
                  width={110}
                  height={20}
                  className="object-contain"
                  alt={`Carousel image ${index + 1}`}
                />
              </div>
            ))}
            {/* <div className="w-[50%]">ahYn</div> */}
          </Carousel>
        </div>
        <div className="text-White xs:mt-4  2xl:text-[18px]  xs:text-[14px] font-[400] text-center">
          <p>
            2.6k Companies & Individuals{" "}
            <span className="font-[600]">Trusted Us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSecondComp;
