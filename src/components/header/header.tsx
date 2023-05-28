"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FunctionComponent, useState } from "react";
import { links } from "../../data/AppData";

import textLogo from "../../../public/assets/images/textLogo.png";

const Header: FunctionComponent = () => {
  const activeSegment = useSelectedLayoutSegment();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && (
        <div className="mobileMenuBackdrop">
          <div className="mobileMenu">
            <button onClick={() => setShowMenu(false)}>
              <Image
                className="menu"
                src="/assets/icons/close.png"
                alt="menu"
                width={24}
                height={24}
              />
            </button>
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
        </div>
      )}
      <div className="navbar">
        <Image className="logo" src={textLogo} alt="Ilbiz" />
        <button onClick={() => setShowMenu(true)}>
          <Image
            className="menu"
            src="/assets/icons/hamburger.png"
            alt="menu"
            width={24}
            height={24}
          />
        </button>
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
    </>
  );
};

export default Header;
