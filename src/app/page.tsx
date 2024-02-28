import React from "react";
import { Hero, Welcome, Amenities, Activities, Terms, Prices } from "@/Components";

export default function page() {
  return (
    <div className="">
      <Hero 
        title="Rawhew Ranch"
        img="/HellsGate.png"
        alt="Hells Gate"
      />
      <Welcome />
      <Amenities />
      <Activities />
      <Prices />
      <Terms />
    </div>
  );
}
