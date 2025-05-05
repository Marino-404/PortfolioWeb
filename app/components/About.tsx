"use client";

import { useAppState } from "../store/app-state";
import { aboutTextContent } from "../utils/text-content";
import { motion } from "framer-motion";
import { h1Style, h2Style, pStyle, strongStyle } from "../components/styles";

function About() {
  const { lang, theme } = useAppState((state) => state);
  const textContent = aboutTextContent(lang);

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <div className="flex flex-col h-auto w-auto items-start justify-start p-4 min-h-[350px]">
        <motion.h2
          className={h2Style}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          {textContent.h2}
        </motion.h2>

        <motion.h1
          className={`${h1Style} ${
            theme ? "typewriter-light" : "typewriter-dark"
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        >
          {textContent.h1}{" "}
          <span
            className={`bg-gradient-to-b ${
              theme
                ? "from-[#023535] to-[#008F8C]"
                : "from-[#008F8C] to-[#023535]"
            } bg-clip-text text-transparent`}
          >
            Marino
          </span>{" "}
          Rova.
        </motion.h1>

        <motion.div
          className={pStyle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          {lang ? (
            <p className="mb-2">
              Soy{" "}
              <strong className={strongStyle}>desarrollador frontend</strong>{" "}
              especializado en <strong className={strongStyle}>React.js</strong>{" "}
              y <strong className={strongStyle}>Next.js</strong>, con
              experiencia en el diseño e implementación de interfaces modernas,
              escalables y orientadas al usuario.
            </p>
          ) : (
            <p className="mb-2">
              I am a <strong className={strongStyle}>frontend developer</strong>{" "}
              specialized in <strong className={strongStyle}>React.js</strong>{" "}
              and <strong className={strongStyle}>Next.js</strong>, with
              experience designing and implementing modern, scalable, and
              user-focused interfaces.
            </p>
          )}
          {lang ? (
            <p>
              Aunque mi enfoque principal está en el desarrollo, tengo una
              sólida base en{" "}
              <strong className={strongStyle}>diseño UX/UI</strong> con dominio
              de herramientas como{" "}
              <strong className={strongStyle}>Figma</strong>.
            </p>
          ) : (
            <p>
              While my main focus is on development, I have a solid foundation
              in <strong className={strongStyle}>UX/UI design</strong> with
              proficiency in tools like{" "}
              <strong className={strongStyle}>Figma</strong>.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
