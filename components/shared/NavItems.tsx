"use client";

import { headerLinksJapanese } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = ({ language }: any) => {
  const pathname = usePathname();

  return (
    <>
      {headerLinksJapanese.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-18 whitespace-nowrap`}
          >
            <Link href={link.route}>
              {language === "en" ? link.label.en : link.label.ja}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItems;
