import { Routes, Route } from 'react-router-dom'
import {ThemeProvider} from './context/ThemeContext'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Work from './pages/Work'
import Craft from './pages/Craft'
import Lab from './pages/Lab'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <Routes>
        <Route path=""         element={<Home />}  />
        <Route path="work"     element={<Work />}  />
        <Route path="craft"    element={<Craft />} />
        <Route path="lab"      element={<Lab />}   />
        <Route path="about"    element={<About />} />
        <Route path="project/:id" element={<ProjectDetail />} />
      </Routes>
    </ThemeProvider>
  )
}
