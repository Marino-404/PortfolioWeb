"use client";

import { useAppState } from "../store/app-state"; 
import { aboutTextContent } from "../utils/text-content";
import { useEffect } from "react";


const LanguageSwitcher = () => {
  const { lang, changeLang } = useAppState(); 
  const { h1, h2 } = aboutTextContent(lang); 

  const toggleLanguage = () => {
    changeLang(!lang); 
  };

  useEffect(() => {
    console.log("Idioma cambiado:", lang ? "Inglés" : "Español");
  }, [lang]); 

  return (
    <div className="relative flex items-center justify-center" >
            <span
              onClick={() => {
                changeLang(!lang);
              }}
              className={`${
                lang ? "opacity-100" : "opacity-0"
              } cursor-pointer top-[2.5px] transition-opacity absolute duration-300 h-[20px] w-[20px]`}
            >
              es
            </span>

            <span
              onClick={() => {
                changeLang(!lang);
              }}
              className={`cursor-pointer top-[2.5px] ${
                lang ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300 absolute h-[20px] w-[20px]`}
            >
              en
            </span>
        </div>
    
  );
};

export default LanguageSwitcher;
