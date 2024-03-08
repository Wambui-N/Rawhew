import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroProps } from "../../Types";

export const Hero = ({ title, img, alt }: HeroProps) => {
  return (
    <div className="my-[3vh] max-h-screen">
      <h1
        style={{ fontFamily: "myFontCalt" }}
        className={`uppercase text-center lg:text-8xl md:text-7xl sm:text-6xl text-4xl py-10`}
      >
        {title}
      </h1>

      <Image
        className="object-cover md:max-h-[60vh] h-[80vh] w-full"
        src={img}
        alt={alt}
        height={3000}
        width={3000}
        objectFit="cover"
      />
    </div>
  );
};
