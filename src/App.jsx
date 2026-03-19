import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'
import AllProjects from './pages/AllProjects'
import Sandbox from './pages/Sandbox'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <Routes>
        <Route path=""            element={<Home />} />
        <Route path="about"       element={<About />} />
        <Route path="projects"    element={<AllProjects />} />
        <Route path="project/:id" element={<ProjectDetail />} />
        <Route path="sandbox"     element={<Sandbox />} />
      </Routes>
    </>
  )
}
