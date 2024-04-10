import React from "react";
import BannerImage from "./BannerImage";
import BannerParagraphs from "./BannerParagraphs";

const Banner = ({ language }: any) => {
  return (
    <div className="w-full h-full flex items-center flex-col justify-center gap-5 bg-black/50">
      <BannerImage />

      <BannerParagraphs language={language} />
    </div>
  );
};

export default Banner;
