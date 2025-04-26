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
        <motion.div
          className="text-center md:text-left basis-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            className="text-3xl md:text-4xl sm:text-5xl font-light leading-tight md:leading-snug"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            {h1Parts[0]} {h1Parts[1]} <br />
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
            {h1Parts[4]} <br />
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
        </motion.div>

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
            className="w-[500px] sm:w-[400px] md:w-[500px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
