import React from "react";
import VideoJS from "../../components/videojs/VideoJsPlayer";

// Styles
import "video.js/dist/video-js.css";
import { VideoJsPlayerOptions } from "video.js";

const Company = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions: VideoJsPlayerOptions = {
    autoplay: false,
    controls: false,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-for-Testing.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="section company">
      <h5 className="yellowTitle">Imagination, Innovation, Incarnation</h5>
      <h1 className="title">
        Our Mission Is To Create Virtual Worlds More Meaningful Than Real Life
      </h1>
      <p className="description">
        Our mission to entertain the world goes beyond gaming. Our teams create
        innovative and entertaining apps for everyday life.
      </p>
      <VideoJS options={videoJsOptions} />
    </div>
  );
};

export default Company;
