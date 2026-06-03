import { useRef } from 'react'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { experiences, skills, languages } from '../data/content'
import { useDarkMode } from "../context/ThemeContext";

export default function About() {
  const pageRef = useRef(null)
  const { darkMode } = useDarkMode();
  useReveal(pageRef)

  const handleCV = () => {
    const baseUrl = import.meta.env.BASE_URL
    window.open(`${baseUrl}/assets/CV_Jade_Larivaille.pdf`.replace(/\/+/g, '/'), '_blank')
  }

  return (
    <div ref={pageRef} className="page-enter">
      {/* ── Bio ── */}
      <section className="px-6 md:px-12 pt-32 pb-24">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-green dark:text-bright-green mb-3">
          <span className="w-6 h-px bg-bright-green" />
          About me
        </div>
        <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] text-almost-black dark:text-almost-white mb-12">
          Design graphique, ergonomie cognitive<br />&amp; développement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Bio text */}
          <div className="reveal space-y-5 font-body text-base leading-relaxed text-[#3a4a42] dark:text-white/50">
            <p>
              Passionnée par le développement web et le design d'interfaces, je suis actuellement en 2ème année à l'École Nationale Supérieure de Cognitique.
            </p>
            <p>
              Ma formation centrée sur l'utilisateur et les interfaces Homme-Machine me permet de développer mes connaissances techniques ainsi que ma sensibilité à l'accessibilité des interfaces.
            </p>
            <p>
              J'aime perfectionner autant la technique via le{' '}
              <span className="text-dark-green dark:text-bright-green font-semibold">développement</span>{' '}
              que la{' '}
              <span className="text-dark-orange dark:text-bright-orange font-semibold">créativité</span>{' '}
              dans la conception de mes projets.
            </p>
            <div className="flex gap-4 pt-2 flex-wrap">
              <button
                onClick={handleCV}
                className="inline-flex items-center gap-2.5 bg-almost-black dark:bg-almost-white text-white dark:text-almost-black font-body text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                Voir mon CV
                <ArrowIcon />
              </button>
              <a
                href="https://github.com/hepsyl"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-dark-green dark:border-bright-green text-dark-green dark:text-bright-green font-body text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-dark-green dark:hover:bg-bright-green hover:text-white hover:-translate-y-0.5"
              >
                Voir mon GitHub
              </a>
            </div>
          </div>

          {/* Experience */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-orange dark:text-bright-orange mb-6">
              <span className="w-6 h-px bg-dark-orange" />
              Expérience
            </div>
            <div className="divide-y divide-black/8 dark:divide-white/8 border-t border-black/8 dark:border-white/8">
              {experiences.map((e) => (
                <div key={e.company + e.role} className="py-6">
                  <div className="flex justify-between items-start mb-1.5 gap-4">
                    <span className="font-heading font-semibold text-[0.9rem] text-almost-black dark:text-almost-white">{e.company}</span>
                    <span className="text-[0.68rem] font-medium text-bright-green bg-bright-green/10 px-2.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">{e.date}</span>
                  </div>
                  <p className="text-[0.78rem] font-semibold text-bright-orange tracking-wide mb-2">{e.role}</p>
                  <ul className="space-y-1">
                    {e.tasks.map((t) => (
                      <li key={t} className="relative pl-4 text-[0.8rem] text-[#4a5a52] dark:text-white/40">
                        <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-bright-green" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="relative bg-forest-green px-6 md:px-12 py-24 overflow-hidden lj-texture">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(24,143,126,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-green/70 mb-3">
              <span className="w-6 h-px bg-bright-green/70" />
              Compétences
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] text-almost-white">
              Mes outils<br />&amp; technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard title="Développement Web" emoji="🖥️" accent="green">
              {[...skills.dev, ...skills.tools].map(t => <Tag key={t} color="green">{t}</Tag>)}
            </SkillCard>
            <SkillCard title="Design & UX/UI" emoji="🎨" accent="orange">
              {[...skills.design, ...skills.other].map(t => <Tag key={t} color="orange">{t}</Tag>)}
            </SkillCard>
          </div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="px-6 md:px-12 py-24 bg-almost-white dark:bg-forest-green">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-green dark:text-bright-green mb-8">
          <span className="w-6 h-px bg-bright-green" />
          Langues
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {languages.map((l) => (
            <div key={l.name} className="reveal bg-almost-white dark:bg-white/4 rounded-2xl p-7 border border-black/8 dark:border-white/8 transition-all duration-300 hover:-translate-y-1">
              <p className="font-heading font-semibold text-[1.1rem] text-almost-black dark:text-almost-white mb-1">{l.name}</p>
              <p className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-2 text-bright-green">{l.level}</p>
              <p className="font-body text-[0.78rem] text-[#6a7a72] dark:text-white/40 leading-relaxed">{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function SkillCard({ title, emoji, accent, children }) {
  return (
    <div className={`reveal bg-white/4 border border-white/8 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-${accent === 'green' ? 'bright-green' : 'bright-orange'}/40`}>
      <div className={`w-11 h-11 rounded-xl ${accent === 'green' ? 'bg-bright-green/20' : 'bg-bright-orange/20'} flex items-center justify-center text-2xl mb-5`}>{emoji}</div>
      <h3 className="font-heading font-semibold text-[1.1rem] text-almost-white mb-5">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function Tag({ children, color }) {
  const s = {
    green:  'bg-bright-green/20 text-[#4ecfbe] border border-bright-green/30',
    orange: 'bg-bright-orange/15 text-[#f5894e] border border-bright-orange/25',
  }
  return (
    <span className={`inline-block text-[0.72rem] font-semibold px-3 py-1 rounded-full tracking-wide ${s[color]}`}>
      {children}
    </span>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
