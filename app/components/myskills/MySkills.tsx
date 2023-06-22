"use client";

import MySkillButton from "./MySkillButton";

const MySkills = () => {
  return (
    <div className="mt-[80px] lg:mt-[250px] flex flex-col gap-[50px] justify-center items-center mx-6">
      <h1 className="text-center text-5xl lg:text-[5rem] font-semibold">
        Мои умения
      </h1>
      <div className="max-w-[1300px] w-full justify-between items-center flex flex-col gap-12 text-ceneter lg:flex-row">
        <div className="flex flex-col text-center gap-4 lg:gap-12">
          <h3 className="text-3xl">Frontend разработка</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <MySkillButton
                topic="HTML"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
              />
              <MySkillButton
                topic="CSS"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
              />
              <MySkillButton
                topic="SASS"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <MySkillButton
                topic="TailwindCss"
                mastery="Мастер"
                color="orangeText"
                hoverColor="orangeHover"
              />
              <MySkillButton
                topic="JavaScript"
                mastery="Хорошо"
                color="blueText"
                hoverColor="blueHover"
              />
              <MySkillButton
                topic="ReactJs"
                mastery="Хорошо"
                color="blueText"
                hoverColor="blueHover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-12">
          <h3 className="text-3xl text-center">Backend разработка</h3>
          <div className="flex flex-col gap-4">
            <MySkillButton
              topic="Redux"
              mastery="Средне"
              color="purpleText"
              hoverColor="purpleHover"
            />
            <MySkillButton
              topic="NodeJs"
              mastery="Средне"
              color="purpleText"
              hoverColor="purpleHover"
            />
            <MySkillButton
              topic="ExpressJs"
              mastery="Средне"
              color="purpleText"
              hoverColor="purpleHover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
