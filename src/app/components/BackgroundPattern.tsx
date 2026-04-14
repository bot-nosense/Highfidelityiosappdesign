export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--sage-light)] rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--dusty-blue-light)] rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[var(--warm-beige)] rounded-full blur-3xl opacity-20" />
    </div>
  );
}
