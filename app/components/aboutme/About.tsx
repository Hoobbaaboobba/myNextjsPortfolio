"use client";
import Image from "next/image";
import myphoto from "../../images/myphoto.png";
import myphoto2 from "../../images/myphoto2.png";
import WriteMeButton from "./WriteMeButton";
import background from "../../images/dotbackground.png";
import { useState } from "react";

const About = () => {
  const [photo, setPhoto] = useState(false);

  return (
    <div className="mt-[80px] md:mt-[150px] flex justify-center items-center">
      <Image
        src={background}
        alt="background"
        className="hidden 2xl:block absolute z-[-100] top-[75px] -mr-[20px]"
      />
      <div className="flex 2xl:mt-[40px] flex-col-reverse gap-2 md:gap-8 md:flex-row max-w-[1300px] w-full justify-center md:justify-between items-center md:items-start px-6">
        <div className="flex flex-col gap-2 md:gap-4 max-w-[450px] md:max-w-[700px] md:w-full text-center md:text-start px-2 md:py-0">
          <h1 className="text-[24px] md:text-4xl lg:text-5xl font-semibold">
            Привет! Я <span className="blueText">Алексей Матвеев</span> <br />
            Frontend разработчик
          </h1>
          <h3 className="text-text-gray text-2xl dark:text-white text-sm lg:text-xl">
            Занимаюсь вёрсткой сайтов на HTML и CSS с использованием таких
            фреймворков, как React и Next
          </h3>
          <div className="mt-[20px] md:mt-[40px] flex gap-2 sm:gap-8 flex-col sm:flex-row w-full justify-center items-center md:justify-start md:items-start">
            <WriteMeButton />
          </div>
        </div>
        <div
          className="myphoto relative"
          onMouseEnter={() => setPhoto(true)}
          onMouseLeave={() => setPhoto(false)}
        >
          {photo ? (
            <Image src={myphoto2} alt="myphoto" width="350" height="350" />
          ) : (
            <Image src={myphoto} alt="myphoto" width="350" height="350" />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
