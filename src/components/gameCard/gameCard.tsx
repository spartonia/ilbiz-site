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
      <a href={appStoreUrl}>
        <Image src={appStore} alt="App Store" />
      </a>
      <a href={googlePlayUrl}>
        <Image src={googlePlay} alt="Google Play" />
      </a>
    </div>
  );
};

export default GameCard;
