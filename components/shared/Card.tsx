import Image from "next/image";
import React from "react";

type CardProps = {
  id: string;
  image: string;
  details: string[];
};

const Card = ({ id, image, details }: CardProps) => {
  return (
    <div>
      <div className="w-full h-auto flex items-center justify-center flex-col  group transition-all duration-1000">
        <div className="w-full flex items-center justify-center flex-col overflow-hidden">
          <div className="max-h-[200px] lg:max-h-[300px] w-full flex items-center justify-between overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-110 duration-1000 cursor-pointer"
              src={image}
              width={500}
              height={300}
              alt="src"
            />
          </div>
          <div className="bg-black/50 text-white group-hover:text-black group-hover:bg-white/50 w-[300px] flex items-center justify-center absolute">
            <ul className="flex items-center justify-center flex-col pb-2 lg:pb-4 px-2">
              <li className="w-full flex justify-center items-center">
                <p className="w-full p-medium-16 group-hover:p-hover-16 lg:p-medium-20 lg:group-hover:p-bold-20 text-center justify-center items-center underline underline-offset-8 decoration-sky-300 group-hover:decoration-sky-700 tracking-wide p-1 duration-300">
                  {details.map((detail) => {
                    return (
                      <span key={detail}>
                        {detail}
                        <br />
                      </span>
                    );
                  })}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
