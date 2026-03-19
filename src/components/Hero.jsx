import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/about')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-12 pt-24 pb-12 px-12 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(24,143,126,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />
      <div className="absolute -right-20 -bottom-20 w-[520px] h-[520px] rounded-full bg-bright-green/10 z-0 animate-float-blob" />
      <div className="absolute left-[30%] top-[10%] w-[300px] h-[300px] rounded-full bg-bright-orange/8 z-0 animate-float-blob2" />

      <div className="relative z-10">
        <div className="hero-anim animate-fade-up-1 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-bright-green mb-7">
          <span className="w-7 h-px bg-bright-green" />
          Disponible pour collaboration
        </div>

        <h1 className="hero-anim animate-fade-up-2 font-heading font-semibold text-[clamp(3rem,5.5vw,5.2rem)] leading-[1.06] tracking-tight text-almost-black mb-5">
          <span className="text-bright-orange" data-cursor="orange">Design graphique</span> &<br />
          <span className="text-bright-green">Développement web</span>
        </h1>

        <p className="hero-anim animate-fade-up-3 font-body text-base text-[#4a5a52] leading-relaxed max-w-md mb-11">
          Passionnée par le développement web et le design d'interfaces, et étudiante à l'École Nationale Supérieure de Cognitique. Je crée des interfaces accessibles, intuitives et esthétiques.
        </p>

        <div className="hero-anim animate-fade-up-4 flex gap-3 items-center flex-wrap">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-bright-green text-almost-white font-body text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-dark-green hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(24,143,126,0.25)] hover:shadow-[0_8px_28px_rgba(24,143,126,0.35)]"
          >
            Découvrir mes services
            <ArrowIcon />
          </button>
          <button
            onClick={goToContact}
            className="inline-flex items-center gap-2 text-almost-black font-body text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full border border-black/25 transition-all duration-200 hover:border-bright-orange hover:text-bright-orange hover:-translate-y-0.5"
          >
            Me contacter
          </button>
        </div>
      </div>

      <div className="relative z-10 hidden md:flex justify-center items-center hero-anim animate-fade-in">
        <div className="relative bg-almost-black rounded-3xl p-11 w-80 overflow-hidden" data-cursor="white">
          <div className="absolute -top-15 -right-15 w-50 h-50 rounded-full bg-bright-green/20" />
          <p className="font-body text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-bright-green mb-3">Profil</p>
          <p className="font-heading font-semibold text-2xl text-almost-white mb-5">Jade Larivaille</p>
          <div className="flex flex-wrap gap-2 mb-7">
            {['Développement', 'UX / UI Design', 'React', 'Figma', 'TypeScript'].map((s, i) => (
              <span
                key={s}
                data-cursor={i % 2 === 1 ? 'orange' : undefined}
                className={`text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wide ${
                  i % 2 === 1
                    ? 'bg-bright-orange/20 text-[#f5894e]'
                    : 'bg-bright-green/20 text-[#4ecfbe]'
                }`}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-baseline gap-1.5 mb-1.5">
            <span className="font-heading font-semibold text-4xl text-almost-white">2</span>
            <span className="text-xs text-white/50">ans d'expérience</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading font-semibold text-4xl text-almost-white">4+</span>
            <span className="text-xs text-white/50">projets réalisés</span>
          </div>
          <div className="absolute bottom-6 right-7 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-bright-orange" />
            <div className="w-2 h-2 rounded-full bg-bright-green" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
