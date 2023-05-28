"use client";

import { useState } from "react";
import Image from "next/image";
import GameItem from "../../components/gameItem/GameItem";
import "./games.scss";
import { games } from "../../data/AppData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper";

export default function Page() {
  const [game, setGame] = useState(games[0]);

  return (
    <div className="gamesPage">
      <div className="poster">
        <video
          src="/assets/videos/games-poster.mp4"
          className="posterVideo"
          width={1920}
          height={1080}
          autoPlay={true}
          muted
          loop
        />
        <h1 className="posterTitle">Millions of Experiences</h1>
      </div>
      <div className="games">
        <h1 className="gamesTitle">Explore Our Games</h1>
        <div className="gamesDemo">
          <div className="gamesList">
            {games.map((g, i) => (
              <GameItem
                key={i}
                onClick={() => setGame(g)}
                name={g.name}
                downloadNumber={g.downloadNumber}
                image={g.image}
                video={g.video}
                appStoreUrl={g.appStoreUrl}
                googlePlayUrl={g.googlePlayUrl}
                selected={g.name === game.name}
              />
            ))}
          </div>
          <div className="demoColumn">
            <div className="demo">
              <div className="demoTitle">{game.name}</div>
              <Image
                className="phone"
                src="/assets/images/phone.png"
                alt="phone"
                width={310}
                height={632}
              />
              <video
                className="demoVideo"
                src={game.video}
                autoPlay
                muted
                loop
                width={302}
                height={624}
              />
            </div>
            <div className="gamesListMobile">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".review-swiper-button-next",
                  prevEl: ".review-swiper-button-prev",
                }}
                onSlideChange={(swiper) => {
                  setGame(games[swiper.activeIndex]);
                }}
              >
                {games.map((g, i) => (
                  <SwiperSlide key={i}>
                    <GameItem
                      onClick={() => setGame(g)}
                      name={g.name}
                      downloadNumber={g.downloadNumber}
                      image={g.image}
                      video={g.video}
                      appStoreUrl={g.appStoreUrl}
                      googlePlayUrl={g.googlePlayUrl}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
