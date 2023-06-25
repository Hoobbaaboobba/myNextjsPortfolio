"use client";

import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";

const OrderingWebsite = () => {
  return (
    <div className="orderingInput relative flex-col px-[20px] lg:px-[40px] w-full max-w-[350px] lg:max-w-[450px] h-[250px] dark:bg-white rounded-xl shadow-2xl">
      <header className="absolute flex gap-4 justify-center items-center rounded-md left-0 top-0 bg-gray-bg w-full h-[50px]">
        <ChangeHistoryRoundedIcon
          fontSize="large"
          className="text-gray-border"
        />
        <div className="orderingInput w-[60px] h-[20px] bg-gray-border rounded-2xl"></div>
        <div className="orderingInput w-[60px] h-[20px] bg-gray-border rounded-2xl"></div>
        <div className="orderingInput w-[60px] h-[20px] bg-gray-border rounded-2xl"></div>
        <div className="orderingInput w-[30px] h-[30px] bg-gray-border rounded-full"></div>
      </header>
      <div className="mt-[70px] flex justify-center items-center gap-4">
        <div className="flex flex-col gap-4">
          <div className="orderingInput bg-gray-border w-[180px] h-[20px] rounded-md"></div>
          <div className="orderingInput bg-gray-border w-[180px] h-[50px] rounded-md"></div>
          <div className="flex gap-[10px]">
            <div className="orderingInput bg-gray-border w-[85px] h-[20px] rounded-md"></div>
            <div className="orderingInput bg-gray-border w-[85px] h-[20px] rounded-md"></div>
          </div>
        </div>
        <div className="orderingInput bg-gray-border w-[120px] h-[120px] rounded-md"></div>
      </div>
    </div>
  );
};

export default OrderingWebsite;
