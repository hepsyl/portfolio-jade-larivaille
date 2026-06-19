import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useDarkMode } from "../context/ThemeContext";

const portals = [
  {
    id: 'work',
    number: '#01',
    title: 'Work',
    desc: 'Projets UX/UI, développement front-end et design de sites web.',
    to: '/work',
    accent: 'green',
  },
  {
    id: 'craft',
    number: '#02',
    title: 'Craft',
    desc: 'Identités visuelles, logos, motion design et explorations graphiques.',
    to: '/craft',
    accent: 'orange',
  },
  {
    id: 'lab',
    number: '#03',
    title: 'Lab',
    desc: 'Expériences 3D, prototypes techniques et projets expérimentaux.',
    to: '/lab',
    accent: 'green',
  },
]

export default function Home() {
  const pageRef = useRef(null)
  const navigate = useNavigate()
  const { darkMode } = useDarkMode();
  useReveal(pageRef)

  return (
    <div ref={pageRef} className="page-enter grid-pattern">
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(24,143,126,0.12) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -right-20 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(24,143,126,0.08), transparent 70%)' }} />
        <div className="flex justify-between">
        <div className="relative z-10 max-w-3xl">
          <div className="hero-anim animate-fade-up-1 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-bright-green mb-7">
            <span className="w-7 h-px bg-bright-green" />
            Disponible pour collaboration
          </div>

          <h1 className="hero-anim animate-fade-up-2 font-heading font-semibold text-[clamp(3rem,6vw,5.5rem)] leading-[1.04] tracking-tight text-almost-black dark:text-almost-white mb-6">
            Creative<br />
            <span className="text-bright-orange">Technologist</span>
          </h1>

          <p className="hero-anim animate-fade-up-3 font-body text-base text-[#4a5a52] dark:text-white/50 leading-relaxed max-w-md mb-10">
            Curieuse de tout, je construis des interfaces intuitves et esthétiques, experimentant entre design et code.
          </p>

          <div className="hero-anim animate-fade-up-4 flex gap-3 flex-wrap">
            <button
              onClick={() => document.getElementById('portals')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-almost-black dark:bg-almost-white text-almost-white dark:text-almost-black font-body text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,9,3,0.15)]"
            >
              Voir mes projets
              <ArrowIcon />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-body text-sm font-semibold px-7 py-3.5 rounded-full border border-black/20 dark:border-white/20 text-almost-black dark:text-almost-white transition-all hover:border-bright-green hover:text-bright-green hover:-translate-y-0.5"
            >
              Me contacter
            </button>
          </div>
        </div>
          <div id="mouse-scroll" className="flex w-full flex-col items-center">
              <span class="down-arrow-1"></span>
              <span class="down-arrow-2"></span>
              <span class="down-arrow-3"></span>
          </div>
        </div>
      </section>

      {/* ── Portals ── */}
      <section id="portals" className="px-6 md:px-12 py-24 bg-almost-white dark:bg-forest-green">
        <div className="reveal mb-4">
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-orange dark:text-bright-orange mb-3">
            <span className="w-6 h-px bg-bright-orange" />
            Portails
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portals.map((p) => (
            <PortalCard key={p.id} portal={p} navigate={navigate} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function PortalCard({ portal, navigate }) {
  return (
    <div
      onClick={() => navigate(portal.to)}
      className="reveal group relative overflow-hidden draw p-8 min-h-[260px]
        border border-black/8 dark:border-white/8
        bg-almost-white dark:bg-white/3
        cursor-none flex flex-col justify-between
        transition-all duration-300 hover:-translate-y-1
        hover:shadow-[0_16px_40px_rgba(0,9,3,0.08)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Number + arrow */}
      <div className="flex items-start justify-between">
        <span className="font-body text-sm font-semibold tracking-[0.16em] text-[#9aaa9e] dark:text-white/30">
          {portal.number}
        </span>
        <span className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center
          transition-all duration-300 group-hover:border-bright-green group-hover:bg-bright-green group-hover:text-white
          text-almost-black dark:text-white/50">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </div>

      {/* Title + desc */}
      <div>
        <h3 className="font-heading font-semibold text-[2rem] tracking-tight text-almost-black dark:text-almost-white mb-2 leading-none">
          {portal.title}
        </h3>
        <p className="font-body text-[0.83rem] leading-relaxed text-[#5a6a62] dark:text-white/40">
          {portal.desc}
        </p>
      </div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
