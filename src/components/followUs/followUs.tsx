"use client";

import "./followUs.scss";
import { FunctionComponent } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "./SocialIcons";

interface FollowUsProps {
  hasTitle?: boolean;
}

const FollowUs: FunctionComponent<FollowUsProps> = ({ hasTitle = true }) => {
  return (
    <div className="followUs">
      {hasTitle && <p>Follow Us</p>}
      <div className="icons">
        {Twitter}
        <div className="space" />
        {Facebook}
        <div className="space" />
        {Linkedin}
        <div className="space" />
        {Instagram}
      </div>
    </div>
  );
};

export default FollowUs;
