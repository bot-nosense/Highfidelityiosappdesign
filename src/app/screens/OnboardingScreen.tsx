import { useState } from 'react';
import { Button } from '../components/Button';
import { GrainOverlay } from '../components/GrainOverlay';
import { motion } from 'motion/react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    emoji: '🌸',
    title: 'A quiet companion for your emotions',
    description: 'Check in with how you feel in under a minute. Notice patterns. Find clarity when you need it.'
  },
  {
    emoji: '🌿',
    title: 'Understand what moves you',
    description: 'Track emotional patterns and recurring triggers. See what shapes your days, gently and privately.'
  },
  {
    emoji: '💭',
    title: 'Reflect when you feel stuck',
    description: 'Get gentle prompts to help you pause, process, and return to yourself.'
  }
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[var(--warm-beige-light)] to-[var(--off-white)] px-6 pt-20 pb-10 relative">
      <GrainOverlay />
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col items-center justify-center text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-8xl mb-12"
        >
          {slide.emoji}
        </motion.div>

        <h1 className="text-3xl mb-4 text-[var(--charcoal)] px-4" style={{ fontFamily: 'var(--font-display)' }}>
          {slide.title}
        </h1>

        <p className="text-[var(--muted-foreground)] text-lg px-8 leading-relaxed">
          {slide.description}
        </p>
      </motion.div>

      <div className="space-y-4 relative z-10">
        <div className="flex gap-2 justify-center mb-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[var(--primary)]'
                  : 'w-2 bg-[var(--border)]'
              }`}
            />
          ))}
        </div>

        <Button onClick={handleNext}>
          {currentSlide === slides.length - 1 ? 'Begin your first check-in' : 'Continue'}
        </Button>

        {currentSlide > 0 && (
          <button
            onClick={() => setCurrentSlide(currentSlide - 1)}
            className="w-full text-[var(--muted-foreground)] text-sm py-2"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
