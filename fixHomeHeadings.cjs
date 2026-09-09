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
];

mappings.forEach(file => {
  const filePath = path.join('/home/kiruba/kiruba/Code/navi/xenex', file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Find <h1...> and <h2...> and replace any text color class with text-[var(--color-primary)]
  content = content.replace(/<(h[12])([^>]*)>/g, (match, tag, attrs) => {
    // Remove \b to avoid regex boundary failure on special characters
    let newAttrs = attrs.replace(/text-\[var\(--color-[a-zA-Z-]+\)\]/g, 'text-[var(--color-primary)]')
                        .replace(/text-gray-900/g, 'text-[var(--color-primary)]')
                        .replace(/text-\[#111111\]/g, 'text-[var(--color-primary)]')
                        .replace(/text-\[#222222\]/g, 'text-[var(--color-primary)]')
                        .replace(/text-black/g, 'text-[var(--color-primary)]');
    return `<${tag}${newAttrs}>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', file);
});
