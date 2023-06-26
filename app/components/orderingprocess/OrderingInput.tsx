"use client";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
const OrderingInput = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between w-full">
      <div className="orderingInput dark:bg-white flex flex-col gap-8 justify-center items-center shadow-2xl w-[350px] h-[500px] rounded-2xl">
        <div className="orderingInput w-[250px] h-[55px] bg-gray-border shadow-lg rounded-2xl"></div>
        <div className="orderingInput w-[250px] h-[55px] bg-gray-border shadow-lg rounded-2xl"></div>
        <div className="orderingInput w-[250px] h-[150px] bg-gray-border shadow-lg rounded-2xl"></div>
        <div className="orderingInput orangeBackground w-[200px] h-[50px] shadow-lg rounded-2xl"></div>
      </div>
      <div className="flex mx-2 mt-[50px] lg:mt-0 flex-col justify-center items-center lg:items-start lg:justify-start gap-[2px]">
        <DriveFileRenameOutlineOutlinedIcon
          fontSize="large"
          className="text-text-gray bg-gray-border border border-text-gray rounded-md"
        />
        <h3 className="text-3xl font-semibold">Напиши мне сообщение</h3>
        <p className="text-text-gray text-center lg:text-start">
          Следуй ниже и заполните форму. Я работаю без выходных
        </p>
      </div>
    </div>
  );
};

export default OrderingInput;
