import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-[#a34d2d] shadow-inner"></div>
            <span className="text-[#f6f7ec] font-semibold tracking-wide">AIO — All In One Technical Solutions</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-[#f6f7ec]/80 hover:text-[#f6f7ec] transition">Services</a>
            <a href="#work" className="text-[#f6f7ec]/80 hover:text-[#f6f7ec] transition">Work</a>
            <a href="#process" className="text-[#f6f7ec]/80 hover:text-[#f6f7ec] transition">Process</a>
            <a href="#contact" className="text-[#0a0a0a] bg-[#f6f7ec] hover:bg-white px-4 py-2 rounded-md font-medium transition">Start a project</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-[#f6f7ec]">
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" className="block text-[#f6f7ec]/90">Services</a>
            <a href="#work" className="block text-[#f6f7ec]/90">Work</a>
            <a href="#process" className="block text-[#f6f7ec]/90">Process</a>
            <a href="#contact" className="block text-[#0a0a0a] bg-[#f6f7ec] px-4 py-2 rounded-md font-medium w-fit">Start a project</a>
          </div>
        )}
      </div>
    </header>
  )
}
