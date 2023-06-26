"use client";

import ArrowRight from "@mui/icons-material/East";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

interface MySkillButtonProps {
  topic?: string;
  mastery?: string;
  color?: string;
  hoverColor?: string;
  cardText?: string;
}

const MySkillButton: React.FC<MySkillButtonProps> = ({
  topic,
  mastery,
  color,
  hoverColor,
  cardText,
}) => {
  const [buttonHover, setButtonHover] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        onClick={setIsOpenCard(true)}
        className={`${hoverColor} ${
          isOpenCard
            ? "rounded-lg cursor-pointer w-[300px] border border-gray-border flex justify-between items-center py-[12px] px-4"
            : "rounded-lg cursor-pointer w-[300px] border border-gray-border flex justify-between items-center py-[12px] px-4"
        }`}
      >
        <div className={`flex justify-center items-center gap-2`}>
          <BeenhereOutlinedIcon fontSize="large" />
          <div className="text-start">
            <h3 className="text-[22px]">{topic}</h3>
            <p className={`${color} text-[14px] font-medium`}>{mastery}</p>
          </div>
        </div>
        {buttonHover ? <AddCircleOutlineIcon /> : <ArrowRight />}
      </div>
      <div
        className={`${
          isOpenCard ? "block" : "hidden"
        } fixed left-0 top-0 z-[100]`}
      >
        <div onClick={setIsOpenCard(false)} className="popUpBg"></div>
        <div className="popUp dark:bg-black max-w-[350px] lg:max-w-[450px] py-[10px] px-[20px] flex flex-col gap-2 border border-gray-border justify-between">
          <h3 className={`${color} text-[22px] font-bold text-center`}>
            {mastery}
          </h3>
          <p className="pb-2 text-center">{cardText}</p>
          <div
            className="absolute top-1 right-1 cursor-pointer"
            onClick={setIsOpenCard(false)}
          >
            <CancelIcon />
          </div>
          <div>
            <hr />
            <p className="font-bold text-[14px] mt-2">{topic}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkillButton;
