"use client";

import React from "react";
import { useAppState } from "../store/app-state";
import { contactTextContent } from "../utils/text-content";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { tittleStyle, containerStyle } from "../components/styles";
import { placeholderTextContent } from "../utils/text-content";

export default function Contact() {
  const { lang } = useAppState((state) => state);
  const textContent = contactTextContent(lang);

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

      <motion.form
        className=" w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex gap-4">
          <motion.input
            type="text"
            placeholder={placeholderTextContent(lang).name}
            className="w-1/2 border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2"
          />
          <motion.input
            type="email"
            placeholder={placeholderTextContent(lang).email}
            className="w-1/2 border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2"
          />
        </div>

        <motion.textarea
          placeholder={placeholderTextContent(lang).message}
          rows={3}
          className="mt-4 w-full border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2 resize-none"
        ></motion.textarea>

        <div className="mt-6 flex justify-end">
          <motion.button
            type="submit"
            className="flex items-center gap-2 text-md font-medium"
          >
            {placeholderTextContent(lang).send}<FiSend />
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}

