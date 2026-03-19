import { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { useReveal } from '../components/useReveal'
import eljiLogo from '../assets/elji_horizontal_logo.png'
import lebowski from '../assets/lebowski.png'
import godotLogo from '../assets/godot_logo.jfif'
import pixel_art from '../assets/pixel_art_assets.png'
import YoutubeLogo from '../assets/youtube_cover.png'

export const sandboxItems = [
  {
    id: 'elji',
    type: 'pdf',
    label: 'Identité visuelle — ELJI',
    desc: "Création de mon identité personnelle : logotype, palette et charte graphique.",
    tech: ['Figma', 'Identité graphique'],
    image: eljiLogo,
    src:'/assets/Charte_Graphique_ELJI.pdf',
    bg: 'white',
    textColor: 'almost-black',
    size: 'md',
    rotate: -5,
    accent: 'orange',
    isClickable : 'True',
  },
  {
    id: 'lebowski',
    type: 'image',
    label: 'Création de logo',
    desc: "Participation au concours de logos de BALO, création d'un logo pour un bowling inspiré du film The Big Lebowski.",
    tech: ['Figma', 'Identité graphique'],
    image: lebowski,
    bg: 'almost-white',
    textColor: 'almost-black',
    size: 'sm',
    rotate: 2,
    accent: 'orange',
    isClickable : 'False',
  },
  {
    id : 'youtube',
    type : 'video',
    label: 'Motion Design d\'une publicité fictive',
    desc: "Création d'une publicité Youtube fictive de 15 secondes, initiation au motion design sous Jitter.",
    tech: ['Jitter', 'Motion Design'],
    image: YoutubeLogo,
    src: 'https://www.youtube.com/watch?v=pAD-u5XveQ0',
    youtubeId: 'pAD-u5XveQ0',
    bg: 'almost-white',
    textColor: 'almost-black',
    size: 'lg',
    rotate: -3,
    accent: 'orange',
    isClickable : 'True',
  },
  {
    id: 'godot',
    type: 'video',
    youtubeId: 'l3-5hwWbmLo',
    isShort: true,
    label: 'Apprentissage du moteur Godot',
    desc: "Réalisation d'un jeu mobile 2D en suivant le tutoriel du moteur de jeu Godot",
    tech: ['Godot', 'GDScript'],
    image: godotLogo,
    src:'/assets/Godot_2D.mp4',
    bg: 'almost-black',
    textColor: 'almost-white',
    size: 'md',
    rotate: 1,
    accent: 'green',
    isClickable : 'True',
  },
  {
    id: 'pixel_art',
    type: 'image',
    label: 'Pixel Art',
    desc: "Création d'assets en pixel art pour un casual game de crochet, un de mes hobbies favoris.",
    tech: ['Pixel Art'],
    image: pixel_art,
    bg: 'almost-white',
    textColor: 'almost-black',
    size: 'sm',
    rotate: 7,
    accent: 'orange',
    isClickable : 'False',
  },
]

const sizeClass = {
  sm: 'w-[200px] md:w-[250px]',
  md: 'w-[340px] md:w-[400px]',
  lg: 'w-[420px] md:w-[520px]',
}

const accentMap = {
  green:  { dot: 'bg-bright-green', tag: 'bg-bright-green/15 text-dark-green', border: 'border-bright-green/20' },
  orange: { dot: 'bg-bright-orange', tag: 'bg-bright-orange/10 text-dark-orange', border: 'border-bright-orange/20' },
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

      <div
        className="flex flex-col items-center gap-4 max-w-[80vw] w-full"
        onClick={e => e.stopPropagation()}
      >
        {isYoutube ? (
          <div className={`w-full rounded-xl overflow-hidden shadow-2xl ${
            item.isShort 
              ? 'max-w-[340px] aspect-[9/16]'
              : 'max-w-[80vw] aspect-video'
            }`}>
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

// ─── Card ─────────────────────────────────────────────────────────────────────
function SandboxCard({ item, onVideoOpen }) {
  const [hovered, setHovered] = useState(false)
  const a = accentMap[item.accent] || accentMap.green

  function handleClick() {
    if (item.isClickable !== 'True') return
    if (item.type === 'pdf') {
      const baseUrl = import.meta.env.BASE_URL
      const cleanPath = `${baseUrl}/${item.src}`.replace(/\/+/g, '/')
      window.open(cleanPath, '_blank')
    }
    if (item.type === 'video') {
      onVideoOpen(item)
    }
  }

  const isClickable = item.isClickable === 'True'
  const isVideo = item.type === 'video'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className={`
        relative flex-shrink-0 ${sizeClass[item.size] || sizeClass.md}
        rounded-2xl overflow-hidden border border-black/8 bg-almost-white
        shadow-[0_4px_20px_rgba(0,9,3,0.07)]
        transition-all duration-500
        ${isClickable ? 'cursor-pointer' : ''}
        ${hovered && isClickable ? 'shadow-[0_16px_48px_rgba(0,9,3,0.14)] -translate-y-2 z-10' : ''}
      `}
      style={{
        transform: `rotate(${item.rotate || 0}deg)${hovered && isClickable ? ' translateY(-8px)' : ''}`,
        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)'
      }}
    >
      <div
        className="w-full flex items-center justify-center overflow-hidden relative"
        style={{
          background: item.bg === 'almost-black' ? '#0d1a12' : '#f2f4f2',
          minHeight: item.size === 'lg' ? 260 : item.size === 'sm' ? 180 : 220
        }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#b0bab5]">
            <span className="text-3xl">🖼</span>
            <p className="font-body text-[0.72rem] tracking-wide">Image non disponible</p>
          </div>
        )}

        {isVideo && isClickable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/35 transition-colors">
            <div className="w-14 h-14 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-200">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-2 mb-2">
          <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
          <p className="font-heading font-semibold text-[0.95rem] text-almost-black leading-snug">{item.label}</p>
        </div>
        {item.desc && (
          <p className="font-body text-[0.78rem] leading-relaxed text-[#5a6a62] mb-3 pl-[18px]">{item.desc}</p>
        )}
        <div className="flex flex-wrap gap-1.5 pl-[18px]">
          {item.tech?.map(t => (
            <span key={t} className={`text-[0.65rem] font-semibold px-2 py-0.5 rounded-full ${a.tag}`}>{t}</span>
          ))}
        </div>
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(24,143,126,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
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

      <section className="relative px-6 md:px-12 py-16 overflow-hidden">
        <div className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none select-none">
          <div className="flex gap-6 animate-marquee whitespace-nowrap opacity-[0.04]">
            {['SANDBOX', 'EXPERIMENTS', 'CURIOSITY', 'EXPLORATION'].map((t, i) => (
              <span key={i} className="font-heading font-semibold text-[5rem] tracking-tighter text-almost-black">{t}</span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-wrap gap-8 items-start justify-center py-8">
          {sandboxItems.map((item, i) => (
            <div key={item.id} style={{ marginTop: [0, 40, -20, 60, 15, -30, 50, 10][i % 8] }}>
              <SandboxCard item={item} onVideoOpen={setLightboxItem} />
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-6 items-center">
          {sandboxItems.map(item => (
            <div key={item.id} style={{ transform: 'none' }}>
              <SandboxCard item={{ ...item, rotate: 0, size: 'md' }} onVideoOpen={setLightboxItem} />
            </div>
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
