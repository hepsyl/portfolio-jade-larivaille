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
]

const accentMap = {
  green:  { tag: 'bg-bright-green/15 text-dark-green', dot: 'bg-bright-green' },
  orange: { tag: 'bg-bright-orange/10 text-dark-orange', dot: 'bg-bright-orange' },
}

function VideoLightbox({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const isYoutube = !!item.youtubeId

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-sm flex items-center justify-center pt-[64px]"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-[72px] right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white z-10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div className="flex flex-col items-center gap-4 max-w-[80vw] w-full" onClick={e => e.stopPropagation()}>
        {isYoutube ? (
          <div className="w-full max-w-[80vw] aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
              title={item.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <video
            src={(() => {
              const baseUrl = import.meta.env.BASE_URL
              return `${baseUrl}/${item.src}`.replace(/\/+/g, '/')
            })()}
            controls
            autoPlay
            className="max-w-[80vw] max-h-[65vh] rounded-xl shadow-2xl"
          />
        )}
        <p className="font-body text-sm text-white/70">{item.label}</p>
      </div>
    </div>
  )
}

function BentoCell({ item, onVideoOpen }) {
  const [hovered, setHovered] = useState(false)
  const a = accentMap[item.accent] || accentMap.orange

  function handleClick() {
    if (!item.isClickable) return
    if (item.type === 'pdf') {
      const baseUrl = import.meta.env.BASE_URL
      window.open(`${baseUrl}/${item.src}`.replace(/\/+/g, '/'), '_blank')
    }
    if (item.type === 'video') {
      onVideoOpen(item)
    }
  }

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl bg-[#f0f2f0]
        ${item.colSpan} ${item.rowSpan}
        ${item.isClickable ? 'cursor-pointer' : ''}
        group
      `}
      style={{ minHeight: '220px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.label}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out ${item.isClickable ? 'group-hover:scale-105' : ''}`}
        />
      )}

      <div className={`
        absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30
        transition-opacity duration-400
        ${hovered ? 'opacity-100' : 'opacity-0'}
      `} />

      {item.type === 'video' && item.isClickable && (
        <div className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-300
          ${hovered ? 'opacity-0' : 'opacity-100'}
        `}>
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}

      <div className={`
        absolute inset-0 flex flex-col justify-end p-5
        transition-all duration-400
        ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tech?.map(t => (
            <span
              key={t}
              className="text-[0.62rem] font-semibold px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="font-heading font-semibold text-white text-[1rem] leading-snug mb-1.5">
          {item.label}
        </p>

        <p className="font-body text-white/85 text-[0.76rem] leading-relaxed line-clamp-2">
          {item.desc}
        </p>

        {item.isClickable && (
          <div className="flex items-center gap-1.5 mt-3 rounded-lg bg-white/20 px-2 py-1">
            <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
            <span className="font-body text-[0.7rem] text-white/90">
              {item.type === 'video' ? 'Cliquer pour voir la vidéo' : item.type === 'pdf' ? 'Cliquer pour voir la charte graphique' : 'Voir'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Sandbox() {
  const pageRef = useRef(null)
  useReveal(pageRef)
  const [lightboxItem, setLightboxItem] = useState(null)

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
            <BentoCell key={item.id} item={item} onVideoOpen={setLightboxItem} />
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {sandboxItems.map(item => (
            <BentoCell
              key={item.id}
              item={{ ...item, colSpan: '', rowSpan: '' }}
              onVideoOpen={setLightboxItem}
            />
          ))}
        </div>
      </section>

      {lightboxItem && (
        <VideoLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}

      <Footer />
    </div>
  )
}
