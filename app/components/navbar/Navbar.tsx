"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuButtons from "./Menubuttons";
import DarkModeButton from "./DarkmodeButton";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [navBorder, setNavBorder] = useState(false);

  const changerBorder = () => {
    if (window.scrollY > 70) {
      setNavBorder(true);
    } else {
      setNavBorder(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changerBorder);
  });

  return (
    <header
      className={`flex z-50 bg-opacity-80 backdrop-blur-md justify-center items-center w-full fixed top-0 left-0 border-b border-gray-border bg-white dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-md ${
        navBorder ? "shadow-md" : "border-[white] shadow-none"
      }`}
    >
      <div className="flex justify-between max-w-[1300px] w-full py-3 px-6 items-center">
        <Logo />
        <MenuButtons />
        <div className="flex gap-4">
          <DarkModeButton />
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
