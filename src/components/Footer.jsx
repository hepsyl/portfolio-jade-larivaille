export default function Footer() {
  return (
    <footer className="bg-forest-green" data-cursor="white">
      <section id="contact" className="relative px-6 md:px-12 py-24 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full -right-40 -top-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(24,143,126,0.15), transparent 70%)' }} />
        <div className="absolute w-[350px] h-[350px] rounded-full left-16 -bottom-32 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(240,95,5,0.1), transparent 70%)' }} />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl">
          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-orange mb-3">
              <span className="w-6 h-px bg-bright-orange" />
              Contact
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,2.8rem)] tracking-tight leading-[1.1] text-almost-white mb-4">
              Intéressé·e par<br />une collaboration ?
            </h2>
            <p className="font-body text-[0.95rem] leading-relaxed text-white/60 max-w-sm">
              N'hésitez pas à me contacter pour discuter de vos projets, que ce soit pour du développement front-end ou du design UI/UX.
            </p>
          </div>

          <div className="reveal flex flex-col gap-3">
            {[
              { href: 'https://www.linkedin.com/in/jade-larivaille-ui-ux', icon: '💼', label: 'LinkedIn', sub: 'Jade Larivaille' },
              { href: 'https://www.malt.fr/profile/jadelarivaille',        icon: '🌐', label: 'Profil Malt', sub: 'Plateforme de freelance' },
              { href: 'mailto:jlarivaille@ensc.fr',                         icon: '📩', label: 'Envoyez moi un mail !', sub: 'jlarivaille@ensc.fr' },
            ].map(({ href, icon, label, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-5  draw border border-[almost-white/50] justify-between transition-all ease-in duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3.5 py-4">
                  <span className="text-lg">{icon}</span>
                  <div>
                    <p className="font-body text-[0.85rem] font-semibold text-almost-white">{label}</p>
                    <p className="font-body text-[0.72rem] text-white/40">{sub}</p>
                  </div>
                </div>
                <div className="flex group">
                  <svg className= "w-[4vw] stroke-almost-white group-hover:stroke-bright-green" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </a>
              
            ))}
            
          </div>
        </div>
      </section>

      <div className="px-6 md:px-12 py-6 flex items-center justify-between border-t border-white/5">
        <p className="font-body text-xs text-white/40">© 2026 Jade Larivaille. Tous droits réservés.</p>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-bright-green" />
          <div className="w-2 h-2 rounded-full bg-bright-orange" />
        </div>
      </div>
    </footer>
  )
}
