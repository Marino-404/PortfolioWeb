"use client";

import React from "react";
import { useAppState } from "../store/app-state";
import { skillsTextContent } from "../utils/text-content";
import { motion } from "framer-motion";
import { containerStyle, tittleStyle } from "../components/styles";

export default function SkillsComponent() {
  const { lang } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);

  return (
    <div className={containerStyle}>
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <motion.h1
          className={tittleStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {textContent.h1}
        </motion.h1>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/mockup sin fondo.png"
            alt="Mockup Design"
            className="w-[600px] h-[300px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
