import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black py-8">
      <div className="responsive md:grid md:grid-cols-2">
        <div className="">
          <Link href="/">
            <Image
              className=""
              src="/Text Logo.png"
              alt="logo"
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="md:grid md:grid-rows-2">
          <div className="md:grid md:grid-cols-2">
            <div>
              <p className="text-white lg:text-base text-xs">
                rawhewranch@gmail.com
              </p>
              <p className="text-white lg:text-base text-xs">0798902509</p>
              <Link
                className="text-white lg:text-base text-xs"
                href="https://www.google.com/maps/place/Rawhew+ranch+and+grill/@-0.7216262,36.4625495,17z/data=!3m1!4b1!4m6!3m5!1s0x182919000c0998a9:0xc41b2829f4bc5b3b!8m2!3d-0.7216316!4d36.4651244!16s%2Fg%2F11y373p7k0?entry=ttu"
              >
                <p>7FH8+82X Kinamba, Naivasha</p>
              </Link>
            </div>
            <div className="md:justify-self-end">
              <Link href="/Menu">
                <p className="text-white lg:text-base text-xs">Menu</p>
              </Link>
              <Link href="/">
                <p className="text-white lg:text-base text-xs">Rawhew Ranch</p>
              </Link>
              <div id="icons" className="flex flex-row gap-4">
                <Link
                  className=" border border-white rounded-sm"
                  href="https://www.facebook.com/profile.php?id=61551199892850&paipv=0&eav=AfYBBr3U6mXdoRY-PqqZg8GUTleV3JU0Ly-EKi8ZSp0VVl5qzFMchf3gs1FnStS-whA"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-facebook"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#FFFBE8"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </Link>
                <Link
                  className=" border border-white rounded-sm"
                  href="https://www.instagram.com/rawhewranch/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#FFFBE8"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="place-self-end">
            <p className="text-sm text-white/50 justify-self-end">
              &copy; 2024 Rawhew Ranch Kenya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
