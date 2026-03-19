import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useReveal } from '../components/useReveal'
import { allProjects, ProjectCard } from '../components/Projects'

const FILTERS = [
  { key: 'tous',     label: 'Tous'     },
  { key: 'dev',      label: 'Dev'      },
  { key: 'design',   label: 'Design'   },
]

export default function AllProjects() {
  const navigate = useNavigate()
  const pageRef  = useRef(null)
  const [active, setActive] = useState('tous')
  useReveal(pageRef)

  const filtered = active === 'tous'
    ? allProjects
    : allProjects.filter(p => p.filter.includes(active))

  const count = (key) =>
    key === 'tous' ? allProjects.length : allProjects.filter(p => p.filter.includes(key)).length

  return (
    <div ref={pageRef} className="min-h-screen">
      <section className="px-6 md:px-12 pt-32 pb-24">

        <div className="mb-14">
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-orange mb-3">
            <span className="w-6 h-px bg-bright-orange" />
            Portfolio
          </div>
          <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.05] mb-10">
            Tous mes projets
          </h1>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`
                  font-body text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-200
                  ${active === f.key
                    ? 'bg-almost-black text-white shadow-[0_4px_14px_rgba(24,143,126,0.25)]'
                    : 'bg-transparent text-[#4a5a52] border-black/15 hover:border-black/50'
                  }
                `}
              >
                {f.label}
                <span className={`ml-1.5 text-[0.7rem] ${active === f.key ? 'opacity-70' : 'opacity-40'}`}>
                  {count(f.key)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map(p => (
              <ProjectCard key={p.id} p={p} navigate={navigate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-[#4a5a52] font-body">
            Aucun projet dans cette catégorie pour le moment.
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
