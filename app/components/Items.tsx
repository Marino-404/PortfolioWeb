import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useAppState } from "../store/app-state";
import { skillsTextContent } from "../utils/text-content";

const Items = () => {
  const { lang } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);

  return (
    <div className="flex flex-col gap-2 w-full h-auto items-start justify-start">
      <motion.div
        className=" flex flex-row gap-2 items-center text-center font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <AiOutlineCheckCircle className="flex text-[#008F8C] text-xl" />
        <p className="flex gap-2 items-center justify-start text-xs md:text-sm">
          {textContent.h3}
        </p>
      </motion.div>
      <motion.div
        className=" flex flex-row gap-2 items-center font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <AiOutlineCheckCircle className="flex text-[#008F8C] text-xl" />
        <p className="flex gap-2 text-xs md:text-sm">{textContent.h5}</p>
      </motion.div>
      <motion.div
        className=" flex flex-row gap-2 items-center font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <AiOutlineCheckCircle className="flex text-[#008F8C] text-xl" />
        <p className="flex gap-2 items-center justify-start text-xs md:text-sm">
          {textContent.h6}
        </p>
      </motion.div>
      <motion.div
        className=" flex flex-row gap-2 items-center font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <AiOutlineCheckCircle className="flex text-[#008F8C] text-xl" />
        <p className="flex gap-2 items-center justify-center text-xs md:text-sm">
          {textContent.h4}
        </p>
      </motion.div>
    </div>
  );
};

export default Items;
