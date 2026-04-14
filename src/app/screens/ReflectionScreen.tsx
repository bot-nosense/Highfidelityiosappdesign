import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { motion } from 'motion/react';
import { RefreshCw } from 'lucide-react';

const prompts = [
  {
    question: "What would it feel like to let this go, just for today?",
    theme: "🌊 Flow"
  },
  {
    question: "What part of this feeling is trying to protect you?",
    theme: "🛡️ Protection"
  },
  {
    question: "If this emotion could speak, what would it tell you it needs?",
    theme: "💬 Voice"
  },
  {
    question: "What small action might shift how you're feeling right now?",
    theme: "✨ Action"
  },
  {
    question: "Where in your body do you notice this emotion most?",
    theme: "🌸 Awareness"
  }
];

export function ReflectionScreen() {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [reflection, setReflection] = useState('');

  const handleNewPrompt = () => {
    setCurrentPrompt((currentPrompt + 1) % prompts.length);
    setReflection('');
  };

  const prompt = prompts[currentPrompt];

  return (
    <div className="min-h-screen bg-[var(--off-white)] px-6 pt-16 pb-32 relative">
      <BackgroundPattern />
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h1 className="text-3xl text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
          Gentle Reflection
        </h1>
        <button
          onClick={handleNewPrompt}
          className="p-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <RefreshCw size={24} />
        </button>
      </div>

      <div className="relative z-10">
        <SectionHeader
          title="A moment to pause"
          subtitle="Let this question guide you gently"
        />
      </div>

      <motion.div
        key={currentPrompt}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <Card className="mb-6 bg-gradient-to-br from-[var(--dusty-blue-light)] to-[var(--primary)] text-white border-none">
          <div className="text-center py-8">
            <div className="text-sm opacity-80 mb-4">{prompt.theme}</div>
            <div className="text-2xl leading-relaxed px-4" style={{ fontFamily: 'var(--font-display)' }}>
              {prompt.question}
            </div>
          </div>
        </Card>
      </motion.div>

      <Card className="mb-6 relative z-10">
        <SectionHeader
          title="Your reflection"
          subtitle="Write whatever comes to mind"
        />
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="There's no right or wrong answer. Just notice what arises..."
          className="w-full h-64 bg-[var(--warm-beige-light)] rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-[var(--charcoal)] border-none"
        />
      </Card>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10"
      >
        <Card className="bg-[var(--sage-light)] border-none">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🌿</span>
            <div>
              <div className="font-medium text-[var(--charcoal)] mb-1">
                Remember
              </div>
              <div className="text-sm text-[var(--charcoal-light)] leading-relaxed">
                This is a safe space to process. Your reflections are private and meant only to help you understand yourself better.
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {reflection.length > 20 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-[var(--off-white)] p-6 max-w-[430px] mx-auto z-50"
        >
          <Button>
            Save reflection
          </Button>
        </motion.div>
      )}
    </div>
  );
}
