"use client";

import Image from "next/image";
import { useScreenWidth } from "@/src/hooks/useScreenWidth";

const DisplayImage = ({ image, title }) => {
  const screenWidth = useScreenWidth();

  console.log("screenWidth: ", screenWidth);

  const squareSize = 300;

  return (
    <Image
      src={`/images/news/${image}`}
      alt={title}
      width={screenWidth * 0.5}
      height={screenWidth * 0.5}
      style={{ minWidth: squareSize, minHeight: squareSize }}
    />
  );
};

export default DisplayImage;
