import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { EmptyState } from '../components/EmptyState';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';

const entries = [
  {
    id: 1,
    emoji: '😌',
    mood: 'Calm',
    intensity: 3,
    date: 'Today, 2:30 PM',
    note: 'Morning walk helped clear my mind',
    triggers: ['Health', 'Social']
  },
  {
    id: 2,
    emoji: '😰',
    mood: 'Anxious',
    intensity: 4,
    date: 'Yesterday, 11:45 AM',
    note: 'Deadline approaching, feeling the pressure',
    triggers: ['Work']
  },
  {
    id: 3,
    emoji: '😊',
    mood: 'Happy',
    intensity: 4,
    date: 'Yesterday, 8:00 AM',
    note: 'Great sleep and coffee',
    triggers: ['Sleep', 'Health']
  },
  {
    id: 4,
    emoji: '😤',
    mood: 'Frustrated',
    intensity: 3,
    date: 'Apr 12, 5:20 PM',
    note: 'Traffic and delays',
    triggers: ['Other']
  },
  {
    id: 5,
    emoji: '🤔',
    mood: 'Confused',
    intensity: 2,
    date: 'Apr 12, 10:15 AM',
    note: 'Not sure about next steps',
    triggers: ['Work', 'Relationships']
  }
];

export function HistoryScreen() {
  return (
    <div className="min-h-screen bg-[var(--off-white)] px-6 pt-16 pb-32 relative">
      <BackgroundPattern />
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h1 className="text-3xl text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
          Your Journey
        </h1>
        <button className="p-2 text-[var(--muted-foreground)] hover:text-[var(--primary)]">
          <Filter size={24} />
        </button>
      </div>

      <div className="relative z-10">
        <SectionHeader
          title="Recent check-ins"
          subtitle="Your emotional timeline"
        />
      </div>

      {entries.length > 0 ? (
        <div className="space-y-3 relative z-10">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{entry.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-[var(--charcoal)]">{entry.mood}</span>
                      <span className="text-xs text-[var(--muted-foreground)]">{entry.date}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < entry.intensity ? 'bg-[var(--primary)]' : 'bg-[var(--warm-beige)]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {entry.note && (
                      <p className="text-sm text-[var(--charcoal-light)] mb-2">
                        "{entry.note}"
                      </p>
                    )}

                    {entry.triggers.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {entry.triggers.map(trigger => (
                          <span
                            key={trigger}
                            className="text-xs px-2 py-1 rounded-full bg-[var(--warm-beige)] text-[var(--charcoal-light)]"
                          >
                            {trigger}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No check-ins yet"
          description="Start your first emotional check-in to begin tracking your journey"
          emoji="🌱"
        />
      )}
    </div>
  );
}
