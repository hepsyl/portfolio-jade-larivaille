import { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import SectionDivider from '../components/SectionDivider'
import { useReveal } from '../components/useReveal'
import eljiLogo from '../assets/elji_horizontal_logo.png'
import lebowski from '../assets/lebowski.png'
import godotLogo from '../assets/godot_logo.jfif'
import pixel_art from '../assets/pixel_art_assets.png'
import YoutubeLogo from '../assets/youtube_cover.png'
import redes from '../assets/redes.png'
import maisonLeo from '../assets/Maison_Leo_v2.png'
import parallaxe from '../assets/Parallaxe.png'

export const sandboxItems = [
  {
    id: 'elji',
    type: 'pdf',
    label: 'Identité visuelle — ELJI',
    desc: "Création de mon identité personnelle : logotype, palette et charte graphique.",
    tech: ['Figma', 'Identité graphique'],
    image: eljiLogo,
    src: '/assets/Charte_Graphique_ELJI.pdf',
    accent: 'orange',
    isClickable: true,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'parallaxe',
    type: 'image',
    label: 'Parallaxe',
    desc: "Logo fictif — Parallaxe est une marque d'équipement de sports de haute montagne de qualité, destiné aux passionnés et experts, pour les inciter à se dépasser, performer et changer leur vision d'eux-mêmes.",
    tech: ['Figma', 'Logo'],
    image: parallaxe,
    accent: 'orange',
    isClickable: false,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'redes',
    type: 'image',
    label: 'Prototypage écran principal',
    desc: "Prototypage d'un écran d'accueil pour Redes Padel France, mission fictive de test pour un entretien.",
    tech: ['Figma', 'UI Design', 'Mockups'],
    image: redes,
    accent: 'orange',
    isClickable: false,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 'youtube',
    type: 'video',
    label: "Motion Design — pub fictive",
    desc: "Publicité Youtube fictive de 15 secondes, initiation au motion design sous Jitter.",
    tech: ['Jitter', 'Motion Design'],
    image: YoutubeLogo,
    src: 'https://www.youtube.com/watch?v=pAD-u5XveQ0',
    youtubeId: 'pAD-u5XveQ0',
    accent: 'orange',
    isClickable: true,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 'godot',
    type: 'video',
    label: 'Apprentissage Godot',
    desc: "Réalisation d'un jeu mobile 2D en suivant le tutoriel du moteur de jeu Godot.",
    tech: ['Godot', 'GDScript'],
    image: godotLogo,
    src: '/assets/Godot_2D.mp4',
    accent: 'green',
    isClickable: true,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'maison_leo',
    type: 'image',
    label: 'Maison de Léo',
    desc: "Logo fictif pour un artisan de rénovation de meubles anciens.",
    tech: ['Figma', 'Logo'],
    image: maisonLeo,
    accent: 'orange',
    isClickable: false,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'pixel_art',
    type: 'image',
    label: 'Pixel Art',
    desc: "Assets en pixel art pour un casual game de crochet, un de mes hobbies favoris.",
    tech: ['Pixel Art'],
    image: pixel_art,
    accent: 'orange',
    isClickable: false,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'lebowski',
    type: 'image',
    label: 'Création de logo',
    desc: "Participation au concours de logos de BALO : création d'un logo pour un bowling inspiré du film The Big Lebowski.",
    tech: ['Figma', 'Identité graphique'],
    image: lebowski,
    accent: 'orange',
    isClickable: false,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
  },
]

const accentMap = {
  green:  { tag: 'bg-bright-green/15 text-dark-green',   dot: 'bg-bright-green',  btn: 'bg-bright-green hover:bg-dark-green'   },
  orange: { tag: 'bg-bright-orange/10 text-dark-orange', dot: 'bg-bright-orange', btn: 'bg-bright-orange hover:bg-dark-orange' },
}

function DetailLightbox({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const a = accentMap[item.accent] || accentMap.orange
  const isYoutube = !!item.youtubeId

  function handleAction(e) {
    e.stopPropagation()
    if (item.type === 'pdf') {
      const baseUrl = import.meta.env.BASE_URL
      window.open(`${baseUrl}/${item.src}`.replace(/\/+/g, '/'), '_blank')
    }
    if (item.type === 'video') {
      if (isYoutube) {
        window.open(`https://www.youtube.com/watch?v=${item.youtubeId}`, '_blank')
      } else {
        const baseUrl = import.meta.env.BASE_URL
        window.open(`${baseUrl}/${item.src}`.replace(/\/+/g, '/'), '_blank')
      }
    }
  }

  const actionLabel = {
    pdf:   'Voir la charte graphique',
    video: isYoutube ? 'Voir sur YouTube' : 'Voir la vidéo',
  }[item.type] || 'Voir le projet'

  return (
    <div
      className="fixed inset-0 z-[99] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-almost-white rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl shadow-2xl"
        style={{ maxHeight: 'calc(100vh - 80px)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/8 hover:bg-black/15 transition-colors flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="w-full md:w-[55%] flex-shrink-0 bg-black flex items-center justify-center overflow-hidden" style={{ minHeight: '240px' }}>
          {isYoutube ? (
            <div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                title={item.label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : item.type === 'video' && item.src ? (
            <video
              src={(() => {
                const baseUrl = import.meta.env.BASE_URL
                return `${baseUrl}/${item.src}`.replace(/\/+/g, '/')
              })()}
              controls
              autoPlay
              className="w-full h-full object-contain"
              style={{ maxHeight: 'calc(100vh - 80px)' }}
            />
          ) : (
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-contain"
              style={{ maxHeight: 'calc(100vh - 80px)' }}
            />
          )}
        </div>

        <div className="flex flex-col justify-between p-7 md:p-8 flex-1 min-w-0">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tech?.map(t => (
                <span key={t} className={`text-[0.65rem] font-semibold px-2.5 py-0.5 rounded-full ${a.tag}`}>{t}</span>
              ))}
            </div>
            <h2 className="font-heading font-semibold text-[1.3rem] text-almost-black leading-snug mb-4">{item.label}</h2>
            <p className="font-body text-[0.88rem] leading-relaxed text-[#4a5a52]">{item.desc}</p>
          </div>

          {item.isClickable && (
            <button
              onClick={handleAction}
              className={`mt-8 self-start inline-flex items-center gap-2 text-white text-sm font-semibold font-body px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 ${a.btn}`}
            >
              {actionLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function BentoCell({ item, onOpen }) {
  const [hovered, setHovered] = useState(false)
  const a = accentMap[item.accent] || accentMap.orange

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#f0f2f0] ${item.colSpan} ${item.rowSpan} cursor-pointer group`}
      style={{ minHeight: '220px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(item)}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      )}

      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {item.type === 'video' && (
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}

      <div className={`absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {item.tech?.map(t => (
            <span key={t} className="text-[0.62rem] font-semibold px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm">{t}</span>
          ))}
        </div>
        <p className="font-heading font-semibold text-white text-[1rem] leading-snug mb-1">{item.label}</p>
        <p className="font-body text-white/75 text-[0.73rem] leading-relaxed line-clamp-1">{item.desc}</p>
        <div className="flex items-center gap-1.5 mt-2.5">
          <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
          <span className="font-body text-[0.7rem] text-white/80">Cliquer pour en savoir plus</span>
        </div>
      </div>
    </div>
  )
}

export default function Sandbox() {
  const pageRef = useRef(null)
  useReveal(pageRef)
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div ref={pageRef} className="min-h-screen">
      <section className="px-6 md:px-12 pt-32 pb-10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(24,143,126,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-orange mb-3">
            <span className="w-6 h-px bg-bright-orange" />
            Sandbox
          </div>
          <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.05] mb-4">
            Expérimentations<br />&amp; mini-projets
          </h1>
          <p className="font-body text-base text-[#5a6a62] max-w-lg leading-relaxed">
            Expérimentations… logos, exercices, envies et mini-projets
          </p>
        </div>
      </section>

      <SectionDivider variant="og"/>

      <section className="px-6 md:px-12 py-10">
        <div className="hidden md:grid grid-cols-5 auto-rows-[220px] gap-4">
          {sandboxItems.map(item => (
            <BentoCell key={item.id} item={item} onOpen={setActiveItem} />
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-4">
          {sandboxItems.map(item => (
            <BentoCell key={item.id} item={{ ...item, colSpan: '', rowSpan: '' }} onOpen={setActiveItem} />
          ))}
        </div>
      </section>

      {activeItem && (
        <DetailLightbox item={activeItem} onClose={() => setActiveItem(null)} />
      )}

      <Footer />
    </div>
  )
}
