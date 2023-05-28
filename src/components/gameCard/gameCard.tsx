import Image from "next/image";
import React, { FunctionComponent } from "react";
import "./gameCard.scss";
import Link from "next/link";

export interface GameCardProps {
  name: string;
  imageUrl: string;
  appStoreUrl: string;
  googlePlayUrl: string;
}

const GameCard: FunctionComponent<GameCardProps> = ({
  name,
  imageUrl,
  appStoreUrl,
  googlePlayUrl,
}) => {
  return (
    <div className="gameCard">
      <Image
        className="image"
        src={imageUrl}
        alt="game"
        width={350}
        height={350}
      />
      <h3 className="name">{name}</h3>
      <div className="gameCardStoreList">
        <Link
          className={appStoreUrl === "" ? "disabled" : ""}
          href={appStoreUrl}
          target="_blank"
        >
          <div className="gameStoreCardItem">
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
          <div className="gameStoreCardItem">
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
  );
};

export default GameCard;
