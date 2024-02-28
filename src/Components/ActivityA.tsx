import React from "react";
import Image from "next/image";
import { ActivityProps } from "../../Types";

export const ActivityA = ({ title, text, img, alt }: ActivityProps) => {
  return (
    <div className="md:py-8 py-3 flex md:flex-row flex-col md:gap-12 gap-2 place-items-center">
      <div className="md:basis-1/2">
        <h6
          style={{ fontFamily: "myFontCalt" }}
          className="Capitalize text-2xl md:py-6 py-2"
        >
          {title}
        </h6>
        <p className="responsive_text">{text}</p>
      </div>
      <div className="md:basis-1/2">
        <Image
          src={img}
          alt={alt}
          width={500}
          height={500}
          className="object-cover md:h-[50vh] h-[30vh] md:w-[80vh] rounded-lg"
        />
      </div>
    </div>
  );
};
