"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BannerImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-xs md:max-w-xl flex items-center justify-center">
        <Image
          src="/assets/images/logo_hirogh2.png"
          width={500}
          height={150}
          alt="Horogh logo"
        />
      </div>
    </motion.div>
  );
};

export default BannerImage;
