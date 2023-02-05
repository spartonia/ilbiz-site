"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import "./global.scss";
import textLogo from "../../public/assets/images/textLogo.png";
import textLogoWhite from "../../public/assets/images/textLogoWhite.png";

import localFont from "@next/font/local";
import FollowUs from "../components/followUs/followUs";

const openSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/OpenSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/assets/fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/OpenSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/assets/fonts/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "../../public/assets/fonts/OpenSans-Bold.ttf",
      weight: "700",
      style: "Bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeSegment = useSelectedLayoutSegment();

  const links = [
    { label: " HOME", path: "/", targetSegment: null },
    { label: " GAMES", path: "/games", targetSegment: "games" },
    { label: " COMPANY", path: "/company", targetSegment: "company" },
    { label: " ABOUT", path: "#about", targetSegment: "about" },
    { label: " CONTACT", path: "/contact", targetSegment: "contact" },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/icons/icon.png" />
      </head>
      <body className={openSans.className}>
        <div className="navbar">
          <Image src={textLogo} alt="Ilbiz" />
          <nav>
            {links.map((l, i) => (
              <Link
                className={activeSegment === l.targetSegment ? "active" : ""}
                key={i}
                href={l.path}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="content">{children}</div>
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
              <FollowUs hasTitle={false} blackIcons={false} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
