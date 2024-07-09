import React from "react";
import { dataSolutions } from "../utils/Solutions.constants";

const Solutions = () => {
  return (
    <div className="bg-White overflow-x-hidden h-screen overflow-y-hidden">
      <div className="2xl:max-w-[1728px] sm:w-[100vw] lg:w-[70vw] py-10 mx-auto">
        <div className="2xl:max-w-[1526px] h-[524px] w-[85vw] mx-auto">
          <div className="flex xs:flex-col-reverse sm:flex-row mx-auto xs:w-[80vw] py-4">
            <div className="sm:max-w-[40vw] overflow-x-hidden overflow-y-hidden mx-8 2xl:max-w-[30vw] xs:mt-8 sm:mt-0 2xl:max-h-[40vh] xs:max-w-[85vw] sm:max-h-[80vh] xs:max-h-[50vh] overflow-y-auto scrollbar-hide">
              {dataSolutions.map((data, index) => (
                <div key={index}>
                  <div className="flex gap-2 items-center">
                    <p className="border border-[#C92127] h-px w-[3rem] ml-2 block xl:block" />
                    <p className="font-[300] xs:text-[12px] sm:text-[14px] 2xl:text-[20px]">
                      {data.category}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-[500] text-Black xs:text-[16px] sm:text-[18px] 2xl:text-[28px]">
                      {data.heading}
                    </h2>

                    <p className="mt-6 xs:text-[14px] 2xl:text-[24px] font-[400]">
                      {data.description}
                    </p>

                    <p className="mt-4 text-[Red] xs:text-[14px] 2xl:text-[16px] font-[600]">
                      Explore More
                    </p>
                    <p className="border-[#939393] border-[1px] h-px sm:w-[40vw] xs:w-[85vw] mt-8 mb-16 block xl:block" />
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:max-w-[40vw] xs:w-[85vw] 2xl:max-w-[30vw]">
              <div className="flex gap-2 items-center">
                <p className="border border-[#0B0A0A] h-px w-[5rem] ml-2 block xl:block" />
                <p className="font-[300] xs:text-[12px] 2xl:text-[20px]">
                  EXCELLENCE ACROSS MULTIPLE DISCIPLINES
                </p>
              </div>
              <div className="">
                <h2 className="font-[400] text-Black xs:text-[24px] sm:text-[26px] 2xl:text-[44px]">
                  <span className="text-Red">Solutions TO</span> Your Needs
                </h2>
                <p className="font-[500] 2xl:text-[40px] xs:text-[22px]">
                  to grow your Business.
                </p>
                <p className="mt-10 font-[400] xs:text-[14px] xs:text-left 2xl:text-[18px]">
                  From small businesses to industry giants, we provide tailored
                  solutions that fit your unique needs. Our expertise spans
                  diverse sectors, ensuring personalized service and robust
                  support. Trust us to help you grow and thrive in an
                  ever-evolving market.
                </p>
                <button className="bg-Black xs:w-[85vw] sm:w-auto mx-auto xs:px-14 mb-0 xs:mb-4 text-White px-[42px] py-[10px] mt-8 rounded-lg">
                  Start project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;