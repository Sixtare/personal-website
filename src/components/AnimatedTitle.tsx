export default function AnimatedTitle() {
  return (
    <h1 className="text-4xl font-bold tracking-tight flex items-center cursor-default h-[40px]">
      <span className="text-text-dim mr-2">&gt;</span>
      <span>Matheus</span>
      <span className="animate-blink font-light text-text-dim mx-[4px]">_</span>
      <span>Sestare</span>
    </h1>
  );
}
