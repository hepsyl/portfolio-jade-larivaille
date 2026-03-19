import { useRef } from 'react'
import SectionDivider from '../components/SectionDivider'
import Footer from '../components/Footer'
import { useReveal } from '../components/useReveal'

const experiences = [
  {
    company: 'EENOV',
    role: 'Freelance UI Designer',
    date: 'Depuis sept. 2025',
    tasks: [
      'Conception de prototypes Figma de sites web',
      "Création d'identités graphiques",
    ],
  },
  {
    company: 'EENOV',
    role: 'Stage UX Design & Front-end',
    date: 'Juin / Juillet 2025',
    tasks: [
      "Conception de prototypes Figma d'un logiciel et de deux sites web vitrine",
      'Développement front-end du logiciel Izired',
    ],
  },
  {
    company: 'i2c - Junior Entreprise',
    role: 'Responsable Communication',
    date: 'En cours',
    tasks: [
      'Gestion des réseaux sociaux et de la communication',
      "Organisation d'évènements (forums, ateliers, conférences…)",
    ],
  },
]

const devTags  = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', '.NET / C#', 'Twig', 'Python']
const toolTags = ['Git / Github', 'VS Code']
const designTags = ['Figma', 'UX Design', 'UI Design', 'Prototypage', 'Identité graphique', 'Motion Design', 'Jitter']
const otherTags  = ['Canva', 'Maya 3D']

const languages = [
  { name: 'Français', level: 'Natif',    note: 'Langue maternelle',                          color: 'text-bright-green' },
  { name: 'Anglais',  level: 'Bilingue', note: 'Cambridge C1 (2022) · TOEIC 990/990 (2026)', color: 'text-bright-orange' },
  { name: 'Espagnol', level: 'B1 – B2',  note: 'Niveau intermédiaire avancé',                color: 'text-bright-green' },
]

