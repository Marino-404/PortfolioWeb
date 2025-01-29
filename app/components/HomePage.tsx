"use client";

import { useAppState } from "../store/app-state";
import About from "./About";
import NavBar from "./NavBar";

export default function HomePage() {
  const { theme } = useAppState((state) => state);

  return (
    <div
      className={`flex flex-col h-screen w-screen overflow-hidden ${
        theme
          ? "selection:bg-[#090909] selection:text-[#f0f0f0]  text-[#090909] bg-[#f0f0f0]"
          : "selection:bg-[#f0f0f0] selection:text-[#090909] text-[#f0f0f0] bg-[#090909]"
      }`}
      style={{
        backgroundImage: `url('${theme ? "/fondo.jpg" : "/fondo-dark.jpg"}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <About />
    </div>
  );
}



