import Image from "next/image";
import React, { FunctionComponent } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "../followUs/SocialIcons";
import "./staffCard.scss";

const StaffCard: FunctionComponent<Staff> = ({
  imageUrl,
  name,
  description,
  jobTitle,
  twitterUrl,
  facebookUrl,
  linkedinUrl,
  instagramUrl,
}) => {
  return (
    <div className="staffCard">
      <div className="imageDiv">
        <Image
          className="image"
          src={imageUrl}
          alt="staff"
          width={330}
          height={330}
        />
        <div className="shadow" />
        <div className="socials">
          {twitterUrl && <a href={twitterUrl}>{Twitter}</a>}
          {facebookUrl && <a href={facebookUrl}>{Facebook}</a>}
          {linkedinUrl && <a href={linkedinUrl}>{Linkedin}</a>}
          {instagramUrl && <a href={instagramUrl}>{Instagram}</a>}
        </div>
      </div>
      <div className="info">
        <h5 className="name">{name}</h5>
        <p className="jobTitle">{jobTitle}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default StaffCard;
