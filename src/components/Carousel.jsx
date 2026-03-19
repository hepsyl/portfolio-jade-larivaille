import { useState, useEffect } from 'react'

export default function Carousel({ items, gradient }) {
  const [idx, setIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  useEffect(() => {
    if (!lightbox) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, items.length])

  if (!items || items.length === 0) return null

  const prev = (e) => { e?.stopPropagation(); setIdx(i => (i - 1 + items.length) % items.length) }
  const next = (e) => { e?.stopPropagation(); setIdx(i => (i + 1) % items.length) }

  const item = items[idx]
  const current = items[idx]
  const isYoutube = (it) => !!it.youtubeId
  const thumbSrc  = (it) => it.image || (it.youtubeId ? `https://img.youtube.com/vi/${it.youtubeId}/hqdefault.jpg` : null)

  return (
    <>
      <div className="relative rounded-2xl overflow-hidden select-none">
        <div className="relative w-full h-[150px] md:h-[220px] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 20px)' }} />

          {thumbSrc(item) ? (
            <img
              key={idx}
              src={thumbSrc(item)}
              alt={item.caption}
              onClick={() => setLightbox(true)}
              className="absolute inset-0 w-full h-full object-cover animate-fade-in-fast cursor-pointer"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg className="opacity-30" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
              </svg>
              <p className="font-body text-xs text-white/30 tracking-wide">Image non disponible</p>
            </div>
          )}

          {isYoutube(item) && (
            <div
              onClick={() => setLightbox(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/75 group-hover:scale-110 transition-all duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}

          {!isYoutube(item) && thumbSrc(item) && (
            <div
              onClick={() => setLightbox(true)}
              className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors cursor-zoom-in"
            />
          )}

          {items.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/65 transition-colors z-10" aria-label="Précédent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/65 transition-colors z-10" aria-label="Suivant">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </>
          )}

          {items.length > 1 && (
            <div className="absolute bottom-3 right-4 bg-black/50 backdrop-blur-sm text-white/80 text-[0.7rem] font-semibold font-body px-2 py-0.5 rounded-full z-10">
              {idx + 1} / {items.length}
            </div>
          )}
        </div>

        <div className="bg-almost-white px-5 py-3.5 border-x border-b border-black/7 rounded-b-2xl flex items-center justify-between gap-4 min-h-[48px]">
          <p className="font-body text-[0.78rem] text-[#5a6a62] leading-snug">{item.caption}</p>
          {items.length > 1 && (
            <div className="flex gap-1.5 flex-shrink-0">
              {items.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`rounded-full transition-all duration-200 ${i === idx ? 'bg-bright-green w-4 h-1.5' : 'bg-black/20 w-1.5 h-1.5 hover:bg-black/40'}`} />
              ))}
            </div>
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-sm flex items-center justify-center pt-[64px]"
          onClick={() => setLightbox(false)}
        >
          <button onClick={() => setLightbox(false)} className="absolute top-[72px] right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white z-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          {items.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-4 top-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={next} className="absolute right-4 top-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </>
          )}

          <div className="flex flex-col items-center gap-4 max-w-[80vw] max-h-[calc(100vh-64px)] w-full" onClick={e => e.stopPropagation()}>
            {isYoutube(current) ? (
              <div className="w-full max-w-[80vw] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  key={idx}
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1`}
                  title={current.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
              <img
                key={idx}
                src={current.image}
                alt={current.caption}
                className="max-w-[80vw] max-h-[65vh] object-contain rounded-xl animate-fade-in-fast shadow-2xl"
              />
            )}
            <div className="flex items-center gap-4">
              <p className="font-body text-sm text-white/70">{current.caption}</p>
              {items.length > 1 && (
                <span className="font-body text-xs text-white/40">{idx + 1} / {items.length}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
