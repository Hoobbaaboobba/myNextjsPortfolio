"use client";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const OrderingChat = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between w-full">
      <div className="orderingInput relative w-full max-w-[350px] lg:max-w-[450px] h-[250px] dark:bg-white rounded-xl shadow-2xl">
        <div className="orderingInput absolute left-[15px] top-[15px] flex p-3 bg-gray-border flex-col w-[250px] lg:w-[330px] rounded-2xl shadow-xl">
          <p className="font-semibold text-sm dark:text-black">
            Здравствуйте! Я Алексей, ваш личный менеджер. Пожалуйста, выскажите
            мне свои пожелания
          </p>
        </div>
        <div className="orderingInput absolute bottom-[20px] right-[15px] bg-green w-[200px] ml-[230px] p-3 rounded-xl shadow-xl font-semibold">
          <p className="dark:text-black">Привет, я хочу самый лучший сайт</p>
        </div>
      </div>
      <div className="flex mx-2 mt-[50px] lg:mt-0 flex-col justify-center items-center lg:items-start lg:justify-start gap-[2px]">
        <ChatOutlinedIcon
          fontSize="large"
          className="text-text-gray p-1 bg-gray-border border border-text-gray rounded-md"
        />
        <h3 className="text-3xl font-semibold">Обсуждение деталей</h3>
        <p className="text-text-gray text-center max-w-[430px] lg:text-start dark:text-white">
          Общаемся в популярных мессенджерах, вы высказываете свои пожелания и
          предпочтения
        </p>
      </div>
    </div>
  );
};

export default OrderingChat;
