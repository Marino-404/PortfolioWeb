"use client";

import { useAppState } from "../store/app-state";
import { aboutTextContent } from "../utils/text-content";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";


const h1Style = "text-6xl font-semibold typewriter mb-2";
const h2Style = "text-2xl font-light mb-2 ";
const pStyle = "text-lg font-light max-w-xl";

function About() {
    const { lang } = useAppState((state) => state);
    const textContent = aboutTextContent(lang);

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center"> 
            <div className="flex flex-col h-auto items-start justify-start px-4">
                <motion.h2
                    className={h2Style}
                    initial={{ opacity: 0, y: 20 }}  
                    animate={{ opacity: 1, y: 0 }}    
                    transition={{ duration: 1.8 }}      
                >
                    {textContent.h2}
                </motion.h2>

                <motion.h1
                    className={h1Style}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}  
                    transition={{ duration: 2 }}  
                >
                    {textContent.h1} <span className="text-primary">Marino</span> Rova. 
                </motion.h1>

                <motion.p
                    className={pStyle}
                    initial={{ opacity: 0, y: 20 }}  
                    animate={{ opacity: 1, y: 0 }}    
                    transition={{ duration: 2.2 }}      
                >
                    {textContent.p}
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}  
                    animate={{ opacity: 1, y: 0 }}    
                    transition={{ duration: 2.4 }}      
                >
                    <span className="flex flex-row items-center gap-1 hover:cursor-pointer">
                        <motion.div
                            animate={{
                                y: [0, 10, 0], 
                            }}
                            transition={{
                                y: {
                                    repeat: Infinity,   
                                    duration: 2,         
                                    ease: "easeInOut",  
                                },
                            }}
                        >
                            <IoIosArrowDown className="h-6 w-6 mt-5" />
                        </motion.div>
                    </span>
                </motion.div>

            </div>
        </div>
    );
}

export default About;