export default function About() {
  const pageRef = useRef(null)
  useReveal(pageRef)

  function handleClick() {
      const baseUrl = import.meta.env.BASE_URL;
      const cleanPath = `${baseUrl}//assets/CV_Jade_Larivaille.pdf`.replace(/\/+/g, '/');
      window.open(cleanPath, '_blank');
    }

  return (
    <div ref={pageRef}>
      <section id="about" className="px-12 pt-32 pb-24">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-green mb-3">
          <span className="w-6 h-px bg-bright-green" />
          Qui suis-je ?
        </div>
        <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] mb-12">
          Design graphique, ergonomie cognitive<br />&amp; développement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="reveal space-y-5 font-body text-base leading-relaxed text-[#3a4a42]">
            <p>
              Passionnée par le développement web et le design d'interfaces, je suis actuellement en 2ème année à l'École Nationale Supérieure de Cognitique.
            </p>
            <p>
              Ma formation centrée sur l'utilisateur et les interfaces Homme-Machine me permet de développer mes connaissances techniques ainsi que ma sensibilité à l'accessibilité des interfaces que je crée et leur intuitivité.
            </p>
            <p>
              J'aime perfectionner autant la technique via le{' '}
              <span className="text-bright-green font-semibold">développement</span>{' '}
              que la{' '}
              <span className="text-bright-orange font-semibold" data-cursor="orange">créativité</span>{' '}
              dans la conception de mes projets.
            </p>
            <div className="flex gap-4 py-2 flex-row">
              <button
                onClick={() => handleClick()}
                className="inline-flex items-center gap-2.5 bg-almost-black text-white font-body text-sm font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,9,3,0.15)]"
              >
                Voir mon CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href={"https://github.com/hepsyl"}
                className="inline-flex items-center gap-2.5 border-dark-green border-2 text-dark-green font-body text-sm font-semibold px-8 py-4 rounded-full transition-all hover:bg-dark-green hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,9,3,0.15)]"
              >
                Voir mon GitHub
              </a>   
            </div>       
          </div>

          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-orange mb-6">
              <span className="w-6 h-px bg-bright-orange" />
              Expérience
            </div>
            <div className="divide-y divide-bright-green/15 border-t border-bright-green/15">
              {experiences.map((e) => (
                <div key={e.company + e.role} className="py-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-heading font-semibold text-[0.9rem] text-almost-black">{e.company}</span>
                    <span className="text-[0.72rem] font-medium text-bright-green bg-bright-green/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">{e.date}</span>
                  </div>
                  <p className="text-[0.82rem] font-semibold text-bright-orange tracking-wide mb-2.5">{e.role}</p>
                  <ul className="space-y-1">
                    {e.tasks.map((t) => (
                      <li key={t} className="relative pl-4 text-[0.82rem] text-[#4a5a52]">
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

      <section id="skills" className="relative bg-forest-green px-12 py-24 overflow-hidden " data-cursor="white">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(24,143,126,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-green/90 mb-3">
              <span className="w-6 h-px bg-bright-green/90" />
              Compétences
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] text-almost-white">
              Mes outils<br />&amp; technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="reveal group bg-white/4 border border-white/8 rounded-2xl p-9 backdrop-blur-sm transition-all duration-300 hover:border-bright-green/40 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-bright-green/20 flex items-center justify-center text-2xl mb-5">🖥️</div>
              <h3 className="font-heading font-semibold text-[1.1rem] text-almost-white mb-1.5">Développement Web</h3>
              <p className="font-body text-[0.8rem] text-white/50 mb-5 leading-relaxed">Technologies front-end et frameworks pour des interfaces robustes.</p>
              <div className="flex flex-wrap gap-2">
                {devTags.map(t => <Tag key={t} color="green">{t}</Tag>)}
                {toolTags.map(t => <Tag key={t} color="neutral">{t}</Tag>)}
              </div>
            </div>

            <div className="reveal group bg-white/4 border border-white/8 rounded-2xl p-9 backdrop-blur-sm transition-all duration-300 hover:border-bright-orange/40 hover:-translate-y-1" data-cursor="orange">
              <div className="w-11 h-11 rounded-xl bg-bright-orange/20 flex items-center justify-center text-2xl mb-5">🎨</div>
              <h3 className="font-heading font-semibold text-[1.1rem] text-almost-white mb-1.5">Design & UX/UI</h3>
              <p className="font-body text-[0.8rem] text-white/50 mb-5 leading-relaxed">Prototypage, identités visuelles et expérience utilisateur.</p>
              <div className="flex flex-wrap gap-2">
                {designTags.map(t => <Tag key={t} color="orange">{t}</Tag>)}
                {otherTags.map(t => <Tag key={t} color="neutral">{t}</Tag>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="languages" className="bg-[#f5f7f5] px-12 py-24">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-green mb-3">
          <span className="w-6 h-px bg-bright-green" />
          Langues
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {languages.map((l) => (
            <div key={l.name} className="reveal bg-almost-white rounded-2xl p-7 border border-bright-green/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(24,143,126,0.1)]">
              <p className="font-heading font-semibold text-[1.1rem] text-almost-black mb-1">{l.name}</p>
              <p className={`text-[0.75rem] font-semibold tracking-[0.08em] uppercase mb-2 ${l.color}`}>{l.level}</p>
              <p className="font-body text-[0.78rem] text-[#6a7a72] leading-relaxed">{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative bg-almost-black px-12 py-24 overflow-hidden" data-cursor="white">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-bright-green/15 -right-48 -top-48" style={{ background: 'radial-gradient(circle, rgba(24,143,126,0.15), transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full left-24 -bottom-36" style={{ background: 'radial-gradient(circle, rgba(240,95,5,0.1), transparent 70%)' }} />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-orange mb-3">
              <span className="w-6 h-px bg-bright-orange" />
              Contact
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] text-almost-white mb-4">
              Intéressé·e par<br />une collaboration ?
            </h2>
            <p className="font-body text-[0.95rem] leading-relaxed text-white/70 max-w-sm">
              N'hésitez pas à me contacter pour discuter de vos projets, que ce soit pour du développement front-end ou du design UI/UX.
            </p>
          </div>

          <div className="reveal flex flex-col gap-3.5 mt-10 md:mt-0">
            <a
              href="https://www.linkedin.com/in/jade-larivaille-ui-ux"
              target="_blank"
              rel="noreferrer"
              className="flex w-80 items-center gap-3.5 px-2 py-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-bright-green/50 hover:bg-bright-green/30 hover:translate-x-1.5 group"
            >
              <div className="w-10 h-10 rounded-l-xl flex items-center justify-center text-lg flex-shrink-0">💼</div>
              <div>
                <p className="font-body text-[0.85rem] font-semibold text-almost-white tracking-wide">LinkedIn</p>
                <p className="font-body text-[0.72rem] text-white/70">Jade Larivaille</p>
              </div>
            </a>
            <a
              href="https://www.malt.fr/profile/jadelarivaille"
              target="_blank"
              rel="noreferrer"
              className="flex w-80 items-center gap-3.5 px-2 py-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-bright-green/50 hover:bg-bright-green/30 hover:translate-x-1.5 group"
            >
              <div className="w-10 h-10 rounded-l-xl flex items-center justify-center text-lg flex-shrink-0">🌐</div>
              <div>
                <p className="font-body text-[0.85rem] font-semibold text-almost-white tracking-wide">Profil Malt</p>
                <p className="font-body text-[0.72rem] text-white/40">Plateforme de freelance</p>
              </div>
            </a>
            <a
              href="mailto:jlarivaille@ensc.fr?subject=[%Prise%de%contact%]"
              target="_blank"
              rel="noreferrer"
              className="flex w-80 items-center gap-3.5 px-2 py-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-bright-green/50 hover:bg-bright-green/30 hover:translate-x-1.5 group"
            >
              <div className="w-10 h-10 rounded-l-xl flex items-center justify-center text-lg flex-shrink-0">📩</div>
              <div>
                <p className="font-body text-[0.85rem] font-semibold text-almost-white tracking-wide">Envoyez moi un mail !</p>
                <p className="font-body text-[0.72rem] text-white/40">jlarivaille@ensc.fr</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Tag({ children, color }) {
  const styles = {
    green:   'bg-bright-green/20 text-[#4ecfbe] border border-bright-green/30',
    orange:  'bg-bright-orange/15 text-[#f5894e] border border-bright-orange/25',
    neutral: 'bg-white/8 text-white/60 border border-white/10',
  }
  return (
    <span className={`inline-block text-[0.72rem] font-semibold px-3 py-1 rounded-full tracking-wide transition-transform hover:-translate-y-0.5 ${styles[color]}`}>
      {children}
    </span>
  )
}
