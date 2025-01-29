"use client";

import { useAppState } from "../store/app-state";  
import { useEffect } from "react";
import About from "./About";
import NavBar from "./NavBar";

export default function HomePage() {
  const { theme } = useAppState(state => state); 

  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#090909" : "#dcdcdc";
    document.body.style.color = theme ? "#dcdcdc" : "#090909";
  }, [theme]);  

  return (
    <div className={`flex flex-col h-screen w-screen overflow-hidden ${
        theme
          ? "selection:bg-[#f0f0f0] selection:text-[#090909]"
          : "selection:bg-[#090909] selection:text-[#f0f0f0]"
      }`}>
      <NavBar />
      <About />
    </div>
  );
}
