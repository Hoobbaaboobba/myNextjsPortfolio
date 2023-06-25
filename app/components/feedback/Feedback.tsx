"use client";

import { useForm } from "react-hook-form";

const Feedback = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div
      id="feedback"
      className="flex flex-col justify-center items-center my-[80px] lg:mt-[150px] mx-[10px]"
    >
      <h1 className="text-[45px] lg:text-[4rem] text- font-semibold mt-[80px] mb-[20px]">
        Обратная связь
      </h1>
      <p className="text-center text-xl lg:text-2xl mb-[20px] lg:mb-[50px] text-text-gray">
        Заполни форму, чтобы начать сотрудничество, как можно скорее
      </p>
      <form
        className="flex flex-col justify-center purpleBorder shadow-xl rounded-2xl items-center lg:items-start p-[30px] lg:p-[40px] gap-[30px] mt-[50px]"
        action="https://formsubmit.co/aff4bd25a040cd5d2ca1c82aaae47c92"
        method="POST"
        onSubmit={onSubmit}
        target="_blank"
      >
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-3 text-[16px] border border-gray-border focus:outline rounded-md"
            placeholder="Имя"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-[red] mt-1 ml-1">
              {errors.name.type === "required" &&
                "* Это поле обязательное для заполнения"}
              {errors.name.type === "maxLength" &&
                "* Максимальная длина 100 символов"}
            </p>
          )}
        </div>
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-3 text-[16px] border border-gray-border focus:outline rounded-md"
            placeholder="Почта"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-[red] mt-1 ml-">
              {errors.email.type === "required" &&
                "* Это поле обязательное для заполнения"}
              {errors.email.type === "pattern" && "* Неверный формат"}
            </p>
          )}
        </div>
        <div className="relative w-full">
          <textarea
            className="w-full p-3 text-[16px] border border-gray-border focus:outline rounded-md"
            type="text"
            placeholder="Сообщение"
            rows="4"
            cols="50"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-[red] mt-1 ml-">
              {errors.message.type === "required" &&
                "* Это поле обязательное для заполнения"}
              {errors.message.type === "maxLength" &&
                "* Максимальная длина 2000 символов"}
            </p>
          )}
        </div>
        <button
          type="submit"
          className=" text-[16px] border border-gray-border bg-black text-white hover:bg-white hover:text-black hover:border-black duration-200 py-2 px-6 rounded-md font-semibold"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Feedback;
