import { Card } from './Card';

interface EmptyStateProps {
  title: string;
  description: string;
  emoji?: string;
}

export function EmptyState({ title, description, emoji = '✨' }: EmptyStateProps) {
  return (
    <Card className="text-center py-8">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-[var(--charcoal)] mb-2">{title}</h3>
      <p className="text-[var(--muted-foreground)] text-sm">{description}</p>
    </Card>
  );
}
