"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
