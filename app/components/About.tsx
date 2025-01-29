"use client";

import { useAppState } from "../store/app-state";
import { aboutTextContent } from "../utils/text-content";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";


const h1Style = "text-6xl font-semibold typewriter mb-6";
const h2Style = "text-2xl font-light mb-2 ";
const pStyle = "text-md font-light max-w-xl";
const strongStyle = "font-semibold";

function About() {
    const { lang, theme } = useAppState((state) => state);
    const textContent = aboutTextContent(lang);

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center"> 
            <div className="flex flex-col h-auto items-start justify-start px-4 min-h-[350px]">
                <motion.h2
                    className={h2Style}
                    initial={{ opacity: 0, y: 20 }}  
                    animate={{ opacity: 1, y: 0 }}    
                    transition={{ duration: 1.8 }}      
                >
                    {textContent.h2}
                </motion.h2>

                <motion.h1
                    className={`${h1Style} ${theme ? "typewriter-light" : "typewriter-dark"}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}  
                    transition={{ duration: 2 }}  
                >
                    {textContent.h1} <span className="text-primary">Marino</span> Rova. 
                </motion.h1>

                <motion.div
                    className={pStyle}
                    initial={{ opacity: 0, y: 20 }}  
                    animate={{ opacity: 1, y: 0 }}    
                    transition={{ duration: 2.2 }}      
                >
                    { lang ? ( <p className="mb-2" >Actualmente estoy iniciando mi carrera como <strong className={strongStyle}>desarrollador de software frontend</strong> y <strong className={strongStyle}>diseñador UX/UI.</strong></p> ) : (<p className="mb-2" >Currently I am starting my career as a <strong className={strongStyle}>frontend software developer and UX/UI designer.</strong></p>) }
                    { lang ? ( <p>Me especializo en <strong className={strongStyle}>React y Next.js</strong> para el desarrollo y <strong className={strongStyle}>Figma</strong> para el diseño, con un enfoque directo en la creación de interfaces de usuario modernas, escalables y altamente funcionales.</p>) : (<p>I am specialized in <strong className={strongStyle}>React</strong> and <strong className={strongStyle}>Next.js</strong> for development and <strong className={strongStyle}>Figma</strong> for design, with a direct focus on creating attractive, scalable, and highly functional user interfaces.</p>) }
                </motion.div>
                
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

