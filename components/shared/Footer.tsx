"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Translate from "./Translate";
import { Separator } from "../ui/separator";

const extractPrimaryLanguage = (languageString: any) => {
  return languageString.split("-")[0];
};

const Footer = () => {
  const [language, setLanguage] = useState("ja");

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(extractPrimaryLanguage((window as any).navigator.language));
    };

    // Add event listener for language change
    (window as any).addEventListener("languagechange", handleLanguageChange);

    // Cleanup function
    return () => {
      (window as any).removeEventListener(
        "languagechange",
        handleLanguageChange
      );
    };
  }, []);

  return (
    <footer className="flex flex-1 flex-col border-t bg-gradient-to-b from-[#1278fc] to-[#012257] text-white ">
      <div className="wrapper flex text-center md:text-start justify-center md:justify-start h5-bold">
        <p>株式会社HIROグローバルホールディングス</p>
      </div>

      <div className="wrapper">
        <Separator />
      </div>

      <div className="flex-center wrapper flex-between flex flex-col gap-10 md:gap-4 items-center md:flex-row">
        <div className="w-full md:w-[500px] lg:w-[640px] flex items-center justify-center md:items-start flex-col gap-4 md:p-medium-20 p-medium-16">
          <div className="flex items-center justify-start flex-row gap-4">
            <p className="w-[32px] md:w-[40px] flex items-center">
              <Image
                src="/assets/icons/location.svg"
                width={28}
                height={28}
                alt="location logo"
              />
            </p>
            <p className="flex text-center md:text-start justify-center md:justify-start">
              〒020-0026岩手県盛岡市開運橋通3番41号ダビンチビル
            </p>
          </div>
          <div className="flex flex-start flex-row gap-4">
            <p className="w-[32px] md:w-[40px] flex items-center">
              <Image
                src="/assets/icons/phone.svg"
                width={28}
                height={28}
                alt="phone logo"
              />
            </p>
            <p className="flex text-center md:text-start justify-center md:justify-start">
              019-623-0666
            </p>
          </div>
          <div>
            <Translate />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:p-medium-20 p-medium-16">
          <div className="flex items-center justify-center md:justify-start flex-row gap-5">
            <p className="flex items-center p-1 border border-1 hover:border-green-500">
              <Link href="https://hirogh.co.jp/wp-content/uploads/2023/01/hg2021_informations.pdf">
                <Image
                  src="/assets/icons/download_icon.svg"
                  width={28}
                  height={28}
                  alt="Download Icon"
                />
              </Link>
            </p>
            <p className="flex max-w-[300px] text-center md:text-start justify-center md:justify-start">
              労働者派遣事業にかかる各種情報
            </p>
          </div>
          {language == "en" ? (
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/assets/images/banner_hirocareer_eng.jpg"
                width={350}
                height={75}
                alt="banner hirocareer"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/assets/images/banner_hirocareer.jpg"
                width={350}
                height={75}
                alt="banner hirocareer"
              />
            </div>
          )}
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/assets/images/banner_ihsd.jpg"
              width={350}
              height={75}
              alt="banner ihsd"
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <Separator />
      </div>

      <div className="wrapper w-full flex text-center md:text-start justify-center md:justify-start">
        <p>Copyright © 2022 ヒログローバルホールディングス株式会社</p>
      </div>
    </footer>
  );
};

export default Footer;
