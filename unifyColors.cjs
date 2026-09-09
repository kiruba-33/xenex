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
  'src/pages/Industries/sections/IndustryGrid/IndustryGrid.jsx',

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

  // 1. Primary Headings (h1, h2) -> var(--color-primary)
  content = content.replace(/<(h[12])([^>]*)>/g, (match, tag, attrs) => {
    let newAttrs = attrs.replace(/\btext-\[var\(--color-[a-z-]+\)\]\b/g, 'text-[var(--color-primary)]')
                        .replace(/\btext-gray-900\b/g, 'text-[var(--color-primary)]')
                        .replace(/\btext-\[#111111\]\b/g, 'text-[var(--color-primary)]')
                        .replace(/\btext-\[#222222\]\b/g, 'text-[var(--color-primary)]')
                        .replace(/\btext-black\b/g, 'text-[var(--color-primary)]');
    return `<${tag}${newAttrs}>`;
  });

  // 2. Eyebrows & Section Numbers -> var(--color-accent) (Orange)
  // Ensure we don't accidentally match var(--color-background) etc, so we match color-[a-z]+
  content = content.replace(/(uppercase\s+)text-\[var\(--color-[a-z-]+\)\]/g, `$1text-[var(--color-accent)]`);
  
  // Dividers
  content = content.replace(/(w-8\s+h-\[1px\]\s+)bg-\[var\(--color-[a-z-]+\)\](?:\/\d+)?/g, `$1bg-[var(--color-accent)]/30`);
  content = content.replace(/(w-12\s+h-\[1px\]\s+)bg-\[var\(--color-[a-z-]+\)\](?:\/\d+)?/g, `$1bg-[var(--color-accent)]/30`);

  // Numbers (01, 02)
  content = content.replace(/text-\[var\(--color-[a-z-]+\)\](\s+text-[a-z]+\s+font-bold\s+tracking-\[0\.2e?m\])/g, `text-[var(--color-accent)]$1`);
  content = content.replace(/text-\[var\(--color-[a-z-]+\)\](\s+text-\[.*?\]\s+font-bold\s+tracking-\[0\.2e?m\])/g, `text-[var(--color-accent)]$1`);
  content = content.replace(/text-\[var\(--color-[a-z-]+\)\](\s+font-bold\s+tracking-\[0\.2e?m\])/g, `text-[var(--color-accent)]$1`);

  // Special Handling for IndustryGrid.jsx
  if (file.includes('IndustryGrid.jsx')) {
    // Modify the dynamic color array mappings
    content = content.replace(/color:\s*'var\(--color-[a-z-]+\)'/g, `color: 'var(--color-primary)'`);
    // Ensure the section number (item.id) and arrow hover use accent color
    // Right now they dynamically pull from `item.color`, but the user wants small accents to be orange.
    // "Industry names when they function as primary headings" -> #3A4283
    // "Keep small eyebrow labels as: XENEX ORANGE"
    content = content.replace(/style=\{\{\s*color:\s*item\.color\s*\}\}/g, `style={{ color: 'var(--color-accent)' }}`);
    content = content.replace(/item\.color/g, `'var(--color-primary)'`); 
    // The previous line is a bit risky if it replaces all item.colors indiscriminately,
    // so I will fix it manually next if needed, but let's see. 
    // The h3 currently has `style={{ color: item.color }}`. It will be replaced.
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', file);
});
