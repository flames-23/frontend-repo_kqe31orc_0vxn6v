const items = [
  { title: 'Product Engineering', desc: 'From MVP to enterprise scale with modern architectures.' },
  { title: 'AI & Automation', desc: 'Integrate LLMs, agents and workflows that actually ship.' },
  { title: 'Cloud & DevOps', desc: 'CI/CD, containers, observability and cost-optimized infra.' },
  { title: 'Web & Mobile', desc: 'Delightful apps with React, Next.js, Flutter and more.' },
  { title: 'Data Platforms', desc: 'Pipelines, warehousing, analytics and real-time dashboards.' },
  { title: 'UX Strategy', desc: 'Research, prototyping and design systems for velocity.' }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0a0a] text-[#f6f7ec] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Software Engineering, end to end</h2>
          <p className="text-[#f6f7ec]/70 mt-2">Specialized in shipping resilient systems with expressive interfaces.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded bg-[#a34d2d] mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="text-sm text-[#f6f7ec]/70 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
