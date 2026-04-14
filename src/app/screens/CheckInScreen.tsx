import { useState } from 'react';
import { Button } from '../components/Button';
import { MoodChip } from '../components/MoodChip';
import { TriggerChip } from '../components/TriggerChip';
import { SectionHeader } from '../components/SectionHeader';
import { GrainOverlay } from '../components/GrainOverlay';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface CheckInScreenProps {
  onComplete: () => void;
  onClose: () => void;
}

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😌', label: 'Calm' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😰', label: 'Anxious' },
  { emoji: '😤', label: 'Frustrated' },
  { emoji: '🤔', label: 'Confused' }
];

const triggers = [
  'Work', 'Relationships', 'Family', 'Health',
  'Money', 'Sleep', 'Social', 'Other'
];

export function CheckInScreen({ onComplete, onClose }: CheckInScreenProps) {
  const [step, setStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(3);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const handleTriggerToggle = (trigger: string) => {
    setSelectedTriggers(prev =>
      prev.includes(trigger)
        ? prev.filter(t => t !== trigger)
        : [...prev, trigger]
    );
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const canProceed = () => {
    if (step === 1) return selectedMood !== null;
    if (step === 2) return true;
    if (step === 3) return true;
    return true;
  };

  return (
    <div className="min-h-screen bg-[var(--off-white)] px-6 pt-16 pb-32 relative">
      <GrainOverlay />
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className={`h-1 w-12 rounded-full transition-all ${
                i <= step ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'
              }`}
            />
          ))}
        </div>
        <button onClick={onClose} className="text-[var(--muted-foreground)]">
          <X size={24} />
        </button>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {step === 1 && (
          <div>
            <SectionHeader
              title="How are you feeling?"
              subtitle="Choose what resonates most right now"
            />
            <div className="grid grid-cols-3 gap-3">
              {moods.map(mood => (
                <MoodChip
                  key={mood.label}
                  emoji={mood.emoji}
                  label={mood.label}
                  selected={selectedMood === mood.label}
                  onClick={() => setSelectedMood(mood.label)}
                />
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <SectionHeader
              title="How intense is this feeling?"
              subtitle="Move the slider to match the intensity"
            />
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex justify-between text-sm text-[var(--muted-foreground)] mb-4">
                <span>Mild</span>
                <span>Very intense</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={intensity}
                onChange={(e) => setIntensity(parseInt(e.target.value))}
                className="w-full h-2 bg-[var(--warm-beige)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
              />
              <div className="text-center mt-6">
                <div className="text-5xl mb-2">
                  {['😐', '🙂', '😊', '😃', '🤩'][intensity - 1]}
                </div>
                <div className="text-[var(--charcoal)]">
                  Level {intensity}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <SectionHeader
              title="What might have triggered this?"
              subtitle="Select all that apply (optional)"
            />
            <div className="flex flex-wrap gap-2">
              {triggers.map(trigger => (
                <TriggerChip
                  key={trigger}
                  label={trigger}
                  selected={selectedTriggers.includes(trigger)}
                  onClick={() => handleTriggerToggle(trigger)}
                />
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <SectionHeader
              title="Anything else to note?"
              subtitle="Optional, but helpful for patterns"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What feels heaviest? What brought this on?"
              className="w-full h-48 bg-white rounded-2xl p-4 shadow-sm border border-[var(--border)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-[var(--charcoal)]"
            />
          </div>
        )}
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 bg-[var(--off-white)] p-6 max-w-[430px] mx-auto z-50">
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {step === 4 ? 'Complete check-in' : 'Continue'}
        </Button>
      </div>
    </div>
  );
}
