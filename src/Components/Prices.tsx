import React from "react";
import PriceItem from "./PriceItem";

const Prices = () => {
  return (
    <div id="prices" className="responsive md:py-6 py-1">
      <h6
        style={{ fontFamily: "myFontCalt" }}
        className="uppercase text-xl text-center md:py-6 py-4 responsive_h"
      >
        Prices
      </h6>{" "}
      <div className="md:grid md:grid-cols-2 md:gap-12 flex flex-col gap-2">
        <div>
          <PriceItem
            title="Camping"
            descriptions={[
              "Camping with own food an own tent:",
              "Ksh. 1000 for adults",
              "Ksh. 400 for children sharing with parents",
              "Ksh. 700 for children with own tent",
            ]}
          />
          <PriceItem
            title="Tent Hire"
            descriptions={[
              "Ksh 4,500 for 4 pax sharing 2 double mattresses",
              "Ksh 8,000 for 8 pax sharing 4 double mattresses",
              "Ksh 3,500 for 2 pax sharing 1 double mattress",
            ]}
          />
          <PriceItem
            title="Team Building"
            descriptions={[
              "Full board:",
              "Ksh 6,500 per person inclusive of tents and grounds, breakfast, dinner, and lunch,10 am & 4.00 pm tea served with snacks.",
              "Day team building:",
              "Ksh 1,500 per person inclusive of use of grounds, lunch, 10 am & 4 pm tea served with snacks and Lunch",
            ]}
          />
          <PriceItem
            title="Beddings Hire"
            descriptions={[
              "Ksh. 1000 for 1 set of 1 double mattress, 2 bedsheets & 1 blanket, 2 towels",
            ]}
          />
        </div>
        <div>
          <PriceItem
            title="Exclusive Use of Camp"
            descriptions={["Ksh. 60,000 for 24 hours"]}
          />
          <PriceItem
            title="Cottage"
            descriptions={[
              "Stays 5 people in 2 bedrooms,",
              "Ksh. 40,000 per night",
            ]}
          />
          <PriceItem
            title="Children's Playground"
            descriptions={["Ksh 300 per child. Free for resident campers"]}
          />
          <PriceItem
            title="Guided Cycling"
            descriptions={["Ksh 300 per person"]}
          />
          <PriceItem title="Cycling" descriptions={["Ksh 400 per hour"]} />
          <PriceItem
            title="Horse Riding"
            descriptions={["Ksh 3,000 per hour"]}
          />
          <PriceItem
            title="Guided Farm Visit"
            descriptions={["Ksh 300 per person"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
