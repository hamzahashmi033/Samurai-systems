import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import Typewriter to avoid SSR issues
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
const Hero = () => {
  return (
    <div className="bg-Black xs:overflow-hidden h-screen">
      <div className="sm:container lg:container  xs:px-4 sm:px-8 lg:px-8  relative  sm:mx-auto  ">
        <Nav />
        <Image
          src={"/Isola.svg"}
          width={800}
          height={300}
          style={{ right: "-150px" }}
          className="absolute max-w-[370px] opacity-[20%] 2xl:max-w-[800px] xl:max-w-[500px] top-0 "
        />
        <div className="font-ClashDisplay 2xl:mt-20 sm:mt-12 xs:mt-4">
          <h1 className="text-white  font-ClashDisplay ">
            <span className="2xl:text-[30px]  xl:text-[20px]  sm:text-[18px] font-[300]">
              Turning Your Challenges
            </span>
            <br />
            <div className="flex ">
              <span className="sm:tracking-wider 2xl:text-[67px] xl:text-[48px] xs:text-[24px] text-Red font-[400] font-Neuropal">
                <Typewriter
                  options={{
                    strings: ["Into Innovative"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              <span className="text-White font-[400] font-Neuropal xs:text-[24px] xl:text-[48px] 2xl:text-[67px]">
                &nbsp;Solutions
              </span>
            </div>

            <span className="text-White font-[500] 2xl:text-[67px] xl:text-[48px] xs:text-[24px]">
              Samurai Systems
            </span>
            <Image
              src={"/lines.svg"}
              width={500}
              height={100}
              className="2xl:w-[500px] xs:w-[200px] xl:w-[450px]"
            />
          </h1>
          <p className="text-White xs:mt-8 2xl:mt-16 font-[300] xs:text-[14px] lg:text-[18px] 2xl:text-[24px]">
            Samurai -Team of solution architects, developers and consultants
            having only one aim in mind
            <br />
            <span className="text-White font-[500] xs:text-[14px] lg:text-[18px] 2xl:text-[24px]">
              “deliver the best, nothing else”
            </span>
          </p>
        </div>
        <div className="xs:mt-14 2xl:mt-16 xl:mt-8  sm:mt-12 font-ClashDisplay flex gap-4">
          <button className="bg-Red text-white rounded-[5px] xs:px-[16px] xs:py-[2px] xl:px-[32px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px]">
            Get a Quote
          </button>
          <button className="border border-Red xl:px-[32px] rounded-[5px] xs:px-[16px] xs:py-[2px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px] text-white">
            Our Services
          </button>
        </div>
        <div
          style={{
            border: "1px solid transparent",
            borderImageSource:
              "linear-gradient(271.18deg, rgba(58, 58, 58, 0) -4.85%, #3a3a3a 147.42%)",
            borderImageSlice: "1",
          }}
          className="text-white xs:flex-row font-ClashDisplay xs:p-2 xl:w-[40vw]  sm:w-[50vw] 2xl:gap-16 xl:gap-10 sm:gap-6   flex gap-8 xs:gap-2 xs:mt-14 2xl:mt-40 xl:mt-4  sm:mt-10"
        >
          <p className="font-[300]">
            <span className="text-Red font-[600]">2000+</span>
            <br />
            Projects
          </p>

          <p className="font-[300]">
            <span className="text-Red font-[600]">100+</span>
            <br />
            Clients
          </p>

          <p className="font-[300]">
            <span className="text-Red font-[600]">22+ Year</span>
            <br />
            of Experience
          </p>

          <p className="font-[300]">
            <span className="text-Red font-[600]">2000+</span>
            <br />
            Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
