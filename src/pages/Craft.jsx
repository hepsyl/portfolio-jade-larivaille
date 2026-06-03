import { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { craftItems } from '../data/content'
import { useDarkMode } from "../context/ThemeContext";
import { createPortal } from 'react-dom';

export default function Craft() {
  const { darkMode } = useDarkMode();
  const pageRef = useRef(null)
  useReveal(pageRef)
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div ref={pageRef} className="page-enter min-h-screen grid-pattern">
      <section className="px-6 md:px-12 pt-32 pb-10">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-dark-orange dark:text-bright-orange mb-3">
            <span className="w-6 h-px bg-bright-orange" />
            #02
          </div>
          <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.05] text-almost-black dark:text-almost-white mb-4">
            Craft
          </h1>
          <p className="font-body text-base text-[#5a6a62] dark:text-white/40 max-w-lg leading-relaxed">
            Identités visuelles, logos, motion design et explorations graphiques.
          </p>
        </div>
      </section>

      {/* Bento grid */}
      <section className="px-6 md:px-12 pb-16">
        <div className="hidden md:grid grid-cols-5 auto-rows-[220px] gap-4">
          {craftItems.map(item => (
            <BentoCell key={item.id} item={item} onOpen={setActiveItem} />
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-4">
          {craftItems.map(item => (
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

function BentoCell({ item, onOpen }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#f0f2f0] dark:bg-white/5 ${item.colSpan || ''} cursor-pointer group`}
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

      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {item.type === 'video' && (
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
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
        <p className="font-body text-white/70 text-[0.73rem] leading-relaxed line-clamp-1">{item.desc}</p>
      </div>
    </div>
  )
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

  const isYoutube = !!item.youtubeId

  const handleAction = (e) => {
    e.stopPropagation()
    if (item.type === 'pdf') window.open(item.src, '_blank')
    if (item.type === 'video') {
      if (isYoutube) window.open(`https://www.youtube.com/watch?v=${item.youtubeId}`, '_blank')
      else window.open(item.src, '_blank')
    }
  }

  const actionLabel = {
    pdf:   'Voir la charte graphique',
    video: isYoutube ? 'Voir sur YouTube' : 'Voir la vidéo',
  }[item.type] || 'Voir le projet'

  return createPortal(
    <div
      className="fixed inset-0 z-[99] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-almost-white dark:bg-[#0a1a10] rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl shadow-2xl"
        style={{ maxHeight: 'calc(100vh - 80px)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/8 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/20 transition-colors flex items-center justify-center text-almost-black dark:text-almost-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="w-full md:w-[55%] flex-shrink-0 bg-black flex items-center justify-center overflow-hidden" style={{ minHeight: '240px' }}>
          {isYoutube ? (
            <div className="w-full aspect-video">
              <iframe src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`} title={item.label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full border-0" />
            </div>
          ) : item.type === 'video' && item.src ? (
            <video src={item.src} controls autoPlay className="w-full h-full object-contain" style={{ maxHeight: 'calc(100vh - 80px)' }} />
          ) : (
            <img src={item.image} alt={item.label} className="w-full h-full object-contain" style={{ maxHeight: 'calc(100vh - 80px)' }} />
          )}
        </div>

        <div className="flex flex-col justify-between p-7 md:p-8 flex-1 min-w-0">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tech?.map(t => (
                <span key={t} className="text-[0.65rem] font-semibold px-2.5 py-0.5 rounded-full bg-bright-orange/10 text-dark-orange dark:bg-bright-orange/15 dark:text-bright-orange">{t}</span>
              ))}
            </div>
            <h2 className="font-heading font-semibold text-[1.3rem] text-almost-black dark:text-almost-white leading-snug mb-4">{item.label}</h2>
            <p className="font-body text-[0.88rem] leading-relaxed text-[#4a5a52] dark:text-white/50">{item.desc}</p>
          </div>
          {item.isClickable && (
            <button onClick={handleAction} className="mt-8 self-start inline-flex items-center gap-2 bg-bright-orange hover:bg-dark-orange text-white text-sm font-semibold font-body px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5">
              {actionLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
