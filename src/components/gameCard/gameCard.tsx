import Image from "next/image";
import React, { FunctionComponent } from "react";
import "./gameCard.scss";

import appStore from "../../../public/assets/images/appStore.png";
import googlePlay from "../../../public/assets/images/googlePlay.png";

export interface GameCardProps {
  imageUrl: string;
  appStoreUrl: string;
  googlePlayUrl: string;
}

const GameCard: FunctionComponent<GameCardProps> = ({
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
      <div className="gameCardStoreList">
        <a href={appStoreUrl}>
          <div className="gameStoreCardItem">
            <Image
              src="/assets/icons/testflight.png"
              alt="testFlight"
              width={24}
              height={24}
            />
            <p>Test Flight</p>
          </div>
        </a>
        <a href={googlePlayUrl}>
          <div className="gameStoreCardItem">
            <Image
              src="/assets/icons/apk.png"
              alt="testFlight"
              width={24}
              height={24}
            />
            <p>APK File</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GameCard;
