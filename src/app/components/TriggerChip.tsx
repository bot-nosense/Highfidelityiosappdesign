interface TriggerChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function TriggerChip({ label, selected = false, onClick }: TriggerChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
        selected
          ? 'bg-[var(--secondary)] text-[var(--charcoal)]'
          : 'bg-[var(--warm-beige)] text-[var(--charcoal-light)] hover:bg-[var(--warm-beige-dark)]'
      }`}
    >
      {label}
    </button>
  );
}
