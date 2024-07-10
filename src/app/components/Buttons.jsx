import React from "react";
const btnList = [
  {
    id: 1,
    data: " IT Infrastructure",
  },
  {
    id: 2,
    data: "  Cybersecurity",
  },
  {
    id: 3,
    data: " Digital Transformation",
  },
];

const Buttons = () => {
  return (
    <div className="mt-2 flex sm:gap-4 xs:gap-1  justify-center sm:text-[14px] text-[#655F5F] xs:text-[12px]">
      {btnList.map((btn) => (
        <button
          key={btn.id}
          className="sm:py-[10px] sm:shadow-lg sm:px-[18px] xs:py-[6px] xs:px-[10px] rounded-xl hover:text-White hover:bg-Red"
        >
          {btn.data}
        </button>
      ))}
    </div>
  );
};

export default Buttons;