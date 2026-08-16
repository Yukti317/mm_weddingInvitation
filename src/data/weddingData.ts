import { EventDetail, StoryScene, GalleryItem, Blessing } from '../types';
import img1 from '../../assets/img/img6.jpeg';
import img2 from '../../assets/img/img2.jpeg';
import img3 from '../../assets/img/img3.jpeg';
import img4 from '../../assets/img/img4.jpeg';
import img5 from '../../assets/img/img5.jpeg';
import img6 from '../../assets/img/img6.jpeg';
import img7 from '../../assets/img/img7.jpeg';
import img8 from '../../assets/img/img8.jpeg';

export const BRIDE_NAME = 'Mukti';
export const GROOM_NAME = 'Mihir';
export const WEDDING_YEAR = 2026;

export const EVENT_DATES = {
  haldiMehendiSangeet: '25 November 2026',
  wedding: '26 November 2026',
  targetDateIso: '2026-11-25T09:00:00+05:30',
};

export const WEDDING_EVENTS: EventDetail[] = [
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    subTitle: '🌼 Sunshine & Turmeric Blessings',
    date: '25 November 2026',
    time: '3:00 PM Onwards',
    venue: 'Laxami Party Plot, Himmatnagar',
    locationAddress: 'SG Highway, Ahmedabad, Gujarat',
    mapUrl: 'https://maps.google.com/?q=Golden+Palace+Resort+Ahmedabad',
    dressCode: 'Come ready for sunshine, smiles & a little yellow magic!',
    description:
      'An upbeat afternoon of laughter, turmeric paste, golden marigold petals, and joyous blessings as Mukti & Mihir get painted in yellow love!',
    colorTheme: 'from-amber-400/20 via-yellow-100/40 to-amber-50/10',
    iconName: 'Sun',
    bgPattern: 'marigold',
  },

  // {
  //   id: 'mehendi',
  //   title: 'Mehendi Soirée',
  //   subTitle: '🌿 Henna Hues & Intricate Stories',
  //   date: '25 November 2026',
  //   time: '02:00 PM Onwards',
  //   venue: 'Royal Mango Grove, Golden Palace Resort',
  //   locationAddress: 'SG Highway, Ahmedabad, Gujarat',
  //   mapUrl: 'https://maps.google.com/?q=Golden+Palace+Resort+Ahmedabad',
  //   dressCode:
  //     'Bring your brightest smiles and enjoy an evening filled with beautiful traditions!',
  //   description:
  //     'Fresh henna fragrance, delicate botanical motifs, live bangles artisan stall, folk singers, and refreshing summer coolers.',
  //   colorTheme:
  //     'from-emerald-500/20 via-teal-100/40 to-emerald-50/10',
  //   iconName: 'Sparkles',
  //   bgPattern: 'mehendi',
  // },

  {
    id: 'sangeet',
    title: 'Sangeet Night',
    subTitle: '🎶 Beats, Lights & Musical Magic',
    date: '25 November 2026',
    time: '08:30 PM Onwards',
    venue: 'Silver Park Society , Palace Road, Mahavirnagar, Himmatnagar',
    locationAddress: 'SG Highway, Ahmedabad, Gujarat',
    mapUrl: 'https://maps.google.com/?q=Golden+Palace+Resort+Ahmedabad',
    dressCode:
      'Come ready to celebrate, dance freely and make unforgettable memories!',
    description:
      'A dazzling night of family dance face-offs, energetic beats, surprise couple performances, and non-stop celebration on the dance floor!',
    colorTheme:
      'from-purple-600/20 via-indigo-900/30 to-rose-950/20',
    iconName: 'Music',
    bgPattern: 'sangeet',
  },

  {
    id: 'wedding',
    title: 'The Royal Wedding',
    subTitle: '💍 The Vows & Sacred Pheras',
    date: '26 November 2026',
    time: ' 12:39 PM Mandap Pheras',
    venue: 'Laxami Party Plot, Himmatnagar',
    locationAddress: 'SG Highway, Ahmedabad, Gujarat',
    mapUrl: 'https://maps.google.com/?q=Golden+Palace+Resort+Ahmedabad',
    dressCode:
      'Come celebrate love, blessings and the beautiful beginning of forever.',
    description:
      'A regal royal entrance, shower of velvet red rose petals, Vedic mantras under a canopy of stars, and the sacred seven pheras of forever.',
    colorTheme:
      'from-rose-900/30 via-amber-900/20 to-red-950/40',
    iconName: 'HeartHandshake',
    bgPattern: 'palace',
  },
];

