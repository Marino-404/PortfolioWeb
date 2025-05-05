"use client";

import React from "react";
import { useAppState } from "../store/app-state";
import { skillsTextContent } from "../utils/text-content";
import { containerStyle, tittleStyle } from "../components/styles";
import { motion } from "framer-motion";

export default function SkillsComponent() {
  const { lang } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);

  return (
    <div className={containerStyle}>
      <div className="flex flex-col h-auto w-full md:w-[600px] items-start justify-start p-4 min-h-[350px]">
        <motion.h1
          className={tittleStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          {textContent.h2}
        </motion.h1>
      </div>
    </div>
  );
}
