import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Caio Silva Marques Porto | Full Stack Developer",
  description:
    "Portfólio de Caio Silva Marques Porto, desenvolvedor full stack com experiência em .NET, C#, SQL Server, React, Next.js, Python e Flutter.",
  keywords: [
    "Caio Silva",
    "Full Stack Developer",
    "Software Engineer",
    ".NET",
    "C#",
    "SQL Server",
    "PostgreSQL",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "FastAPI",
    "Flutter",
  ],
  icons: {
    icon: ["/favicon.svg?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
