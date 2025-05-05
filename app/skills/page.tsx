"use client";

import React from "react";
import { useAppState } from "../store/app-state";
import { skillsTextContent } from "../utils/text-content";
import { containerStyle, tittleStyle } from "../components/styles";

export default function SkillsComponent() {
  const { lang } = useAppState((state) => state);
  const textContent = skillsTextContent(lang);

  return (
    <div className={containerStyle}>
      <div className="flex flex-col h-auto w-auto items-start justify-start p-4 min-h-[350px]">
        <h1 className={tittleStyle}> {textContent.h2} </h1>
      </div>
    </div>
  );
}
