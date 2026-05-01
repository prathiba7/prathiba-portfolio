import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prathiba M | Frontend Engineer",
  description: "Frontend Engineer specializing in React, TypeScript & Enterprise Cloud Products. 4+ years at IBM building scalable UIs.",
  keywords: ["Frontend Engineer", "React", "TypeScript", "IBM", "Full Stack Developer"],
  openGraph: {
    title: "Prathiba M | Frontend Engineer",
    description: "React + TypeScript Engineer with 4+ years building enterprise cloud products at IBM.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
