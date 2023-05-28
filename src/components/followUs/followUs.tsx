"use client";

import "./followUs.scss";
import { FunctionComponent } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "./SocialIcons";

interface FollowUsProps {
  hasTitle?: boolean;
  blackIcons?: boolean;
}

const FollowUs: FunctionComponent<FollowUsProps> = ({
  hasTitle = true,
  blackIcons = true,
}) => {
  return (
    <div className="followUs">
      {hasTitle && <p>Follow Us</p>}
      <div className="icons">
        <div className={`socialIcon ${blackIcons ? "black" : "white"}`}>
          {Twitter}
        </div>
        <div className="space" />
        <div className={`socialIcon ${blackIcons ? "black" : "white"}`}>
          {Facebook}
        </div>
        <div className="space" />
        <div className={`socialIcon ${blackIcons ? "black" : "white"}`}>
          {Linkedin}
        </div>
        <div className="space" />
        <div className={`socialIcon ${blackIcons ? "black" : "white"}`}>
          {Instagram}
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
