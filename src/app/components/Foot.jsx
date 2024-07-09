import React from 'react'
import ReUse from './ReUse'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
const Foot = () => {
    return (
        <>
            <div className="xs:overflow-hidden h-screen">
                <div className="sm:container lg:container relative  sm:mx-auto ">

                    <div className="flex flex-col justify-center items-center border shadow-lg xl:p-8 lg:p-3 sm:p-2 xs:m-1 xl:m-[5rem] lg:m-[3rem] md:m-[2rem]">
                        <ReUse
                            p1="Elevate you Presents"
                            span1="Ready TO"
                            h1="Elevate Your"
                            h2="Digital Strategy?"
                            p2="We want your campaigns to thrive. Digital Remedy connects the right data to the highest performing channels to nail your dream KPIs—so you can feel confident your media spend is worth every penny."
                        />

                        <button type='button' className='bg-black w-[15rem] text-white px-4 py-2 m-5 font-semibold rounded text-sm sm:text-base lg:text-lg'> Book  Consultation </button>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between items-center xs:px-1 sm:px-8'>
                        <div className="lg:w-[625px] text-center justify-center lg:text-left ">
                            <Image src={'/foot-logo.svg'} width={100} height={100} className='mx-auto lg:mx-0 lg:w-[140px] ' />

                            <p className='lg:pt-6 xs:pt-3 lg:text-base'>Samurai - Team of solution architects, developers, and consultants having only one aim in mind <span className='font-bold'>“deliver the best, nothing else”</span></p>
                        </div>

                        <div className="lg:w-[594px] text-center lg:text-right">
                            <ul className='flex flex-wrap justify-center lg:justify-end items-center gap-4 lg:gap-5'>
                                <li>Terms and Conditions</li>
                                <li>Publisher Terms</li>
                                <li>Privacy Policy</li>
                                <li>Our Partners</li>
                            </ul>

                            <ul className='flex justify-center lg:justify-end items-center gap-4 lg:gap-10'>
                                <div className='border border-black w-[60px] h-px flex-grow hidden lg:block' />
                                <li><FaInstagram /></li>
                                <li><FaLinkedinIn /></li>
                                <li><FaFacebookF /></li>
                                <li><FaTwitter /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-0 w-full'>
                    <p className='w-full text-center text-white bg-black p-5 bottom-0'>All Rights Reserved | Copyrights ©2024</p>
                </div>

            </div>
        </>
    )
}

export default Foot
