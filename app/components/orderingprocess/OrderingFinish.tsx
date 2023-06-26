"use client";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import OrderingWebsite from "./OrderingWebsite";

const OrderingFinish = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between w-full">
      <OrderingWebsite />
      <div className="flex mx-2 mt-[50px] lg:mt-0 flex-col justify-center items-center lg:items-start lg:justify-start gap-[2px]">
        <ThumbUpIcon
          fontSize="large"
          className="text-text-gray p-1 bg-gray-border border border-text-gray rounded-md"
        />
        <h3 className="text-3xl font-semibold">Готово</h3>
        <p className="text-text-gray text-center max-w-[430px] lg:text-start">
          Если вас всё устроило, вы оплачиваете заказ и я вам отправляю сайт. Вы
          можете, конечно, попросить что-то изменить или исправить.
        </p>
      </div>
    </div>
  );
};

export default OrderingFinish;
