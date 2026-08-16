import confetti from 'canvas-confetti';

export function triggerGoldenPetals() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 80,
    zIndex: 9999,
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 25 * (timeLeft / duration);

    // Gold & Marigold Yellows
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#D4AF37', '#FFD700', '#FFA500', '#F59E0B'],
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });

    // Deep Maroon & Rose Pink
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#800020', '#E11D48', '#F43F5E', '#FDA4AF'],
      shapes: ['circle'],
      scalar: 1.1,
    });
  }, 250);
}

export function triggerRoseShower() {
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#800020', '#D4AF37', '#E11D48', '#FFE4E6', '#FFD700'],
    scalar: 1.3,
    ticks: 120,
  });
}
