"use client";

import Lottie from "lottie-react";

export default function LottieAnimation({ animationData }) {
  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full h-full"
    />
  );
}