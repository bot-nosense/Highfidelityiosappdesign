interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-4">
      <h2 className="text-[var(--charcoal)] mb-1">{title}</h2>
      {subtitle && (
        <p className="text-[var(--muted-foreground)] text-sm">{subtitle}</p>
      )}
    </div>
  );
}
