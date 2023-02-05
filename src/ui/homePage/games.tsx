import React, { FunctionComponent } from "react";
import GameCard, { GameCardProps } from "../../components/gameCard/gameCard";
import { Carousel } from "@trendyol-js/react-carousel";
import Arrow from "../../components/list/arrow";

const GamesSection: FunctionComponent = () => {
  const games: GameCardProps[] = [
    {
      imageUrl: "/assets/images/game1.png",
      appStoreUrl: "sad",
      googlePlayUrl: "sad",
    },
    {
      imageUrl: "/assets/images/game2.png",
      appStoreUrl: "sad",
      googlePlayUrl: "sad",
    },
    {
      imageUrl: "/assets/images/game3.png",
      appStoreUrl: "sad",
      googlePlayUrl: "sad",
    },
    {
      imageUrl: "/assets/images/game3.png",
      appStoreUrl: "sad",
      googlePlayUrl: "sad",
    },
  ];

  return (
    <div className="section games">
      <Carousel
        show={3}
        slide={1}
        rightArrow={
          <Arrow className="right" icon="/assets/icons/arrowRight.png" />
        }
        leftArrow={
          <Arrow className="left" icon="/assets/icons/arrowLeft.png" />
        }
      >
        {games.map((game, i) => (
          <GameCard
            key={i}
            imageUrl={game.imageUrl}
            appStoreUrl={game.appStoreUrl}
            googlePlayUrl={game.googlePlayUrl}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default GamesSection;
