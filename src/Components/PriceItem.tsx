import React from "react";
import { PriceProps } from "../../Types";

const PriceItem = ({ title, descriptions }: PriceProps) => {
  return (
    <div>
      <h6
          style={{ fontFamily: "myFontCalt" }}
          className="Capitalize text-xl md:py-6 py-2"
        >
          {title}
        </h6>
      <ul>
        {descriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceItem;
