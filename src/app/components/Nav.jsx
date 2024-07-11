"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="2xl:max-w-[1728px] text-white relative z-10">
      <div className="flex items-center justify-between py-5">
        <div className="cursor-pointer">
          <a href="/">
            <Image
              src="/nav_logo.png"
              width={100}
              height={100}
              alt="Logo"
              className="xl:w-[10rem] lg:w-[8rem] sm:w-[9rem] xs:w-[10rem]"
            />
          </a>
        </div>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="text-white bg-[#C92127] p-2 xs:p-1 rounded md:font-normal xs:font-[8px] md:mr-4 sx:mr-1"
          >
            Get A Quote
          </button>
          <ul className="flex items-center sm:gap-5 xs:hidden md:flex">
            <div className="flex items-center">
              <div className="border border-white w-[80px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
              <li className="cursor-pointer ml-3">
                <FaFacebookF size={22} />
              </li>
              <li className="cursor-pointer text-red-500 md:mx-3 xs:mx-1">
                <FaLinkedinIn size={22} />
              </li>
              <li className="cursor-pointer mr-3">
                <FaTwitter size={22} />
              </li>
              <div className="border border-white w-[80px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;