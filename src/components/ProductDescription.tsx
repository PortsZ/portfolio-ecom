import Link from "next/link";
import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Stars from "./stars";

function ProductDescription(props: any){

  return (
    <div>
      <h2 className="text-sm  title-font text-gray-900 tracking-widest">
        {props.product.project}
      </h2>
      <h1 className="text-white text-3xl  title-font font-medium mb-1">
      {props.product.name}
      </h1>
      <div className="flex  mb-4 w-full justify-start items-center">
        <div className="flex items-start pr-4 py-4 flex-col border-r-2 border-gray-800">
        <span className="flex mb-2 items-center">
          <Stars />
          
        </span>
        <div className=" text-gray-600">Your Awnsewer wont be saved {";)"}</div>
        </div>
        <div className="flex w-1/2 text-3xl justify-start  h-10 ml-3 text-gray-200 space-x-2">
          <SocialMediaIcons />
        </div>
      </div>
      <p className="leading-relaxed text-primary">
      {props.product.description}
      </p>
      <div className="flex sm:flex-row flex-col gap-4  mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
        <div className="flex">
          <span className="mr-3">Color</span>
          <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-800 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
        </div>
        <div className="flex ml-6 items-center">
          <span className="mr-3">Size</span>
          <div className="relative">
            <select className="rounded border border-gray-700 focus:ring-2 focus:ring-pink-900 
            bg-transparent appearance-none py-2 focus:outline-none focus:border-pink-500
             text-black pl-3 pr-3">
              <option>{props.product.size}</option>
              <option>You can't</option>
              <option>change the</option>
              <option>project size &nbsp;</option>
              <option>{";)"}</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <span className="title-font font-medium text-2xl text-white">
        {props.product.price}
        </span>

        <Link href={props.product.link}>
        <button className=" ml-auto text-black bg-cyan-500 border-0 py-2 px-6 focus:outline-none
         hover:bg-cyan-900 hover:text-white rounded transition-all duration-200">
          <span className="line-through">See Live!</span>
        </button>
        <div className="text-gray-700 text-center text-sm">In Construction</div>
        </Link>

        <Link href={props.product.github}>
        <button className="flex text-black bg-cyan-500 border-0 py-2 px-6 focus:outline-none
         hover:bg-cyan-900 hover:text-white rounded transition-all duration-200"
          >
          {"<Show me some code!>"}
        </button>
        </Link>

        <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-red-600 ml-4">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
