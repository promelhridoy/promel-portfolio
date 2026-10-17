"use client";

import Lottie from "lottie-react";

export default function LottiePlayer({ animationData }) {
  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
    />
  );
}