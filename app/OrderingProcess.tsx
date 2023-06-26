import OrderingChat from "./OrderingChat";
import OrderingDesign from "./OrderingDesign";
import OrderingFinish from "./OrderingFinish";
import OrderingInput from "./OrderingInput";
import OrderingNumber from "./OrderingNumber";

const OrderingProcess = () => {
  return (
    <div className="lg:mt-[50px] flex flex-col justify-center items-center">
      <h1 className="text-[45px] lg:text-[4rem] font-semibold mt-[50px]">
        Процесс заказа
      </h1>
      <p className="text-center text-xl text-text-gray my-[5px] lg:mb-[30px] mx-4">
        Подробная инструкция того, как происходит оформление заказа
      </p>
      <div className="flex flex-col justify-center items-center max-w-[1000px] w-full">
        <OrderingNumber
          topic="Контакт"
          textColor="blueText"
          topicNumber="1"
          background="blueBackground"
          spanColor="blueColor"
        />
        <OrderingInput />
        <OrderingNumber
          topic="Переписка"
          textColor="purpleText"
          topicNumber="2"
          background="purpleBackground"
          spanColor="purpleColor"
        />
        <OrderingChat />
        <OrderingNumber
          topic="Дизайн"
          textColor="orangeText"
          topicNumber="3"
          background="orangeBackground"
          spanColor="orangeColor"
        />
        <OrderingDesign />
        <OrderingNumber
          topic="Конец"
          textColor="blueText"
          topicNumber="4"
          background="blueBackground"
          spanColor="blueColor"
        />
        <OrderingFinish />
      </div>
    </div>
  );
};

export default OrderingProcess;
