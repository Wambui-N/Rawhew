import React from "react";
import Image from "next/image";

export const Welcome = () => {
  return (
    <div className="responsive">
      <div>
        <h3
          style={{ fontFamily: "myFont" }}
          className="Capitalize text-center responsive_h"
        >
          Introducing Naivasha&apos;s Cozy Camp
        </h3>
        <p className="md:pt-8 pt-4 reaponsive_text">
          Naivasha is one of the most popular travel destinations in Kenya. It
          is beloved by visitors from all parts of Kenya and beyond due to its
          moderate climate and gorgeous scenery on the floor of the Great Rift
          Valley. At the core of it all is Lake Naivasha. This is one of the
          largest freshwater lakes in Africa which hosts a rich birdlife and
          supports large-scale horticulture that makes Kenya a leading flower
          exporter in the world. Surrounding the lake are unique geographical
          features such as Mt Longonot, Hell&apos;s Gate National Park, and
          private game sanctuaries, all attracting hundreds of outdoor
          enthusiasts every weekend. One cannot forget the numerous modern
          hotels, shopping malls, and restaurants catering to every taste,
          style, and budget. Naivasha is indeed “the place to be.”
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-12 gap-8 md:my-10 my-6">
        <div className="self-center flex flex-col gap-6 items-center">
          <p
            style={{ fontFamily: "myFont" }}
            className="capitalize md:text-3xl text-2xl text-center"
          >
            &quot;The place to be&quot;
          </p>
          <Image
            src="/Cycling.png"
            alt="Naivasha"
            width={500}
            height={500}
            className="object-cover h-[40vh] w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/Boat Ridding.png"
            alt="Naivasha"
            width={500}
            height={500}
            className="object-cover h-[60vh] w-full rounded-lg"
          />
        </div>
      </div>
      <div className="md:py-8 py-4">
        <h3
          style={{ fontFamily: "myFont" }}
          className="Capitalize text-center responsive_h"
        >
          Welcome to Rawhew Ranch
        </h3>
        <p className="md:pt-8 pt-4 responsive_text">
          In the midst of these attractions and offerings, there is
          <span style={{ fontFamily: "myFont" }} className="md:text-xl text-base">
            {' '}Rawhew Ranch
          </span>
          . A small intimate campsite bordering KWS Game Farm, a few meters from
          off the Naivasha – Kinangop Road. We offer high-quality pitches with a
          wide variety of facilities to enrich your camping experience. Our
          location away from the urban jungle and the busy highway gives our
          camp an adventurous sense of solitude and freedom. Cosily hidden from
          the crowds, yet so close to everything that is important
        </p>
      </div>
    </div>
  );
};
