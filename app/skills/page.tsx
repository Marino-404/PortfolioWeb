"use client";

import React from 'react';
import { useAppState } from '../store/app-state';
import { skillsTextContent } from '../utils/text-content';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaFigma, FaNodeJs  } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiReactjsLine, RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript, SiJavascript  } from "react-icons/si";


const skills = [
  { icon: <SiJavascript  />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <RiReactjsLine />, name: "React" },
  { icon: <RiNextjsLine />, name: "Next.js" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaNodeJs  />, name: "Node.js" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
  { icon: <FaFigma />, name: "Figma" }
];

export const tittleStyle = "text-xl md:text-4xl font-normal mb-6 md:mb-12";
export const containerStyle = "flex flex-col text-center items-center justify-center h-full p-6";

export default function SkillsComponent() {

  const { lang } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);

  return (
    <div className={containerStyle}>
      <motion.h1
        className={tittleStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {textContent.h1}
      </motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="text-primary text-3xl md:text-5xl">{skill.icon}</div>
            <p className="mt-2 text:xs md:text-lg font-medium text-gray-600">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



