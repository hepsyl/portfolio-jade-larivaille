import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDarkMode } from "../context/ThemeContext";
import LogoELJI_dark from '../../public/Logo_ELJI.png'
import LogoELJI_white from '../../public/Logo_ELJI_white.png'
import DarkModeToggler from '../context/DarkModeToggler'

const links = [
  { label: 'Home',     to: '/'      },
  { label: 'Work',     to: '/work'  },
  { label: 'Lab',      to: '/lab'   },
  { label: 'Craft',    to: '/craft' },
  { label: 'About me', to: '/about' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { darkMode } = useDarkMode();

  const isActive = (link) => {
    if (link.to === '/') return location.pathname === '/'
    return location.pathname.startsWith(link.to)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4
      bg-almost-white/90 dark:bg-forest-green/95 backdrop-blur-lg
      border-b border-black/5 dark:border-white/5
      transition-colors duration-400">

      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-heading font-semibold text-[1.1rem] tracking-tight text-almost-black dark:text-almost-white"
      >
        {!darkMode && <img src={LogoELJI_dark} className="h-[4vh] w-auto"/>}
        {darkMode && <img src={LogoELJI_white} className="h-[4vh] w-auto"/>}
      </Link>

      <div className="flex items-center gap-6 md:gap-8">
        {links.map(link => (
          <Link
            key={link.label}
            to={link.to}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`
              relative font-body text-sm tracking-wide transition-colors duration-200
              after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:bg-bright-green
              after:transition-all after:duration-300
              ${isActive(link)
                ? 'text-almost-black dark:text-almost-white font-medium after:w-full'
                : 'text-[#5a6a62] dark:text-white/50 hover:text-almost-black dark:hover:text-almost-white after:w-0 hover:after:w-full'
              }
            `}
          >
            {link.label}
          </Link>
        ))}

        <DarkModeToggler />
      </div>
    </nav>
  )
}
