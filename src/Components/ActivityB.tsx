import React from "react";
import Image from "next/image";
import { ActivityProps } from "../../Types";

export const ActivityB = ({ title, text, img, alt }: ActivityProps) => {
  return (
    <div className="py-8 grid grid-cols-2 gap-12 place-items-center">
      <div>
        <Image
          src={img}
          alt={alt}
          width={500}
          height={500}
          className="object-cover h-[50vh] w-[80vh] rounded-lg"
        />
      </div>
      <div className="">
        <h6
          style={{ fontFamily: "myFontCalt" }}
          className="Capitalize text-2xl py-6"
        >
          {title}
        </h6>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};
