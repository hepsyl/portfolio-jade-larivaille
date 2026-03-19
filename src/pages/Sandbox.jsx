import { useRef, useState } from 'react'
import Footer from '../components/Footer'
import { useReveal } from '../components/useReveal'
import eljiLogo from '../assets/Logo_elji.png'
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
    bg: 'almost-white',
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
    bg: 'almost-black',
    textColor: 'almost-white',
    size: 'lg',
    rotate: -3,
    accent: 'orange',
    isClickable : 'True',
  },
  {
    id: 'godot',
    type: 'video',
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


function SandboxCard({ item }) {
  const [hovered, setHovered] = useState(false)
  const a = accentMap[item.accent] || accentMap.green
  function handleClick() {
    if (item.type === 'pdf'){
      const baseUrl = import.meta.env.BASE_URL;
      const cleanPath = `${baseUrl}/${item.src}`.replace(/\/+/g, '/');
      window.open(cleanPath, '_blank');}
    if (item.type === 'video'){
      const baseUrl = import.meta.env.BASE_URL;
      const cleanPath = `${baseUrl}/${item.src}`.replace(/\/+/g, '/');
      window.open(cleanPath, '_blank');}
    }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative flex-shrink-0 ${sizeClass[item.size] || sizeClass.md}
        rounded-2xl overflow-hidden border border-black/8 bg-almost-white
        shadow-[0_4px_20px_rgba(0,9,3,0.07)]
        transition-all duration-500
        ${hovered ? 'shadow-[0_16px_48px_rgba(0,9,3,0.14)] -translate-y-2 z-10' : ''}
      `}
      onClick = {()=>handleClick()}
      style={{ transform: `rotate(${item.rotate || 0}deg) ${hovered && item.isClickable === 'True' ? 'rotate(0deg) translateY(-8px)' : ''}`, transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
    >
      <div
        className="w-full flex items-center justify-center overflow-hidden"
        style={{ background: item.bg || '#f2f4f2', minHeight: item.size === 'lg' ? 260 : item.size === 'sm' ? 180 : 220 }}
      >
        {item.type === 'image' && (
          item.image
            ? <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
            : <ImagePlaceholder label={item.label} />
        )}

        {item.type === 'logo' && (
          item.image
            ? <img src={item.image} alt={item.label} className="max-h-[100px] max-w-[200px] object-contain" />
            : <LogoPlaceholder color={item.textColor || '#FCFCFC'} />
        )}

        {item.type === 'pdf' && (item.image
            ? <img src={item.image} alt={item.label} className="max-h-[100px] max-w-[200px] object-contain" />
            : <LogoPlaceholder color={item.textColor || '#FCFCFC'} />
        )}

        {item.type === 'video' && (
          item.src
            ? <video src={item.src} type = "video/mp4" className={`w-full h-full object-cover`} playsInline muted loop/>
            : <ImagePlaceholder label="Vidéo" icon="🎬" />
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

function ImagePlaceholder({ label, icon = '🖼' }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#b0bab5]">
      <span className="text-3xl">{icon}</span>
      <p className="font-body text-[0.72rem] tracking-wide">Ajoute une image</p>
    </div>
  )
}

function LogoPlaceholder({ color }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center" style={{ borderColor: color + '40' }}>
        <span style={{ color }} className="font-heading font-semibold text-2xl">LJ</span>
      </div>
      <p className="font-body text-[0.7rem] tracking-widest uppercase" style={{ color: color + '60' }}>Ajoute ton logo</p>
    </div>
  )
}

export default function Sandbox() {
  const pageRef = useRef(null)
  useReveal(pageRef)

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
            <div
              key={item.id}
              style={{ marginTop: [0, 40, -20, 60, 15, -30, 50, 10][i % 8] }}
            >
              <SandboxCard item={item} />
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-6 items-center">
          {sandboxItems.map(item => (
            <div key={item.id} style={{ transform: 'none' }}>
              <SandboxCard item={{ ...item, rotate: 0, size: 'md' }} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
