"use client";

import { useState } from "react";
import MySkillButton from "./MySkillButton";

const MySkills = () => {
  return (
    <div className="relative mt-[80px] lg:mt-[250px] flex flex-col gap-[20px] justify-center items-center mx-6">
      <div id="myskills" className="absolute top-[-100px]"></div>
      <h1 className="text-center text-5xl lg:text-[4rem] font-semibold">
        Мои умения
      </h1>
      <p className="text-center text-lg mb-[20px] lg:mb-[50px] text-text-gray">
        Это все технологии, которые я могу использовть в пректах на ваш выбор.
        <br />
        Цветным отмечены уровни владения мной той или оной технологией
      </p>
      <div className="max-w-[1300px] w-full justify-between items-center flex flex-col gap-12 text-ceneter lg:flex-row">
        <div className="flex flex-col text-center gap-4 lg:gap-12">
          <h3 className="text-3xl">Frontend разработка</h3>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <MySkillButton
                topic="HTML"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
                cardText="За год работы на фрилансе я сделал десятки сайтов и различных проектов на HTML. Поэтому знаю толк в этот технологии"
              />
              <MySkillButton
                topic="CSS"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
                cardText="Этой технологией я владею ничуть не хуже чем первой. Все сайты в примерах ниже сделаны с помощью CSS"
              />
              <MySkillButton
                topic="SASS"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
                cardText="С этим инструментом я знаком относительно недавно, но это не мешает мне быть виртуозом"
              />
            </div>
            <div className="flex flex-col gap-4">
              <MySkillButton
                topic="TailwindCss"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
                cardText="С использованием этой технологией разработка происходит в разы быстрее чем на CSS, а результат остаётся таким же прекрасным"
              />
              <MySkillButton
                topic="JavaScript"
                mastery="Хорошо"
                color="blueText"
                hoverColor="blueHover"
                cardText="Могу делать различные анимации, слайдеры и эффекты. Этот сайт имеет огромное количесто кода на JS"
              />
              <MySkillButton
                topic="React Js"
                mastery="Хорошо"
                color="blueText"
                hoverColor="blueHover"
                cardText="Эта библиотека позволяет мне делать красивые, адаптивные и простые в использовании сайты."
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-12 text-center">
          <h3 className="text-3xl">Backend разработка</h3>
          <div className="flex flex-col gap-4">
            <MySkillButton
              topic="Redux"
              mastery="Средне"
              color="purpleText"
              hoverColor="purpleHover"
              cardText="Имею небольшой коммерческий опыт работы с этим инструметом. Однако это не мешает мне применить её для выполнения вашей задачи"
            />
            <MySkillButton
              topic="Node Js"
              mastery="Средне"
              color="purpleText"
              hoverColor="purpleHover"
              cardText="Умею рабоать с node moduls, могу написать локальный сервер, а также могу взаимодействовать с локальным хранилием"
            />
            <MySkillButton
              topic="Express Js"
              mastery="Средне"
              color="purpleText"
              hoverColor="purpleHover"
              cardText="Этот фреймворк позволяет мне настраивать и тестировать среду разработки Node на Windows"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
