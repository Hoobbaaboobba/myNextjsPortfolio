"use client";

import Image from "next/image";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { StaticImageData } from "next/image";

interface PortfolioItemIterface {
  photo: string | StaticImageData;
  name?: string;
  tech?: string;
  inst?: string;
  link?: string;
  linkName?: string;
}

const PortfolioItem: React.FC<PortfolioItemIterface> = ({
  photo,
  name,
  tech,
  linkName,
  inst,
  link,
}) => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpenCard(true)}
        className="portfolioItem border flex flex-col dark:border-black dark:hover:border-white gap-6 border-gray-border py-4 px-4 rounded-md cursor-pointer"
      >
        <Image
          src={photo}
          className="portfolioImg rounded-lg grayscale"
          alt="image"
        />
        <h3 className="text-2xl">{name}</h3>
      </div>
      <div
        className={`${
          isOpenCard ? "block" : "hidden"
        } fixed left-0 top-0 z-[100]`}
      >
        <div onClick={() => setIsOpenCard(false)} className="popUpBg"></div>
        <div className="popUp2 dark:bg-black max-w-[350px] lg:max-w-[450px] py-[10px] px-[20px] flex flex-col gap-2 border border-gray-border justify-between">
          <div className="flex flex-col">
            <h2 className={`text-[22px] font-bold text-center`}>Технологии:</h2>
            <h3 className="blueText pb-2 text-center text-3xl font-semibold">
              {tech}
            </h3>
          </div>
          <div className="flex flex-col">
            <h2 className={`text-[22px] font-bold text-center`}>
              Инструменты:
            </h2>
            <h3 className="text-3xl purpleText pb-2 text-center font-semibold">
              {inst}
            </h3>
          </div>
          <div className="flex flex-col">
            <h2 className={`text-[22px] font-bold text-center`}>Ссылка:</h2>
            <a
              href={link}
              target="_blank"
              className="orangeText text-xl pb-2 text-center hover:underline font-semibold"
            >
              <h3 className="text-3xl">{linkName}</h3>
            </a>
          </div>
          <div
            className="absolute top-1 right-1 cursor-pointer"
            onClick={() => setIsOpenCard(false)}
          >
            <CancelIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
