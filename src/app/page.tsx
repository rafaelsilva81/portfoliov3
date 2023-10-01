"use client";

import HeroPage from "@/components/organism/HeroPage";
import PageSlider from "@/components/organism/PageSlider";
import { TechPage } from "@/components/organism/TechPage";

import { useEffect, useMemo } from "react";
import { Element, scroller } from "react-scroll";

export default function Home() {
  const pageOrder = useMemo(() => ["hero", "tech", "exp", "proj"], []);

  const defaultScrollProps = useMemo(() => {
    return {
      duration: 1000,
      smooth: true,
      spy: true,
    };
  }, []);

  useEffect(() => {
    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentIndex = pageOrder.indexOf(scroller.getActiveLink());
        const nextIndex =
          e.deltaY > 0
            ? currentIndex + 1
            : currentIndex - 1 >= 0
            ? currentIndex - 1
            : 0;
        const nextElement = pageOrder[nextIndex];
        scroller.scrollTo(nextElement, defaultScrollProps);
      },
      {
        passive: false,
      }
    );

    // cleanup
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [defaultScrollProps, pageOrder]);

  return (
    <main>
      <PageSlider />

      <Element name="hero">
        <HeroPage />
      </Element>
      <Element name="tech">
        <TechPage />
      </Element>
      <Element name="exp">
        <div className="h-screen w-screen">TECHNOLOGIES</div>
      </Element>
      <Element name="proj">
        <div className="h-screen w-screen">PROJECTS</div>
      </Element>
    </main>
  );
}
