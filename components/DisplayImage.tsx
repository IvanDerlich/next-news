"use client";

import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";

const DisplayImage = ({ src, alt, ratio }) => {
  const screenWidth = useScreenWidth();
  const minSize = 340;

  return (
    <Image
      src={src}
      alt={alt}
      width={screenWidth * ratio}
      height={screenWidth * ratio}
      style={{ minWidth: minSize, minHeight: minSize }}
    />
  );
};

export default DisplayImage;
