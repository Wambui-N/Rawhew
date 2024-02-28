import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroProps } from "../../Types";

export const Hero = ({title, img, alt}:HeroProps) => {
  return (
    <div className="my-[3vh] max-h-screen">
      <h1
        style={{ fontFamily: "myFontCalt" }}
        className={`uppercase text-center text-8xl pt-10`}
      >
        {title}
      </h1>
      
      <Link href='#' className="rounded-full border border-primary my-4 mx-8 px-8 py-4">
          Give us a call
      </Link>

      {/* <Image
        className="object-cover max-h-[60vh]"
        src={img}
        alt={alt}
        height={3000}
        width={3000}
        objectFit="cover"
      /> */}
    </div>
  );
};
