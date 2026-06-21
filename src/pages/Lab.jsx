import { useRef } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { labProjects } from '../data/content'
import { useDarkMode } from "../context/ThemeContext";

export default function Lab() {
  const { darkMode } = useDarkMode();
  const pageRef = useRef(null)
  useReveal(pageRef)

  return (
    <div ref={pageRef} className="page-enter min-h-screen grid-pattern">
      <section className="px-6 md:px-12 pt-32 pb-24">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-green dark:text-bright-green mb-3">
            <span className="w-6 h-px bg-bright-green" />
            #03
          </div>
          <h1 className="font-heading font-medium text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.05] text-almost-black dark:text-almost-white mb-4">
            Lab
          </h1>
          <p className="font-body text-base text-[#5a6a62] dark:text-white/75 max-w-lg leading-relaxed">
            Expériences 3D, prototypes techniques et projets expérimentaux : l'endroit où j'explore et je teste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labProjects.map(p => (
            <ProjectCard key={p.id} project={{ ...p, portal: 'lab' }} />
          ))}
        </div>

        {/* Placeholder for future 3D projects */}
        {labProjects.length < 3 && (
          <div className="mt-6 rounded-2xl border border-dashed border-black/15 dark:border-white/10 p-10 text-center">
            <p className="font-body text-sm text-[#9aaa9e] dark:text-white/25">
              D'autres expériences arrivent bientôt — 3D, WebGL, interfaces immersives…
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
