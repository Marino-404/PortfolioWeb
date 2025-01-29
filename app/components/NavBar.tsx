"use client";

import { useAppState } from "../store/app-state";
import { FiGithub } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { theme, lang, changeTheme, changeLang } = useAppState();

  const toggleLanguage = () => {
    changeLang(!lang);
  };

  const toggleTheme = () => {
    changeTheme(!theme);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 flex justify-center items-center">
      <nav className="flex flex-row gap-6 p-3 bg-opacity-10 rounded-lg items-center">
        <motion.button
          onClick={toggleTheme}
          className="transition-all duration-300 hover:scale-110 hover:opacity-80"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {theme ? (
            <IoMdSunny className="h-[16px] w-[16px] transition-transform duration-300 hover:rotate-180" />
          ) : (
            <IoMdMoon className="h-[16px] w-[16px] transition-transform duration-300 hover:rotate-180" />
          )}
        </motion.button>

        <motion.button
          onClick={toggleLanguage}
          className="w-[30px] h-[30px] flex items-center justify-center text-xs border border-gray-500 rounded-full transition-opacity duration-300 hover:opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {lang ? "en" : "es"}
        </motion.button>

        <motion.a
          href="https://github.com/Marino-404"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110 hover:opacity-80"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <FiGithub className="h-[16px] w-[16px] transition-transform duration-300 hover:rotate-12" />
        </motion.a>
      </nav>
    </header>
  );
};

export default LanguageSwitcher;












  /*          <span
              onClick={() => {
                changeLang(!lang);
              }}
              className={`${
                lang ? "opacity-100" : "opacity-0"
              } cursor-pointer top-[2.5px] transition-opacity absolute duration-300 h-[20px] w-[20px]`}
            >
              en
            </span>

            <span
              onClick={() => {
                changeLang(!lang);
              }}
              className={`cursor-pointer top-[2.5px] ${
                lang ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300 absolute h-[20px] w-[20px]`}
            >
              es
            </span>  */