import React from "react";
import Image from "next/image";
import { Hero } from "@/Components";

export default function page() {
  return (
    <div>
      <div>
        <Hero
          title="Our Restaurant"
          img="/Restaurant.png"
          alt="Restaurant Image"
        />
        <div className="responsive py-4">
          <p className="text-lg">
            At <span style={{fontFamily: 'myFont'}} className="text-xl">Rawhew Ranch</span> , you can enjoy delicious cuisine at our Restaurant
            situated next to the campsite. Our main offering includes succulent
            pork from our farm, goat meat, Kienyeji chicken, and fresh fish from
            the lake. Our meats are charcoal grilled to your liking. Vegetables
            are all sourced from our farm, guaranteeing you quality and
            freshness to treasure.
          </p>
          <div className="py-8">
            <h3
              style={{ fontFamily: "myFont" }}
              className="capitalize text-center text-4xl pb-6"
            >
              Our Menu
            </h3>
            <div className="flex flex-row gap-8 py-4">
              <Image
                src="/Choma.png"
                alt="Menu"
                width={500}
                height={500}
                className="object-cover h-[50vh] rounded-lg basis-2/5"
              />
              <div className="h-max basis-3/5 self-center">
                <h3
                  style={{ fontFamily: "myFont" }}
                  className="uppercase text-start text-2xl pb-4"
                >
                  Meat Selection
                </h3>
                <div className="flex flex-row justify-between">
                  <ul id="Food" className="list-none leading-10">
                    <li>Whole Goat</li>
                    <li>Goat Leg</li>
                    <li>Goat Ribs</li>
                    <li>Pork Per KG</li>
                    <li>Kienyeji Chicken</li>
                    <li>Whole Tilapia Fish</li>
                  </ul>
                  <ul id="Prices" className="list-none leading-10">
                    <li>Ksh 16,000</li>
                    <li>Ksh 4,000</li>
                    <li>Ksh 3,500</li>
                    <li>Ksh 1,200</li>
                    <li>Ksh 2,800</li>
                    <li>Ksh 1,200</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 py-4">
              <div className="h-max basis-3/5 self-center">
                <h3
                  style={{ fontFamily: "myFont" }}
                  className="uppercase text-start text-2xl pb-4"
                >
                  Side Dishes
                </h3>
                <div className="flex flex-row justify-between">
                  <ul id="Food" className="list-none leading-10">
                    <li>Ugali</li>
                    <li>Mukimo</li>
                    <li>Mashed Potatoes</li>
                    <li>Saute Potatoes</li>
                    <li>Rice</li>
                  </ul>
                  <ul id="Prices" className="list-none leading-10">
                    <li>Ksh 200</li>
                    <li>Ksh 200</li>
                    <li>Ksh 200</li>
                    <li>Ksh 300</li>
                    <li>Ksh 200</li>
                  </ul>
                </div>
              </div>
              <Image
                src="/Mashed.png"
                alt="Menu"
                width={500}
                height={500}
                className="object-cover h-[50vh] rounded-lg basis-2/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
