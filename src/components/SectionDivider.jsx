
export default function SectionDivider({ variant = 'go' }) {
  return (
    <div className="flex items-center justify-center gap-3 px-12 h-px">
      <div className={`flex-1 h-px divider-line-${variant}-left`} />
      <div className="flex items-center gap-2">
        <div className={`w-[5px] h-[5px] rounded-full opacity-40 ${variant === 'og' ? 'bg-bright-orange' : 'bg-bright-green'}`} />
        <div className={`w-[7px] h-[7px] rounded-full ${variant === 'og' ? 'bg-bright-green' : variant === 'gg' ? 'bg-bright-green' : 'bg-bright-green'}`} />
        <div className={`w-[7px] h-[7px] rounded-full ${variant === 'og' ? 'bg-bright-orange' : 'bg-bright-orange'}`} />
        <div className={`w-[5px] h-[5px] rounded-full opacity-40 ${variant === 'og' ? 'bg-bright-green' : 'bg-bright-orange'}`} />
      </div>
      <div className={`flex-1 h-px divider-line-${variant}-right`} />
    </div>
  )
}
