import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import StaffCard from "../../components/staffCard/staffCard";
import { staff } from "../../data/AppData";
React.useLayoutEffect = React.useEffect;

const About = () => {
  return (
    <div className="section about">
      <h5 className="yellowTitle">We Have A Passion For Games!</h5>
      <h1 className="title">Great Game Made By Passionate People</h1>
      <p className="description">
        Our founding team are veteran individual contributors who have a passion
        for world-building.
      </p>
      <div className="staffGrid">
        {staff.map((s, i) => (
          <StaffCard
            key={i}
            imageUrl={s.imageUrl}
            name={s.name}
            description={s.description}
            jobTitle={s.jobTitle}
            twitterUrl={s.twitterUrl}
            linkedinUrl={s.linkedinUrl}
            facebookUrl={s.facebookUrl}
            instagramUrl={s.instagramUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
