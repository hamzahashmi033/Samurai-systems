import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import Typewriter to avoid SSR issues
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
const Hero = () => {
  return (
    <div className="bg-Black xs:overflow-hidden h-screen">
      <div className="sm:container lg:container  xs:px-4 sm:px-8 lg:px-4  relative  sm:mx-auto  ">
        <Nav />
        <Image
          src={"/Isolation_Mode.svg"}
          width={200}
          height={300}
          className="absolute xs:w-[900px] sm:w-[600px] 2xl:w-[900px] top-0 xs:right-[-120px] sm:right-[-290px]"
        />
        <div className="font-ClashDisplay xs:leading-[25px] sm:leading-[30px] xl:leading-[40px] 2xl:leading-[60px] 2xl:mt-32 sm:mt-0 md:mt-8  xs:mt-16">
          <h1 className="text-white  font-ClashDisplay ">
            <span className="2xl:text-[30px]  xl:text-[20px]  sm:text-[18px] font-[300]">
              Turning Your Challenges
            </span>
            <div className="flex ">
              <span className="sm:tracking-wider 2xl:text-[67px] xl:text-[48px] xs:text-[24px] sm:text-[32px] text-Red font-[400] font-Neuropal">
                <Typewriter
                  options={{
                    strings: ["Into Innovative"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              <span className="text-White font-[400] font-Neuropal xs:text-[24px] sm:text-[32px] xl:text-[48px] 2xl:text-[67px]">
                &nbsp;Solutions
              </span>
            </div>

            <span className="text-White font-ClashDisplay font-[500] sm:text-[32px] 2xl:text-[67px] xl:text-[48px] xs:text-[24px]">
              Samurai Systems
            </span>
            <Image
              src={"/lines.svg"}
              width={500}
              height={100}
              className="2xl:w-[500px] xs:w-[200px] xl:w-[320px]"
            />
          </h1>
          <p className="text-White xs:mt-8 2xl:mt-16 font-[300] xs:text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[24px]">
            Samurai -Team of solution architects, developers and consultants
            having only one aim in mind
            <br />
            <span className="text-White font-[500] xs:text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[24px]">
              “deliver the best, nothing else”
            </span>
          </p>
        </div>{" "}
        <div className=" xs:mt-6  2xl:mt-10 font-[600] xs:text-[14px] sm:text-[16px] 2xl:text-[24px] md:mt-10 sm:mt-16 xl:mt-10 2 font-ClashDisplay flex gap-4">
          <button className="bg-Red   text-white rounded-[5px] xs:px-[16px] xs:py-[2px] xl:px-[32px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px]">
            Get a Quote
          </button>
          <button className="border border-Red xl:px-[32px] sm: rounded-[5px] xs:px-[16px] xs:py-[2px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px] text-white">
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
          className="text-white xs:flex-row font-ClashDisplay  xs:p-2 2xl:text-[26px]  sm:w-[50vw] xl:px-4 xl:w-[30vw] xl:gap-4 2xl:w-[35vw] 2xl:px-6 2xl:py-2 2xl:gap-16   flex gap-8 xs:gap-2 xs:mt-24 2xl:mt-32 xl:mt-12 md:mt-16  sm:mt-14"
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