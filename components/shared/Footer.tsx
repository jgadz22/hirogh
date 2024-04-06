import Image from "next/image";
import Link from "next/link";
import React from "react";
import Translate from "./Translate";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-[#1278fc] to-[#012257] text-white ">
      <div className="flex-center wrapper flex-between flex flex-col gap-10 md:gap-4 p-5 sm:p-2 mb-5 items-center md:flex-row">
        <div className="flex flex-start flex-col gap-4 md:p-medium-20 p-medium-14">
          <div className="flex flex-start flex-col gap-4 h5-bold my-10">
            <p>株式会社HIROグローバルホールディングス</p>
          </div>
          <div className="flex flex-start flex-row gap-4">
            <p className="w-5 md:w-10">
              <Image
                src="/assets/icons/location.svg"
                width={28}
                height={28}
                alt="location logo"
              />
            </p>
            <p>〒020-0026岩手県盛岡市開運橋通3番41号ダビンチビル</p>
          </div>
          <div className="flex flex-start flex-row gap-4">
            <p className="w-5 md:w-10">
              <Image
                src="/assets/icons/phone.svg"
                width={28}
                height={28}
                alt="JHSD logo"
              />
            </p>
            <p>TEL 019-623-0666</p>
          </div>
          <div className="">
            <div className="">
              <Translate />
            </div>
            <div className="">
              <p>Copyright © 2022 ヒログローバルホールディングス株式会社</p>
            </div>
          </div>
        </div>
        <div className="flex items-center  flex-col gap-5">
          <div className="flex items-center justify-center flex-row gap-5">
            <p className="flex items-center justify-center p-1 border border-1 hover:border-green-500">
              <Link href="https://hirogh.co.jp/wp-content/uploads/2023/01/hg2021_informations.pdf">
                <Image
                  src="/assets/icons/download_icon.svg"
                  width={28}
                  height={28}
                  alt="Download Icon"
                />
              </Link>
            </p>
            <p>労働者派遣事業にかかる各種情報</p>
          </div>
          <div className="">
            <Image
              src="/assets/images/banner_hirocareer.jpg"
              width={400}
              height={75}
              alt="banner hirocareer"
            />
          </div>
          <div className="">
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
