import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import "./gameItem.scss";

const GameItem: FunctionComponent<Game> = ({
  name,
  downloadNumber,
  image,
  appStoreUrl,
  googlePlayUrl,
  onClick,
  selected,
}) => {
  return (
    <div className={`gameItem ${selected ? "selected" : ""}`} onClick={onClick}>
      <div className="gameImage">
        <Image src={image} width={150} height={150} alt="game image" />
        <div
          className="gameImageShadow"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="gameInfo">
        <p className="gameName">{name}</p>
        {/* <p className="gameDownload">{downloadNumber}</p> */}
        <div className="gameStoreList">
          <Link
            className={appStoreUrl === "" ? "disabled" : ""}
            href={appStoreUrl}
            target="_blank"
          >
            <div className="gameStoreItem">
              <Image
                src="/assets/icons/testflight.png"
                alt="testFlight"
                width={24}
                height={24}
              />
              <p>Test Flight</p>
            </div>
          </Link>
          <Link
            className={googlePlayUrl === "" ? "disabled" : ""}
            href={googlePlayUrl}
            target="_blank"
          >
            <div className="gameStoreItem">
              <Image
                src="/assets/icons/apk.png"
                alt="testFlight"
                width={24}
                height={24}
              />
              <p>APK File</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
