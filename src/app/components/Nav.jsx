"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    it: false,
    cyber: false,
    digital: false,
    about: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  const menuItems = [
    { label: "IT Infrastructure", key: "it" },
    { label: "Cybersecurity", key: "cyber" },
    { label: "Digital Transformation", key: "digital" },
    { label: "About Us", key: "about" },
  ];

  return (
    <nav className="2xl:max-w-[1728px] mx-auto text-white">
      <div className="flex items-center justify-between py-7">
        <div className="cursor-pointer">
          <a href="/">
            <Image
              src="/nav_logo.png"
              width={100}
              height={100}
              alt="Logo"
              className="lg:w-[7rem] sm:w-[8rem] xs:w-[8rem]"
            />
          </a>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="text-white bg-[#C92127] xl:px-[32px]  xs:px-[16px] xs:py-[2px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px] rounded-[5px] lg:hidden"
          >
            Get A Quote
          </button>
          <button className="text-white ml-4" onClick={toggleMenu}>
            <FiMenu size={24} />
          </button>
        </div>
        <ul className="hidden lg:flex gap-5">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="relative text-base cursor-pointer flex items-center"
              onClick={() => toggleDropdown(item.key)}
            >
              {item.label} <RiArrowDropDownLine />
              {dropdownOpen[item.key] && (
                <ul className="absolute top-full left-0 bg-black p-3">
                  <li className="p-2">Service 1</li>
                  <li className="p-2">Service 2</li>
                  <li className="p-2">Service 3</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
        <ul className="hidden lg:flex items-center gap-5">
          <div className="flex items-center">
            <div className="border border-white w-[80px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
            <li className="cursor-pointer ml-3">
              <FaFacebookF size={25} />
            </li>
            <li className="cursor-pointer text-red-500 mx-3">
              <FaLinkedinIn size={25} />
            </li>
            <li className="cursor-pointer mr-3">
              <FaTwitter size={25} />
            </li>
            <div className="border border-white w-[80px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
          </div>
        </ul>
        <button
          type="button"
          className="hidden lg:block text-white bg-[#C92127] xl:px-[32px]  xs:px-[16px] xs:py-[2px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px] rounded-[5px]"
        >
          Get A Quote
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden p-5 bg-black">
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className="cursor-pointer flex flex-col items-start"
                onClick={() => toggleDropdown(item.key)}
              >
                <div className="flex items-center">
                  {item.label} <RiArrowDropDownLine />
                </div>
                {dropdownOpen[item.key] && (
                  <ul className="mt-2 w-full bg-black p-3">
                    <li className="p-2">Service 1</li>
                    <li className="p-2">Service 2</li>
                    <li className="p-2">Service 3</li>
                  </ul>
                )}
              </li>
            ))}
            <li className="cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer text-red-500">
              <FaLinkedinIn />
            </li>
            <li className="cursor-pointer">
              <FaTwitter />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
