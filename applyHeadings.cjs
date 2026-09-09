const fs = require('fs');
const path = require('path');

const mappings = [
  // HOME PAGE
  { file: 'src/pages/Home/sections/Hero/Hero.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Home/sections/CompanyIntro/CompanyIntro.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Home/sections/Solutions/Solutions.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/Home/sections/Industries/Industries.jsx', color: 'var(--color-gold)' },
  { file: 'src/pages/Home/sections/Capabilities/Capabilities.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Home/sections/WhyXenex/WhyXenex.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Home/sections/Manufacturing/Manufacturing.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/Home/sections/BoatShowcase/BoatShowcase.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Home/sections/QualityAssurance/QualityAssurance.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Home/sections/Leadership/Leadership.jsx', color: 'var(--color-gold)' },
  { file: 'src/pages/Home/sections/Gallery/Gallery.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Home/sections/FinalCTA/FinalCTA.jsx', color: 'var(--color-accent)' },

  // ABOUT PAGE
  { file: 'src/pages/About/sections/AboutHero/AboutHero.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/About/sections/Story/Story.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/About/sections/Experience/Experience.jsx', color: 'var(--color-gold)' },
  { file: 'src/pages/About/sections/IndiaSingapore/IndiaSingapore.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/About/sections/Leadership/Leadership.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/About/sections/Values/Values.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/About/sections/MissionVision/MissionVision.jsx', color: 'var(--color-gold)' },
  { file: 'src/pages/About/sections/ClosingCTA/ClosingCTA.jsx', color: 'var(--color-accent)' },

  // SOLUTIONS PAGE
  { file: 'src/pages/Solutions/sections/SolutionsHero/SolutionsHero.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Solutions/sections/BoatSolutions/BoatSolutions.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Solutions/sections/AutomotiveSolutions/AutomotiveSolutions.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/Solutions/sections/FRPSolutions/FRPSolutions.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Solutions/sections/EngineeringSolutions/EngineeringSolutions.jsx', color: 'var(--color-gold)' },

  // INDUSTRIES PAGE
  { file: 'src/pages/Industries/sections/IndustriesHero/IndustriesHero.jsx', color: 'var(--color-primary)' },

  // MANUFACTURING PAGE
  { file: 'src/pages/Manufacturing/sections/ManufacturingHero/ManufacturingHero.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Manufacturing/sections/Facility/Facility.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Manufacturing/sections/Process/Process.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/Manufacturing/sections/Quality/Quality.jsx', color: 'var(--color-gold)' },

  // CONTACT PAGE
  { file: 'src/pages/Contact/sections/ContactHero/ContactHero.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Contact/sections/ContactInfo/ContactInfo.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Contact/sections/ContactForm/ContactForm.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/Contact/sections/Location/Location.jsx', color: 'var(--color-gold)' }
];

function processFile(entry) {
  const filePath = path.join('/home/kiruba/kiruba/Code/navi/xenex', entry.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${entry.file}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Look for <h1 and <h2 and replace text-gray-900, text-[#111111], text-white etc with the accent color
  // A regex with a callback to process only inside h1/h2 tags
  content = content.replace(/<(h[12])\b([^>]*)>/g, (match, tag, attrs) => {
    // Only target the main dark/white text classes commonly used for headings
    let newAttrs = attrs.replace(/\btext-gray-900\b/g, `text-[${entry.color}]`)
                        .replace(/\btext-\[#111111\]\b/g, `text-[${entry.color}]`)
                        .replace(/\btext-\[#222222\]\b/g, `text-[${entry.color}]`)
                        .replace(/\btext-black\b/g, `text-[${entry.color}]`);
    return `<${tag}${newAttrs}>`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${entry.file}`);
}

mappings.forEach(processFile);
