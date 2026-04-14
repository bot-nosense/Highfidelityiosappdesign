import { Card } from './Card';

interface InsightCardProps {
  title: string;
  value: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function InsightCard({ title, value, description, trend }: InsightCardProps) {
  const trendColors = {
    up: 'text-[var(--secondary)]',
    down: 'text-[var(--destructive)]',
    neutral: 'text-[var(--muted-foreground)]'
  };

  return (
    <Card className="space-y-2">
      <div className="text-sm text-[var(--muted-foreground)]">{title}</div>
      <div className={`text-2xl ${trend ? trendColors[trend] : 'text-[var(--charcoal)]'}`} style={{ fontFamily: 'var(--font-display)' }}>
        {value}
      </div>
      {description && (
        <div className="text-xs text-[var(--muted-foreground)]">{description}</div>
      )}
    </Card>
  );
}
