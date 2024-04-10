import { secondComponent } from "@/constants";
import React from "react";
import Card from "./Card";
import Link from "next/link";

const Collection = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <ul className="grid grid-cols-1 lg:grid-cols-2 transition-all duration-500">
          {secondComponent.map((history) => {
            return (
              <li key={history.id} className="w-full flex justify-center">
                <Link href="https://hirogh.co.jp/company/">
                  {" "}
                  <Card
                    id={history.id}
                    image={history.image}
                    details={history.details}
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
