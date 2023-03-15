"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import GameCard from "../../components/gameCard/gameCard";
import { Carousel } from "@trendyol-js/react-carousel";
import Arrow from "../../components/list/arrow";
import { games } from "../../data/AppData";
React.useLayoutEffect = React.useEffect;

const GamesSection: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth <= 912);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
    setIsTablet(window.innerWidth <= 912);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);
      window.addEventListener("orientationchange", handleWindowSizeChange);
      window.addEventListener("load", handleWindowSizeChange);
      window.addEventListener("reload", handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleWindowSizeChange);
        window.addEventListener("orientationchange", handleWindowSizeChange);
        window.addEventListener("load", handleWindowSizeChange);
        window.addEventListener("reload", handleWindowSizeChange);
      }
    };
  }, []);

  return (
    <div className="section games">
      <Carousel
        show={isTablet ? (isMobile ? 1 : 2) : 4}
        slide={1}
        rightArrow={
          <Arrow className="right" icon="/assets/icons/arrowRight.png" />
        }
        leftArrow={
          <Arrow className="left" icon="/assets/icons/arrowLeft.png" />
        }
        responsive={true}
      >
        {games.map((game, i) => (
          <GameCard
            key={i}
            imageUrl={game.image}
            appStoreUrl={game.appStoreUrl}
            googlePlayUrl={game.googlePlayUrl}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default GamesSection;
