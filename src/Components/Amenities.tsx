import React from "react";
import Image from "next/image";

export const Amenities = () => {
  return (
    <div className="responsive">
      <h6
        style={{ fontFamily: "myFontCalt" }}
        className="uppercase text-4xl text-center"
      >
        Our Amenities
      </h6>
      <div className="flex flex-row items-center justify-between pt-10">
        <ul className="list-none leading-10 text-lg">
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
            width={2000}
            height={2000}
            className="object-cover h-[70vh] w-[70vh] rounded-lg"
        />
      </div>
    </div>
  );
};
