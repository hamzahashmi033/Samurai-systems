const { Poppins } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: "#C92127",
        Black: "#0B0A0A",
        White: "#FAFAFA",
      },
      fontFamily: {
        Poppins: "Poppins",
        Neuropal: ["var(--neuropal)"],
        ClashDisplay: ["var(--clashdisplay)"],
      },
      screens: {
        xs: "0px", // Custom xs screen starting from 0px
        sm: "640px", // Default sm screen starts from 640px in Tailwind
        md: "768px", // Default md screen starts from 768px in Tailwind
        lg: "1024px", // Default lg screen starts from 1024px in Tailwind
        xl: "1280px", // Default xl screen starts from 1280px in Tailwind
      },
    },
    plugins: [],
  },
};
