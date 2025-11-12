export default function Work() {
  return (
    <section id="work" className="relative bg-[#f6f7ec] text-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected builds</h2>
          <p className="text-[#0a0a0a]/70 mt-2">A small taste of the systems and experiences we craft.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-black/10 bg-white">
              <div className="aspect-video bg-gradient-to-br from-[#a34d2d] to-[#f6f7ec]" />
              <div className="p-4">
                <h3 className="font-semibold">Project {i}</h3>
                <p className="text-sm text-black/70">High-impact delivery with measurable outcomes.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
