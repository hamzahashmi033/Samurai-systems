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
  ];

  return (
    <nav className="2xl:max-w-[1728px] text-white relative z-10">
      <div className="flex items-center justify-between py-5">
        <div className="cursor-pointer">
          <a href="/">
            <Image
              src="/nav-logo.svg"
              width={100}
              height={100}
              alt="Logo"
              className="xl:w-[10rem] lg:w-[7rem] sm:w-[8rem] xs:w-[8rem]"
            />
          </a>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="text-white bg-[#C92127] p-2 rounded lg:hidden"
          >
            Get A Quote
          </button>
          <button className="text-white ml-4" onClick={toggleMenu}>
            <FiMenu size={24} />
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-2 xl:gap-3">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="relative text-base cursor-pointer flex items-center font-normal font-ClashDisplay"
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
          <li className="relative text-base cursor-pointer flex items-center font-normal font-ClashDisplay">
            <a href="/about-us">About Us</a>
          </li>
        </ul>
        <ul className="hidden lg:flex items-center gap-5">
          <div className="flex items-center">
            <div className="border border-white w-[80px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
            <li className="cursor-pointer ml-3">
              <FaFacebookF size={22} />
            </li>
            <li className="cursor-pointer text-red-500 mx-3">
              <FaLinkedinIn size={22} />
            </li>
            <li className="cursor-pointer mr-3">
              <FaTwitter size={22} />
            </li>
            <div className="border border-white w-[80px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
          </div>
        </ul>
        <button
          type="button"
          className="hidden lg:block text-white bg-[#C92127] p-1 lg:p-3 rounded"
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
                className="cursor-pointer flex flex-col items-start font-normal font-ClashDisplay"
                onClick={() => toggleDropdown(item.key)}
              >
                <div className="flex items-center font-normal font-ClashDisplay">
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
              <a href="/about-us">About Us</a>
            </li>
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
