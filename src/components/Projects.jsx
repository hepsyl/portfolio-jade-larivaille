import { useNavigate } from 'react-router-dom'
import iziredImg    from '../assets/izired_cover.png'
import fifaacImg    from '../assets/fifaac_hero.png'
import compagnonImg from '../assets/compagnon_cover.png'
import salsImg      from '../assets/sals_cover.png'
import octotuneImg from '../assets/octotune_cover.png'
import ensemencImg from '../assets/ensemenc_cover.png'

export const allProjects = [
  {
    id: 'izired',
    filter: ['dev', 'design'] ,
    title: 'IZIRED',
    tags: [
      { label: 'Logiciel',     type: 'dev'    },
      { label: 'UX Design',    type: 'design' },
      { label: 'UI Design',    type: 'design' },
      { label: 'Site vitrine', type: 'dev'    },
    ],
    desc: "Création d'une nouvelle direction artistique d'une plateforme de valorisation et de simulation de projets immobiliers. Développement du front-end du logiciel et prototypage d'un nouveau site vitrine sur Figma.",
    tech: ['TypeScript', 'React', 'Figma'],
    image: iziredImg,
    cursorType: null,
  },
  {
    id: 'fifaac',
    filter: ['design'],
    title: 'FIFAAC 2025',
    tags: [
      { label: 'UX Design', type: 'design' },
      { label: 'UI Design', type: 'design' },
      { label: 'Site web',  type: 'other'  },
    ],
    desc: "Direction artistique et conception de la maquette du site web du Festival International du Film d'Architecture et des Aventures Constructives.",
    tech: ['Figma', 'UX Research'],
    image: fifaacImg,
    cursorType: 'orange',
  },
  {
    id: 'compagnon',
    filter: ['dev', 'design'] ,
    title: 'Compagnon Virtuel',
    tags: [
      { label: 'Programmation', type: 'dev'    },
      { label: '3D',            type: 'design' },
      { label: 'CCU',           type: 'other'  },
    ],
    desc: "Création et test d'un compagnon virtuel 3D pour aider les patients en rééducation motrice post-AVC. Implémentation dans un jeu du Simon.",
    tech: ['Modélisation 3D', 'Maya', 'CCU'],
    image: compagnonImg,
    cursorType: null,
  },
    {
    id: 'octotune',
    filter: ['design', 'dev'],
    title: "Octo'Tune",
    tags: [
      { label: 'UX Design', type: 'design' },
      { label: 'UI Design', type: 'design' },
      { label: 'Application mobile',  type: 'dev'  },
      { label: 'UX Research',  type: 'other'  },
    ],
    desc: "Projet transpromotions (1ère et 2ème années) de création d’une application pour la gestion du club musique de l’ENSC : réservation de salle, planning, évènements à venir, etc.",
    tech: ['Figma', 'React', 'JavaScript', 'NodeJS', 'CSS'],
    image: octotuneImg,
    cursorType: 'null',
  },
  {
    id: 'sciencealasource',
    filter: ['design'],
    title: 'Science à la source',
    tags: [
      { label: 'UX Design', type: 'design' },
      { label: 'UI Design', type: 'design' },
      { label: 'Site web',  type: 'other'  },
    ],
    desc: "Prototypage haute fidélité d'un blog recensant les contenus publiés par l'Université de Bordeaux.",
    tech: ['Figma', 'UI Design'],
    image: salsImg,
    cursorType: 'orange',
  },
    {
    id: 'ensemenc',
    filter: ['dev'],
    title: 'ENSemenC',
    tags: [
      { label: 'Programmation Orientée Objet', type: 'dev' },
      { label: 'Jeu', type: 'dev' },
    ],
    desc: "Projet de fin de semestre : jeu de simulation de potager en programmation orientée objet.",
    tech: ['C#', 'POO'],
    image: ensemencImg,
    cursorType: 'green',
  },
]

const tagColors = {
  dev:    'bg-bright-green/12 text-dark-green',
  design: 'bg-bright-orange/10 text-dark-orange',
  other:  'bg-black/7 text-[#4a5a52]',
}

export function ProjectCard({ p, navigate }) {
  return (
    <div
      data-cursor={p.cursorType || undefined}
      onClick={() => navigate(`/project/${p.id}`)}
      className="reveal group bg-almost-white border border-black/8 rounded-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,9,3,0.1)] cursor-none"
    >
      <div className="proj-img relative overflow-hidden">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-[240px] bg-gradient-to-br ${p.gradient} relative flex items-center justify-center`}>
            <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 1px,transparent 1px,transparent 20px)' }} />
            <span className="relative z-10 font-heading font-semibold text-white/15 text-6xl tracking-tighter">{p.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-almost-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="font-body text-sm font-semibold text-white tracking-wide flex items-center gap-2">
            Voir le projet
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {p.tags.map(t => (
            <span key={t.label} className={`text-[0.67rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full ${tagColors[t.type]}`}>
              {t.label}
            </span>
          ))}
        </div>
        <h3 className="font-heading font-semibold text-almost-black mb-2.5 leading-tight text-[1.4rem]">{p.title}</h3>
        <p className="font-body text-[0.83rem] leading-[1.7] text-[#4a5a52] mb-5">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map(t => (
            <span key={t} className="text-[0.67rem] font-semibold px-2.5 py-0.5 rounded-full bg-black/5 text-[#4a5a52] tracking-wide">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const navigate = useNavigate()
  const featured = allProjects.slice(0, 4)

  return (
    <section id="projects" className="px-6 md:px-12 py-24">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-14">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-orange mb-3">
            <span className="w-6 h-px bg-bright-orange" />
            Mes projets
          </div>
          <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1]">
            Sélection de<br />réalisations récentes
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map(p => <ProjectCard key={p.id} p={p} navigate={navigate} />)}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2.5 bg-almost-black text-white font-body text-sm font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,9,3,0.15)]"
        >
          Voir tous mes projets ({allProjects.length})
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
