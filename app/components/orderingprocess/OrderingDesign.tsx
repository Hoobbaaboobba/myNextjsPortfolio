"use client";

import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import Image from "next/image";
import triangle from "../../images/triange.png";
import squar from "../../images/squar.png";
import star from "../../images/star.png";

const OrderingDesign = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between w-full">
      <div className="orderingInput relative flex justify-between px-[20px] lg:px-[40px] items-center w-full max-w-[350px] lg:max-w-[450px] h-[250px] dark:bg-white rounded-xl shadow-2xl">
        <Image src={triangle} alt="triangle" className="orderingInput" />
        <Image src={squar} alt="squar" className="orderingInput" />
        <Image src={star} alt="star" className="orderingInput" />
      </div>
      <div className="flex mx-2 mt-[50px] lg:mt-0 flex-col justify-center items-center lg:items-start lg:justify-start gap-[2px]">
        <BrushOutlinedIcon
          fontSize="large"
          className="text-text-gray p-1 bg-gray-border border border-text-gray rounded-md"
        />
        <h3 className="text-3xl font-semibold">Согласование дизайна</h3>
        <p className="text-text-gray text-center max-w-[430px] lg:text-start">
          Я отправляю вам готовый дизайн в figma. Если вам что-то не
          понравилось, вы смело можете запросить правки.
        </p>
      </div>
    </div>
  );
};

export default OrderingDesign;
