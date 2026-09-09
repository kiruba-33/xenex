const fs = require('fs');
const path = require('path');

const mappings = [
  'src/pages/Manufacturing/sections/ManufacturingHero/ManufacturingHero.jsx',
  'src/pages/Manufacturing/sections/Facility/Facility.jsx',
  'src/pages/Manufacturing/sections/Process/Process.jsx',
  'src/pages/Manufacturing/sections/Quality/Quality.jsx'
];

mappings.forEach(file => {
  const filePath = path.join('/home/kiruba/kiruba/Code/navi/xenex', file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Find <h1...> and <h2...> and replace any text color class with text-[var(--color-primary)]
  content = content.replace(/<(h[12])([^>]*)>/g, (match, tag, attrs) => {
    // Replace text-[var(--color-something)] or other text colors with text-[var(--color-primary)]
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
