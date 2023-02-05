import Image from "next/image";
import React, { FunctionComponent } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "../followUs/SocialIcons";
import "./staffCard.scss";

export interface StaffCardProps {
  imageUrl: string;
  name: string;
  jobTitle: string;
  twitterUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const StaffCard: FunctionComponent<StaffCardProps> = ({
  imageUrl,
  name,
  jobTitle,
  twitterUrl,
  facebookUrl,
  linkedinUrl,
  instagramUrl,
}) => {
  return (
    <div className="staffCard">
      <Image
        className="image"
        src={imageUrl}
        alt="staff"
        width={350}
        height={350}
      />
      <h5 className="title">{name}</h5>
      <p className="description">{jobTitle}</p>
      <div className="row">
        {twitterUrl && <a href={twitterUrl}>{Twitter}</a>}
        {facebookUrl && <a href={facebookUrl}>{Facebook}</a>}
        {linkedinUrl && <a href={linkedinUrl}>{Linkedin}</a>}
        {instagramUrl && <a href={instagramUrl}>{Instagram}</a>}
      </div>
    </div>
  );
};

export default StaffCard;
