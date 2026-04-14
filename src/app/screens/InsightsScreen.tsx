import { Card } from '../components/Card';
import { InsightCard } from '../components/InsightCard';
import { SectionHeader } from '../components/SectionHeader';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { motion } from 'motion/react';

export function InsightsScreen() {
  const weeklyMoods = [
    { mood: '😌 Calm', count: 8, percentage: 40 },
    { mood: '😰 Anxious', count: 5, percentage: 25 },
    { mood: '😊 Happy', count: 4, percentage: 20 },
    { mood: '😤 Frustrated', count: 3, percentage: 15 }
  ];

  const triggers = [
    { name: 'Work', count: 12 },
    { name: 'Sleep', count: 8 },
    { name: 'Health', count: 6 },
    { name: 'Relationships', count: 4 }
  ];

  return (
    <div className="min-h-screen bg-[var(--off-white)] px-6 pt-16 pb-32 relative">
      <BackgroundPattern />
      <h1 className="text-3xl text-[var(--charcoal)] mb-8 relative z-10" style={{ fontFamily: 'var(--font-display)' }}>
        Patterns & Insights
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <SectionHeader
          title="This week's overview"
          subtitle="Apr 8 - Apr 14, 2026"
        />

        <div className="grid grid-cols-2 gap-3 mb-8">
          <InsightCard
            title="Total check-ins"
            value="20"
            description="4 more than last week"
            trend="up"
          />
          <InsightCard
            title="Avg. intensity"
            value="3.2"
            description="Moderate range"
            trend="neutral"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative z-10"
      >
        <SectionHeader
          title="Most frequent emotions"
        />

        <Card className="mb-8">
          <div className="space-y-4">
            {weeklyMoods.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[var(--charcoal)]">{item.mood}</span>
                  <span className="text-sm text-[var(--muted-foreground)]">{item.count} times</span>
                </div>
                <div className="w-full h-2 bg-[var(--warm-beige)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="h-full bg-[var(--primary)] rounded-full"
                  />
                </div>
              </div>
            ))}
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
          title="Recurring triggers"
          subtitle="What's influencing your emotions"
        />

        <Card>
          <div className="space-y-3">
            {triggers.map((trigger, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[var(--charcoal)]">{trigger.name}</span>
                <span className="text-sm text-[var(--muted-foreground)]">{trigger.count} mentions</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 relative z-10"
      >
        <Card className="bg-[var(--warm-beige-light)] border-none">
          <div className="text-sm text-[var(--charcoal-light)]">
            💡 <span className="font-medium">Pattern noticed:</span> Your anxiety tends to spike on weekday mornings, often related to work. Consider a calming morning routine.
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
