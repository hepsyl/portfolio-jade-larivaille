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
    <div ref={pageRef} className="page-enter grid-pattern">
      <section className="px-6 md:px-12 pt-32 pb-24">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-green dark:text-bright-green mb-3">
          <span className="w-6 h-px bg-bright-green" />
          About me
        </div>
        <h2 className="font-heading font-medium text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] text-almost-black dark:text-almost-white mb-12">
          Design graphique, ergonomie cognitive<br />&amp; développement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="reveal space-y-5 font-body text-base leading-relaxed text-[#3a4a42] dark:text-white/90">
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
                className="inline-flex items-center gap-2.5 border-2 border-dark-green dark:border-bright-green text-dark-green dark:text-almost-white/90 font-body text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-dark-green dark:hover:bg-bright-green hover:text-white hover:-translate-y-0.5"
              >
                Voir mon GitHub
              </a>
            </div>
          </div>

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
                      <li key={t} className="relative pl-4 text-[0.8rem] text-[#4a5a52] dark:text-white/80">
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

      <section className="relative bg-forest-green px-6 md:px-12 py-24 overflow-hidden lj-texture">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(24,143,126,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-green/70 mb-3">
              <span className="w-6 h-px bg-bright-green/70" />
              Compétences
            </div>
            <h2 className="font-heading font-regular text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] text-almost-white">
              Mes outils<br />&amp; technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard title="Développement Web" accent="green">
              {[...skills.dev, ...skills.tools].map(t => <Tag key={t} color="green">{t}</Tag>)}
            </SkillCard>
            <SkillCard title="Design & UX/UI" accent="orange">
              {[...skills.design, ...skills.other].map(t => <Tag key={t} color="orange">{t}</Tag>)}
            </SkillCard>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 bg-almost-white dark:bg-forest-green">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-medium tracking-[0.18em] uppercase text-dark-green dark:text-bright-green mb-8">
          <span className="w-6 h-px bg-bright-green" />
          Langues
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {languages.map((l) => (
            <div key={l.name} className="reveal bg-almost-white dark:bg-white/4 rounded-2xl p-7 border border-black/8 dark:border-white/8 transition-all duration-300 hover:-translate-y-1">
              <p className="font-heading font-medium text-[1.1rem] text-almost-black dark:text-almost-white mb-1">{l.name}</p>
              <p className="text-[0.72rem] font-medium tracking-[0.08em] uppercase mb-2 text-bright-green">{l.level}</p>
              <p className="font-body text-[0.78rem] text-[#6a7a72] dark:text-white/40 leading-relaxed">{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function SkillCard({ title, accent, children }) {
  return (
    <div className={`reveal bg-white/4 border border-white/8 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-${accent === 'green' ? 'bright-green' : 'bright-orange'}/40`}>
      {accent==='green' ?
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#188F7E" class="bi bi-laptop" viewBox="0 0 16 16">
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
      </svg> :
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F05F05" class="bi bi-palette" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"/>
      </svg>
    }
      <h3 className="font-heading font-medium text-[1.1rem] text-almost-white mb-5 mt-4">{title}</h3>
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
