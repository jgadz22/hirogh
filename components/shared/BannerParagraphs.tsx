"use client";

import React from "react";
import { motion } from "framer-motion";

const BannerParagraphs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <div className="p-bold-20 md:h5-bold flex items-center justify-center text-white">
        <div className="">
          <p className="text-center justify-center">
            大宇宙の論理を尊び
            <br />
            英知を結集し未知の可能性を追求し
            <br />
            創造的発展を目指す企業である
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BannerParagraphs;
