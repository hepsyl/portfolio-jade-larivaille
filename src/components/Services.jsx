
const services = [
  {
    type: 'design',
    title: 'Web Design',
    desc: "Interfaces créatives, modernes et centrées sur l'utilisateur. Du wireframe à la maquette haute-fidélité.",
    features: [
      'Wireframing & prototypage Figma',
      'UI Design & identité graphique',
      'UX Research & tests utilisateurs',
      'Micro-interactions',
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
      'Lien design / code',
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
              s.type === 'design' ? 'bg-bright-orange/10' : 'bg-bright-green/10'
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
  <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" width="28" height="28">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
      <title>paint_brush_line</title> 
      <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
        <g id="Design" transform="translate(-288.000000, 0.000000)"> 
          <g id="paint_brush_line" transform="translate(288.000000, 0.000000)"> 
            <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> 
            <path d="M22.0168,3.87391 L21.4274165,5.45540216 L20.6945,7.15228 C20.0164,8.60718 19.0833,10.3081 17.9673,11.4819 C16.9018,12.6025 15.2939,13.6349 14.0061,14.3682 C14.3371,15.9626 13.8838,17.6872 12.6464,18.9246 C10.3761,21.195 7.84019,21.1954 5.9533,20.6345 C4.944112,20.33444 3.9377347,19.849214 3.08866507,19.2046286 L2.22413,18.4868 C2.02603,18.3191 2.03856,18.0117 2.25094,17.8625 L2.58306888,17.6257743 C3.31091516,17.0952333 4.061794,16.4436733 4.24122,15.5465 C4.35564167,14.6208833 4.42119167,14.1163833 4.43787,14.033 C4.57567,13.344 4.86727,12.5616 5.57536,11.8535 C6.81271,10.6162 8.53724,10.1629 10.1315,10.4938 C10.8649,9.20599 11.8973,7.59803 13.018,6.53254 C14.1917,5.41656 15.8926,4.48346 17.3475,3.8053 L19.044406,3.07238289 L20.6259,2.48301 C21.4894,2.18807 22.3117,3.01044 22.0168,3.87391 Z M6.98957,13.2678 C6.637,13.6203 6.48369,14.0019 6.39903,14.4252 C6.28459667,15.35095 6.21905,15.8554833 6.20239,15.9388 C6.0216,16.8427 5.49324,17.5886 5.05284,18.087 C5.45713,18.3137 5.96035,18.55 6.52324,18.7174 C7.90672,19.1287 9.61347,19.1291 11.2322,17.5104 C12.4038,16.3388 12.4038,14.4393 11.2322,13.2678 C10.0606,12.0962 8.16115,12.0962 6.98957,13.2678 Z M11.9792,11.2926 C12.2136,11.4571 12.437,11.6441 12.6464,11.8535 C12.8558,12.0629 13.0427,12.2863 13.2072,12.5206 C13.5985,12.2938 14.0022,12.0477 14.397,11.7889 L14.3665,11.7216 C14.2506,11.4743 14.0477,11.1335 13.707,10.7928 C13.4150571,10.5008571 13.1229673,10.3100816 12.889737,10.1885458 L12.7109,10.1029 C12.4521,10.4976 12.206,10.9013 11.9792,11.2926 Z M19.4215,5.07827 C19.0384,5.23698 18.6221,5.41779 18.1925,5.61805 C16.7837,6.27471 15.3263,7.09752 14.3961,7.98198 C14.239,8.13131 14.0817,8.29678 13.9254,8.47475 C14.2882,8.67547 14.7079,8.96527 15.1213,9.37864 C15.5346,9.79197 15.8244,10.2117 16.0251,10.5744 C16.203,10.4181 16.3685,10.2608 16.5178,10.1038 C17.4023,9.17352 18.2251,7.71612 18.8818,6.30732 C19.082,5.87769 19.2628,5.46144 19.4215,5.07827 Z" id="形状" fill="#F05F05"> </path> 
          </g> 
        </g> 
      </g> 
      </g>
  </svg>)
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
