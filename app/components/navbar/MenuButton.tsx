"use client";

import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useRouter } from "next/navigation";

const MenuButton = () => {
  const router = useRouter();
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
        <div className="fixed z-[100] left-0 top-[67px] md:hidden bg-white dark:bg-black flex flex-col items-center gap-4 text-xl w-[100%] h-[100vh] backdrop-blur-md">
          <ul className="w-full px-6 py-6 flex flex-col gap-2 text-md">
            <li>
              <a href="#" onClick={() => setMenu(false)}>
                Главная
              </a>
            </li>
            <hr />
            <li>
              {" "}
              <a href="#myskills" onClick={() => setMenu(false)}>
                Мои умения
              </a>
            </li>
            <hr />
            <li>
              <a href="#portfolio" onClick={() => setMenu(false)}>
                Портфолио
              </a>
            </li>
            <hr />
            <li>
              <a href="#feedback" onClick={() => setMenu(false)}>
                Обратная связь
              </a>
            </li>
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
