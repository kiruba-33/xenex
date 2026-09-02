import React from 'react';
import ManufacturingHero from "./sections/ManufacturingHero/ManufacturingHero";
import Facility from "./sections/Facility/Facility";
import Process from "./sections/Process/Process";
import Quality from "./sections/Quality/Quality";

const Manufacturing = () => {
  return (
    <>
      <ManufacturingHero />
      <Facility />
      <Process />
      <Quality />
    </>
  );
};

export default Manufacturing;
