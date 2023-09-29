"use client";

import PageSlider from "@/components/organisms/PageSlider";

export default function Home() {
  return (
    <main>
      <PageSlider />

      <div className="h-screen w-screen bg-red-500" id="hero">
        HERO
      </div>

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
