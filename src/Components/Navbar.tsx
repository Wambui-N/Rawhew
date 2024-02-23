import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="responsive">
      <div className="flex flex-row justify-center items-center">
        <Link className='px-[6vw] font-medium text-md text-black text-xl' href="/">Home</Link>
        <Link className='px-[2vw]' href="/">
          <Image
            className="lg:h-[12vh] h-[8vh] w-auto"
            src="/No Text Logo.png"
            alt="logo"
            width={100}
            height={100}
            priority
          />
        </Link>
        <Link className='px-[6vw] font-medium text-md text-black text-xl' href="/Menu">Menu</Link>
      </div>
    </div>
  );
};
