import React from "react";
import { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ image }: any) => {
  const [index, setIndex] = useState(0);

  const goToPrev = () => {
    const isFirstImage = index === 0;
    const newIndex = isFirstImage ? (image.length - 1) : index - 1;

    setIndex(newIndex);
  };
  const goToNext = () => {
    const isLastImage = index === image.length - 1;
    const newIndex = isLastImage ? 0 : index + 1;
    setIndex(newIndex);
  };
  const goToSlide = (imageIndex: number) => {
    setIndex(imageIndex);
  }

  return (
    <div className="flex flex-col relative justify-center 
    items-center lg:w-2/3 md:w-2/3 object-cover object-center">
      {/* TESTE CARROSSEL______________________________________________________________ */}

      <div
        id="prev"
        className="text-9xl absolute cursor-pointer left-[3%] z-10
        drop-shadow-[0px_0px_5px_rgba(0,0,0,0.8)]"
        onClick={goToPrev}
      >
        &#8249;
      </div>
      <div
        id="next"
        className="text-9xl drop-shadow-[0px_0px_5px_rgba(0,0,0,0.8)] 
        absolute cursor-pointer right-[3%] z-10"
        onClick={goToNext}
      >
        &#8250;
      </div>
      <img
        alt="shit"
        width={1920}
        height={1080}
        className="rounded-3xl relative aspect-[16/10] object-contain z-0"
        src={image[index]}
      />

      <div className="flex w-full gap-4 mt-3 justify-center items-center ">
        {image.map((image: any, imageIndex: number) => (
          <div 
          key="imageIndex" 
          className="cursor-pointer"
          onClick={()=>goToSlide(imageIndex)}>
            <svg height="20" width="20">
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke={index == imageIndex ? "#ff0f7b" : "none"}
                stroke-width="2"
                fill="#0d9488" 
              />
            </svg>
          </div>
        ))}
      </div>

      {/* TESTE CARROSSEL______________________________________________________________ */}
    </div>
  );
};

export default ImageSlider;
