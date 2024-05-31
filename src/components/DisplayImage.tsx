"use client";

import Image from "next/image";
import { useScreenWidth } from "@/src/hooks/useScreenWidth";

const DisplayImage = ({ image, title }) => {
  "use client";

  const screenWidth = useScreenWidth();

  console.log("screenWidth: ", screenWidth);

  return (
    <Image
      src={`/images/news/${image}`}
      alt={title}
      width={screenWidth * 0.7}
      height={screenWidth * 0.7}
    />
  );
};

export default DisplayImage;
