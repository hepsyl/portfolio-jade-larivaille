import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo_elji.png'

const links = [
  { label: 'Accueil',  to: '/',        section: null       },
  { label: 'Services', to: '/',        section: 'services' },
  { label: 'Projets',  to: '/projects', section: null      },
  { label: 'Sandbox',  to: '/sandbox',  section: null      },
  { label: 'Qui suis-je ?', to: '/about',   section: null       },
  { label: 'Contact',  to: '/about',   section: 'contact'  },
]

export default function Navbar() {
  const location = useNavigate ? useLocation() : { pathname: '/' }
  const navigate = useNavigate()

  const handleClick = (e, link) => {
    e.preventDefault()
    if (link.section) {
      navigate(link.to)
      setTimeout(() => {
        document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      navigate(link.to)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isActive = (link) => {
    if (link.section) return false
    if (link.to === '/') return location.pathname === '/'
    return location.pathname.startsWith(link.to)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-almost-white/90 backdrop-blur-lg border-b border-black/5">
      <Link
        to="/"
        onClick={e => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        <img src={logo} alt="LJ Logo" className="h-9 w-auto" />
      </Link>

      <div className="flex items-center gap-6 md:gap-10">
        {links.map(link => (
          <a
            key={link.label}
            href={link.to}
            onClick={e => handleClick(e, link)}
            className={`
              relative font-body text-sm tracking-wide transition-colors duration-200
              after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:bg-bright-green
              after:transition-all after:duration-300
              ${isActive(link)
                ? 'text-almost-black font-medium after:w-full'
                : 'text-[#5a6a62] hover:text-almost-black after:w-0 hover:after:w-full'
              }
            `}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
