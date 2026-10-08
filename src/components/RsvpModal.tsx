import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Heart, Sparkles, Send, Music, UserCheck } from 'lucide-react';
import { triggerGoldenPetals } from '../utils/confetti';
import { RsvpData } from '../types';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEventId?: string;
  onAddBlessing?: (name: string, relation: string, message: string) => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  preselectedEventId,
  onAddBlessing,
}) => {
  const [formData, setFormData] = useState<RsvpData>({
    guestName: '',
    phone: '',
    attendingEvents: preselectedEventId ? [preselectedEventId] : ['haldi', 'mehendi', 'sangeet', 'wedding'],
    guestCount: 1,
    dietaryPreference: 'Jain / Vegetarian Royal Feast',
    sangeetSong: '',
    blessingMessage: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleEvent = (eventId: string) => {
    setFormData((prev) => {
      const exists = prev.attendingEvents.includes(eventId);
      return {
        ...prev,
        attendingEvents: exists
          ? prev.attendingEvents.filter((id) => id !== eventId)
          : [...prev.attendingEvents, eventId],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.guestName.trim()) return;

    setSubmitted(true);
    triggerGoldenPetals();

    if (formData.blessingMessage.trim() && onAddBlessing) {
      onAddBlessing(formData.guestName, 'Honored Guest', formData.blessingMessage);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-[#FFF9F0] border-2 border-[#C9A45C] rounded-3xl p-5 sm:p-8 text-[#332629] shadow-2xl space-y-5 my-4 sm:my-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-w-[44px] min-h-[44px] p-2 rounded-full bg-[#7A1F35] hover:bg-[#63182A] text-[#C9A45C] border border-[#C9A45C]/40 active:scale-95 transition-all flex items-center justify-center touch-manipulation cursor-pointer z-10 shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="text-center space-y-1.5 sm:space-y-2 border-b border-[#C9A45C]/30 pb-3.5 sm:pb-4 pr-8 sm:pr-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8E8E5] border border-[#C9A45C]/40 text-[#7A1F35] text-[10px] sm:text-xs font-mono uppercase font-semibold">
                <UserCheck className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>RSVP Confirmation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1F35]">
                Join Our Celebration
              </h3>
              <p className="text-[11px] sm:text-xs text-[#332629] font-serif italic">
                Mukti ❤️ Mihir • 25 & 26 November 2026
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs font-serif">
              <div>
                <label className="block text-[#7A1F35] mb-1 font-semibold">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya & Rohan Sharma"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white border border-[#C9A45C]/50 focus:border-[#7A1F35] text-[#332629] outline-none text-xs sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#7A1F35] mb-1 font-semibold">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white border border-[#C9A45C]/50 focus:border-[#7A1F35] text-[#332629] outline-none text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#7A1F35] mb-1 font-semibold">Total Guests Attending</label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white border border-[#C9A45C]/50 focus:border-[#7A1F35] text-[#332629] outline-none text-xs sm:text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#7A1F35] mb-2 font-semibold">Events You Will Attend</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'haldi', label: '🌼 Haldi (25 Nov)' },
                    { id: 'mehendi', label: '🌿 Mehendi (25 Nov)' },
                    { id: 'sangeet', label: '🎶 Sangeet (25 Nov)' },
                    { id: 'wedding', label: '💍 Wedding (26 Nov)' },
                  ].map((evt) => (
                    <button
                      type="button"
                      key={evt.id}
                      onClick={() => toggleEvent(evt.id)}
                      className={`min-h-[44px] p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer touch-manipulation active:scale-[0.98] ${
                        formData.attendingEvents.includes(evt.id)
                          ? 'bg-[#7A1F35] border-[#C9A45C] text-[#C9A45C] font-bold shadow-sm'
                          : 'bg-white border-[#C9A45C]/40 text-[#332629] hover:bg-[#F8E8E5]'
                      }`}
                    >
                      <span className="text-xs">{evt.label}</span>
                      {formData.attendingEvents.includes(evt.id) && (
                        <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#7A1F35] mb-1 font-semibold flex items-center gap-1">
                  <Music className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                  <span>Song Request for Sangeet Night</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ritviz - Liggi / Gallan Goodiyan"
                  value={formData.sangeetSong}
                  onChange={(e) => setFormData({ ...formData, sangeetSong: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white border border-[#C9A45C]/50 focus:border-[#7A1F35] text-[#332629] outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-[#7A1F35] mb-1 font-semibold">Your Blessing Message</label>
                <textarea
                  rows={2}
                  placeholder="Leave a warm wish for Mukti & Mihir..."
                  value={formData.blessingMessage}
                  onChange={(e) => setFormData({ ...formData, blessingMessage: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white border border-[#C9A45C]/50 focus:border-[#7A1F35] text-[#332629] outline-none resize-none text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Confirm button: 🍷 #7A1F35 + gold text */}
            <button
              type="submit"
              className="w-full min-h-[48px] py-3.5 rounded-full bg-[#7A1F35] hover:bg-[#63182A] text-[#C9A45C] border border-[#C9A45C]/50 font-serif font-bold text-xs sm:text-sm tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 touch-manipulation active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-[#C9A45C]" />
              <span>Confirm RSVP & Send Blessings</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-[#F8E8E5] border-2 border-[#C9A45C] rounded-full flex items-center justify-center mx-auto text-[#7A1F35]">
              <CheckCircle2 className="w-10 h-10 text-[#7A1F35]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold text-[#7A1F35]">
                RSVP Received!
              </h3>
              <p className="text-sm font-serif italic text-[#332629]">
                Thank you {formData.guestName}! We cannot wait to celebrate Mukti & Mihir's forever with you.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#7A1F35] text-[#C9A45C] border border-[#C9A45C]/50 font-serif font-bold text-xs uppercase tracking-widest hover:bg-[#63182A] transition-colors cursor-pointer shadow-md"
            >
              Back To Invitation
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
