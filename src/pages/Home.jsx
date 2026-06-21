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
    id: 'lab',
    number: '#02',
    title: 'Lab',
    desc: '3D, expériences immersives, projets techniques... mon lieu d\'expérimentation.',
    to: '/lab',
    accent: 'green',
  },
  {
    id: 'craft',
    number: '#03',
    title: 'Craft',
    desc: 'Identités visuelles, logos, motion design et explorations graphiques.',
    to: '/craft',
    accent: 'orange',
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
          <div className="hero-anim animate-fade-up-1 inline-flex items-center gap-2 text-[0.6rem] md:text-xs font-semibold tracking-[0.18em] uppercase text-bright-green mb-7">
            <span className="w-4 md:w-7 h-px bg-bright-green" />
            Disponible pour collaboration
          </div>

          <h1 className="hero-anim animate-fade-up-2 font-heading font-semibold text-[3rem] md:text-[5.5rem] leading-[1.04] tracking-tight text-almost-black dark:text-almost-white mb-6">
            Creative<br />
            <span className="text-bright-orange">Technologist</span>
          </h1>

          <p className="hero-anim animate-fade-up-3 font-body text-base text-almost-black/90 dark:text-white/50 leading-relaxed max-w-md mb-10">
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
        <div className="flex">
          <div id="mouse-scroll" className="absolute left-60 flex w-full flex-col items-center mt-20">
              <span class="down-arrow-1"></span>
              <span class="down-arrow-2"></span>
              <span class="down-arrow-3"></span>
          </div>
          <div class="absolute right-40 z-10 hidden md:flex justify-center items-center hero-anim animate-fade-in">
            <div class="relative bg-almost-black rounded-3xl p-11 w-80 overflow-hidden" data-cursor="white">
              <div class="absolute -top-15 -right-15 w-50 h-50 rounded-full bg-bright-green/20"></div>
              <p class="font-body text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-bright-green mb-3">Profil</p>
              <p class="font-heading font-semibold text-2xl text-almost-white mb-5">Jade Larivaille</p>
              <div class="flex flex-wrap gap-2 mb-7">
                <span class="text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wide bg-bright-green/20 text-[#4ecfbe]">Développement</span>
                <span data-cursor="orange" class="text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wide bg-bright-orange/20 text-[#f5894e]">UX / UI Design</span>
                <span class="text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wide bg-bright-green/20 text-[#4ecfbe]">React</span>
                <span data-cursor="orange" class="text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wide bg-bright-orange/20 text-[#f5894e]">Figma</span>
                <span class="text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wide bg-bright-green/20 text-[#4ecfbe]">TypeScript</span>
              </div>
              <div class="flex items-center gap-1.5 mb-1.5">
                <span class="font-heading font-semibold text-4xl text-almost-white">3</span>
                <span class="text-xs text-white/80">ème année à l'Ecole Nationale Supérieure de Cognitique (ENSC)</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-heading font-semibold text-4xl text-almost-white">6+</span>
                <span class="text-xs text-white/80">projets réalisés</span>
                </div>
              <div class="absolute bottom-6 right-7 flex gap-2">
                <div class="w-2 h-2 rounded-full bg-bright-orange"></div>
                <div class="w-2 h-2 rounded-full bg-bright-green"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="portals" className="px-6 md:px-12 py-24">
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
        bg-almost-white dark:bg-forest-green
        cursor-none flex flex-col justify-between
        transition-all duration-300 hover:-translate-y-1
        hover:shadow-[0_16px_40px_rgba(0,9,3,0.08)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
    >
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
