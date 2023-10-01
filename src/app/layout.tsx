import clsx from "clsx";
import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "../globals.css";

const raj = Rajdhani({
  weight: ["300", "500", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

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
      <body
        className={clsx(raj.className, "bg-zinc-900 text-white leading-none")}
      >
        {children}
      </body>
    </html>
  );
}
