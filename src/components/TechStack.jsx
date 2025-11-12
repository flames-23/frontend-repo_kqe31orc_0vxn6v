export default function TechStack() {
  const stacks = [
    { name: 'React', note: 'Interfaces' },
    { name: 'FastAPI', note: 'APIs' },
    { name: 'MongoDB', note: 'Data' },
    { name: 'AWS', note: 'Cloud' },
    { name: 'Docker', note: 'Ops' },
    { name: 'CI/CD', note: 'Velocity' },
  ]

  return (
    <section id="stack" className="relative bg-[#0a0a0a] text-[#f6f7ec] py-20 md:py-28">
      <div className="absolute inset-0 opacity-30 bg-[conic-gradient(at_10%_10%,#a34d2d_0deg,transparent_90deg)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Our stack, battle-tested</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stacks.map((s) => (
            <div key={s.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
              <div className="text-lg font-semibold">{s.name}</div>
              <div className="text-sm text-white/60">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
