import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Galdino da Silva",
  description:
    "Rafael Galdino da Silva, Fullstack Developer, NodeJS, ReactJS, NextJS, Typescript and more",
  viewport: "width=device-width, initial-scale=1",
  authors: [
    {
      name: "Rafael Galdino da Silva",
      url: "https://github.com/rafaelsilva81",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
