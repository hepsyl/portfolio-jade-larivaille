import { useNavigate } from 'react-router-dom'

const tagColors = {
  dev:    'bg-bright-green/15 text-dark-green dark:bg-bright-green/20 dark:text-bright-green',
  design: 'bg-bright-orange/10 text-dark-orange dark:bg-bright-orange/15 dark:text-bright-orange',
  other:  'bg-black/7 text-[#4a5a52] dark:bg-white/8 dark:text-white/50',
}

export function ProjectCard({ project }) {
  const navigate = useNavigate()
  const basePath = project.portal === 'lab' ? '/lab' : '/work'

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="reveal group bg-almost-white dark:bg-white/4 border border-black/8 dark:border-white/8
        rounded-2xl overflow-hidden cursor-none
        transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,9,3,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
    >
      <div className="relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-[220px] bg-gradient-to-br from-bright-green/20 to-bright-orange/10 flex items-center justify-center">
            <span className="font-heading font-semibold text-almost-black/10 dark:text-white/10 text-5xl tracking-tighter">
              {project.title}
            </span>
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

      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(t => (
            <span key={t.label} className={`text-[0.65rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full ${tagColors[t.type]}`}>
              {t.label}
            </span>
          ))}
        </div>
        <h3 className="font-heading font-semibold text-almost-black dark:text-almost-white text-[1.3rem] mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-[0.83rem] leading-[1.7] text-[#4a5a52] dark:text-white/50 mb-4">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="text-[0.67rem] font-semibold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/8 text-[#4a5a52] dark:text-white/40 tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
