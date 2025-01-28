"use client";

import { useAppState } from "../store/app-state";
import { aboutTextContent } from "../utils/text-content";

const h1Style = "text-8xl font-bold typewriter mr-4 color-primary";
const h2Style = "text-2xl font-light mb-2 text-gray-400";

function About() {
    const { lang } = useAppState((state) => state);
    const textContent = aboutTextContent(lang);
    return (
        <div className="flex flex-col h-screen w-full items-center justify-center ">
            <div className="flex flex-col h-80 items-start justify-start" >
                <h2 className={h2Style} >{textContent.h2}</h2>
                <h1 className={h1Style} >{textContent.h1} <span className="text-primary" >Marino</span>.</h1>
            </div>
        </div>
    );
}

export default About;