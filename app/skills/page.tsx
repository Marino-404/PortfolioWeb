"use client";

import React from "react";
import { useAppState } from "../store/app-state";
import Image from "next/image";
import { skillsTextContent } from "../utils/text-content";
import { motion } from "framer-motion";
import { containerStyle } from "../components/styles";

export default function SkillsComponent() {
  const { lang, theme } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);
  const h1Parts = textContent.h1.split(" ");

  return (
    <div
      className={`${containerStyle} flex flex-col items-center justify-center min-h-screen`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 max-w-7xl w-full gap-4 md:gap-6">
        {/* Texto */}
        <motion.h1
          className="text-3xl md:text-4xl xl:text-5xl sm:text-5xl font-light
          leading-tight md:leading-snug xl:leading-snug"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {h1Parts[0]}
          <span> {h1Parts[1]}</span> <br />
          <span
            className={`font-bold bg-gradient-to-b ${
              theme
                ? "from-[#023535] to-[#008F8C]"
                : "from-[#008F8C] to-[#023535]"
            } bg-clip-text text-transparent`}
          >
            {h1Parts[2]}
          </span>{" "}
          {h1Parts[3]} <br />
          <span> {h1Parts[4]}</span> <br />
          <span
            className={`font-bold bg-gradient-to-b ${
              theme
                ? "from-[#023535] to-[#008F8C]"
                : "from-[#008F8C] to-[#023535]"
            } bg-clip-text text-transparent`}
          >
            {h1Parts[5]}
          </span>
        </motion.h1>

        {/* Imagen */}
        <motion.div
          className="justify-center items-center"
          initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
          animate={{ opacity: 1, scale: [1.05, 1], rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/mockup sin fondo.png"
            alt="Mockup Design"
            width={800}
            height={800}
            className="w-[500px] sm:w-[400px] md:w-[500px] xl:w-[500px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
