"use client";

interface OrderingNumberInter {
  spanColor?: string;
  topic?: string;
  background?: string;
  textColor?: string;
  topicNumber?: string;
}

const OrderingNumber: React.FC<OrderingNumberInter> = ({
  spanColor,
  topic,
  background,
  textColor,
  topicNumber,
}) => {
  return (
    <div className="my-[40px] lg:mb-[100px] flex flex-col justify-center items-center">
      <div className={`${spanColor} h-[100px] w-[2px]`}></div>
      <div
        className={`${background} text-white w-[40px] h-[40px] font-semibold text-xl flex justify-center items-center rounded-full`}
      >
        {topicNumber}
      </div>
      <h1 className={`${textColor} text-3xl font-bold`}>{topic}</h1>
    </div>
  );
};

export default OrderingNumber;
