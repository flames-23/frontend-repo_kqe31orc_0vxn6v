import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
        <footer className="bg-[#0a0a0a] text-[#f6f7ec]/70 py-10 text-center border-t border-white/10">
          <p>© {new Date().getFullYear()} AIO — All In One Technical Solutions. Built with care.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
