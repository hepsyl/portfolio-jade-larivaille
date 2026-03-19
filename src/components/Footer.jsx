export default function Footer() {
  return (
    <footer className="bg-forest-green px-12 py-7 flex items-center justify-between"  data-cursor="white">
      <p className="font-body text-xs text-white/50 tracking-wide">
        © 2026 Jade Larivaille. Tous droits réservés.
      </p>
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-bright-green" />
        <div className="w-2 h-2 rounded-full bg-bright-orange" />
      </div>
    </footer>
  )
}