export const STORY_SCENES: StoryScene[] = [
  {
    id: 'scene-1',
    title: 'Where It All Began',
    subtitle: 'Scene 1 • A Beautiful Beginning',
    style: 'watercolor',
    image: img1,
    dateLabel: 'Our First Memories',
    description:
      'Some moments arrive quietly and somehow become unforgettable. This was one of those moments — two people, one beautiful memory, and the beginning of a story that would mean so much more with time.',
    quote:
      '"Every love story has a beginning, and somehow ours became my favorite."',
    colorBg: 'from-rose-100/60 via-pink-50/50 to-amber-100/40',
  },

  {
    id: 'scene-2',
    title: 'Inside Our Little World',
    subtitle: 'Scene 2 • Love All Around Us',
    style: 'vector',
    image: img2,
    dateLabel: 'A Moment to Remember',
    description:
      'Surrounded by hearts and captured in a moment full of smiles, this memory feels like a tiny world of its own — just the two of us, forgetting everything else around us.',
    quote:
      '"If I could keep one moment forever, I would choose one with you."',
    colorBg: 'from-rose-100/70 via-red-50/50 to-pink-100/50',
  },

  {
    id: 'scene-3',
    title: 'A Love in Black & White',
    subtitle: 'Scene 3 • Timeless Us',
    style: 'sketch',
    image: img3,
    dateLabel: 'Forever in a Frame',
    description:
      'Some photographs do not need colors to tell a beautiful story. In this quiet moment, every smile, every touch, and every little detail says everything words sometimes cannot.',
    quote:
      '"Some moments become timeless the moment they are shared with you."',
    colorBg: 'from-neutral-100/80 via-stone-100/70 to-zinc-200/60',
  },

  {
    id: 'scene-4',
    title: 'The Little Things',
    subtitle: 'Scene 4 • Candid Moments',
    style: 'polaroid',
    image: img4,
    dateLabel: 'Unscripted Memories',
    description:
      'It is often the unplanned moments that become the most precious — the conversations, the laughter, the glances, and all those little things that quietly became part of us.',
    quote:
      '"It was never the grand moments, but the little ones with you that mattered most."',
    colorBg: 'from-orange-100/60 via-rose-50/70 to-amber-100/40',
  },

  {
    id: 'scene-5',
    title: 'Under the Lights',
    subtitle: 'Scene 5 • A Night to Remember',
    style: 'scrapbook',
    image: img5,
    dateLabel: 'Golden Memories',
    description:
      'Under a sky of glowing lights, everything felt a little more magical. A simple moment became a memory worth keeping — one of those nights we will always look back on with a smile.',
    quote:
      '"With you, even an ordinary night feels like a memory worth keeping."',
    colorBg: 'from-amber-100/60 via-yellow-50/50 to-orange-100/50',
  },

  {
    id: 'scene-6',
    title: 'Just You & Me',
    subtitle: 'Scene 6 • Together',
    style: 'magazine',
    image: img6,
    dateLabel: 'Our Favorite Place',
    description:
      'There is something beautiful about simply being together. No perfect setting, no perfect plan — just two people enjoying each other and creating another memory along the way.',
    quote:
      '"Wherever I am with you feels a little more like home."',
    colorBg: 'from-sky-100/50 via-rose-50/60 to-pink-100/50',
  },

  {
    id: 'scene-7',
    title: 'A Little Fun Together',
    subtitle: 'Scene 7 • FunZone Memories',
    style: 'vector',
    image: img7,
    dateLabel: 'A Day Full of Laughter',
    description:
      'From bowling strikes to silly moments and endless laughter, this was one of those days where we simply forgot about everything else and enjoyed being together.',
    quote:
      '"The best memories are the ones where we laugh until we forget what we were laughing about."',
    colorBg: 'from-blue-950/70 via-indigo-900/60 to-slate-900/80',
  },

  {
    id: 'scene-8',
    title: 'And Then There Was Us',
    subtitle: 'Scene 8 • To Be Continued',
    style: 'lineart',
    image: img8,
    dateLabel: 'Our Story Continues',
    description:
      'One photograph became another, one memory became many, and somewhere between all those moments, our story became something worth holding onto forever.',
    quote:
      '"This is not the end of our story — it is only another beautiful beginning."',
    colorBg: 'from-rose-100/60 via-pink-50/60 to-orange-100/40',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Pure Love & Embrace',
    category: 'Pencil Sketch',
    style: 'sketch',
    caption: 'A beautiful pencil-sketch moment capturing Mihir and Mukti sharing a tender embrace.',
    location: 'A Candid Moment',
    date: 'Pure Love',
  },
  {
    id: 'g2',
    title: 'Together by the Window',
    category: 'Vintage Portrait',
    style: 'watercolor',
    caption: 'Mihir and Mukti sharing a sweet, effortless moment together in a warm and timeless setting.',
    location: 'Cozy Corners',
    date: 'Sweet Togetherness',
  },
  {
    id: 'g3',
    title: 'Wrapped in Love',
    category: 'Black & White',
    style: 'polaroid',
    caption: 'A timeless black-and-white portrait of Mihir and Mukti holding each other close.',
    location: 'Timeless Portrait',
    date: 'Forever Us',
  },
  {
    id: 'g4',
    title: "L'Amour",
    category: 'Magazine Cover',
    style: 'magazine',
    caption: 'A glamorous magazine-inspired portrait celebrating their love, elegance, and beautiful chemistry.',
    location: 'A Love Story',
    date: 'The Beautiful Couple',
  },
  {
    id: 'g5',
    title: 'Festive Togetherness',
    category: 'Scrapbook',
    style: 'scrapbook',
    caption: 'A cheerful festive moment of Mihir and Mukti captured with warmth, smiles, and celebration.',
    location: 'Festive Celebrations',
    date: 'Beautiful Memories',
  },
];

export const INITIAL_BLESSINGS: Blessing[] = [
  {
    id: 'b1',
    name: 'Aarti & Rajesh Mehta',
    relation: 'Parents of the Groom',
    message: 'Seeing you both together fills our hearts with boundless joy. May your life together be blessed with endless laughter, good health, and eternal togetherness!',
    date: '2 hours ago',
    likes: 24,
  },
  {
    id: 'b2',
    name: 'Suresh & Neelam Sharma',
    relation: 'Parents of the Bride',
    message: 'Our dearest Mukti, you bring sunshine wherever you go, and Mihir is the perfect partner to walk by your side. We cannot wait to celebrate this royal union!',
    date: '5 hours ago',
    likes: 19,
  },
  {
    id: 'b3',
    name: 'Rohan & Ananya',
    relation: 'Sangeet Choreography Squad',
    message: 'Get ready dance floor! Mukti & Mihir are about to set the stage on fire at the Sangeet. Wishing you both a lifetime of dancing to the same rhythm!',
    date: '1 day ago',
    likes: 31,
  },
];
