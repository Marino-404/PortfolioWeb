"use client";

import React from "react";
import { useAppState } from "../store/app-state";
import { skillsTextContent } from "../utils/text-content";
import { containerStyle, tittleStyle } from "../components/styles";
import { motion } from "framer-motion";
import { techCards } from "../components/TechCards";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function SkillsComponent() {
  const { lang } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);

  return (
    <div className={containerStyle}>
      <div className="flex flex-col h-auto w-full md:w-[800px] items-start justify-start p-4 min-h-[350px]">
        <div className="flex flex-row gap-4 md:gap-12 items-center justify-start w-full">
          <div className="flex flex-col w-3/4 md:w-1/2 items-start justify-start min-h-[350px]">
            <motion.h1
              className={tittleStyle}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              {textContent.h1}
            </motion.h1>
            <motion.div
              className="h-full w-full flex gap-4 items-center justify-start text-xs md:text-sm mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
            >
              <p className="mb-4 md:mb-6">{textContent.p}</p>
            </motion.div>
            <motion.div
              className="h-full w-full flex flex-col items-start justify-start text-xs md:text-sm font-semibold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
            >
              <p className="flex gap-1 items-center text-xs md:text-sm mb-4 md:mb-4">
                <AiOutlineCheckCircle className="text-[#008F8C] text-lg" />
                {textContent.h3}
              </p>
              <p className="flex gap-1 items-center text-xs md:text-sm mb-4 md:mb-4">
                <AiOutlineCheckCircle className="text-[#008F8C] text-lg" />
                {textContent.h4}
              </p>
              <p className="flex gap-1 items-center text-xs md:text-sm mb-4 md:mb-4">
                <AiOutlineCheckCircle className="text-[#008F8C] text-lg" />
                {textContent.h5}
              </p>
            </motion.div>
          </div>
          <motion.h1
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
          </motion.h1>
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
          className="flex flex-wrap gap-2 md:gap-4"
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
