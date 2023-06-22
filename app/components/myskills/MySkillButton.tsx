"use client";

import ArrowRight from "@mui/icons-material/East";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { useState } from "react";

interface MySkillButtonProps {
  topic?: string;
  mastery?: string;
  color?: string;
  hoverColor?: string;
}

const MySkillButton: React.FC<MySkillButtonProps> = ({
  topic,
  mastery,
  color,
  hoverColor,
}) => {
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      className={`${hoverColor} rounded-lg cursor-pointer w-[300px] border border-gray-border flex justify-between items-center py-[12px] p-4`}
    >
      <div className="flex justify-center items-center gap-2">
        <BeenhereOutlinedIcon fontSize="large" />
        <div className="text-start">
          <h3 className="text-[22px]">{topic}</h3>
          <p className={`${color} text-[14px] font-medium`}>{mastery}</p>
        </div>
      </div>
      {buttonHover ? <AddCircleOutlineIcon /> : <ArrowRight />}
    </div>
  );
};

export default MySkillButton;
