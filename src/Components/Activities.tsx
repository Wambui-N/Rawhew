import React from "react";
import { ActivityA } from "./ActivityA";
import { ActivityB } from "./ActivityB";

export const Activities = () => {
  return (
    <div className="responsive">
      <h6
        style={{ fontFamily: "myFontCalt" }}
        className="uppercase text-4xl text-center"
      >
        Activities
      </h6>
      <div>
        <ActivityA
          title="Camping"
          text="Camping is our main activity. We have secure, private, and spacious grounds for camping. You bring your own tent and accessories such as a sleeping tent and mattress. You can also hire from the camp. The camp offers a kitchen, so you bring your own food and prepare it your way and at your convenience. We provide food and a cook with prior arrangements and at an extra cost. There is enough water and clean washrooms and showers"
          img="/Camping.png"
          alt="Camping"
        />
        <ActivityB
          title="Cycling"
          text="You can hire a bicycle from the camp and indulge in a cycling adventure. Our camp directly neighbours the KWS Game Farm which is dotted with rocky outcrops and natural vegetation such as Leleshwa and Euphorbia trees. There are also a variety of range animals such as impala, Eland, Zebras, and a variety of grassland birds. From our camp, you can cycle along the game farm at your pace and back to the camp. You can also take a bike to the highway and to Naivasha town."
          img="/Cycling.png"
          alt="Cycling"
        />
        <ActivityA
          title="Horse Riding"
          text="Saddle Up for Pure Joy: The Art of Riding! There's a unique joy that comes from the rhythmic dance between rider and horse, a harmony that only equestrians truly understand. At Rawhew Ranch, we invite you to experience this exhilarating joy firsthand. Whether you're a seasoned rider or a first-timer, our expert instructors are here to guide you through the art of riding with skill and grace. Join us for a journey of pure joy on horseback, surrounded by the breathtaking beauty of Rawhew Ranch. Your equestrian adventure awaits!"
          img="/horse ridding.jpg"
          alt="Horse Ridding"
        />
        <ActivityB
          title="Weddings In Style"
          text="If you are planning for a wedding reception or party, we have the best grounds for you and your team at Rawhew Ranch. What awaits you here is a secure, clean, and green setup that is manicured to the highest standards of presentation. Furthermore, the whole ground can be reserved exclusively for your group and function, whether catered or self-catering"
          img="/wedding.jpg"
          alt="Wedding"
        />
        <ActivityA
          title="Team Building and General Events"
          text="Rawhew Ranch suits all your group activities and events, such as corporate team building and end-of-year functions. We meet all your needs in outdoor functions as we are amply equipped to cater to your individual needs while our grounds are well-maintained to offer the perfect atmosphere for any function. Contact us when seeking a venue for that special birthday event, graduation party or related events. We shall be happy to meet"
          img="/team building.jpg"
          alt="Team Building"
        />
        <ActivityB
          title="Goat Roasting (Nyama Choma)"
          text="You want to lay that special goat for your Chama, friends, or family? We all do once in a while. At Rawhew Ranch, we arrange for you to buy a goat at the farm price – from our goat farm nearby. You have all the facilities that you need in our camp to charm your group with the goat offering - from a spacious kitchen and jikos to water and charcoal. At a reasonable fee, we can do all the preparations including roasting, cooking, and serving. This takes away all the headaches of arranging for logistics and leaves you to concentrate on your event."
          img="/nyama choma.jpg"
          alt="Nyama Choma"
        />
        <ActivityA 
            title="Boat Riding"
            text="Lake Naivasha is a wonderful recreation site for nature lovers and adventure seekers. It is a boating paradise for groups and families who love water sports. The lake hosts schools of hippos and numerous water birds such as cormorants and pelicans. Fish eagles and kingfishers are commonly sighted on the shoreline darting for fish in the waters. We arrange boating rides in Lake Naivasha from our camp. This can be combined with other excursions to give you full day programme"
            img="/Boat Ridding.png"
            alt="Boat Ridding"
        />
        <ActivityB 
            title="Nyandarua Farm Visits"
            text="Nyandarua County is renowned for food production. It is the hub of potatoes, carrots, minjis, and a variety of vegetables From our camp, you can visit nearby farms and meet the farmers in their “office.” Urban children enjoy the visits – many don't even know where their favourite chips and yoghurt come from. It’s a whole new experience when they visit a shamba. You have a chance to purchase farm produce directly from the farm which you carry in your bike or have it dropped at the camp. You can also buy other organic foods such as kienyeji chicken and eggs which you can also cook from the camp"
            img="/Farm.png"
            alt="Farm"
        />
        <div>
          <h6
            style={{ fontFamily: "myFontCalt" }}
            className="uppercase text-xl text-center"
          >
            Outdoor Excursions
          </h6>
          <p className="pt-4 text-lg">
            While staying with us at <span style={{fontFamily: 'myFont'}} className="text-xl">Rawhew Ranch</span>, there is a whole variety of
            exciting adventures at your disposal. Some are self-service – you
            can do it yourself However, we also provide transport and guides to
            any of these locations and activities that can make your stay
            memorable Naivasha and Rift Valley geographical features offer great
            sceneries for hiking expeditions by individuals and groups. Sample
            these:
          </p>
        </div>
        <ActivityA 
            title="Longonot Hiking"
            text="Longont is a dormant crater with a beautiful caldera at the top. Very ideal for an adventurous hike reaching to the top and enjoying a picnic as you savour the natural beauty of the caldera and distant vistas."
            img="/longonot.jpg"
            alt="Longonot"
        />
        <ActivityB 
            title="Eburu Forest"
            text="Eburu Hills are the highest mountains on the floor of the Rift Valley. Situated to the West of Lake Naivasha, they host an indigenous forest that offers perfect atmosphere for nature walks and bird watch offering a panoramic view of Lake Naivasha and its surroundings"
            img="/eburu.jpg"
            alt="Eburu"
        />
        <ActivityA 
            title="Hells Gate National Park"
            text="Hells Gate has a host of rocky outcrops such as Fisher’s Tower that is popular with rock climbers. It also has a big gorge that attracts many hikers. Other attractions include wildlife and geothermal power wells and a natural spa. Hells Gate is one of the few parks in Kenya where visitors can walk or cycle through. Experience all this from our camp."
            img="/hellsgate trail.jpg"
            alt="Hells Gate"
        />
      </div>
    </div>
  );
};
