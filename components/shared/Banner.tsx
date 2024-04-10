import React from "react";
import BannerImage from "./BannerImage";
import BannerParagraphs from "./BannerParagraphs";

const Banner = () => {
  return (
    <div className="w-full h-full flex items-center flex-col justify-center gap-5 bg-black/50">
      <BannerImage />

      <BannerParagraphs />
    </div>
  );
};

export default Banner;
