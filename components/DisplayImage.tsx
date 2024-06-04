"use client";

import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";

type DisplayImageProps = {
  src: string;
  alt: string;
  ratio: number;
  minWidth?: number;
};

const DisplayImage = ({ src, alt, ratio, minWidth }: DisplayImageProps) => {
  const screenWidth = useScreenWidth();

  return (
    <Image
      src={src}
      alt={alt}
      width={screenWidth * ratio}
      height={screenWidth * ratio}
      style={{ minWidth, minHeight: minWidth }}
    />
  );
};

export default DisplayImage;
