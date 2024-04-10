"use client";

import Banner from "@/components/shared/Banner";
import Collection from "@/components/shared/Collection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage: any) => {
    setLanguage(selectedLanguage);
  };
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} language={language} />
      <div className="flex-1">
        <section id="first">
          <div className="max-h-[500px] h-[75dvh] lg:max-h-[725px] bg-main-img bg-cover bg-center flex items-center justify-center transition-all duration-500">
            <Banner language={language} />
          </div>
        </section>

        <section id="second" className="w-full text-white py-3 lg:py-10">
          <div className="wrapper flex items-center justify-center flex-col md:flex-row gap-8 md:gap-12">
            <Collection language={language} />
          </div>
        </section>
      </div>
      <Footer useLanguage={language} />
    </>
  );
}
