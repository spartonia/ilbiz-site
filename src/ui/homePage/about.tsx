import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import Arrow from "../../components/list/arrow";
import StaffCard from "../../components/staffCard/staffCard";
import { staff } from "../../data/AppData";
React.useLayoutEffect = React.useEffect;

const About = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth <= 912);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
    setIsTablet(window.innerWidth <= 912);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);
      window.addEventListener("orientationchange", handleWindowSizeChange);
      window.addEventListener("load", handleWindowSizeChange);
      window.addEventListener("reload", handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleWindowSizeChange);
        window.addEventListener("orientationchange", handleWindowSizeChange);
        window.addEventListener("load", handleWindowSizeChange);
        window.addEventListener("reload", handleWindowSizeChange);
      }
    };
  }, []);
  return (
    <div className="section about">
      <h5 className="yellowTitle">We Have A Passion For Games!</h5>
      <h1 className="title">Great Game Made By Passionate People</h1>
      <p className="description">
        Our founding team are veteran individual contributors who have a passion
        for world-building.
      </p>
      <Carousel
        show={isTablet ? (isMobile ? 1 : 2) : 4}
        slide={1}
        rightArrow={
          <Arrow className="right" icon="/assets/icons/arrowRight.png" />
        }
        leftArrow={
          <Arrow className="left" icon="/assets/icons/arrowLeft.png" />
        }
        responsive={true}
      >
        {staff.map((s, i) => (
          <StaffCard
            key={i}
            imageUrl={s.imageUrl}
            name={s.name}
            jobTitle={s.jobTitle}
            twitterUrl={s.twitterUrl}
            linkedinUrl={s.linkedinUrl}
            facebookUrl={s.facebookUrl}
            instagramUrl={s.instagramUrl}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default About;
