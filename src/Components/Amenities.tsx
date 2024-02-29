import React from "react";
import Image from "next/image";

export const Amenities = () => {
  return (
    <div className="responsive">
      <h6
        style={{ fontFamily: "myFontCalt" }}
        className="uppercase responsive_h text-center"
      >
        Our Amenities
      </h6>
      <div className="flex md:flex-row flex-col gap-4 md:items-center md:justify-between md:pt-10 pt-4">
        <ul className="list-disc leading-10 responsive_text md:basis-1/2">
          <li>Free, secure, and ample parking</li>
          <li>Clean and modern washrooms and showers</li>
          <li>Double & Single tents + mattresses for hire</li>
          <li>Bicycles for hire</li>
          <li>Safe and clean grounds for camping with your own tent</li>
          <li>Cooking space and firewood at a small fee</li>
          <li>Grill for hire</li>
          <li>Fire pit for evening bonfires</li>
          <li>Reliable borehole water</li>
          <li>Cottage for hire</li>
          <li>Cafeteria for coffee and snacks</li>
        </ul>
        <Image 
            src="/Bonfire.png"
            alt="Amenities"
            width={1000}
            height={1000}
            className="object-cover md:h-[70vh] h-[30vh] w-full rounded-lg md:basis-1/2"
        />
      </div>
    </div>
  );
};
