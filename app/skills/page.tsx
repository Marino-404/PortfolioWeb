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
      className={`${containerStyle} flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 px-4 py-8">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-light leading-tight md:leading-snug">
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
          </h1>
        </motion.div>

        <motion.div
          className="flex-[0.9] flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/mockup sin fondo.png"
            alt="Mockup Design"
            width={600}
            height={600}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
