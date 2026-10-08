import { useCallback, useState } from 'react'
import Lightbox from './Lightbox'
import { ChevronIcon, ImageIcon, PlayIcon } from './icons'
import { getThumbnail, isYoutube, wrapIndex } from './media'

const ARROW_BUTTON =
  'absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/65'

/**
 * @param {{ items: Array<{ image?: string, youtubeId?: string, caption: string }>, gradient: string }} props
 */
export default function Carousel({ items, gradient }) {
  const [index, setIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const total = items?.length ?? 0

  const goPrev = useCallback(() => setIndex((i) => wrapIndex(i - 1, total)), [total])
  const goNext = useCallback(() => setIndex((i) => wrapIndex(i + 1, total)), [total])
  const openLightbox = useCallback(() => setIsLightboxOpen(true), [])
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), [])

  if (total === 0) return null

  const item = items[index]
  const thumbnail = getThumbnail(item)
  const hasMultiple = total > 1

  return (
    <>
      <div className="relative select-none overflow-hidden rounded-2xl">
        <div className="relative h-[150px] w-full overflow-hidden md:h-[220px]">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 20px)',
            }}
          />

          {thumbnail ? (
            <>
              <img
                key={index}
                src={thumbnail}
                alt={item.caption}
                className="animate-fade-in-fast absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={openLightbox}
                aria-label="Agrandir"
                className={`group absolute inset-0 flex items-center justify-center ${
                  isYoutube(item) ? 'cursor-pointer' : 'cursor-zoom-in transition-colors hover:bg-black/10'
                }`}
              >
                {isYoutube(item) && (
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-black/75">
                    <PlayIcon />
                  </span>
                )}
              </button>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="opacity-30">
                <ImageIcon />
              </span>
              <p className="font-body text-xs tracking-wide text-white/30">Image non disponible</p>
            </div>
          )}

          {hasMultiple && (
            <>
              <button type="button" onClick={goPrev} aria-label="Précédent" className={`${ARROW_BUTTON} left-3`}>
                <ChevronIcon direction="left" />
              </button>
              <button type="button" onClick={goNext} aria-label="Suivant" className={`${ARROW_BUTTON} right-3`}>
                <ChevronIcon direction="right" />
              </button>
              <div className="absolute bottom-3 right-4 z-10 rounded-full bg-black/50 px-2 py-0.5 font-body text-[0.7rem] font-semibold text-white/80 backdrop-blur-sm">
                {index + 1} / {total}
              </div>
            </>
          )}
        </div>

        <div className="flex min-h-[48px] items-center justify-between gap-4 rounded-b-2xl border-x border-b border-black/7 bg-almost-white px-5 py-3.5">
          <p className="font-body text-[0.78rem] leading-snug text-[#5a6a62]">{item.caption}</p>
          {hasMultiple && (
            <div className="flex flex-shrink-0 gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Aller à l'image ${i + 1}`}
                  aria-current={i === index}
                  className={`rounded-full transition-all duration-200 ${
                    i === index ? 'h-1.5 w-4 bg-bright-green' : 'h-1.5 w-1.5 bg-black/20 hover:bg-black/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          item={item}
          index={index}
          total={total}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  )
}