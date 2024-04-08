import Image from "next/image";
import React from "react";

type CardProps = {
  image: string;
  details: string[];
};

const Card = ({ image, details }: CardProps) => {
  return (
    <div>
      <div className="w-full p-2 h-auto rounded-lg flex items-center flex-col bg-gradient-to-r from-bodyColor to-[#202327] group group-hover:bg-gradient-to-b group-hover:from-gray-900 transition-all duration-500">
        <div className="w-full p-5 flex items-center justify-center flex-col gap-6 overflow-hidden rounded-lg">
          <div className="max-h-[200px] lg:max-h-[300px] w-full flex items-center justify-between overflow-hidden rounded-lg relative">
            <div className="w-full flex items-center justify-between"></div>
            <Image
              className="object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={image}
              width={500}
              height={300}
              alt="src"
            />
          </div>
          <div className="w-[250px] lg:w-[500px] flex items-center justify-center absolute">
            <ul className="flex items-center justify-center flex-col bg-black/50 group-hover:text-black group-hover:bg-white/50 pb-2 lg:pb-4 px-2">
              {details.map((detail) => {
                return (
                  <li
                    key={detail}
                    className="w-full flex justify-center items-center"
                  >
                    <p className="w-full p-medium-16 lg:p-medium-20 group-hover:p-bold-20 text-center justify-center items-center underline underline-offset-8 decoration-sky-300 group-hover:decoration-sky-700 tracking-wide p-1 duration-300">
                      {detail}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
