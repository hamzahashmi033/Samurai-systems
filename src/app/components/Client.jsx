import * as React from "react";
import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import PartnerIcon from "./PartnerIcon";
import { PartnerImages } from "../utils/Client.constants";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
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
export default function Client() {
  return (
    <div className="bg-Black">
      <div className="sm:container overflow-x-hidden overflow-y-hidden lg:container xs:px-4 sm:px-8 lg:px-8  relative sm:mx-auto">
        <div className="2xl:max-w-[1526px] w-[85vw]  mx-auto">
          <div className="sm:py-10 xs:py-4 text-White sm:mb-0">
            <h2 className="font-[300] xs:text-[22px] sm:text-[40px] 2xl:mr-6 text-[48px]  2xl:text-[66.66px] xs:text-center sm:text-end ">
              Excellence <br />
              <span className="font-[400] xs:text-[28px] sm:text-[42px] 2xl:text-[109px]  ">
                and Innovations
              </span>{" "}
              <br />{" "}
              <span className="font-[600] xs:text-[34px] sm:text-[48px] md:text-[36] 2xl:text-[103px] text-Red">
                Shaping Tomorrow
              </span>
            </h2>
          </div>
          <div className="xs:mb-4 sm:mb-12">
            <div className="text-White xs:justify-center sm:justify-start flex gap-2">
              <Image
                src={"/Line4.svg"}
                width={100}
                height={100}
                className="2xl:w-[129px] xs:w-[20px] lg:w-[70px]"
              />
              <p className="2xl:text-[20px] text-center font-[300] xs:text-[14px] sm:text-[16px]">
                Our Partners
              </p>
            </div>
            <div className="flex sm:justify-between xs:justify-center  2xl:mr-6 items-center ">
              <div className=" ">
                <h3 className="font-[400] 2xl:text-[40px] xs:text-center sm:text-start xs:text-[22px] sm:text-[26px]  text-White">
                  <span className="text-Red ">Our</span> Stack Partners
                </h3>
                <p className="font-[500] 2xl:text-[40px] xs:text-center sm:text-start sm:text-[26px] xs:text-[22px] text-White">
                  to grow your Business.
                </p>
              </div>
              <p className="text-White font-[300] hidden sm:block xs:text-[12px] xl:text-[12px] 2xl:text-[18px]">
                From small businesses to industry giants, we provide tailored
                solutions that fit your
                <br /> unique needs. Our expertise spans diverse sectors,
                ensuring personalized service and
                <br /> robust support. Trust us to help you grow and thrive in
                an ever-evolving market.
              </p>
            </div>
          </div>
          <div className="2xl:mr-6 sm:h-[200px] scroll-container mb-6" >

            <Box
              sx={{
                flexGrow: 1,
                marginTop: "20px",
                display: "flex",
                // backgroundColor: "#ba000d",
                justifyContent: "space-between",
                alignItems: "center",
                marginX: "auto",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  // maxWidth: "80vw",
                  marginX: "auto",
                  // background: "#ffffff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {PartnerImages.map((img) => (
                  <Grid xs={6} sm={3} md={3}>
                    <PartnerIcon imgPath={img.path} />
                  </Grid>
                ))}
              </Grid>
            </Box>

          </div>
        </div>
      </div>
    </div>
  );
}
