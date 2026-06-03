import { useRef } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { workProjects } from '../data/content'
import { useDarkMode } from "../context/ThemeContext";

export default function Work() {
  const { darkMode } = useDarkMode();
  const pageRef = useRef(null)
  useReveal(pageRef)

  return (
    <div ref={pageRef} className="page-enter min-h-screen grid-pattern">
      <section className="px-6 md:px-12 pt-32 pb-24">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-orange dark:text-bright-orange mb-3">
            <span className="w-6 h-px bg-bright-orange" />
            #01
          </div>
          <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.05] text-almost-black dark:text-almost-white mb-4">
            Work
          </h1>
          <p className="font-body text-base text-[#5a6a62] dark:text-white/40 max-w-lg leading-relaxed">
            Projets UX/UI, développement front-end et design de sites web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workProjects.map(p => (
            <ProjectCard key={p.id} project={{ ...p, portal: 'work' }} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
