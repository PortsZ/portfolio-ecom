import React from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isShowing, setIsShowing] = useState(true);

  return (
    <nav
      className="w-full flex py-5 justify-between
    items-center navbar  scroll-smooth scroll-p-4" 
    >
      <Link href="/">
        <p className=" font-Thinking_of_Betty text-4xl"> PortsZ </p>
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="text-white font-normal cursor-pointer text-[16px] 
          font-poppins ml-10"
          >
            <a href={`/#${nav.id}`}> {nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-orange-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="text-black font-normal cursor-pointer text-[16px] 
          font-poppins mb-8"
            >
              <a href={`/#${nav.id}`} >{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
