"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { useAppState } from "./store/app-state";
import NavBar from "./components/NavBar";
import FooterNav from "./components/FooterNav";

const montserrat = Montserrat({
  weight: ["100","200", "300", "400", "500", "600",  "700", "800", "900"],
  subsets: ["latin"], 
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const { theme } = useAppState();

  const themeClasses = theme
    ? "selection:bg-[#090909] selection:text-[#f0f0f0] text-[#090909] bg-[#f0f0f0]"
    : "selection:bg-[#f0f0f0] selection:text-[#090909] text-[#f0f0f0] bg-[#090909]";

  return (
    <html lang="en" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.className} ${themeClasses}`}
        style={{
          backgroundImage: `url('${theme ? "/fondo.jpg" : "/fondo-dark.jpg"}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <NavBar />
        
        <div className="flex flex-col h-screen w-screen overflow-hidden">
          {children}
        </div>

        <FooterNav />

      </body>
    </html>
  );
}


