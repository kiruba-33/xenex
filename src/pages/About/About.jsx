import React from 'react';
import AboutHero from "./sections/AboutHero/AboutHero";
import Story from "./sections/Story/Story";
import Experience from "./sections/Experience/Experience";
import IndiaSingapore from "./sections/IndiaSingapore/IndiaSingapore";
import Leadership from "./sections/Leadership/Leadership";
import Values from "./sections/Values/Values";
import MissionVision from "./sections/MissionVision/MissionVision";
import ClosingCTA from "./sections/ClosingCTA/ClosingCTA";

export default function About() {
  return (
    <div className="w-full flex flex-col bg-white overflow-hidden">
      <AboutHero />
      <Story />
      <Experience />
      <IndiaSingapore />
      <Leadership />
      <Values />
      <MissionVision />
      <ClosingCTA />
    </div>
  );
}
