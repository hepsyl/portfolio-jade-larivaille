import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronIcon, CloseIcon } from './icons'
import { getYoutubeEmbedUrl, isYoutube } from './media'

const ROUND_BUTTON =
  'absolute flex items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'

/**
 * Full-screen, centered media viewer.
 * Fully controlled: the parent owns the current index and the open/close state.
 */
export default function Lightbox({ item, index, total, onClose, onPrev, onNext }) {
  const hasMultiple = total > 1

  // Lock page scroll while open (and restore whatever value was there before).
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  // Keyboard shortcuts.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      else if (hasMultiple && e.key === 'ArrowLeft') onPrev()
      else if (hasMultiple && e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasMultiple, onClose, onPrev, onNext])

  // Only a click on the backdrop itself closes the viewer,
  // so inner controls don't need stopPropagation().
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  // Portal: escapes any parent stacking context / overflow, so "fixed" is truly viewport-relative.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer le visualiseur d'images"
        className={`${ROUND_BUTTON} right-4 top-4 h-10 w-10`}
      >
        <CloseIcon />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={onPrev}
            aria-label="Image précédente"
            className={`${ROUND_BUTTON} left-4 top-1/2 h-11 w-11 -translate-y-1/2`}
          >
            <ChevronIcon direction="left" size={20} />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Image suivante"
            className={`${ROUND_BUTTON} right-4 top-1/2 h-11 w-11 -translate-y-1/2`}
          >
            <ChevronIcon direction="right" size={20} />
          </button>
        </>
      )}

      <figure className="flex w-full max-w-5xl flex-col items-center gap-4">
        {isYoutube(item) ? (
          <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
            <iframe
              key={index}
              src={getYoutubeEmbedUrl(item.youtubeId)}
              title={item.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        ) : (
          <img
            key={index}
            src={item.image}
            alt={item.caption}
            className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
          />
        )}

        <figcaption className="flex items-center gap-4 font-body text-sm text-white/70">
          {item.caption}
          {hasMultiple && (
            <span className="text-xs text-white/40">
              {index + 1} / {total}
            </span>
          )}
        </figcaption>
      </figure>
    </div>,
    document.body,
  )
}