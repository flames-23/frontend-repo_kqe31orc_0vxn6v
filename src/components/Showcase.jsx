export default function Showcase() {
  const projects = [
    {
      tag: 'Platform',
      title: 'Logistics OS',
      blurb: 'From zero to fleet-scale management in 10 weeks',
    },
    {
      tag: 'AI',
      title: 'Sales Copilot',
      blurb: 'Closed-loop email + CRM assistant with guardrails',
    },
    {
      tag: 'Infra',
      title: 'Observability Mesh',
      blurb: 'Unified tracing and alerts across 30+ services',
    },
  ]

  return (
    <section id="work" className="bg-[#0a0a0a] text-[#f6f7ec] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Selected work</h2>
          <a href="#contact" className="text-[#a34d2d] hover:underline">Start something</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition p-6">
              <div className="text-xs uppercase tracking-wider text-white/60">{p.tag}</div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.blurb}</p>
              <div className="mt-6 h-36 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
