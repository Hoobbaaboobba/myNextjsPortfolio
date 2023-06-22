"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeButton = useCallback(() => {
    setDarkMode((value) => !value);
  }, []);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={darkModeButton}
      className="flex justify-center items-center cursor-pointer"
    >
      {darkMode ? (
        <div
          className="py-[7px] px-[12px] rounded-md text-[white] transition duration-200"
          onClick={() => setTheme("light")}
        >
          <LightModeIcon />
        </div>
      ) : (
        <div
          className="border border-black py-[7px] px-[12px] rounded-md bg-[black] text-[white] md:hover:bg-white md:hover:text-black transition duration-200"
          onClick={() => setTheme("dark")}
        >
          <DarkModeIcon />
        </div>
      )}
    </div>
  );
};

export default DarkModeButton;
