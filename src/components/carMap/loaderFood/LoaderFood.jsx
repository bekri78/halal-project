import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Typography from "@mui/material/Typography";

export default function LoaderFood() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../ressource/lottie/girl-food.json"),
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="containerAnimationFood" ref={container}></div>
      <Typography>Nous recherchons les restaurants...</Typography>
    </div>
  );
}
