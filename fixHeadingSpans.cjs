const fs = require('fs');
const path = require('path');

const mappings = [
  'src/pages/Home/sections/Hero/Hero.jsx',
  'src/pages/Home/sections/CompanyIntro/CompanyIntro.jsx',
  'src/pages/Home/sections/Solutions/Solutions.jsx',
  'src/pages/Home/sections/Industries/Industries.jsx',
  'src/pages/Home/sections/Capabilities/Capabilities.jsx',
  'src/pages/Home/sections/WhyXenex/WhyXenex.jsx',
  'src/pages/Home/sections/Manufacturing/Manufacturing.jsx',
  'src/pages/Home/sections/BoatShowcase/BoatShowcase.jsx',
  'src/pages/Home/sections/QualityAssurance/QualityAssurance.jsx',
  'src/pages/Home/sections/Leadership/Leadership.jsx',
  'src/pages/Home/sections/Gallery/Gallery.jsx',
  'src/pages/Home/sections/FinalCTA/FinalCTA.jsx',

  'src/pages/About/sections/AboutHero/AboutHero.jsx',
  'src/pages/About/sections/Story/Story.jsx',
  'src/pages/About/sections/Experience/Experience.jsx',
  'src/pages/About/sections/IndiaSingapore/IndiaSingapore.jsx',
  'src/pages/About/sections/Leadership/Leadership.jsx',
  'src/pages/About/sections/Values/Values.jsx',
  'src/pages/About/sections/MissionVision/MissionVision.jsx',
  'src/pages/About/sections/ClosingCTA/ClosingCTA.jsx',

  'src/pages/Solutions/sections/SolutionsHero/SolutionsHero.jsx',
  'src/pages/Solutions/sections/BoatSolutions/BoatSolutions.jsx',
  'src/pages/Solutions/sections/AutomotiveSolutions/AutomotiveSolutions.jsx',
  'src/pages/Solutions/sections/FRPSolutions/FRPSolutions.jsx',
  'src/pages/Solutions/sections/EngineeringSolutions/EngineeringSolutions.jsx',

  'src/pages/Industries/sections/IndustriesHero/IndustriesHero.jsx',

  'src/pages/Manufacturing/sections/ManufacturingHero/ManufacturingHero.jsx',
  'src/pages/Manufacturing/sections/Facility/Facility.jsx',
  'src/pages/Manufacturing/sections/Process/Process.jsx',
  'src/pages/Manufacturing/sections/Quality/Quality.jsx',

  'src/pages/Contact/sections/ContactHero/ContactHero.jsx',
  'src/pages/Contact/sections/ContactInfo/ContactInfo.jsx',
  'src/pages/Contact/sections/ContactForm/ContactForm.jsx',
  'src/pages/Contact/sections/Location/Location.jsx'
];

mappings.forEach(file => {
  const filePath = path.join('/home/kiruba/kiruba/Code/navi/xenex', file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/<(h[12])[^>]*>[\s\S]*?<\/\1>/g, (headingBlock) => {
    return headingBlock.replace(/\btext-gray-400\b/g, '')
                       .replace(/\btext-gray-500\b/g, '')
                       .replace(/\btext-gray-600\b/g, '')
                       .replace(/\btext-\[#777777\]\b/g, '')
                       .replace(/\btext-\[#666666\]\b/g, '')
                       .replace(/\btext-\[#444444\]\b/g, '')
                       .replace(/\btext-\[#999999\]\b/g, '');
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', file);
});
