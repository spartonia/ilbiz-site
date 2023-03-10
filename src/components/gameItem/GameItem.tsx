import Image from "next/image";
import { FunctionComponent } from "react";

import "./gameItem.scss";
import { Apple, Google } from "./storeIcons";

export interface GameItemProps {
  name: string;
  downloadNumber: string;
  image: string;
  video: string;
  appStoreUrl: string;
  googlePlayUrl: string;
  onClick?: (g: any) => void;
  selected?: boolean;
}

const GameItem: FunctionComponent<GameItemProps> = ({
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
        <p className="gameDownload">{downloadNumber}</p>
        <div className="gameStoreList">
          <a href={appStoreUrl}>
            <div className="gameStoreItem">
              {Apple}
              <p>App Store</p>
            </div>
          </a>
          <a href={googlePlayUrl}>
            <div className="gameStoreItem">
              {Google}
              <p>Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
