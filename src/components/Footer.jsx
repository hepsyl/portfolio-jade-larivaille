export default function Footer() {
  return (
    <footer className="px-8 bg-forest-green flex flex-col">
      <section id="contact" className="relative bg-forest-green px-12 py-24 overflow-hidden justify-center align-middle" data-cursor="white">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-bright-green/15 -right-48 -top-48" style={{ background: 'radial-gradient(circle, rgba(24,143,126,0.15), transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full left-24 -bottom-36" style={{ background: 'radial-gradient(circle, rgba(240,95,5,0.1), transparent 70%)' }} />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-orange mb-3">
              <span className="w-6 h-px bg-bright-orange" />
              Contact
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight leading-[1.1] text-almost-white mb-4">
              Intéressé·e par<br />une collaboration ?
            </h2>
            <p className="font-body text-[0.95rem] leading-relaxed text-white/70 max-w-sm">
              N'hésitez pas à me contacter pour discuter de vos projets, que ce soit pour du développement front-end ou du design UI/UX.
            </p>
          </div>

          <div className="reveal flex flex-col gap-3.5 mt-10 md:mt-0">
            <a
              href="https://www.linkedin.com/in/jade-larivaille-ui-ux"
              target="_blank"
              rel="noreferrer"
              className="flex w-80 items-center gap-3.5 px-2 py-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-bright-green/50 hover:bg-bright-green/30 hover:translate-x-1.5 group"
            >
              <div className="w-10 h-10 rounded-l-xl flex items-center justify-center text-lg flex-shrink-0">💼</div>
              <div>
                <p className="font-body text-[0.85rem] font-semibold text-almost-white tracking-wide">LinkedIn</p>
                <p className="font-body text-[0.72rem] text-white/70">Jade Larivaille</p>
              </div>
            </a>
            <a
              href="https://www.malt.fr/profile/jadelarivaille"
              target="_blank"
              rel="noreferrer"
              className="flex w-80 items-center gap-3.5 px-2 py-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-bright-green/50 hover:bg-bright-green/30 hover:translate-x-1.5 group"
            >
              <div className="w-10 h-10 rounded-l-xl flex items-center justify-center text-lg flex-shrink-0">🌐</div>
              <div>
                <p className="font-body text-[0.85rem] font-semibold text-almost-white tracking-wide">Profil Malt</p>
                <p className="font-body text-[0.72rem] text-white/40">Plateforme de freelance</p>
              </div>
            </a>
            <a
              href="mailto:jlarivaille@ensc.fr?subject=[%Prise%de%contact%]"
              target="_blank"
              rel="noreferrer"
              className="flex w-80 items-center gap-3.5 px-2 py-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-bright-green/50 hover:bg-bright-green/30 hover:translate-x-1.5 group"
            >
              <div className="w-10 h-10 rounded-l-xl flex items-center justify-center text-lg flex-shrink-0">📩</div>
              <div>
                <p className="font-body text-[0.85rem] font-semibold text-almost-white tracking-wide">Envoyez moi un mail !</p>
                <p className="font-body text-[0.72rem] text-white/40">jlarivaille@ensc.fr</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    <div className="bg-forest-green px-12 py-7 flex items-center justify-between"  data-cursor="white">
      <p className="font-body text-xs text-white/50 tracking-wide">
        © 2026 Jade Larivaille. Tous droits réservés.
      </p>
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-bright-green" />
        <div className="w-2 h-2 rounded-full bg-bright-orange" />
      </div>
    </div>
    </footer>
  )
}
