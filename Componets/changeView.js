import REACT from "react";
import ReactDOM from "react-dom";
import Review from "./review";
import Slide from "./reviewMobile";
import { useState, useEffect } from "react";

export default function Scrnsz() {
  var a = getWindowDimensions();
  if (a < 1100) {
    return <Slide />;
  } else if (a >= 1100) {
    return <Review />;
  }
}

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
