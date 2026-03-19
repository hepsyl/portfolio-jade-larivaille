import { useRef } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import SectionDivider from '../components/SectionDivider'
import Footer from '../components/Footer'
import { useReveal } from '../components/useReveal'

export default function Home() {
  const pageRef = useRef(null)
  useReveal(pageRef)

  return (
    <div ref={pageRef}>
      <Hero />
      <SectionDivider variant="go" />
      <Projects />
      <SectionDivider variant="og" />
      <Services />
      <Footer />
    </div>
  )
}
