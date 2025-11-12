export default function Process() {
  const steps = [
    { k: '01', t: 'Discover', d: 'We align on goals, constraints and success metrics.' },
    { k: '02', t: 'Design', d: 'Flows, wireframes and visual language that converts.' },
    { k: '03', t: 'Build', d: 'Rapid, quality implementation with automated pipelines.' },
    { k: '04', t: 'Launch', d: 'Stress-tested deployments and observability from day one.' },
    { k: '05', t: 'Scale', d: 'Iterative growth, performance tuning and capability expansion.' },
  ]
  return (
    <section id="process" className="relative bg-[#0a0a0a] text-[#f6f7ec] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our way of working</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map(s => (
            <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="text-[#a34d2d] font-mono">{s.k}</span>
              <h3 className="font-semibold mt-2">{s.t}</h3>
              <p className="text-sm text-[#f6f7ec]/70 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
