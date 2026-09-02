import React from 'react';
import SolutionsHero from './sections/SolutionsHero/SolutionsHero';
import BoatSolutions from './sections/BoatSolutions/BoatSolutions';
import AutomotiveSolutions from './sections/AutomotiveSolutions/AutomotiveSolutions';
import FRPSolutions from './sections/FRPSolutions/FRPSolutions';
import EngineeringSolutions from './sections/EngineeringSolutions/EngineeringSolutions';

export default function Solutions() {
  return (
    <div className="w-full flex flex-col bg-white overflow-hidden">
      <SolutionsHero />
      <BoatSolutions />
      <AutomotiveSolutions />
      <FRPSolutions />
      <EngineeringSolutions />
    </div>
  );
}
