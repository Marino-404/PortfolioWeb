import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Juan Marino",
  description: "Portfolio Website of Juan Marino, showcasing web development, design projects, and tech expertise.",
  robots: "index, follow",
  keywords: [
    "portfolio",
    "Juan Marino",
    "web development",
    "developer",
    "front-end",
    "UI/UX",
    "next.js",
    "react",
    "javascript",
    "web design",
    "programming",
  ],
  openGraph: {
    title: "Portfolio Juan Marino", 
    description:
      "Explore the portfolio of Juan Marino, a skilled web developer with expertise in front-end technologies and design.",
    url: "https://www.juanmarino.com",
    siteName: "Juan Marino Portfolio",
    images: [
      {
        url: "https://www.juanmarino.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Juan Marino Portfolio",
      },
    ],
    type: "website",
  },
};