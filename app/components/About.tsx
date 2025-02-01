"use client";

import { useAppState } from "../store/app-state";
import { aboutTextContent } from "../utils/text-content";
import { motion } from "framer-motion";


const h1Style = "text-4xl md:text-6xl font-semibold typewriter mb-2 md:mb-6";
const h2Style = "text-xl md:text-2xl font-light mb-2 ";
const pStyle = "text-sm md:text-lg font-light max-w-xl";
const strongStyle = "font-semibold";

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
                    className={`${h1Style} ${theme ? "typewriter-light" : "typewriter-dark"}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}  
                    transition={{ duration: 1.4 }}  
                >
                    {textContent.h1} <span
                    className={`bg-gradient-to-b ${
                    theme  ? "from-[#023535] to-[#008F8C]" : "from-[#008F8C] to-[#023535]" 
                        } bg-clip-text text-transparent`}
                    >
                        Marino
                    </span> Rova.
                </motion.h1>

                <motion.div
                    className={pStyle}
                    initial={{ opacity: 0, y: 50 }}  
                    animate={{ opacity: 1, y: 0 }}    
                    transition={{ duration: 1.8 }}      
                >
                    { lang ? ( <p className="mb-2" >Actualmente estoy iniciando mi carrera como <strong className={strongStyle}>desarrollador de software frontend</strong> y <strong className={strongStyle}>diseñador UX/UI.</strong></p> ) : (<p className="mb-2" >Currently I am starting my career as a <strong className={strongStyle}>frontend software developer and UX/UI designer.</strong></p>) }
                    { lang ? ( <p>Me especializo en <strong className={strongStyle}>React.js</strong> y <strong className={strongStyle} >Next.js</strong> para el desarrollo y <strong className={strongStyle}>Figma</strong> para el diseño, con un enfoque directo en la creación de interfaces de usuario modernas, escalables y altamente funcionales.</p>) : (<p>I am specialized in <strong className={strongStyle}>React</strong> and <strong className={strongStyle}>Next.js</strong> for development and <strong className={strongStyle}>Figma</strong> for design, with a direct focus on creating attractive, scalable, and highly functional user interfaces.</p>) }
                </motion.div>
                

            </div>
        </div>
    );
}

export default About;

