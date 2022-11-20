import React from "react";
import PortsZ from "./PortsZ";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <div className="justify-between">
      <footer className="text-gray-400 body-font">
        <div className="gap-4 flex items-center sm:flex-row flex-col">
          <a href="/#home">

            <PortsZ/>

          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            <a
              href="https://twitter.com/PortsZ_"
              className="text-gray-500 text-base font-poppins ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @PortsZ_
            </a>
          </p>
          <span className="inline-flex sm:ml-auto text-3xl sm:mt-0 mt-4 justify-center sm:justify-start">
            <SocialMediaIcons />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
