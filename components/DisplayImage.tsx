"use client";

import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";

const DisplayImage = ({ src, alt }) => {
  const screenWidth = useScreenWidth();

  const squareSize = 300;

  return (
    <Image
      src={src}
      alt={alt}
      width={screenWidth * 0.5}
      height={screenWidth * 0.5}
      style={{ minWidth: squareSize, minHeight: squareSize }}
    />
  );
};

export default DisplayImage;
