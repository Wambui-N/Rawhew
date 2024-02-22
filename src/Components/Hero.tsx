import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="my-[3vh] max-h-screen">
      <h1
        style={{ fontFamily: "myFontCalt" }}
        className={`uppercase text-center text-8xl`}
      >
        Rawhew Ranch
      </h1>
      <Link href="#">
        <div className="-mt-24 relative left-[42.5vw] top-[13vh] bg-white rounded-full h-[15vw] w-[15vw]">
          <div className="relative left-[1vw] top-[1vw] bg-primary rounded-full h-[13vw] w-[13vw] flex items-center place-content-center">
            <p
              style={{ fontFamily: "myFont" }}
              className="Capitalize text-center text-md text-4xl self-start m-10 h-[6vw] w-[6vw]"
            >
              Give us a call
            </p>
          </div>
        </div>
      </Link>
      <Image
        className="object-cover max-h-[60vh]"
        src="/HellsGate.png"
        alt="Hero Image"
        height={3000}
        width={3000}
        objectFit="cover"
      />
    </div>
  );
};
