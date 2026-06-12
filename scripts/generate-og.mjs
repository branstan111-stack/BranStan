import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'og-default.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="55%" stop-color="#c4b5fd"/>
      <stop offset="100%" stop-color="#67e8f9"/>
    </linearGradient>
    <linearGradient id="brandSolid" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="55%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <radialGradient id="blueGlow" cx="0.18" cy="0.2" r="0.5">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="violetGlow" cx="0.85" cy="0.55" r="0.5">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cyanGlow" cx="0.5" cy="1" r="0.55">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
    </pattern>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="14"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="#050505"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#blueGlow)"/>
  <rect width="1200" height="630" fill="url(#violetGlow)"/>
  <rect width="1200" height="630" fill="url(#cyanGlow)"/>

  <g opacity="0.55" filter="url(#softGlow)">
    <circle cx="960" cy="180" r="120" fill="#8b5cf6" opacity="0.6"/>
    <circle cx="1060" cy="320" r="80" fill="#3b82f6" opacity="0.55"/>
    <circle cx="900" cy="430" r="70" fill="#06b6d4" opacity="0.5"/>
  </g>

  <g transform="translate(80, 80)">
    <rect x="0" y="0" width="56" height="56" rx="14" fill="url(#brandSolid)"/>
    <path d="M14 12h16a10 10 0 0 1 6.2 17.8A11 11 0 0 1 31 46H14z M22 21v7h7a3.5 3.5 0 0 0 0-7z M22 35v7h8a3.5 3.5 0 0 0 0-7z" fill="#050505"/>
    <text x="80" y="40" font-family="'Space Grotesk', 'Inter', Arial, sans-serif" font-size="32" font-weight="700" fill="#ffffff" letter-spacing="-0.5">BranStan</text>
  </g>

  <g transform="translate(80, 240)">
    <rect x="0" y="0" width="200" height="36" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <circle cx="20" cy="18" r="4" fill="#a78bfa"/>
    <text x="36" y="23" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="#d4d4d8" letter-spacing="2">THE FUTURE OF MARKETING</text>
  </g>

  <text x="80" y="370" font-family="'Space Grotesk', 'Inter', Arial, sans-serif" font-size="92" font-weight="700" fill="#ffffff" letter-spacing="-3">We Stan</text>
  <text x="80" y="465" font-family="'Space Grotesk', 'Inter', Arial, sans-serif" font-size="92" font-weight="700" fill="url(#brand)" letter-spacing="-3">Your Brand.</text>

  <text x="80" y="520" font-family="Arial, sans-serif" font-size="22" font-weight="400" fill="#a1a1aa" letter-spacing="0.2">Agentic AI Marketing Consultancy</text>

  <g transform="translate(80, 555)">
    <circle cx="6" cy="6" r="4" fill="#22c55e"/>
    <text x="20" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#71717a" letter-spacing="0.5">SIX SPECIALIST AGENTS</text>
    <text x="220" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#3f3f46">·</text>
    <text x="240" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#71717a" letter-spacing="0.5">ONE GROWTH SYSTEM</text>
    <text x="440" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#3f3f46">·</text>
    <text x="460" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#71717a" letter-spacing="0.5">BRAN-STAN.COM</text>
  </g>

  <g transform="translate(820, 100)" opacity="0.95">
    <rect x="0" y="0" width="300" height="380" rx="20" fill="rgba(14,14,16,0.7)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <g transform="translate(20, 20)">
      <circle cx="6" cy="6" r="5" fill="rgba(239,68,68,0.7)"/>
      <circle cx="22" cy="6" r="5" fill="rgba(234,179,8,0.7)"/>
      <circle cx="38" cy="6" r="5" fill="rgba(34,197,94,0.7)"/>
      <text x="58" y="10" font-family="'Courier New', monospace" font-size="10" fill="#71717a">branstan-core</text>
    </g>

    <g transform="translate(20, 60)">
      <rect width="260" height="46" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <text x="14" y="28" font-family="'Courier New', monospace" font-size="12" fill="#c4b5fd">Cultural Onion mapping</text>
      <text x="215" y="28" font-family="'Courier New', monospace" font-size="12" fill="#86efac">100%</text>
    </g>

    <g transform="translate(20, 116)">
      <rect width="260" height="46" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <text x="14" y="28" font-family="'Courier New', monospace" font-size="12" fill="#93c5fd">LLM citation audit</text>
      <text x="208" y="28" font-family="'Courier New', monospace" font-size="12" fill="#86efac">Active</text>
    </g>

    <g transform="translate(20, 172)">
      <rect width="260" height="46" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <text x="14" y="28" font-family="'Courier New', monospace" font-size="12" fill="#67e8f9">Signal ingestion</text>
      <text x="190" y="28" font-family="'Courier New', monospace" font-size="12" fill="#67e8f9">847k</text>
    </g>

    <g transform="translate(20, 228)">
      <rect width="260" height="46" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <text x="14" y="28" font-family="'Courier New', monospace" font-size="12" fill="#fcd34d">Category listening</text>
      <text x="220" y="28" font-family="'Courier New', monospace" font-size="12" fill="#fcd34d">Live</text>
    </g>

    <g transform="translate(20, 290)">
      <rect width="260" height="70" rx="12" fill="url(#brandSolid)" opacity="0.18" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
      <text x="14" y="24" font-family="Arial, sans-serif" font-size="10" font-weight="500" fill="#a1a1aa" letter-spacing="1.5">BRAND VISIBILITY TARGET</text>
      <text x="14" y="52" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff">Q3 lift: </text>
      <text x="85" y="52" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="url(#brand)">+40% secured</text>
    </g>
  </g>
</svg>`;

mkdirSync(dirname(OUT), { recursive: true });

const png = await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(OUT, png);

console.log(`OG image written to ${OUT} (${(png.length / 1024).toFixed(1)} KB)`);
