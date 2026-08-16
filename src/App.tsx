import React, { useState } from 'react';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { NavigationHeader } from './components/NavigationHeader';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { CelebrationsSection } from './components/CelebrationsSection';
import { CountdownSection } from './components/CountdownSection';
import { GallerySection } from './components/GallerySection';
import { VenueSection } from './components/VenueSection';
import {  BrideFamilySection } from './components/BlessingsSection';
import { EndingSection } from './components/EndingSection';
import { RsvpModal } from './components/RsvpModal';
import { INITIAL_BLESSINGS } from './data/weddingData';
import { Blessing } from './types';

export default function App() {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [selectedRsvpEvent, setSelectedRsvpEvent] = useState<string | undefined>(undefined);
  const [blessings, setBlessings] = useState<Blessing[]>(INITIAL_BLESSINGS);

  const handleOpenRsvpModal = (eventId?: string) => {
    setSelectedRsvpEvent(eventId);
    setIsRsvpOpen(true);
  };

  const handleAddBlessing = (name: string, relation: string, message: string) => {
    const newBlessing: Blessing = {
      id: `b-${Date.now()}`,
      name,
      relation,
      message,
      date: 'Just now',
      likes: 1,
    };
    setBlessings((prev) => [newBlessing, ...prev]);
  };

  const scrollToStory = () => {
    const el = document.getElementById('our-story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 overflow-x-hidden">
      {/* 1. Opening 3D Wax Seal Envelope Experience */}
      {!hasOpenedEnvelope && (
        <OpeningEnvelope onOpened={() => setHasOpenedEnvelope(true)} />
      )}

      {/* 2. Persistent Top Music Player (Ritviz - Liggi) */}
      <MusicPlayer autoStarted={hasOpenedEnvelope} />

      {/* 3. Navigation Header Bar */}
      <NavigationHeader onOpenRsvp={() => handleOpenRsvpModal()} />

      {/* 4. Cinematic Hero Section */}
      <HeroSection
        onScrollToStory={scrollToStory}
        onScrollToEvents={scrollToEvents}
      />

      {/* 5. Our Story Section (6 Art Styles Transformation) */}
      <StorySection />

      {/* 6. Wedding Celebrations Section (Haldi, Mehendi, Sangeet, Wedding) */}
      <CelebrationsSection onOpenRsvp={handleOpenRsvpModal} />

      {/* 7. Glass Countdown Section */}
      <CountdownSection />

      {/* 8. Memory Wall Gallery Section */}
      <GallerySection />

      {/* 9. Royal Venue Section with Animated Route Directions */}
      <VenueSection />

      {/* 10. Guestbook & Blessings Wall */}
      {/* <BlessingsSection
        blessingsList={blessings}
        onAddBlessing={handleAddBlessing}
      /> */}

      <BrideFamilySection />

      {/* 11. Grand Sunset Ending Section */}
      <EndingSection />

      {/* 12. RSVP Modal */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        preselectedEventId={selectedRsvpEvent}
        onAddBlessing={handleAddBlessing}
      />
    </div>
  );
};
