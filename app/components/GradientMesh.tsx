export function GradientMesh({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`} aria-hidden>
      <div className="absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-50 animate-mesh-drift"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.45), transparent 60%)' }} />
      <div className="absolute top-1/3 -right-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-45 animate-mesh-drift"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)', animationDelay: '-8s' }} />
      <div className="absolute -bottom-32 left-1/4 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-35 animate-mesh-drift"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent 60%)', animationDelay: '-16s' }} />
      <div className="absolute inset-0 grid-bg opacity-60" />
    </div>
  );
}
