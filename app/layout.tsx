"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { useAppState } from "./store/app-state";
import NavBar from "./components/NavBar";
import FooterNav from "./components/FooterNav";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google" content="notranslate" />
        <meta
          name="description"
          content="Página personal de Juan Marino Rova, donde se destacan mis proyectos, experiencias y habilidades. Aquí podrás conocer más sobre mi trabajo y logros profesionales."
        />
        <meta
          name="keywords"
          content="Desarrollo de Software, Soluciones Tecnológicas, Innovación Tecnológica"
        />
        <meta name="author" content="Juan Marino Rova" />
        <meta name="robots" content="index, follow" />
        <meta title="Juan Marino Rova" />
        <meta property="og:title" content="Juan Marino Rova" />
        <meta
          property="og:description"
          content="Página personal de Juan Marino Rova, donde se destacan mis proyectos, experiencias y habilidades. Aquí podrás conocer más sobre mi trabajo y logros profesionales."
        />
        <meta property="og:image" content="./favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Juan Marino Rova" />
        <meta
          name="twitter:description"
          content="Página personal de Juan Marino Rova, donde se destacan mis proyectos, experiencias y habilidades. Aquí podrás conocer más sobre mi trabajo y logros profesionales."
        />
        <meta name="twitter:image" content="./favicon.ico" />
        <link rel="icon" href="ruta-del-favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="estilos.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <title>Juan Marino Rova</title>
      </head>

      <body
        className={`${montserrat.className} ${themeClasses}`}
        style={{
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
