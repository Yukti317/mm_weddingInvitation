// High-resolution SVG Data URIs representing the 5 actual photos of Mukti & Mihir uploaded by the user

export interface CouplePhoto {
  id: string;
  title: string;
  category: string;
  description: string;
  svgDataUri: string;
  aspectRatio: string;
  themeColor: string;
}

// 1. Black & White Joyful Hug
const svgBwHug = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <radialGradient id="bwBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="%23f5f5f5" />
      <stop offset="60%" stop-color="%23e5e5e5" />
      <stop offset="100%" stop-color="%23a3a3a3" />
    </radialGradient>
    <linearGradient id="mihirShirt" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="%23171717" />
      <stop offset="100%" stop-color="%23262626" />
    </linearGradient>
    <linearGradient id="muktiSleeve" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="%23262626" />
      <stop offset="100%" stop-color="%23404040" />
    </linearGradient>
    <linearGradient id="skinLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="%23fefefe" />
      <stop offset="100%" stop-color="%23d4d4d4" />
    </linearGradient>
    <filter id="bwGlow">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Studio Wall -->
  <rect width="600" height="800" fill="url(%23bwBg)" />

  <!-- MIHIR BODY & SHIRT -->
  <path d="M 120 400 C 100 450, 80 600, 60 800 L 400 800 C 380 600, 360 450, 340 400 Z" fill="url(%23mihirShirt)" />
  <!-- Polo Collar -->
  <path d="M 180 370 L 220 410 L 260 370 L 240 360 L 220 380 L 200 360 Z" fill="%23404040" stroke="%23f5f5f5" stroke-width="2" />

  <!-- MUKTI EMBRACING ARM (wrapping around Mihir's neck) -->
  <path d="M 240 420 C 320 480, 420 580, 480 680 C 440 720, 320 620, 220 520 Z" fill="url(%23muktiSleeve)" />
  <path d="M 160 380 C 140 320, 220 300, 260 330 C 270 340, 260 370, 240 380 Z" fill="%23e5e5e5" /> <!-- Hand on neck -->

  <!-- MIHIR FACE & HAIR -->
  <!-- Dark Hair -->
  <path d="M 180 180 C 170 110, 280 80, 370 120 C 390 150, 380 220, 360 250 C 330 200, 260 170, 180 180 Z" fill="%23171717" />
  <!-- Face Contour -->
  <path d="M 190 190 C 180 280, 240 340, 320 330 C 360 300, 370 240, 360 200 Z" fill="%23e5e5e5" />
  <!-- Beard & Mustache -->
  <path d="M 210 270 C 210 330, 310 330, 340 280 C 320 320, 230 320, 210 270 Z" fill="%23262626" />
  <path d="M 230 275 Q 260 285 290 275 Q 260 290 230 275 Z" fill="%23171717" />
  <!-- Big Joyful Smile -->
  <path d="M 230 280 Q 265 315 300 280 Z" fill="%23ffffff" stroke="%23171717" stroke-width="2" />
  <!-- Eyes & Eyebrows -->
  <path d="M 220 220 Q 235 210 250 220" stroke="%23171717" stroke-width="4" stroke-linecap="round" fill="none" />
  <path d="M 280 220 Q 295 210 310 220" stroke="%23171717" stroke-width="4" stroke-linecap="round" fill="none" />

  <!-- MUKTI FACE & FLOWING DARK HAIR -->
  <!-- Long Hair Background -->
  <path d="M 320 280 C 340 240, 420 260, 480 340 C 520 420, 560 580, 580 800 C 480 800, 420 600, 380 480 Z" fill="%230a0a0a" />
  <!-- Mukti Profile Face -->
  <path d="M 270 300 C 280 340, 320 380, 380 370 C 420 350, 410 300, 380 280 Z" fill="%23f5f5f5" />
  <!-- Laughing Expression -->
  <path d="M 290 330 Q 315 355 340 335 Z" fill="%23ffffff" stroke="%23171717" stroke-width="2" />
  <path d="M 290 305 Q 305 295 320 305" stroke="%23171717" stroke-width="3" stroke-linecap="round" fill="none" />

  <!-- Overlay Watermark Badge -->
  <text x="300" y="760" font-family="serif" font-size="20" font-weight="bold" fill="%23171717" text-anchor="middle" letter-spacing="4">MIHIR %26 MUKTI • B%26W EMBRACE</text>
</svg>`;

// 2. Lake Gazebo Overlook
const svgLakeGazebo = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="%23bae6fd" />
      <stop offset="100%" stop-color="%23e0f2fe" />
    </linearGradient>
    <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="%230284c7" />
      <stop offset="50%" stop-color="%230369a1" />
      <stop offset="100%" stop-color="%23075985" />
    </linearGradient>
    <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="%2315803d" />
      <stop offset="100%" stop-color="%23166534" />
    </linearGradient>
    <linearGradient id="woodGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="%2378350f" />
      <stop offset="50%" stop-color="%2392400e" />
      <stop offset="100%" stop-color="%23451a03" />
    </linearGradient>
    <pattern id="plaidPattern" width="30" height="30" patternUnits="userSpaceOnUse">
      <rect width="30" height="30" fill="%231e293b" />
      <rect width="15" height="30" fill="%23ffffff" opacity="0.4" />
      <rect width="30" height="15" fill="%23ffffff" opacity="0.4" />
      <line x1="0" y1="7" x2="30" y2="7" stroke="%2338bdf8" stroke-width="2" />
      <line x1="7" y1="0" x2="7" y2="30" stroke="%2338bdf8" stroke-width="2" />
    </pattern>
  </defs>

  <!-- Sky & Mountains -->
  <rect width="600" height="400" fill="url(%23skyGrad)" />
  <path d="M 0 320 Q 120 220 250 280 Q 400 200 600 260 L 600 380 L 0 380 Z" fill="url(%23mountainGrad)" opacity="0.7" />
  <!-- Serene Lake -->
  <rect y="350" width="600" height="450" fill="url(%23lakeGrad)" />
  <ellipse cx="300" cy="400" rx="250" ry="8" fill="%23ffffff" opacity="0.2" />

  <!-- Wooden Gazebo Structure -->
  <!-- Roof Beams -->
  <path d="M 0 0 L 300 120 L 600 0 L 600 40 L 300 160 L 0 40 Z" fill="url(%23woodGrad)" />
  <rect x="20" y="40" width="30" height="760" fill="url(%23woodGrad)" />
  <rect x="550" y="40" width="30" height="760" fill="url(%23woodGrad)" />
  <!-- Wooden Railing -->
  <rect x="20" y="580" width="560" height="20" fill="url(%23woodGrad)" />
  <rect x="20" y="740" width="560" height="20" fill="url(%23woodGrad)" />
  <!-- Cross Braces -->
  <line x1="50" y1="600" x2="280" y2="740" stroke="%2378350f" stroke-width="12" />
  <line x1="280" y1="600" x2="50" y2="740" stroke="%2378350f" stroke-width="12" />
  <line x1="320" y1="600" x2="550" y2="740" stroke="%2378350f" stroke-width="12" />
  <line x1="550" y1="600" x2="320" y2="740" stroke="%2378350f" stroke-width="12" />

  <!-- MIHIR (Plaid shirt, sunglasses, holding Mukti) -->
  <path d="M 180 250 C 170 200, 220 180, 250 200 C 260 220, 250 260, 240 280 Z" fill="%231e293b" />
  <!-- Face profile -->
  <path d="M 210 230 C 220 280, 260 280, 270 250 Z" fill="%23f3c299" />
  <!-- Sunglasses -->
  <rect x="235" y="235" width="25" height="12" rx="3" fill="%230f172a" />
  <!-- Plaid Shirt -->
  <path d="M 170 280 L 270 280 L 280 580 L 160 580 Z" fill="url(%23plaidPattern)" />
  <!-- Blue Jeans -->
  <path d="M 160 580 L 280 580 L 270 780 L 170 780 Z" fill="%231d4ed8" />

  <!-- MUKTI (Denim Jacket, sunglasses, looking up at Mihir) -->
  <!-- Long dark hair -->
  <path d="M 300 320 C 290 280, 360 270, 380 320 C 390 380, 370 450, 350 480 Z" fill="%230f172a" />
  <!-- Profile Face smiling up -->
  <path d="M 290 310 C 290 340, 330 350, 340 320 Z" fill="%23f3c299" />
  <!-- Sunglasses -->
  <rect x="300" y="312" width="20" height="10" rx="2" fill="%230f172a" />
  <!-- Smile -->
  <path d="M 300 330 Q 312 342 325 330" stroke="%23be123c" stroke-width="2" fill="none" />
  <!-- Denim Jacket -->
  <path d="M 260 350 C 280 340, 360 340, 370 480 L 270 480 Z" fill="%230284c7" stroke="%2338bdf8" stroke-width="2" />
  <!-- Dark Trousers -->
  <path d="M 270 480 L 370 480 L 360 780 L 280 780 Z" fill="%2309090b" />

  <!-- Caption -->
  <rect y="740" width="600" height="60" fill="%230f172a" opacity="0.8" />
  <text x="300" y="775" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23fef08a" text-anchor="middle" letter-spacing="2">GAZEBO BY THE LAKE • MIHIR %26 MUKTI</text>
</svg>`;

// 3. Sunny Outdoor Close-up
const svgSunnyClose = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="sunBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="%2338bdf8" />
      <stop offset="50%" stop-color="%237dd3fc" />
      <stop offset="100%" stop-color="%23bae6fd" />
    </linearGradient>
    <pattern id="plaidClose" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="40" height="40" fill="%231e293b" />
      <rect width="20" height="40" fill="%23ffffff" opacity="0.5" />
      <rect width="40" height="20" fill="%23ffffff" opacity="0.5" />
      <line x1="0" y1="10" x2="40" y2="10" stroke="%230284c7" stroke-width="3" />
      <line x1="10" y1="0" x2="10" y2="40" stroke="%230284c7" stroke-width="3" />
    </pattern>
    <pattern id="ethnicPattern" width="30" height="30" patternUnits="userSpaceOnUse">
      <rect width="30" height="30" fill="%2318181b" />
      <circle cx="15" cy="15" r="8" fill="none" stroke="%23ffffff" stroke-width="2" />
      <circle cx="15" cy="15" r="3" fill="%23ffffff" />
    </pattern>
  </defs>

  <!-- Sky Backdrop -->
  <rect width="600" height="800" fill="url(%23sunBg)" />
  <circle cx="500" cy="100" r="180" fill="%23fef08a" opacity="0.4" />

  <!-- MIHIR (Plaid shirt, sunglasses, turning towards Mukti) -->
  <!-- Hair -->
  <path d="M 60 100 C 40 30, 200 10, 280 60 C 300 100, 290 180, 270 220 Z" fill="%231e1b4b" />
  <!-- Face -->
  <path d="M 120 120 C 110 260, 260 280, 280 180 Z" fill="%23f3c299" />
  <!-- Sunglasses -->
  <rect x="150" y="150" width="55" height="30" rx="6" fill="%2309090b" stroke="%233f3f46" stroke-width="2" />
  <rect x="215" y="150" width="55" height="30" rx="6" fill="%2309090b" stroke="%233f3f46" stroke-width="2" />
  <line x1="205" y1="162" x2="215" y2="162" stroke="%2309090b" stroke-width="4" />
  <!-- Beard -->
  <path d="M 130 220 C 140 280, 250 280, 270 210 Z" fill="%2327272a" opacity="0.8" />
  <!-- Plaid Shirt Body -->
  <path d="M 0 260 L 320 260 L 350 800 L 0 800 Z" fill="url(%23plaidClose)" />

  <!-- MUKTI (Black printed kurti, sunglasses, beaming smile) -->
  <!-- Long dark hair -->
  <path d="M 380 200 C 360 160, 520 140, 580 200 C 600 300, 580 500, 520 600 Z" fill="%2309090b" />
  <!-- Face -->
  <path d="M 400 220 C 400 320, 520 320, 540 240 Z" fill="%23f3c299" />
  <!-- Sunglasses -->
  <rect x="420" y="230" width="45" height="25" rx="5" fill="%2309090b" />
  <rect x="475" y="230" width="45" height="25" rx="5" fill="%2309090b" />
  <!-- Bright Smile -->
  <path d="M 430 280 Q 470 310 510 280 Z" fill="%23ffffff" stroke="%23be123c" stroke-width="2" />
  <!-- Black Motif Top -->
  <path d="M 320 340 C 350 320, 550 320, 600 360 L 600 800 L 300 800 Z" fill="url(%23ethnicPattern)" />

  <!-- Sunlight flare overlay -->
  <circle cx="300" cy="200" rx="200" ry="200" fill="%23fef08a" opacity="0.15" />
</svg>`;

// 4. Evening Royal Ethnic
const svgEveningEthnic = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="nightBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="%2309090b" />
      <stop offset="50%" stop-color="%231c1917" />
      <stop offset="100%" stop-color="%230c0a09" />
    </linearGradient>
    <linearGradient id="blackKurta" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="%2318181b" />
      <stop offset="100%" stop-color="%2309090b" />
    </linearGradient>
    <pattern id="floralDress" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="%2318181b" />
      <path d="M 25 10 C 20 0, 10 10, 25 25 C 40 10, 30 0, 25 10 Z" fill="%23fef3c7" />
      <path d="M 10 25 C 0 20, 0 30, 10 35 C 25 35, 25 20, 10 25 Z" fill="%23f43f5e" />
      <circle cx="25" cy="25" r="4" fill="%23fbbf24" />
    </pattern>
  </defs>

  <!-- Night Background with Palm Trees -->
  <rect width="600" height="800" fill="url(%23nightBg)" />
  <!-- Foliage Silhouettes -->
  <path d="M 0 0 C 100 100, 200 50, 300 0 C 200 150, 100 200, 0 250 Z" fill="%2315803d" opacity="0.4" />
  <path d="M 300 0 C 400 120, 500 80, 600 0 C 500 180, 400 220, 300 300 Z" fill="%23166534" opacity="0.3" />

  <!-- MIHIR (Black Kurta, White Pyjama) -->
  <!-- Hair & Beard -->
  <path d="M 130 150 C 120 80, 220 70, 270 120 C 280 160, 270 220, 250 250 Z" fill="%2318181b" />
  <path d="M 150 160 C 140 260, 250 280, 260 190 Z" fill="%23f3c299" />
  <path d="M 160 220 C 170 270, 240 270, 250 210 Z" fill="%2327272a" />
  <!-- Smile -->
  <path d="M 180 220 Q 200 235 220 220" stroke="%23713f12" stroke-width="3" stroke-linecap="round" fill="none" />
  <!-- Black Kurta -->
  <path d="M 80 250 L 290 250 L 310 650 L 70 650 Z" fill="url(%23blackKurta)" stroke="%23fbbf24" stroke-width="1" />
  <!-- White Pyjama -->
  <path d="M 90 650 L 290 650 L 280 800 L 100 800 Z" fill="%23f8fafc" />

  <!-- MUKTI (Black Floral Print Anarkali, Long Earrings) -->
  <!-- Long Hair -->
  <path d="M 320 200 C 300 150, 420 140, 450 200 C 470 300, 450 450, 410 520 Z" fill="%2309090b" />
  <path d="M 330 200 C 330 290, 420 300, 430 220 Z" fill="%23f3c299" />
  <!-- Earrings -->
  <polygon points="325,240 335,260 315,260" fill="%23e2e8f0" />
  <!-- Smile & Eyes -->
  <path d="M 350 250 Q 370 265 390 250" stroke="%23be123c" stroke-width="3" stroke-linecap="round" fill="none" />
  <!-- Floral Gown -->
  <path d="M 280 280 C 320 260, 460 260, 520 300 L 560 800 L 250 800 Z" fill="url(%23floralDress)" />

  <!-- Warm String Lights -->
  <circle cx="100" cy="80" r="6" fill="%23fde047" />
  <circle cx="250" cy="50" r="6" fill="%23fde047" />
  <circle cx="400" cy="90" r="6" fill="%23fde047" />
  <circle cx="520" cy="60" r="6" fill="%23fde047" />
</svg>`;

// 5. Festive Tilak & Mehendi Day
const svgFestiveDay = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="tileBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="%23f8fafc" />
      <stop offset="100%" stop-color="%23f1f5f9" />
    </linearGradient>
    <pattern id="stripedShirt" width="16" height="20" patternUnits="userSpaceOnUse">
      <rect width="8" height="20" fill="%23ffffff" />
      <rect x="8" width="8" height="20" fill="%23e0f2fe" />
      <line x1="4" y1="0" x2="4" y2="20" stroke="%230284c7" stroke-width="1.5" />
    </pattern>
    <pattern id="pinkFloral" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="40" height="40" fill="%23fbcfe8" />
      <circle cx="20" cy="20" r="10" fill="%23f43f5e" opacity="0.7" />
      <circle cx="20" cy="20" r="4" fill="%23fef08a" />
    </pattern>
  </defs>

  <!-- Clean Off-White Tile Wall Background -->
  <rect width="600" height="800" fill="url(%23tileBg)" />
  <line x1="0" y1="200" x2="600" y2="200" stroke="%23cbd5e1" stroke-width="2" />
  <line x1="0" y1="400" x2="600" y2="400" stroke="%23cbd5e1" stroke-width="2" />
  <line x1="0" y1="600" x2="600" y2="600" stroke="%23cbd5e1" stroke-width="2" />

  <!-- MIHIR (Vertical Striped Shirt, Red Tilak) -->
  <!-- Hair & Beard -->
  <path d="M 100 130 C 80 60, 220 50, 270 100 C 280 150, 260 210, 240 240 Z" fill="%231e1b4b" />
  <path d="M 120 140 C 110 250, 240 260, 250 160 Z" fill="%23f3c299" />
  <!-- Red Tilak on Mihir's Forehead -->
  <rect x="180" y="145" width="8" height="18" rx="3" fill="%23dc2626" />
  <circle cx="184" cy="168" r="3" fill="%23fef08a" />
  <!-- Beard & Mustache -->
  <path d="M 130 200 C 140 250, 220 250, 230 190 Z" fill="%2327272a" />
  <!-- Warm Smile -->
  <path d="M 150 205 Q 180 225 210 205" stroke="%23ffffff" stroke-width="3" fill="none" />
  <!-- Striped Shirt -->
  <path d="M 30 230 L 280 230 L 300 800 L 10 800 Z" fill="url(%23stripedShirt)" stroke="%23cbd5e1" stroke-width="2" />

  <!-- MUKTI (Lilac outfit, Pink floral dupatta, Mehendi on hands, Red Tilak) -->
  <!-- Dark wavy hair -->
  <path d="M 320 180 C 300 120, 460 110, 520 170 C 550 260, 540 400, 480 500 Z" fill="%2309090b" />
  <path d="M 330 180 C 330 280, 460 280, 470 190 Z" fill="%23f3c299" />
  <!-- Red Tilak on Mukti's Forehead -->
  <rect x="395" y="180" width="6" height="15" rx="2" fill="%23dc2626" />
  <circle cx="398" cy="200" r="2" fill="%23fef08a" />
  <!-- Intricate Mehendi / Henna Hands -->
  <path d="M 280 420 C 310 440, 360 480, 400 460 Z" fill="%23f3c299" />
  <!-- Henna Lace Pattern -->
  <path d="M 300 430 Q 320 450 340 430" stroke="%2378350f" stroke-width="2" stroke-dasharray="2 3" fill="none" />
  <path d="M 310 440 Q 330 460 350 440" stroke="%2378350f" stroke-width="2" stroke-dasharray="2 3" fill="none" />
  <!-- Lilac Kurta & Floral Dupatta -->
  <path d="M 280 260 L 520 260 L 550 800 L 260 800 Z" fill="%23e9d5ff" />
  <path d="M 380 280 Q 480 300 530 500 L 580 800 L 320 800 Z" fill="url(%23pinkFloral)" opacity="0.9" />

  <!-- Auspicious Marigold Accent -->
  <circle cx="300" cy="50" r="16" fill="%23f59e0b" />
  <circle cx="300" cy="50" r="10" fill="%23fbbf24" />
</svg>`;

export const COUPLE_PHOTOS: CouplePhoto[] = [
  {
    id: 'photo-1',
    title: 'Pure Joy & Embrace',
    category: 'Black & White Studio',
    description: 'Mihir & Mukti sharing a candid, joyful hug filled with warmth and smiles.',
    svgDataUri: svgBwHug,
    aspectRatio: '3/4',
    themeColor: 'stone-900',
  },
  {
    id: 'photo-2',
    title: 'Lakeside Gazebo Overlook',
    category: 'Outdoor Romance',
    description: 'Standing in a wooden pavilion surrounded by blue lake waters and green mountains.',
    svgDataUri: svgLakeGazebo,
    aspectRatio: '3/4',
    themeColor: 'sky-900',
  },
  {
    id: 'photo-3',
    title: 'Sunlit Stroll Smiles',
    category: 'Candid Sunshine',
    description: 'Looking at each other with cool sunglasses and bright sunny day laughter.',
    svgDataUri: svgSunnyClose,
    aspectRatio: '3/4',
    themeColor: 'amber-800',
  },
  {
    id: 'photo-4',
    title: 'Royal Ethnic Evening',
    category: 'Celebration Night',
    description: 'Mihir in sleek black kurta & Mukti in intricate black & beige printed gown.',
    svgDataUri: svgEveningEthnic,
    aspectRatio: '3/4',
    themeColor: 'rose-950',
  },
  {
    id: 'photo-5',
    title: 'Festive Mehendi Blessings',
    category: 'Auspicious Joy',
    description: 'Tilak marks, intricate mehendi hands, striped shirt & pastel floral dupatta.',
    svgDataUri: svgFestiveDay,
    aspectRatio: '3/4',
    themeColor: 'purple-900',
  },
];
