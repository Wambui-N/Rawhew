import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="mx-[8vw] mt-[5vh]">
      <div className="flex flex-row justify-center items-center">
        <Link className='px-[6vw] font-medium text-md' href="/">Home</Link>
        <Link className='px-[2vw]' href="/">
          <Image
            className="h-[100px] w-auto"
            src="/No Text Logo.png"
            alt="logo"
            width={500}
            height={500}
            priority
          />
        </Link>
        <Link className='px-[6vw] font-medium text-md' href="/Menu">Menu</Link>
      </div>
    </div>
  );
};
