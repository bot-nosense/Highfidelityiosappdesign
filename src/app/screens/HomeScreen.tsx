import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface HomeScreenProps {
  onStartCheckIn: () => void;
  onNavigateReflect: () => void;
}

export function HomeScreen({ onStartCheckIn, onNavigateReflect }: HomeScreenProps) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[var(--off-white)] px-6 pt-16 pb-32 relative">
      <BackgroundPattern />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 relative z-10"
      >
        <div className="text-sm text-[var(--muted-foreground)] mb-2">{today}</div>
        <h1 className="text-4xl text-[var(--charcoal)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
          How are you feeling?
        </h1>

        <Button onClick={onStartCheckIn}>
          Start emotional check-in
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative z-10"
      >
        <SectionHeader
          title="Today's status"
          subtitle="Your most recent check-in"
        />

        <Card className="mb-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">😌</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-[var(--charcoal)]">Calm</span>
                <span className="text-xs text-[var(--muted-foreground)]">2 hours ago</span>
              </div>
              <div className="text-sm text-[var(--muted-foreground)] mb-2">
                Intensity: Moderate
              </div>
              <div className="text-sm text-[var(--charcoal-light)]">
                "Morning walk helped clear my mind"
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10"
      >
        <SectionHeader
          title="This week at a glance"
        />

        <Card className="mb-6">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="text-center">
                <div className="text-xs text-[var(--muted-foreground)] mb-2">{day}</div>
                <div className={`w-full h-12 rounded-lg ${
                  i < 5 ? 'bg-[var(--sage-light)]' : 'bg-[var(--warm-beige)]'
                }`} />
              </div>
            ))}
          </div>
          <div className="text-sm text-[var(--charcoal-light)]">
            Most frequent: Calm, Focused, Anxious
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10"
      >
        <Card onClick={onNavigateReflect} className="bg-gradient-to-br from-[var(--dusty-blue)] to-[var(--primary)] text-white">
          <div className="flex items-start gap-3">
            <Sparkles size={24} className="mt-1 flex-shrink-0" />
            <div>
              <div className="font-medium mb-1">Feeling stuck or need clarity?</div>
              <div className="text-sm opacity-90">
                Try a gentle reflection prompt
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
