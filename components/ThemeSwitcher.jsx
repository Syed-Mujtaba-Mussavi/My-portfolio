"use client";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-8/12 px-5 py-2 text-white rounded-full my-2 bg-gradient-to-r from-green to-blue-400"
      >
        {theme === "light" ? "Dark Theme" : "Light Theme"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
