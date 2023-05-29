"use client";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { links } from "../../data/AppData";
import FollowUs from "../followUs/followUs";

import textLogoWhite from "../../../public/assets/images/textLogoWhite.png";

const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div className="sendEmailBox">
        <p className="title">To Get Update New Games!</p>
        <div className="row">
          <input
            className="textInput"
            type="text"
            placeholder="Enter your email"
          />
          <button className="button" onClick={() => {}}>
            Send
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="firstRow row">
          <Image src={textLogoWhite} alt="Ilbiz" />
          <nav>
            {links.slice(1, 5).map((l, i) => (
              <Link key={i} href={l.path}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="secondRow row">
          <p>Copyright © 2023 Ilbiz Studio. All rights reserved</p>
          <FollowUs hasTitle={false} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
