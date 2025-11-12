import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function submit(e) {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)

    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      message: form.get('message'),
      services: form.getAll('services'),
      budget: form.get('budget') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-[#f6f7ec] text-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Tell us about your next build</h2>
            <p className="text-black/70 mt-2 max-w-prose">We partner with founders and teams to ship meaningful software. Share a bit about your goals and we’ll follow up within 24 hours.</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {['Quality', 'Speed', 'Reliability', 'Design', 'Scale', 'Security'].map(tag => (
                <div key={tag} className="text-center rounded-md bg-[#0a0a0a] text-[#f6f7ec] py-2 text-sm">{tag}</div>
              ))}
            </div>
          </div>
          <form onSubmit={submit} className="bg-white rounded-xl border border-black/10 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a34d2d]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a34d2d]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a34d2d]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">What do you need?</label>
                <div className="mt-2 grid sm:grid-cols-2 gap-2">
                  {['Product Engineering','AI & Automation','Cloud & DevOps','Web & Mobile','Data Platforms','UX Strategy'].map(s => (
                    <label key={s} className="flex items-center gap-2 rounded border border-black/10 px-3 py-2">
                      <input type="checkbox" name="services" value={s} />
                      <span className="text-sm">{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Budget range</label>
                <select name="budget" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a34d2d]">
                  <option value="">Select</option>
                  <option>Under $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a34d2d]" />
              </div>
            </div>
            <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[#a34d2d] text-[#f6f7ec] px-5 py-3 font-semibold hover:translate-y-[-1px] transition-transform">Send request</button>
            {status && <p className="mt-3 text-sm text-black/70">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
