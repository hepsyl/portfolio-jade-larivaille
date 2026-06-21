import iziredCover from '../assets/izired_cover.png'
import fifaacCover from '../assets/fifaac_hero.png'
import octotuneCover from '../assets/octotune_cover.png'
import salsCover from '../assets/sals_cover.png'
import compagnonCover from '../assets/compagnon_cover.png'
import ensemencCover from '../assets/ensemenc_cover.png'
import eljiImg from '../assets/elji_horizontal_logo.png'
import eljiSrc from '../../public/assets/Charte_Graphique_ELJI.pdf'
import parallaxeImg from '../assets/Parallaxe.png'
import redesImg from '../assets/redes.png'
import ytbImage from '../assets/youtube_cover.png'
import godotImg from '../assets/godot_logo.jfif'
import godotSrc from '../../public/assets/Godot_2D.mp4'
import maisonLeo from '../assets/Maison_Leo_v2.png'
import pixelArt from '../assets/pixel_art_assets.png'
import lebowskiImg from '../assets/lebowski.png'
import couchImg from '../assets/couch_cover.png'

export const workProjects = [
  {
    id: 'izired',
    title: 'IZIRED',
    tags: [
      { label: 'Logiciel',     type: 'dev'    },
      { label: 'UX Design',    type: 'design' },
      { label: 'UI Design',    type: 'design' },
      { label: 'Site vitrine', type: 'dev'    },
    ],
    desc: "Création d'une nouvelle direction artistique d'une plateforme de valorisation et de simulation de projets immobiliers. Développement du front-end du logiciel et prototypage d'un nouveau site vitrine sur Figma.",
    tech: ['TypeScript', 'React', 'Figma'],
    image: iziredCover,
  },
  {
    id: 'fifaac',
    title: 'FIFAAC 2025',
    tags: [
      { label: 'UX Design', type: 'design' },
      { label: 'UI Design', type: 'design' },
      { label: 'Site web',  type: 'other'  },
    ],
    desc: "Direction artistique et conception de la maquette du site web du Festival International du Film d'Architecture et des Aventures Constructives.",
    tech: ['Figma', 'UX Research'],
    image: fifaacCover,
  },
  {
    id: 'octotune',
    title: "Octo'Tune",
    tags: [
      { label: 'UX Design',          type: 'design' },
      { label: 'UI Design',          type: 'design' },
      { label: 'Application mobile', type: 'dev'    },
      { label: 'UX Research',        type: 'other'  },
    ],
    desc: "Projet transpromotions (1ère et 2ème années) de création d'une application pour la gestion du club musique de l'ENSC : réservation de salle, planning, évènements à venir, etc.",
    tech: ['Figma', 'React', 'JavaScript', 'NodeJS', 'CSS'],
    image: octotuneCover,
  },
  {
    id: 'sciencealasource',
    title: 'Science à la source',
    tags: [
      { label: 'UX Design', type: 'design' },
      { label: 'UI Design', type: 'design' },
      { label: 'Site web',  type: 'other'  },
    ],
    desc: "Prototypage haute fidélité d'un blog recensant les contenus publiés par l'Université de Bordeaux.",
    tech: ['Figma', 'UI Design'],
    image: salsCover,
  },
]

export const labProjects = [
  {
    id: 'compagnon',
    title: 'Compagnon Virtuel',
    tags: [
      { label: 'Programmation', type: 'dev'    },
      { label: '3D',            type: 'design' },
      { label: 'CCU',           type: 'other'  },
    ],
    desc: "Création et test d'un compagnon virtuel 3D pour aider les patients en rééducation motrice post-AVC. Implémentation dans un jeu du Simon.",
    tech: ['Modélisation 3D', 'Maya', 'CCU'],
    image: compagnonCover,
  },
  {
    id: 'ensemenc',
    title: 'ENSemenC',
    tags: [
      { label: 'Programmation Orientée Objet', type: 'dev' },
      { label: 'Jeu terminal',                 type: 'dev' },
    ],
    desc: "Projet de fin de semestre : jeu de simulation de potager en programmation orientée objet.",
    tech: ['C#', 'POO'],
    image: ensemencCover,
  },
  {
    id: 'couch',
    filter: ['lab'],
    title: 'Couch',
    tags: [
      { label: 'Configurateur 3D', type: 'dev' },
      { label: 'Page Web', type: 'dev' },
    ],
    desc: "Projet d'apprentissage de React Three Fiber : configurateur de canapé avec modèle 3D'.",
    tech: ['React Three Fiber', 'JavaScript', 'React', 'CSS', 'Figma'],
    image: couchImg,
  },
]

