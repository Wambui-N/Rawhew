import React from "react";
import { Hero, Welcome, Gallery, Amenities, Activities, Terms, Prices } from "@/Components";

export default function page() {
  return (
    <div className="">
      <Hero 
        title="Rawhew Ranch"
        img="/HellsGate.png"
        alt="Hells Gate"
      />
      <Welcome />
      <Gallery />
      <Amenities />
      <Activities />
      <Prices />
      <Terms />
    </div>
  );
}
