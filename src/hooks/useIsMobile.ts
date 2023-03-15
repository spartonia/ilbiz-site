import React, { useEffect, useState } from "react";
import { Value } from "sass";

const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width <= 768);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    setIsMobile(width <= 768);
    // console.log(width);
    // console.log(width <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    window.addEventListener("orientationchange", handleWindowSizeChange);
    window.addEventListener("load", handleWindowSizeChange);
    window.addEventListener("reload", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.addEventListener("orientationchange", handleWindowSizeChange);
      window.addEventListener("load", handleWindowSizeChange);
      window.addEventListener("reload", handleWindowSizeChange);
    };
  }, [isMobile]);

  return [isMobile, setIsMobile];
};

export default useIsMobile;
