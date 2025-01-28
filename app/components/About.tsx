"use client";

import { useAppState } from "../store/app-state";
import { aboutTextContent } from "../utils/text-content";
import { motion } from "framer-motion";

const h1Style = "text-6xl font-bold typewriter mr-4 color-primary";
const h2Style = "text-2xl font-light mb-2 text-gray-400";

function About() {
    const { lang } = useAppState((state) => state);
    const textContent = aboutTextContent(lang);

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center ">
            <div className="flex flex-col h-80 items-start justify-start">
                <motion.h2
                    className={h2Style}
                    initial={{ opacity: 0, y: 20 }}  
                    animate={{ opacity: 1, y: 0 }}    
                    transition={{ duration: 1 }}      
                >
                    {textContent.h2}
                </motion.h2>

                <motion.h1
                    className={h1Style}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}  
                    transition={{ duration: 1.2 }}  
                >
                    {textContent.h1} <span className="text-primary">Marino</span>.
                </motion.h1>
            </div>
        </div>
    );
}

export default About;
