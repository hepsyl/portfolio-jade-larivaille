const services = [
  {
    type: 'design',
    title: 'Web Design',
    desc: "Interfaces créatives, modernes et centrées sur l'utilisateur. Du wireframe à la maquette haute-fidélité.",
    features: [
      'Wireframing & prototypage Figma',
      'UI Design & identité graphique',
      'UX Research & tests utilisateurs',
      'Motion design & micro-interactions',
    ],
    icon: <DesignIcon />,
  },
  {
    type: 'dev',
    title: 'Développement Web',
    desc: "Sites performants, accessibles et maintenables avec les technologies modernes du web.",
    features: [
      'Intégration HTML / CSS / JavaScript',
      'Développement React & TypeScript',
      'Accessibilité & performance web',
      'Collaboration design → code',
    ],
    icon: <DevIcon />,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#f2f4f2] px-12 py-24">
      <div className="text-center mb-14 reveal">
        <div className="inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#4a5a52] mb-3">
          <span className="w-6 h-px bg-bright-orange" />
          Services
          <span className="w-6 h-px bg-bright-green" />
        </div>
        <h2 className="font-heading font-semibold text-[clamp(2rem,3.5vw,3rem)] tracking-tight">
          Ce que je propose
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            data-cursor={s.type === 'design' ? 'orange' : undefined}
            className={`reveal group relative bg-almost-white rounded-2xl p-10 border border-black/7 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_44px_rgba(0,9,3,0.08)]`}
          >
            <div
              className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                s.type === 'design' ? 'bg-bright-orange' : 'bg-bright-green'
              }`}
            />

            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-7 ${
              s.type === 'design' ? 'bg-bright-orange/10' : 'bg-bright-green/12'
            }`}>
              {s.icon}
            </div>

            <h3 className="font-heading font-semibold text-[1.3rem] text-almost-black mb-3">{s.title}</h3>
            <p className="font-body text-sm leading-[1.75] text-[#5a6a62] mb-7">{s.desc}</p>

            <ul className="flex flex-col gap-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 font-body text-[0.8rem] font-medium text-[#3a4a42]">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.type === 'design' ? 'bg-bright-orange' : 'bg-bright-green'}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function DesignIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 22 C4 22 8 18 14 18 C20 18 24 14 24 8 C24 5.8 22.2 4 20 4 C17.8 4 16 5.8 16 8 C16 10.2 14.2 12 12 12 C9.8 12 8 13.8 8 16" stroke="#F05F05" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="6" cy="20" r="2.5" fill="#F05F05"/>
      <circle cx="21" cy="6" r="1.8" fill="#F05F05" opacity="0.4"/>
      <circle cx="23" cy="12" r="1.5" fill="#F05F05" opacity="0.65"/>
      <circle cx="17" cy="21" r="1.5" fill="#F05F05" opacity="0.5"/>
    </svg>
  )
}

function DevIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 9 L3 14 L8 19" stroke="#188F7E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 9 L25 14 L20 19" stroke="#188F7E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 5 L12 23" stroke="#188F7E" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}
