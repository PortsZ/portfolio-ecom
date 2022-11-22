import React from "react";
import products from "../data/productsApi";
import Link from "next/link";
import Image from "next/image";

const MyWork = () => {
  return (
    <section className="text-gradient body-font">
      <div className="text-gradient-magenta text-6xl font-poppins  font-bold p-3">
        My work
      </div>
      <div className="container items-center w-full justify-center py-20 mx-auto">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center">
          {products.map((item) => {
            const product = item.name;
            const itemImage = item.image1Src;
            const alt = item.imageAlt;
            const project = item.project;
            const price = item.price;
            const id = item.id;



            return (
              <div
                className=" w-full rounded-lg bg-black-gradient-2 
              transition-colors p-3
              duration-[150ms] ease-out hover:ease-in
              border-solid border-2 border-[#120e1c]  hover:border-sky-200 "
              >
                <Link itemID="" href={`product/${product}?id=${id}`}>
                  <div className="aspect-video">
                  <img
                    className="rounded block relative aspect-video h-auto w-full
                              object-cover object-center"
                    src={itemImage}
                    alt={alt}
                  />
                  </div>
                  <div className="mt-4 text-start">
                    <h3 className="text-gradient  text-s tracking-widest title-font mb-1">
                      {project}
                    </h3>
                    <h2 className="text-gradient title-font text-lg font-medium">
                      {product}
                    </h2>
                    <div className="flex justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#FF0059"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="font-medium text-gradient-magenta text-2xl font-poppins">
                        &nbsp;:&nbsp;
                      </p>
                      <span className="font-medium text-gradient text-2xl font-poppins">
                        ~{price}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
