import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#0a0a0a]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/20" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-[#f6f7ec]/10 text-[#f6f7ec] px-3 py-1 rounded-full border border-white/10 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#a34d2d]" />
            A playful assembly of software excellence
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-[#f6f7ec]">
            AIO — All in One Technical Solutions
          </h1>
          <p className="mt-6 text-lg text-[#f6f7ec]/80">
            We design, build, and scale Software Engineering solutions end‑to‑end: from idea to production. Bold visuals. Bulletproof systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 rounded-md bg-[#a34d2d] text-[#f6f7ec] font-semibold shadow-lg shadow-[#a34d2d]/30 hover:translate-y-[-1px] transition-transform">Start a project</a>
            <a href="#services" className="px-6 py-3 rounded-md bg-[#f6f7ec] text-[#0a0a0a] font-semibold hover:bg-white transition">Explore services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
