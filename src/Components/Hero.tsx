import React from "react";
import localFont from "next/font/local";

const myFont = localFont({ src: "Font/Foglihtenno07-e9wz3.otf" });

export const Hero = () => {
  return (
    <div>
      <h1 className={`uppercase ${myFont.className}`}>Rawhew Ranch</h1>
    </div>
  );
};
