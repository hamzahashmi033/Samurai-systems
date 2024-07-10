import React from "react";
import ReUse from "./ReUse";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const Foot = () => {
  return (
    <div className="relative flex flex-col min-h-screen xs:overflow-hidden">
      <div className="sm:container lg:container mx-auto">
        <div className="flex flex-col justify-center items-center border shadow-lg xl:p-6 lg:p-3 sm:p-2 xs:m-1 xl:m-[5rem] lg:m-[3rem] md:m-[2rem]">
          <ReUse
            p1="Elevate you Presents"
            span1="Ready TO"
            h1="Elevate Your"
            h2="Digital Strategy?"
            p2="We want your campaigns to thrive. Digital Remedy connects the right data to the highest performing channels to nail your dream KPIs—so you can feel confident your media spend is worth every penny."
          />

          <button
            type="button"
            className="bg-black w-[15rem] text-white px-4 py-2 m-5 font-semi bold rounded text-sm sm:text-base lg:text-lg"
          >
            {" "}
            Book Consultation{" "}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center xs:px-1 sm:px-8 xs:pt-8 xl:pt-0">
          <div className="lg:w-[625px] xl:w-[500px] text-center justify-center lg:text-left">
            <Image
              src={"/foot-logo.svg"}
              width={100}
              height={100}
              className="mx-auto lg:mx-0 lg:w-[140px]"
            />

            <p className="lg:pt-6 xs:pt-3 xs:pb-3 lg:text-xs">
              Samurai - Team of solution architects, developers, and consultants
              having only one aim in mind{" "}
              <span className="font-bold">
                “deliver the best, nothing else”
              </span>
            </p>
          </div>

          <div className="lg:w-[594px] xl:w-[450px] text-center lg:text-right">
            <ul className="flex flex-wrap justify-center lg:justify-end items-center lg:gap-5 lg:text-xs">
              <li>Terms and Conditions</li>
              <li>Publisher Terms</li>
              <li>Privacy Policy</li>
              <li>Our Partners</li>
            </ul>

            <ul className="flex justify-center lg:justify-end items-center gap-4 lg:gap-10 mt-3 lg:mt-8">
              <div className="border border-black w-[60px] flex-grow hidden lg:block" />
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mt-auto">
        <p className="w-full text-center text-white bg-black md:p-5 lg:p-2 text-sm xs:p-2">
          All Rights Reserved | Copyrights ©2024
        </p>
      </div>
    </div>
  );
};

export default Foot;
