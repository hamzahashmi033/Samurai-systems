import Buttons from "./Buttons";
import React from "react";

import Image from "next/image";

const listData = [
    {
        id: 1,
        data: "Technical IT infrastructure auditing",
    },
    {
        id: 2,
        data: "IT Infrastructure Architecture and Development",
    },
    {
        id: 3,
        data: "Legacy Platform Migration",
    },
    {
        id: 4,
        data: "Legacy Platform Migration",
    },
    {
        id: 5,
        data: "IT Infrastructure Management Auditing",
    },
    {
        id: 6,
        data: "IT System Optimization Solutions",
    },
    {
        id: 7,
        data: "Data Center Security Services",
    },
    {
        id: 8,
        data: "Cloud Migration and Integration",
    },
];

const SolutionsSecondComp = () => {
    return (
        <div className="h-screen 2xl:mb-[200px] max-h-[100vh] lg:mb-[270px] md:mb-[100px]">
            <div className=" 2xl:w-[1728px] h-[100vh] pt-2 lg:mb-2   sm:w-[100vw]   mx-auto ">
                <div className="2xl:w-[1528px] mt-2 px-1   w-[85vw]  lg:shadow-xl mx-auto">
                    <div className="flex gap-2 justify-center   items-center">
                        <p className="border border-[#0B0A0A] h-px w-[5rem] ml-2 block xl:block" />
                        <p className="font-[300]    xs:text-[12px]  2xl:text-[20px]">
                            EXCELLENCE ACROSS MULTIPLE DISCIPLINES
                        </p>
                    </div>
                    <div className="">
                        <h2 className="font-[400] xs:text-left sm:text-center text-Black xs:text-[20px] sm:text-[26px]  2xl:text-[44px]">
                            <span className="text-Red ">Secured Your</span> Business With us
                        </h2>
                        <p className="font-[500] 2xl:text-[40px]  xs:text-[20px] sm:text-center ">
                            Your preferred IT solution
                        </p>
                    </div>

                    <Buttons />
                    <div className="2xl:max-w-[50vw] gap-8 flex xs:flex-col 2xl:mt-20 lg:flex-row w-[85vw]  mx-auto">
                        <div className="mt-4 lg:max-w-[35vw] 2xl:max-w-[25vw] sm:mx-auto lg:mx-20 2xl:mx-4 ">
                            {" "}
                            <div className="flex gap-2  items-center">
                                <p className="border border-[#725e5e]  w-[5rem] ml-2 block xl:block" />
                                <p className="font-[300] xs:text-[12px]  2xl:text-[20px]">
                                    IT Infrastructure
                                </p>
                            </div>
                            <div >
                                <h2 className="font-[400] xs:text-left  text-Black xs:text-[18px] sm:text-[26px]  2xl:text-[40px]">
                                    <span className="text-Red ">Major Expense</span> for Companies
                                    us
                                </h2>
                                <p className="font-[500] 2xl:text-[36px]  xs:text-[16px]  ">
                                    IT Solutions for Every Business Size
                                </p>
                            </div>
                            <div>
                                <p className="xs:text-[14px] 2xl:text-[18px] font-[400]">
                                    One of the biggest expenses for companies and enterprises is
                                    investing in the right IT equipment. We can help you if you're
                                    a start-up, a large company, or an organization moving to the
                                    cloud. Our services inculde.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-4 mb-20 ">
                                {" "}
                                <ul className="font-[500] xs:text-[12px]">
                                    {listData.slice(0, 3).map((item) => (
                                        <li
                                            className="flex flex-row items-center gap-2 mt-2"
                                            key={item.id}
                                        >
                                            <Image  src={"/check_Mark.svg"} width={30} height={30} />
                                            <span className="">{item.data}</span>
                                        </li>

                                    ))}
                                </ul>
                                <ul className="font-[500]  xs:text-[12px]">
                                    {listData.slice(3, 7).map((item) => (
                                        <li
                                            className="flex flex-row items-center gap-2 mt-2"
                                            key={item.id}
                                        >
                                            <Image src={"/check_Mark.svg"} width={30} height={30} />
                                            <span className="">{item.data}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <div className="my-auto lg:mr-8">
                            <Image
                                src={"/solution.png"}
                                width={621}
                                height={626}
                                className="lg:w-[400px] sm:h-[300px] 2xl:w-[621px] sm:object-fit "
                            // className=" w-full 2xl:w-[621px]  h-[626px] xs:w-[85vw] xs:h-[280px]   "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsSecondComp;