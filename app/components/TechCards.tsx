import { useAppState } from "../store/app-state";
import {
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  NextjsIcon,
  NestJSIcon,
  NodejsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  JavaScriptIcon,
  HTML5Icon,
  CSSIcon,
  FigmaIcon,
} from "./Icons";

interface TechCardProps {
  tech: string;
  children: React.ReactNode;
}

function TechCard({ children, tech }: TechCardProps) {
  const { theme } = useAppState();
  return (
    <div
      className={`flex text-white select-none gap-2 px-2 bg-gradient-to-br from-[#090909] to-[#151515] h-fit py-2 text-lg rounded-full font-medium border  ${
        theme
          ? "border-[#181818]"
          : "text-[#f0f0f0] shadow-md shadow-[#00000029] border-[#fff0]"
      }  items-center w-fit`}
    >
      {children}
      <p className="text-sm max-[500px]:text-xs">{tech}</p>
    </div>
  );
}

export const techCards = [
  {
    tag: "React",
    card: <ReactCard />,
  },
  {
    tag: "Next.js",
    card: <NextCard />,
  },
  {
    tag: "Tailwind CSS",
    card: <TailwindCard />,
  },
  {
    tag: "TypeScript",
    card: <TypeScriptCard />,
  },
  {
    tag: "Figma",
    card: <FigmaCard />,
  },
  {
    tag: "NestJS",
    card: <NestCard />,
  },
  {
    tag: "CSS",
    card: <CSSCard />,
  },
  {
    tag: "Node.js",
    card: <NodeCard />,
  },
  {
    tag: "PostgreSQL",
    card: <PostgreSQLCard />,
  },
  {
    tag: "Prisma",
    card: <PrismaCard />,
  },
  {
    tag: "JavaScript",
    card: <JavaScriptCard />,
  },
  {
    tag: "HTML",
    card: <HTMLCard />,
  },
];

function ReactCard() {
  return (
    <TechCard tech="React">
      <ReactIcon />
    </TechCard>
  );
}

function FigmaCard() {
  return (
    <TechCard tech="Figma">
      <FigmaIcon />
    </TechCard>
  );
}

function NextCard() {
  return (
    <TechCard tech="Next.js">
      <NextjsIcon />
    </TechCard>
  );
}
function TailwindCard() {
  return (
    <TechCard tech="Tailwind CSS">
      <TailwindCSSIcon />
    </TechCard>
  );
}
function TypeScriptCard() {
  return (
    <TechCard tech="TypeScript">
      <TypeScriptIcon />
    </TechCard>
  );
}
function NestCard() {
  return (
    <TechCard tech="NestJS">
      <NestJSIcon />
    </TechCard>
  );
}
function NodeCard() {
  return (
    <TechCard tech="Node.js">
      <NodejsIcon />
    </TechCard>
  );
}
function PostgreSQLCard() {
  return (
    <TechCard tech="PostgreSQL">
      <PostgreSQLIcon />
    </TechCard>
  );
}
function PrismaCard() {
  return (
    <TechCard tech="Prisma">
      <PrismaIcon />
    </TechCard>
  );
}
function JavaScriptCard() {
  return (
    <TechCard tech="JavaScript">
      <JavaScriptIcon />
    </TechCard>
  );
}
function HTMLCard() {
  return (
    <TechCard tech="HTML">
      <HTML5Icon />
    </TechCard>
  );
}
function CSSCard() {
  return (
    <TechCard tech="CSS">
      <CSSIcon />
    </TechCard>
  );
}
