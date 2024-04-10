import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Translation = ({ handleLanguageChange }: any) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    handleLanguageChange(language);
  }, [language, handleLanguageChange]);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <p className="w-[28px] flex items-center justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src="/assets/icons/language.svg"
                      width={35}
                      height={35}
                      alt="location logo"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {language === "en"
                        ? "Please select a language"
                        : "言語を選択してください"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50">
          <DropdownMenuLabel>Select Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
            <DropdownMenuRadioItem
              value="en"
              className={`${
                language === "en" ? "text-green-600 font-bold" : ""
              }`}
            >
              English
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="ja"
              className={`${
                language === "ja" ? "text-green-600 font-bold" : ""
              }`}
            >
              日本語
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Translation;