export const craftItems = [
  {
    id: 'elji',
    type: 'pdf',
    label: 'Identité visuelle — ELJI',
    desc: "Création de mon identité personnelle : logotype, palette et charte graphique.",
    tech: ['Figma', 'Identité graphique'],
    image: eljiImg,
    src: eljiSrc,
    isClickable: true,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'parallaxe',
    type: 'image',
    label: 'Parallaxe',
    desc: "Logo fictif — Parallaxe est une marque d'équipement de sports de haute montagne.",
    tech: ['Figma', 'Logo'],
    image: parallaxeImg,
    isClickable: false,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'redes',
    type: 'image',
    label: 'Prototypage écran principal',
    desc: "Prototypage d'un écran d'accueil pour Redes Padel France.",
    tech: ['Figma', 'UI Design', 'Mockups'],
    image: redesImg,
    isClickable: false,
    colSpan: 'row-span-2 md:col-span-1',
  },
  {
    id: 'youtube',
    type: 'video',
    label: 'Motion Design — pub fictive',
    desc: "Publicité Youtube fictive de 15 secondes, initiation au motion design sous Jitter.",
    tech: ['Jitter', 'Motion Design'],
    image: ytbImage,
    youtubeId: 'pAD-u5XveQ0',
    isClickable: true,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'godot',
    type: 'video',
    label: 'Apprentissage Godot',
    desc: "Réalisation d'un jeu mobile 2D en suivant le tutoriel du moteur de jeu Godot.",
    tech: ['Godot', 'GDScript'],
    image: godotImg,
    src: godotSrc,
    isClickable: true,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'maison_leo',
    type: 'image',
    label: 'Maison de Léo',
    desc: "Logo fictif pour un artisan de rénovation de meubles anciens.",
    tech: ['Figma', 'Logo'],
    image: maisonLeo,
    isClickable: false,
    colSpan: 'md:col-span-1',
  },
  {
    id: 'pixel_art',
    type: 'image',
    label: 'Pixel Art',
    desc: "Assets en pixel art pour un casual game de crochet.",
    tech: ['Pixel Art'],
    image: pixelArt,
    isClickable: false,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'lebowski',
    type: 'image',
    label: 'Création de logo',
    desc: "Participation au concours de logos BALO — bowling inspiré de The Big Lebowski.",
    tech: ['Figma', 'Identité graphique'],
    image: lebowskiImg,
    isClickable: false,
    colSpan: 'md:col-span-2',
  },
]

export const experiences = [
  {
    company: 'EENOV',
    role: 'Freelance UI Designer',
    date: 'Depuis sept. 2025',
    tasks: [
      'Conception de prototypes Figma de sites web',
      'Création de logo et identité graphique',
    ],
  },
  {
    company: 'Institut des Maladies Neurodégénératives',
    role: 'Stage — Ingénieure de recherche',
    date: 'Janvier – Avril 2026',
    tasks: [
      "Création d'une pipeline de traitement de données d'IRM fonctionnelle",
      'Programmation Python, Matlab',
      "Passation d'IRM fonctionnelles sur sujets sains",
      'Rédaction de documentation pour la pérennité des acquis',
    ],
  },
  {
    company: 'EENOV',
    role: 'Stage — UX Design & Front-end',
    date: 'Juin / Juillet 2025',
    tasks: [
      "Conception de prototypes Figma haute-fidélité d'un logiciel et de deux sites vitrine",
      'Développement front-end du logiciel Izired',
    ],
  },
  {
    company: 'i2c — Junior Entreprise',
    role: 'Responsable Communication',
    date: 'Depuis Février 2025',
    tasks: [
      'Gestion des réseaux sociaux et de la communication',
      'Analyse des performances et définition de la stratégie de communication',
      "Organisation d'évènements internes et externes (forums, ateliers, conférences…)",
    ],
  },
]

export const skills = {
  dev:    ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', '.NET / C#', 'Twig', 'Python', 'Matlab'],
  tools:  ['Git / Github', 'VS Code', 'Jira'],
  design: ['Figma', 'UX Design', 'UI Design', 'Prototypage', 'Recherche utilisateur', 'Wireframes', 'Identité graphique', 'Motion Design', 'Jitter'],
  other:  ['Canva', 'Maya 3D'],
}

export const languages = [
  { name: 'Français', level: 'Natif',    note: 'Langue maternelle' },
  { name: 'Anglais',  level: 'Bilingue', note: 'Cambridge C1 (2022) · TOEIC 990/990 (2026)' },
  { name: 'Espagnol', level: 'B1 – B2',  note: 'Niveau intermédiaire' },
]
