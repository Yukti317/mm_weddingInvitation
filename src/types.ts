export interface EventDetail {
  id: string;
  title: string;
  subTitle: string;
  date: string;
  time: string;
  venue: string;
  locationAddress: string;
  mapUrl: string;
  dressCode: string;
  description: string;
  colorTheme: string;
  iconName: string;
  bgPattern: 'marigold' | 'mehendi' | 'sangeet' | 'palace';
}

export interface StoryScene {
  id: string;
  title: string;
  subtitle: string;
  style: 'vector' | 'watercolor' | 'magazine' | 'polaroid' | 'scrapbook' | 'sketch' | 'lineart';
  dateLabel: string;
  description: string;
  quote: string;
  colorBg: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Polaroid' | 'Film Strip' | 'Scrapbook' | 'Magazine' | 'Watercolor' | 'Glass Card' | 'Pencil Sketch' | 'Minimal Line Art';
  style: 'watercolor' | 'magazine' | 'polaroid' | 'scrapbook' | 'sketch' | 'lineart' | 'framed';
  caption: string;
  location: string;
  date: string;
  aspectRatio?: string;
}

export interface Blessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
  likes: number;
}

export interface RsvpData {
  guestName: string;
  phone: string;
  attendingEvents: string[];
  guestCount: number;
  dietaryPreference: string;
  sangeetSong: string;
  blessingMessage: string;
}
