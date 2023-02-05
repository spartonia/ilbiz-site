"use client";

import { lazy } from "react";
import "./page.scss";

const Games = lazy(() => import("../ui/homePage/games"));
const ContactUs = lazy(() => import("../ui/homePage/contactUs"));

import ilbizMain from "../../public/assets/images/ilbizMain.svg";
import Image from "next/image";
import Company from "../ui/homePage/company";
import About from "../ui/homePage/about";

export default function Page() {
  return (
    <div className="homePage">
      <div className="entrance">
        <div className="column">
          <h1>Hi! We are Ilbiz Studio</h1>
          <p>
            We are on a mission to bring the best quality mobile games to you.
          </p>
        </div>
        <Image src={ilbizMain} alt="Ilbiz" />
      </div>
      <Games />
      <Company />
      <About />
      <ContactUs />
    </div>
  );
}
