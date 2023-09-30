"use client";

import PageSlider from "@/components/organisms/PageSlider";
import { useEffect, useMemo } from "react";
import { Element, scroller } from "react-scroll";

export default function Home() {
  const pageOrder = useMemo(
    () => ["hero", "about", "technologies", "projects"],
    []
  );

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
        <div className="h-screen w-screen bg-red-500">HERO</div>
      </Element>

      <div className="h-screen w-screen bg-green-500" id="about">
        ABOUT
      </div>

      <div className="h-screen w-screen bg-blue-500" id="technologies">
        TECHNOLOGIES
      </div>

      <div className="h-screen w-screen bg-yellow-500" id="projects">
        PROJECTS
      </div>
    </main>
  );
}
