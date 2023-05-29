import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Telegram,
  Twitter,
  Youtube,
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
  youtubeUrl,
  githubUrl,
  telegramUrl,
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
        {(twitterUrl ||
          facebookUrl ||
          linkedinUrl ||
          instagramUrl ||
          youtubeUrl ||
          telegramUrl ||
          githubUrl) && <div className="shadow" />}
        <div className="socials">
          {twitterUrl && (
            <Link href={twitterUrl} target="_blank">
              {Twitter}
            </Link>
          )}
          {facebookUrl && (
            <Link href={facebookUrl} target="_blank">
              {Facebook}
            </Link>
          )}
          {linkedinUrl && (
            <Link href={linkedinUrl} target="_blank">
              {Linkedin}
            </Link>
          )}
          {instagramUrl && (
            <Link href={instagramUrl} target="_blank">
              {Instagram}
            </Link>
          )}
          {youtubeUrl && (
            <Link href={youtubeUrl} target="_blank">
              {Youtube}
            </Link>
          )}
          {telegramUrl && (
            <Link href={telegramUrl} target="_blank">
              {Telegram}
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              {Github}
            </Link>
          )}
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
