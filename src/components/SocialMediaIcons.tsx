import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc"

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row xl:flex-row gap-3  justify-center items-center">
      <a href="https://github.com/PortsZ"><VscGithub/></a>
      <a href="https://www.linkedin.com/in/joao-pedro-portes-301364184/"><FaLinkedin/></a>  
      <a href="https://twitter.com/PortsZ_"><FaTwitter/></a>  
      
    </div>
  );
};

export default SocialMediaIcons;
