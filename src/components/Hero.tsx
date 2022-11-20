import React from "react";
import Image from "next/image";
import jp from "../assets/jp.jpg";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row xl:flex-row w-full py-18 items-center" >
      <div className="w-full xl:w-1/2 md:w-1/2 xs:w-full mt-5 items-center justify-center sm:w-full">
        <h1
          className="xl:text-7xl md:text-6xl sm:text-5xl text-3xl 
        text-gradient font-poppins leading-loose	font-bold"
        >
          Welcome to:
        </h1>

        <h2
          className="xl:text-7xl md:text-6xl sm:text-5xl text-3xl text-center
         text-black font-poppins xs:leading-[0rem] leading-[0rem] mb-3	font-bold"
        >
          <span className="font-Thinking_of_Betty  font-thin text-gradient">
            "
          </span>
          <span className="text-gradient-magenta font-Thinking_of_Betty  font-thin">
            &nbsp;PortsZ&nbsp;Folio
          </span>
          <span className="font-Thinking_of_Betty  font-thin text-gradient">
            "!
          </span>
        </h2>
        <p className="text-gray-400 mt-10">
          Pun intended, Fullstack Dev based in my room 24/7
        </p>
      </div>
      <div
        className="text-white h-auto sm:w-full md:w-1/2 xl:w-1/2"
        id="ABOUT ME"
      >
        <div className="container px-4 mx-auto flex">
          <div className="lg:w-full mx-auto  ">
            <div className="flex flex-col ">
              <div className="sm:w-full text-center sm:py-8">
                <div className="w-[24%] aspect-[11/16] mt-3 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                  <Image
                    src={jp}
                    alt="jp"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium font-Nunito title-font mt-4 text-white text-xl">
                    João Pedro Portes
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <SocialMediaIcons/>
                                    <p className="text-base mt-2 text-gray-400">
                    Co-Founder & CEO &#8594; JPG Agency
                  </p>
                  <p className="text-base text-gray-400">
                    {/* Computer Engeneer grad that dropped out to be a full time
                    dev. */}Software Engeneer &#8594; NextJS | NodeJS | Python | C++ 
                  </p>
                </div>
              </div>
              <div className="sm:w-full sm:py-8 sm:border-t border-sky-300 sm:border-l-0 border-t mt-4 pt-4 sm:mt-0 text-center ">
                <p className="leading-relaxed font-Nunito text-lg mb-4">
                  Welcome to my portfolio! This website is fully built like an ecommerce. I can post projects
                  just like uploading products to an ecom store. Pages are dynamicaly routed
                  and created from the "products" database. That way I can focus on the projects itself!
                  
                </p>
                <Link href='/#Projects' className="text-red-400 inline-flex items-center">
                  My Work
                
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
