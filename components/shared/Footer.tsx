import Image from "next/image";
import Link from "next/link";
import React from "react";
import Translate from "./Translate";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-[#1278fc] to-[#012257] text-white ">
      <div className="wrapper">
        <div>
          <div className="flex text-center md:text-start justify-center md:justify-start h5-bold">
            <p>株式会社HIROグローバルホールディングス</p>
          </div>
        </div>
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
          <div className="flex text-center md:text-start justify-center md:justify-start">
            <p>Copyright © 2022 ヒログローバルホールディングス株式会社</p>
          </div>
          <div className=""></div>
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
            <p className="flex text-center md:text-start justify-center md:justify-start">
              労働者派遣事業にかかる各種情報
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/assets/images/banner_hirocareer.jpg"
              width={400}
              height={75}
              alt="banner hirocareer"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/assets/images/banner_ihsd.jpg"
              width={400}
              height={75}
              alt="banner ihsd"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
