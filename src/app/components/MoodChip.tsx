interface MoodChipProps {
  emoji: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function MoodChip({ emoji, label, selected = false, onClick }: MoodChipProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-200 ${
        selected
          ? 'bg-[var(--primary)] text-white shadow-md scale-105'
          : 'bg-white border border-[var(--border)] hover:border-[var(--primary)] active:scale-95'
      }`}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}
