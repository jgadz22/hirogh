"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 ${
        isVisible ? "block" : "hidden"
      } bg-blue-500 text-white px-2 py-2 rounded-md shadow-md transition-opacity duration-300 hover:bg-blue-600`}
    >
      <div className="flex items-center">
        <Image
          src="/assets/icons/arrow-up.svg"
          width={28}
          height={28}
          alt="phone logo"
        />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
