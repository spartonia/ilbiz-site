import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";
import Arrow from "../../components/list/arrow";
import StaffCard, {
  StaffCardProps,
} from "../../components/staffCard/staffCard";

const About = () => {
  const staff: StaffCardProps[] = [
    {
      imageUrl: "/assets/images/teamMember.png",
      name: "Soheil Qorbani",
      jobTitle: "Full-stack developer",
      twitterUrl: "sad",
      facebookUrl: "sad",
      linkedinUrl: "sad",
      instagramUrl: "sad",
    },
    {
      imageUrl: "/assets/images/teamMember.png",
      name: "Soheil Qorbani",
      jobTitle: "Full-stack developer",
      twitterUrl: "sad",
      facebookUrl: "sad",
      linkedinUrl: "sad",
      instagramUrl: "sad",
    },
    {
      imageUrl: "/assets/images/teamMember.png",
      name: "Soheil Qorbani",
      jobTitle: "Full-stack developer",
      twitterUrl: "sad",
      facebookUrl: "sad",
      linkedinUrl: "sad",
      instagramUrl: "sad",
    },
    {
      imageUrl: "/assets/images/teamMember.png",
      name: "Soheil Qorbani",
      jobTitle: "Full-stack developer",
      twitterUrl: "sad",
      facebookUrl: "sad",
      linkedinUrl: "sad",
      instagramUrl: "sad",
    },
    {
      imageUrl: "/assets/images/teamMember.png",
      name: "Soheil Qorbani",
      jobTitle: "Full-stack developer",
      twitterUrl: "sad",
      facebookUrl: "sad",
      linkedinUrl: "sad",
      instagramUrl: "sad",
    },
    {
      imageUrl: "/assets/images/teamMember.png",
      name: "Soheil Qorbani",
      jobTitle: "Full-stack developer",
      twitterUrl: "sad",
      facebookUrl: "sad",
      linkedinUrl: "sad",
      instagramUrl: "sad",
    },
  ];
  return (
    <div className="section about">
      <h5 className="yellowTitle">We Have A Passion For Games!</h5>
      <h1 className="title">Great Game Made By Passionate People</h1>
      <p className="description">
        Our founding team are veteran individual contributors who have a passion
        for world-building.
      </p>
      <Carousel
        show={4}
        slide={1}
        rightArrow={
          <Arrow className="right" icon="/assets/icons/arrowRight.png" />
        }
        leftArrow={
          <Arrow className="left" icon="/assets/icons/arrowLeft.png" />
        }
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
