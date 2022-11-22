import React, { use } from "react";
import { useState } from "react";
import { star } from "../assets";

const Stars = () => {

  const starsArr = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = (value: any) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value: any) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex flex-row" >
      
      {starsArr.map((_,index)=> {
        return(
            <svg
        fill={(hoverValue || currentValue) > index ? "currentColor" : "none"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6 text-teal-600 hover:fill-blue-900"
        viewBox="0 0 24 24"
        onClick={()=> handleClick(index+1)}
        onMouseOver={()=>handleMouseOver(index + 1)}
        onMouseLeave={handleMouseLeave}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
        )
      })}
      
      
      
    </div>
  );
};

export default Stars;
