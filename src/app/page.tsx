import React from "react";
import { Hero, Welcome, Gallery, Amenities, Activities } from "@/Components";

export default function page() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Gallery />
      <Amenities />
      <Activities />
    </div>
  );
}
