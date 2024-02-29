import React from "react";

export const Terms = () => {
  return (
    <div className="responsive">
      <h6
        style={{ fontFamily: "myFontCalt" }}
        className="uppercase text-4xl text-center"
      >
        Terms and Conditions
      </h6>
      <ul className="py-8 list-disc list-inside leading-10 responsive_text md:basis-1/2">
        <li>
          All services such as tents, catering, goats etc must be reserved in
          advance
        </li>
        <li>Reservation is confirmed upon payment of a 30% deposit</li>
        <li>Discard litter in the provided bins</li>
        <li>
          Pets are not allowed in the camp, except when it is exclusively
          reserved
        </li>
        <li>No picnics after 6 pm for day picnics</li>
        <li> Vehicles must be parked only in the designated area.</li>
        <li>
          While the management provides ample security, vehicles are parked at
          owners’ risk
        </li>
        <li> Check-out time is 1200 hrs</li>
      </ul>
    </div>
  );
};
