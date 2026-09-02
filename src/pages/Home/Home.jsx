import React from 'react';

// Section Imports
import Hero from './sections/Hero/Hero';
import CompanyIntro from './sections/CompanyIntro/CompanyIntro';
import Solutions from './sections/Solutions/Solutions';
import Industries from './sections/Industries/Industries';
import Capabilities from './sections/Capabilities/Capabilities';
import WhyXenex from './sections/WhyXenex/WhyXenex';
import Manufacturing from './sections/Manufacturing/Manufacturing';
import BoatShowcase from './sections/BoatShowcase/BoatShowcase';
import QualityAssurance from './sections/QualityAssurance/QualityAssurance';
import Leadership from './sections/Leadership/Leadership';
import Gallery from './sections/Gallery/Gallery';
import FinalCTA from './sections/FinalCTA/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Solutions />
      <Industries />
      <Capabilities />
      <WhyXenex />
      <Manufacturing />
      <BoatShowcase />
      <QualityAssurance />
      <Leadership />
      <Gallery />
      <FinalCTA />
    </>
  );
}