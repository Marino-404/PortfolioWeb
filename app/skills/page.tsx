"use client";

import React from "react";
import { useAppState } from "../store/app-state";
import { skillsTextContent } from "../utils/text-content";
import { containerStyle, tittleStyle } from "../components/styles";
import { motion } from "framer-motion";
import { techCards } from "../components/TechCards";
import Image from "next/image";
import Items from "../components/Items";

export default function SkillsComponent() {
  const { lang } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);

  return (
    <div className={containerStyle}>
      <div className="flex flex-col h-auto w-full md:w-[800px] items-start justify-start px-4 min-h-[350px]">
        <div className="flex flex-row gap-2 md:gap-12 items-center justify-start w-full">
          <div className="flex flex-col w-3/4 md:w-1/2 items-start justify-start mb-4">
            <motion.h1
              className={tittleStyle}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              {textContent.h1}
            </motion.h1>
            <motion.div
              className="h-[120px] w-full flex gap-4 items-center justify-start text-xs md:text-sm mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
            >
              <p>{textContent.p}</p>
            </motion.div>
            <Items />
          </div>
          <motion.div
            className="h-auto w-auto flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/Mockup.png"
              alt="Descripción de la imagen"
              width={180}
              height={80}
              priority
            />
          </motion.div>
        </div>
        <motion.h1
          className={tittleStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          {textContent.h2}
        </motion.h1>
        <motion.div
          className="flex flex-wrap gap-1 md:gap-4 mb-14"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          {techCards.map(({ tag, card }) => (
            <div key={tag}>{card}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
