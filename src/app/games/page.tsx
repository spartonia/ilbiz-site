"use client";

import { useState } from "react";
import Image from "next/image";
import GameItem, { GameItemProps } from "../../components/gameItem/GameItem";
import "./games.scss";

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
        </div>
      </div>
    </div>
  );
}

const games: GameItemProps[] = [
  {
    name: "Color Side",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=154hf9in0tL70JRbAgZhEyeDTmcfp5WS_",
    video:
      "https://drive.google.com/uc?export=view&id=1xRRMYtNUzWyWFEfDBDL6bi9939yISb9C",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
  {
    name: "Running Word",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=1B_Sndxsr7QSMQAVFPrXyoNK21_1j_aqx",
    video:
      "https://drive.google.com/uc?export=view&id=1VbuZX9Jy6j2l1tAuWwNbHLOdy9ORQNgp",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
  {
    name: "Color Match",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=1xy4DmqS1x0azh8Fc-SpAnoCVZwhTwdIk",
    video:
      "https://drive.google.com/uc?export=view&id=12oMaF0Bl6d0-_XtWqiD_pYlJpp-DOgBv",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
  {
    name: "Off Balance Ball",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=1NxLvaPeeYF748gf64A5wmSnrb681jgif",
    video:
      "https://drive.google.com/uc?export=view&id=1dniitP6qNSjP-cDihwOzl8iiSEmO-fKv",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
  {
    name: "Royal Tank Battle",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=1rW-l0MdU7R18ctid2TG2Zhgs0XxYsLMz",
    video:
      "https://drive.google.com/uc?export=view&id=1qzBLub8bgPbacZJrzYPeV4FCXBSR26TT",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
  {
    name: "Space Meteoroid",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=1J6EQSmvtJMNVsWwd6-iyPiA0rvoukV5F",
    video:
      "https://drive.google.com/uc?export=view&id=1v3jVo2H0YXtSovCD2oFwwNxYdFpiw6y3",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
  {
    name: "Tavshan",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=1XqaTk8I6-y5CnqUVOFvXZPMHc2Yxe1EE",
    video:
      "https://drive.google.com/uc?export=view&id=1uoZLlrz2gSXDN6KsyzSbmieKYGW2o3v4",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
  {
    name: "Wicked Souls",
    downloadNumber: "+120M",
    image:
      "https://drive.google.com/uc?export=view&id=1Na-CONBhdSyPgqhcVG2cY-8ISo7UDyDG",
    video:
      "https://drive.google.com/uc?export=view&id=1vkSuwGcMtWrVdrNPiRUrDgqXO82uv_gP",
    appStoreUrl: "",
    googlePlayUrl: "",
  },
];
