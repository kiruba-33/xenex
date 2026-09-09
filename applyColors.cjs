const fs = require('fs');
const path = require('path');

const mappings = [
  // HOME PAGE
  { file: 'src/pages/Home/sections/Solutions/Solutions.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/Home/sections/Industries/Industries.jsx', color: 'var(--color-gold)' },
  { file: 'src/pages/Home/sections/Capabilities/Capabilities.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Home/sections/WhyXenex/WhyXenex.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Home/sections/Manufacturing/Manufacturing.jsx', color: 'var(--color-accent)' },
  { file: 'src/pages/Home/sections/BoatShowcase/BoatShowcase.jsx', color: 'var(--color-secondary)' },
  { file: 'src/pages/Home/sections/QualityAssurance/QualityAssurance.jsx', color: 'var(--color-primary)' },
  { file: 'src/pages/Home/sections/Leadership/Leadership.jsx', color: 'var(--color-gold)' },
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
  // IndustryGrid is handled manually later

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

  // Eyebrow text
  // Match `uppercase text-gray-500`, `uppercase text-[#666666]`, etc.
  content = content.replace(/(uppercase\s+)text-(?:gray-\d+|\[#\w+\])/g, `$1text-[${entry.color}]`);
  
  // Eyebrow dividers
  // w-8 h-[1px] bg-gray-200, w-12 h-[1px] bg-[#111111]/20, etc.
  content = content.replace(/(w-8\s+h-\[1px\]\s+)bg-(?:gray-\d+|\[#\w+\](?:\/\d+)?)/g, `$1bg-[${entry.color}]/30`);
  content = content.replace(/(w-12\s+h-\[1px\]\s+)bg-(?:gray-\d+|\[#\w+\](?:\/\d+)?)/g, `$1bg-[${entry.color}]/30`);

  // Section numbers (01, 02)
  content = content.replace(/text-(?:gray-\d+|\[#\w+\])(\s+text-[a-z]+\s+font-bold\s+tracking-\[0\.2e?m\])/g, `text-[${entry.color}]$1`);
  content = content.replace(/text-(?:gray-\d+|\[#\w+\])(\s+text-\[.*?\]\s+font-bold\s+tracking-\[0\.2e?m\])/g, `text-[${entry.color}]$1`);
  content = content.replace(/text-(?:gray-\d+|\[#\w+\])(\s+font-bold\s+tracking-\[0\.2e?m\])/g, `text-[${entry.color}]$1`);

  // Secondary CTA Buttons -> Deep Indigo var(--color-primary) unless it's a Final/Closing CTA (then Orange)
  const isCtaSection = entry.file.includes('FinalCTA') || entry.file.includes('ClosingCTA') || entry.file.includes('ContactForm');
  const btnColor = isCtaSection ? 'var(--color-accent)' : 'var(--color-primary)';
  
  content = content.replace(/bg-\[#111111\](\s+rounded-full\s+hover:)bg-\[#333333\](\s+hover:-translate-y-0\.5)/g, `bg-[${btnColor}]$1brightness-90`);
  content = content.replace(/bg-gray-900(\s+rounded-full\s+hover:)bg-black/g, `bg-[${btnColor}]$1brightness-90`);
  content = content.replace(/bg-\[#111111\](\s+rounded-full\s+hover:bg-\[#333333\])/g, `bg-[${btnColor}] rounded-full hover:brightness-90`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${entry.file}`);
}

mappings.forEach(processFile);
