"use client";

import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const MenuButton = () => {
  const [menu, setMenu] = useState(false);

  const MenuButton = useCallback(() => {
    setMenu((value) => !value);
  }, []);

  return (
    <>
      <button
        className="md:hidden border border-black py-[7px] px-[12px] rounded-md"
        onClick={MenuButton}
      >
        {menu ? <CloseIcon /> : <DragHandleIcon />}
      </button>
      {menu ? (
        <div className="fixed z-[100] left-0 top-[67px] md:hidden bg-white dark:bg-black flex flex-col items-center gap-4 text-xl w-[100%] h-[100vh]">
          <ul className="w-full px-6 py-6 flex flex-col gap-2 text-md">
            <li>Главная</li>
            <hr />
            <li>Мои умения</li>
            <hr />
            <li>Портфолио</li>
            <hr />
            <li>Обратная связь</li>
            <hr />
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MenuButton;
