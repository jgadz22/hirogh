import { secondComponent, secondComponent_eng } from "@/constants";
import React from "react";
import Card from "./Card";
import Link from "next/link";

const Collection = ({ language }: any) => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <ul className="grid grid-cols-1 lg:grid-cols-2 transition-all duration-500">
          {language === "en"
            ? secondComponent_eng.map((services) => {
                return (
                  <li key={services.id} className="w-full flex justify-center">
                    <Link href="https://hirogh.co.jp/company/">
                      <Card
                        id={services.id}
                        image={services.image}
                        details={services.details}
                      />
                    </Link>
                  </li>
                );
              })
            : secondComponent.map((services) => {
                return (
                  <li key={services.id} className="w-full flex justify-center">
                    <Link href="https://hirogh.co.jp/company/">
                      <Card
                        id={services.id}
                        image={services.image}
                        details={services.details}
                      />
                    </Link>
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default Collection;
