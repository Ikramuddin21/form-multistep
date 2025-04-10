"use client";
import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const TopBar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.removeAttribute("class");
    }
  }, [darkMode]);

  return (
    <div className="h-[40px] flex justify-center items-center pt-2">
      <button className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <IoSunny size={28} /> : <IoMoon size={28} />}
      </button>
    </div>
  );
};

export default TopBar;
