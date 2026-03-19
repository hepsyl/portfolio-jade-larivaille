import { useRef, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { useReveal } from '../components/useReveal'
import iziredCover     from '../assets/izired_cover.png'
import iziredTable2    from '../assets/izired_table2.png'
import iziredTable     from '../assets/izired_table.png'
import iziredPlans     from '../assets/izired_tarifs.png'
import iziredCasestudy from '../assets/izired_casestudy.png'
import iziredDashboard from '../assets/izired_dashboard.png'
import compagnon3D     from '../assets/compagnon_3D.png'
import compagnonCover  from '../assets/compagnon_cover.png'
import compagnonDessins from '../assets/compagnon_dessins.png'
import fifaacMobile from '../assets/fifaac_mobile.png'
import fifaacFilm from '../assets/fifaac_film.png'
import fifaacHero from '../assets/fifaac_hero.png'
import fifaacCamera from '../assets/fifaac_camera.png'
import fifaacProgramme from '../assets/fifaac_programme.png'
import fifaacMoodboard from '../assets/fifaac_moodboard.png'
import salsHero from '../assets/sals_cover.png'
import salsFiltre from '../assets/sals_filtre.png'
import salsContenu from '../assets/sals_contenu.png'
import salsWF from '../assets/sals_wf.png'
import octoAccueil from '../assets/octotune_accueil.png'
import octoCalendrier from '../assets/octotune_calendrier.png'
import octoMessagerie from '../assets/octotune_mp.png'
import octov1 from '../assets/octotune_planning_v1.png'
import octov2 from '../assets/octotune_planningv2.png'
import ensemencUrgence from '../assets/ensemenc_cover.png'
import ensemencClassique from '../assets/ensemenc_classique.png'
import ensemencArbre from '../assets/ensemenc_arbre.png'
import ensemencClasse from '../assets/ensemenc_diagramme.png'
import ensemencWiki from '../assets/ensemenc_wiki.png'


function autoGrid(n) {
  if (n === 1) return 'grid-cols-1'
  if (n === 2) return 'grid-cols-1 sm:grid-cols-2'
  if (n <= 3)  return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  return 'grid-cols-1 sm:grid-cols-2'
}
function listGrid(n) {
  return n <= 3 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
}

function SummaryBox({ summary, accent, accentBorder, accentSoft, accentBg }) {
  const [open, setOpen] = useState(false)
  if (!summary) return null

  return (
    <div className={`reveal rounded-2xl border-2 ${accentBorder} overflow-hidden`}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center justify-between gap-4 px-5 py-4 ${accentSoft} transition-colors`}
      >
        <div className="flex items-center gap-3">
          <span className="text-base">⚡</span>
          <span className={`font-heading font-semibold text-[0.85rem] tracking-wide ${accent}`}>
            Pas le temps de tout lire ?
          </span>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={`${accent} flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-2 bg-almost-white space-y-3">
          {summary.tldr && (
            <p className="font-body text-[0.85rem] leading-relaxed text-[#3a4a42] font-medium">{summary.tldr}</p>
          )}
          {summary.points?.length > 0 && (
            <ul className="flex flex-col gap-2 mt-2">
              {summary.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 font-body text-sm text-[#4a5a52] leading-relaxed">
                  <span className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentBg}`} />
                  {pt}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

function NarrativeSection({ s, accent, accentBorder, accentBg, gradient }) {
  const paragraphs = Array.isArray(s.content) ? s.content : (s.content ? [s.content] : [])
  return (
    <div className="reveal">
      {s.heading && (
        <h3 className="font-heading font-semibold text-[1.1rem] md:text-[1.25rem] text-almost-black mb-4 leading-snug">
          {s.heading}
        </h3>
      )}
      <div className={s.image ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-start' : ''}>
        <div className="space-y-3">
          {paragraphs.map((p, i) => (
            <p key={i} className="font-body text-[0.93rem] leading-relaxed text-[#3a4a42]">{p}</p>
          ))}
          {s.list?.length > 0 && (
            <ul className={`mt-3 grid ${listGrid(s.list.length)} gap-x-8 gap-y-2`}>
              {s.list.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 font-body text-sm text-[#4a5a52] leading-relaxed">
                  <span className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentBg}`} />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {s.quote && (
            <blockquote className={`mt-4 border-l-2 ${accentBorder} pl-4`}>
              <p className={`font-body text-sm italic leading-relaxed ${accent}`}>"{s.quote}"</p>
            </blockquote>
          )}
        </div>
        {s.image && (
          <img src={s.image} alt={s.heading || ''} className="w-full h-auto rounded-xl object-cover" />
        )}
      </div>
    </div>
  )
}

const projects = {

  izired: {
    title: 'IZIRED',
    subtitle: "Refonte de l'interface d'une plateforme SaaS de valorisation immobilière",
    type: 'mixed',
    year: '2025',
    duration: '2 mois',
    role: 'UX/UI Designer & Développeuse Front-end',
    client: 'EENOV - Stage 1ère année',
    team: '3 personnes : front-end (moi), 1 dev backend, 1 Chef de projet',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Twig', 'UX Design', 'UI Design'],
    gradient: 'from-[#0d4d45] to-[#B54804]',

    summary: {
      tldr: "En 2 mois de stage, j'ai redesigné l'interface d'une plateforme SaaS immobilière et développé le front-end, puis conçu le site vitrine déployé sur izired.com.",
      points: [
        "Stack React + TypeScript + Tailwind CSS - nouvelles pour moi au départ du stage",
        "4 modules principaux redesignés + priorisation du développement des composants pour faciliter la passation",
        "15+ pages Figma pour le site vitrine, fidèle à ~99% en production",
        "Poursuite en freelance après le stage (oct.–déc. 2025)",
      ],
    },

    sections: [
      {
        heading: "C'est quoi IZIRED ?",
        content: "IZIRED est une plateforme SaaS permettant aux professionnels de l'immobilier (promoteurs, architectes, agents, investisseurs) d'analyser des terrains constructibles, de réaliser des études de faisabilité et de piloter des bilans prévisionnels de projets immobiliers.",
      },
      {
        heading: "Choix graphiques",
        content: "Ayant eu pratiquement carte blanche pour le visuel de l ’application j’ai conservé le bleu et le blanc du logo, tout en cherchant une couleur vive pour les CTA qui contrastait suffisamment avec le bleu et le blanc. On a donc opté pour le rose fuschia pour son dynamisme et nous avons ajouté un bleu vibrant, voisin du rose sur la roue chromatique.  Un point important de l’application a été de travailler la visualisation de données des projets, afin que celle-ci soit la plus intuitive et rapide possible. La difficulté résidait dans le fait de trouver des graphiques compatibles avec les l ibrairies existantes sur le logiciel.",
      },
      {
        heading: "Le site vitrine",
        content: [
          " Nous avons pu établir une direction pour le site : moderne, épuré, de grandes icones et beaucoup d’onglets interactifs et de redirections. De plus, pour garder une continuité avec les couleurs originels du logo, j’ai incorporé du violet via les dégradés du rose au bleu, ainsi que le turquoise, présent comme couleur d’accentuation.",
          " Enfin, l’enjeu était de réduire la quantité de texte visible sur la page, nous avons donc fait le choix de passer par de nombreux onglets et menu déroulants, ainsi que de nombreuses icones et données chiffrées.",
        ],
      },
    ],

    objectives: [
      { label: 'Business',  text: "Attirer des clients avec une interface moderne et professionnelle." },
      { label: 'Design',    text: "Moderniser l'identité visuelle et améliorer l'UX de l'application." },
      { label: 'Technique', text: "Intégrer le maximum de la nouvelle interface en front-end et créer des composants réutilisables." },
    ],
    constraints: [
      "2 mois pour designer et intégrer au maximum la nouvelle version",
      "Stack imposée : React, TypeScript, Tailwind CSS, Twig - nouvelles pour moi",
      "Rejoindre un projet déjà en cours avec une architecture existante",
      "Seule développeuse front-end - créer des composants réutilisables par le dev backend",
      "Me détacher des esquisses initiales du chef de projet pour proposer ma propre vision",
    ],
    process: [
      { phase: '01', title: "Découverte & appropriation", period: 'Semaine 1', color: 'green',
        tasks: ["Audit des contrastes V1 (WCAG)", "Définition d'une nouvelle palette", "Prise en main du code existant"] },
      { phase: '02', title: "Design de l'application", period: 'Semaines 2–4', color: 'orange',
        tasks: ["Haute-fidélité sur Figma, 1 à 4 itérations par page", "Dashboard, Analyse terrain, Études de faisabilité, Bilans", "Kit UI réutilisable"] },
      { phase: '03', title: "Développement Front-end", period: 'Semaines 3–8', color: 'green',
        tasks: ["Développement par module, branches séparées", "Dashboard avec bibliothèques de dataviz", "Architecture de composants réutilisables"] },
      { phase: '04', title: "Site vitrine", period: 'Semaines 7–8', color: 'orange',
        tasks: ["15+ pages haute-fidélité sur Figma", "Déployé sur www.izired.com (~99% de fidélité)"] },
    ],
    livrablesApp: [
      "Dashboard principal (nouveau module)",
      "Interface complète du module Analyse terrain",
      "Interface des Études de faisabilité & Bilans de projets",
      "Pages de connexion et gestion d'abonnements",
      "Kit UI avec composants réutilisables",
    ],
    livrablesSite: [
      "Page d'accueil",
      "5 pages de présentation des cas d'usage",
      "Pages d'offres, tarifs, services et case studies",
      "Total : 15+ pages Figma haute-fidélité",
    ],

    gallery: [
      { image: iziredCover,      caption: 'Hero section - site vitrine'          },
      { image: iziredDashboard,  caption: 'Dashboard de suivi des projets'        },
      { image: iziredTable2,     caption: 'Tableau de suivi des recettes'         },
      { image: iziredTable,      caption: 'Tableau des prix du marché'            },
      { image: iziredCasestudy,  caption: 'Case study - site vitrine'             },
      { image: iziredPlans,      caption: 'Comparaison des offres'                },
    ],

    techs: [
      { label: 'Langages & Frameworks', value: 'TypeScript · React · TailwindCSS · Twig · PHP' },
      { label: 'Outils', value: 'Figma · GitHub · Jira' },
    ],
    techsNote: "L'équipe EENOV a souhaité continuer à travailler avec moi en freelance après le stage.",

    learnings: [
      { title: "Équilibrer design et contraintes techniques", body: "La double casquette design-dev aide à créer des interfaces réalistes, surtout pour la dataviz." },
      { title: "Monter en compétences rapidement",           body: "Découvrir TypeScript, Tailwind et Twig en cours de projet : lecture de docs, bonnes questions, appropriation du code existant." },
      { title: "Se détacher pour proposer sa vision",        body: "Proposer ma propre vision tout en respectant les intentions fonctionnelles du chef de projet." },
      { title: "Composants réutilisables",                   body: "Penser à la maintenabilité pour faciliter le travail futur de l'équipe." },
    ],
    improvements: [
      { title: "Recherche utilisateur",               body: "J'aurais aimé m'entretenir directement avec des promoteurs ou architectes pour valider mes choix UX." },
      { title: "Étapes intermédiaires de conception", body: "Des wireframes basse-fidélité auraient pu accélérer les itérations." },
      { title: "Mesure de l'impact",                  body: "Définir des KPIs simples dès le départ pour pouvoir mesurer l'impact de la refonte." },
    ],
    links: [
      { label: 'Site vitrine', url: 'https://www.izired.com',  note: null },
      { label: 'Application',  url: 'https://app.izired.com',  note: '(connexion requise)' },
    ],
    next: 'fifaac',
  },

  fifaac: {
    title: 'FIFAAC 2025',
    subtitle: "Festival International du Film d'Architecture",
    type: 'design',
    year: '2025',
    duration: '2 semaines',
    role: 'Stagiaire UX/UI Designer',
    client: 'EENOV',
    team: 'Travail en collaboration avec une cheffe de projet digital',
    tags: ['Figma', 'UX Design', 'UI Design', 'Direction artistique'],
    gradient: 'from-[#1a0a02] via-[#B54804] to-[#F05F05]',
    summary: {
      tldr: "Conception de la maquette du site web du FIFAAC 2025 - de la direction artistique aux écrans Figma haute-fidélité.",
      points: [
        "8 écrans prototypés (desktop + mobile)",
        "Moodboard et direction artistique du site web",
        "Livré en 2 semaines de stage",
      ],
    },
    sections: [
      {
        heading: "Contexte",
        content: "Le FIFAAC est un festival de cinéma et d’arcitecture qui se tient chaque année à Bordeaux. Pour sa 10ème édition, ils souhaitaient redonner un coup de frais au site internet.",
      },
      {
        heading: "Mon approche",
        content: ["J’ai commencé par réaliser un moodboard en suivant les inspirations qui m’avaient été envoyé. Le but était d’avoir quelque chose d’assez minimaliste en gardant une touche de couleur. J’ai ainsi choisi 4 couleurs fortes mais douces afin de ne pas surcharger les visuels, ainsi qu’une police assez forte et originale, autour desquelles baser les accents du site. Le reste du site utilise donc le noir et le blanc, ainsi qu’une police simple afin de contrebalancer les couleurs et la police d’accent pour un rendu visuel assez épuré..",
          "Pour la programmation des films, l’idée de carte est apparue assez rapidement, permettant de mettre en valeur les photos des projets et les visuels cinématographiques. Au passage de la souris, les informations principales sont révélées, avec un CTA qui permet d’en apprendre plus sur le film. Sur cette page détaillée, on retrouve un lecteur de vidéo, la billetterie, ainsi qu’un résumé des films."
        ],
      },
    ],
    objectives: [],
    constraints: [],
    process: [
      { phase: '01', title: 'Recherche & benchmark', period: '', color: 'neutral', tasks: ["Benchmark de sites de festivals culturels", "Définition de la direction artistique"] },
      { phase: '02', title: 'Wireframes & architecture', period: '', color: 'orange', tasks: ["Architecture de l'information et wireframes"] },
      { phase: '03', title: 'Prototypage Figma', period: '', color: 'orange', tasks: ["Prototypage interactif haute-fidélité", "Desktop & Mobile"] },
    ],
    livrablesApp: ["Moodboard du projet", "Page de composants et éléments principaux du site pour validation avant prototypage"],
    livrablesSite: ["8 écrans haute fidélité", "Version mobile"],
    gallery: [
      { image: fifaacHero, caption: "Page d'accueil - hero section"},
      { image: fifaacProgramme, caption: 'Programme du festival'},
      { image: fifaacFilm, caption: 'Fiche film détaillée'},
      { image: fifaacMobile, caption: 'Version mobile - polices & couleurs'},
      {image: fifaacCamera, caption: 'Adaptation ludique des éléments'},
      {image: fifaacMoodboard, caption: 'Moodboard - Planche d\'inspirations'}
    ],
    techs: [{ label: 'Outil', value: 'Figma' }],
    techsNote: null,
    learnings: [
      { title: "Créer un univers graphique", body: "C'était la première fois que j'avais carte blanche pour un visuel, avec tout à créer, j'ai beaucoup aimé prendre le temps de réaliser un moodboard et de faire des recherches." },
    ],
    improvements: [],
    links: [{ label: 'Site web', url: 'https://fifaac.fr/', note: null }],
    next: 'compagnon',
  },

  compagnon: {
    title: 'Compagnon Virtuel',
    subtitle: 'Compagnon 3D pour la rééducation motrice post-AVC',
    type: 'mixte',
    year: '2024',
    duration: '8 mois',
    role: 'UX Researcher, graphiste 3D',
    client: 'Projet universitaire ENSC',
    team: "Groupe de 4 étudiantes de 1ère année, supervisé par Elise Grevet",
    tags: ['Modélisation 3D', 'Maya', 'CCU', 'Programmation', 'UX Research'],
    gradient: 'from-[#0d4d45] to-[#B54804]',
    summary: {
      tldr: "Conception d'un compagnon virtuel 3D pour accompagner des patients en rééducation post-AVC dans un jeu du Simon adapté.",
      points: [
        "Modélisation 3D sous Maya - zéro expérience préalable",
        "Développement du jeu en Unity / C#",
        "Tests utilisateurs : 100% des participants ont préféré la présence du compagnon",
      ],
    },
    sections: [
      {
        heading: "Contexte",
        content: ["Il a été démontré que la présence d'un compagnon virtuel pour la rééducation lors de l'utilisation d'interfaces Cerveau-Machine (ICM) est capable d’améliorer les ressentis et les performances des utilisateurs qui ont besoin de présence sociale et de soutien émotionnel.",
                  "Ainsi, Elise Grevet, doctorante effectuant actuellement sa thèse à l'INCIA sur l'acceptabilité des ICM dans le cadre de rééducation motrice et cognitive, nous a demandé de créer un compagnon virtuel, et notamment d'étudier quelle présence dans l'accompagnement est la plus appréciée par les patients."],
      },
      {
        heading: "Le projet",
        content: ["Le compagnon virtuel est un projet de création et de test d'un compagnon virtuel en 3D afin d'aider les patients en rééducation motrice et/ou post-AVC. Il s'agit d'un projet de groupe à 4 qui s'est étendu d'octobre 2024 à mai 2025.",
                  "Nous avons donc analysé l'état de l'art réalisé par un groupe précédent il y a 2 ans et modélisé en 3D le compagnon à l'aide du logiciel Maya dans 3 positions : debout, assis, couché. Ensuite, nous avons codé rapidement un jeu du Simon sur Unity et Visual Studio en C# pour pouvoir y intégrer notre compagnon par la suite. Le but ici est surtout de tester différents niveaux d'implication du compagnon afin de déterminer ce qui est le plus pertinent pour aider les patients en tant que soutien moral."],
      },
      {
        heading: "Les niveaux d'accompagnement",
        content: ["Nous avons par la suite codé un jeu du Simon, en C#, de manière à tester notre compagnon selon différents modes de jeu : ",
                  "Dans le mode 1, le compagnon n’est présent qu’au début et à la fin de la partie, afin de donner les consignes au joueur et de le féliciter ou l’encourager selon le résultat en fin de partie.", 
                  "Dans le mode 2, le compagnon agit comme dans le mode précédent, tout en étant présent entre chaque manche pour encourager et/ou féliciter le joueur.",
                  "Dans le mode 3, le compagnon agit comme dans le mode 2, mais il peut donner un indice au joueur si celui-ci est bloqué, où qu’il s’est déjà trompé deux fois, le nombre d’essais maximal étant de trois."],
      },
      {
        heading: "Tests utilisateurs et fin du projet",
        content: ["Enfin, nous avons donc demandé à différents élèves de l’ENSC de passer une expérimentation, dans laquelle ils devaient jouer aux trois modes de jeu dans un ordre aléatoire. Nous leur avons demandé de remplir un questionnaire sur leurs impressions et ressentis après chaque mode de jeu, ainsi qu’un questionnaire final pour établir le mode d’accompagnement qui leur convenait le mieux.",
                  "Ce projet s’est soldé par la rédaction d’un rapport, la création d’un site web qui retrace l’avancée du projet (que vous pourrez retrouver en cliquant sur le bouton en haut à droite de cette page) et par une soutenance afin de présenter l’ensemble de nos travaux."],
        quote: "100% des participants ont préféré une des parties où le compagnon était présent"
      },
      {
        heading: "Mes réalisations",
        content: "Sur ce projet j'ai donc principalement effectué la partie modélisation 3D dont je me suis occupée seule, ainsi que la réalisation du site web accompagnant le projet. J'ai également participé aux tests utilisateurs et à la rédaction des différents livrables.",
      },
    ],
    objectives: ['S\'approprier les travaux réalisés précédemment', 'Modéliser le compagnon virtuel', 'Développer un mini-jeu intégrant le compagnon', 'Tester le jeu et rédiger un guide d\'utilisation'],
    constraints: [],
    process: [
      { phase: '01', title: "Analyse de l'état de l'art", period: '', color: 'neutral', tasks: ["Appropriation des résultats du groupe précédent", "Définition de la forme et de l'attitude du compagnon"] },
      { phase: '02', title: 'Conception & Modélisation', period: '', color: 'orange', tasks: ["Dessins 2D du compagnon", "Modélisation 3D sous Maya"] },
      { phase: '03', title: 'Programmation du jeu', period: '', color: 'green', tasks: ["Prise en main de Unity", "Programmation du jeu en C#"] },
      { phase: '04', title: 'Tests utilisateurs', period: '', color: 'neutral', tasks: ["Tests utilisateurs", "Questionnaires et analyse des résultats"] },
      { phase: '05', title: 'Site web explicatif', period: '', color: 'orange', tasks: ["Design du site web", "Rédaction des contenus"] },
    ],
    livrablesApp: [],
    livrablesSite: ["Rapport de projet", "Soutenance finale"],
    gallery: [
      { image: compagnon3D,       caption: 'Modèle 3D du compagnon - vues'  },
      { image: compagnonCover,    caption: 'Interface du jeu du Simon'       },
      { image: compagnonDessins,  caption: 'Dessins 2D du compagnon'         },
      { youtubeId: 'cbnHl-wDUi8', caption: "Compagnon debout version intermédiaire"},
      { youtubeId: '_Q8bo7xUoIQ', caption: "Compagnon couché version intermédiaire"},
      { youtubeId: 'A0jI1YuOmAc', caption: "Vidéo de gameplay avec présence du compagnon"},
    ],
    techs: [
      { label: 'Langage', value: 'C#' },
      { label: 'Outils', value: 'Maya · Unity · GitHub' },
    ],
    techsNote: null,
    learnings: [
      { title: "Modélisation 3D",   body: "Aucune expérience préalable - prise en main de Maya, passage de la 2D à la 3D." },
      { title: "Gestion de projet", body: "Travail en équipe sur 8 mois, réunions régulières avec la tutrice, tenue d'un planning." },
    ],
    improvements: [
      { title: "Aller plus loin en 3D",             body: "J'aurais aimé animer le compagnon et l'intégrer directement dans le jeu plutôt qu'en image 2D." },
      { title: "Tests avec les utilisateurs finaux", body: "Nous n'avons pas pu tester avec de vraies personnes en rééducation post-AVC." },
      { title: "Personnalisation",                   body: "Pouvoir choisir le niveau d'accompagnement et créer d'autres jeux ciblant d'autres fonctions cognitives." },
    ],
    links: [
      { label: 'Site web du projet', url: 'https://jadelarivaille.wixsite.com/compagnon-virtuel/', note: 'Découvrez en plus !' },
    ],
    next: 'octotune',
  },

      octotune: {
    title: 'Octo\'Tune',
    subtitle: "Application mobile de gestion du club musique de l'ENSC",
    type: 'dev',
    year: '2024',
    duration: '4 mois',
    role: 'Etudiante de 1ère Année',
    client: 'Projet Scolaire',
    team: 'Travail en équipe de 8 : 4 élèves de 2ème année & 4 élèves de 1ère année',
    tags: ['Figma', 'Développement web', 'UX Research', 'UI Design'],
    gradient: 'from-[#0d4d45] to-[#B54804]',
    summary: {
      tldr: "Utilisation de méthodes de conception centrée utilisateur afin de concevoir puis développer en Javascript avec React une application mobile.",
      points: ["Etat de l'art : Benchmark existant, pose du contexte, méthodes de CCU existantes", "UX Research : réalisation de questionnaires et focus group", "UX/UI Design : prototypage de l'application sur Figma", "Développement mobile de l'application (planning, accueil, évènements, messagerie, notifications)"],
    },
    sections: [
      {
        heading: "Contexte",
        content: "Octo'Tune est une application Web mobile en cours de développement dans le cadre d'un projet transpromotions entre 1ère et 2ème années de l'Ecole Nationale Supérieure de Cognitique. Il s'agit d'une application de gestion du club musique de l'école. Les réservations de la salle étaient dispersées sur plusieurs canaux, les membres avaient du mal à trouver d'autres musiciens pour leurs projets et le calendrier était compliqué à suivre. Le but de cette application était donc de centraliser et de faciliter l'accès à l'information.",
      },
      {
        heading: "Mes contributions",
        content: "Sur ce projet j'ai comméncé par recenscer les méthodes de conception centrée utilisateur que nous pourrions utiliser, puis participé à la rédaction d'un des deux questionnaires et à la prise de notes lors du focus group. Après analyse des données, nous sommes passés au prototypage, sur lequel j'ai réalisé les pages évènements et profil ainsi que toute la messagerie et les pages qui y sont associées. Côté développement, j'ai fait le front-end de la page d'accueil, du bloc de notifications, de la messagerie générale, de la page d'évènements, et de la liste des membres.",
      },
      {
        heading: "Recherche utilisateur",
        content: "Pour comprendre au mieux le besoin des étudiants, nous avons sélectionné deux méthodes de conception centrée utilisateur : le questionnaire pour toucher le plus de personnes possibles, et le focus group pour avoir des retour qualitatifs.",
        list:["Questionnaire : Confirmation de l'utilité des fonctionnalités prévues (planning, calendrier, réservations de la salle...)", "Focus group : Identifications des raisons des problèmes d'organisation, émergence de nouvelles fonctionnalités (proposition de musiques, recherche de musiciens)"],
      },
      {
        heading: "Evaluation de l'utilisabilité",
        content: "Nous avons réalisé un premier prototype fonctionnel de l'application, sur lequel nous avons réalisé des tests utilisateur afin d'identifier les points de friction. Ainsi, nous avons pu relever le manque de clarté de certaines icônes de navigation et refondre complètement notre première version du planning pour quelque chose de beaucoup plus intuitif et navigable.",
      },
      {
        heading: "Développement de l'application",
        content: "Ce projet m'a permis une Montée en compétences rapide sur React et JavaScript. Les élèves de deuxième année se sont occupés de construire l'API de l'application et nous nous sommes concentrés sur le front. J'ai ainsi pu réaliser la page d'accueil, la messagerie générale, la page d'évènements. Ayant beaucoup aimé travailler sur le projet, j'ai réalisé le bloc de notifications ainsi que la liste des membres de mon côté, après la fin du projet.",
      },
    ],
    objectives: ["Mettre en oeuvre des méthodes de conception centrée utilisateur", "Réaliser un prototype fonctionnel de l'application", "Développer l'application"],
    constraints: ["Première mise en application des méthodes CCU", "Découverte de Javascript, React et des API"],
    process: [
      { phase: '01', title: 'Etat de l\'art', period: 'Semaines 1 à 3', color: 'neutral', tasks: ["Méthodes CCU et applications", "Organisation du club musique", "Benchmark applications similaires", "Agréabilité des interfaces utilisateur"] },
      { phase: '02', title: 'UX Research', period: 'Semaines 3 à 5', color: 'orange', tasks: ["Deux questionnaires (pour les membres et non-membres) : 44 répondants", "Focus Group : 2 intervenants, 9 membres du club musique"] },
      { phase: '03', title: 'Prototypage et tests utilisateurs', period: 'Semaines 6 à 12', color: 'orange', tasks: ["Protypage v1, définition de l'univers graphique", "Passation de 5 tests utilisateur", "Version 2 du prototype : amélioration de l'intuitivité et de l'agréabilité"] },
      { phase: '04', title: 'Développement', period: 'Semaines 6 à 16', color: 'green', tasks: ["Création de l'API et adaptation à nos besoins", "Développement du front end en JavaScript et CSS, sous React et NodeJS"] },
    ],
    livrablesApp: [],
    livrablesSite: ["Environ 60% de l'application développée", "Cahier des charges, soutenances orales"],
    gallery: [
      { youtubeId: 'Cmuft-fch6c', caption: "Vidéo maquette"},
      { youtubeId: '6gk-jGsWf0I', caption: "Vidéo version développée"},
      { image: octov1, caption: "Maquette v1 - Planning" },
      { image: octov2, caption: "Maquette v2 - Planning" },
      { image: octoMessagerie, caption: "Maquette - Messagerie"},
      { image: octoAccueil, caption: "Maquette v2 - Page d'accueil"},
      { image: octoCalendrier, caption: "Maquette - Calendrier"},
    ],
    techs: [
      { label: 'Langages & Frameworks', value: 'React · NodeJS · JavaScript · CSS · PHP'},
      { label: 'Outils', value: 'Figma · VSCode'}
    ],
    techsNote: null,
    learnings: [],
    improvements: [],
    links: [],
    next: 'sciencealasource',
  },

  sciencealasource: {
    title: 'Science à la source',
    subtitle: "Design du blog de l'Université de Bordeaux",
    type: 'design',
    year: '2025',
    duration: '2 mois',
    role: 'Freelance UX/UI Designer',
    client: 'EENOV',
    team: 'Travail en collaboration avec une cheffe de projet digital',
    tags: ['Figma', 'UX Design', 'UI Design'],
    gradient: 'from-[#1a0a02] via-[#B54804] to-[#F05F05]',
    summary: {
      tldr: "Conception de maquettes haute-fidélité pour un blog de l'Université de Bordeaux recensant ses publications scientifiques.",
      points: ["5 écrans desktop respectant la charte graphique de l'Université de Bordeaux", "Focus sur le système de filtrage des contenus", "Benchmark de sites concurrents"],
    },
    sections: [
      {
        heading: "Contexte",
        content: "Tous les contenus produits par ou en lien avec l'Université de Bordeaux étaient dispersés sur de nombreux sites. L'Université souhaitait construire un site regroupant tous leurs contenus, à la manière de Curieux.live.",
      },
      {
        heading: "Mon approche",
        content: "Analyse de sites concurrents (Curieux.Live !, Brut…) pour préciser les envies du client, avec un focus sur les systèmes de filtrage existants. Puis prototypage haute-fidélité sur Figma.",
        list: ["Benchmark et analyse des systèmes de filtrage", "5 écrans desktop : accueil, agenda, à propos, contenu BD, contenu vidéo"],
      },
    ],
    objectives: ["Designer 5 écrans desktop", "Respecter la charte graphique de l'Université de Bordeaux"],
    constraints: ["3 jours de travail", "S'émanciper de la charte graphique tout en restant cohérent par rapport à celle-ci"],
    process: [
      { phase: '01', title: 'Recherche & benchmark', period: '', color: 'orange', tasks: ["Analyse de Curieux.Live !, Brut…", "Focus sur les systèmes de filtrage"] },
      { phase: '02', title: 'Prototypage Figma', period: '', color: 'orange', tasks: ["5 écrans desktop haute-fidélité"] },
    ],
    livrablesApp: ["5 écrans desktop : accueil, agenda, à propos, contenu BD, contenu vidéo"],
    livrablesSite: ["Les maquettes ont été validées et implémentées dans le site."],
    gallery: [
      { image: salsHero, caption: "Page d'accueil - Hero" },
      { image: salsFiltre, caption: "Page d'accueil - Contenus et filtres" },
      { image: salsContenu, caption: "Page de contenu type vidéo"},
      { image: salsWF, caption: "Wireframe - Page d'accueil"},
    ],
    techs: [{ label: 'Outil utilisé', value: 'Figma' }],
    techsNote: null,
    learnings: [],
    improvements: [],
    links: [{ label: 'Site web', url: 'https://sciencealasource.u-bordeaux.fr/', note: null }],
    next: 'ensemenc',
  },

    ensemenc: {
    title: 'ENSemenC',
    subtitle: "Jeu de simulation de potager à double temporalité",
    type: 'dev',
    year: '2025',
    duration: '2 mois',
    role: 'Développeuse',
    client: 'Projet scolaire',
    team: 'Travail en binôme',
    tags: ['C#', 'Programmation orientée objet',],
    gradient: 'from-[#0d4d45] to-[#188F7E]',
    summary: {
      tldr: "Programmation d'un jeu de simulation de potager avec diverses espèces de plantes ayant des besoins spécifiques, un mode au tour par tour et un mode urgence en temps réel.",
      points: ["Programmation orientée objet, héritages", "Plus de 60 classes, 9 types de plantes", "Gestion des besoins en eau, lumière, température et sol, animaux, maladies, intempéries"],
    },
    sections: [
      {
        heading: "Contexte et présentation du Jeu",
        content: ["NSemenC était un projet de création d’un jeu en C# pour mettre en application les enseignements en Programmation Orientée Objet (POO) dispensés au cours du semestre. Nous étions en binôme pour ce projet. Le jeu était imposé, il s’agissait de créer une simulation de potager, au tour par tour, avec diverses plantes ayant des besoins spécifiques. Le joueur doit planter, entretenir et protéger ses cultures en fonction de leurs besoins (eau, lumière, température, terrain), tout en faisant face à des événements aléatoires comme des animaux nuisibles ou des intempéries.",
        "Le jeu propose deux modes : \n \t Mode Classique : plantation, achat d’objets, entretien du potager, consultation d’un wiki interne, passage du temps… \n \t Mode Urgence : réactions rapides en temps limité face aux menaces (grêle, sécheresse, rongeurs, etc.), avec un déroulement et des actions spécifiques."],
      },
    ],
    objectives: ["Designer 5 écrans desktop", "Respecter la charte graphique de l'Université de Bordeaux"],
    constraints: ["3 jours de travail", "Respect de la charte graphique de Bordeaux"],
    process: [
      { phase: '01', title: 'Diagrammes UML', period: 'Semaine 1', color: 'neutral', tasks: ["Première version du diagramme de classes UML", "Définition des paramètres, actions possibles et du contexte du jeu"] },
      { phase: '02', title: 'Programmation', period: '', color: 'green', tasks: ["Répartition des classes importantes en premier (Animaux, Plantes)", "Fonctionnement en branches pour limiter les conflits", "Débuggage du jeu au fur et à mesure"] },
    ],
    livrablesApp: ["Jeu fonctionnel avec 2 modes de jeu, 9 types de plantes et gestion d'événements aléatoires", "Menu principal avec accès à un wiki dans la console"],
    livrablesSite: ["Rapport de projet de 20 pages", "Diagrammes UML, d'entités et de relation complets"],
    gallery: [
      { image: ensemencArbre, caption: "Arbre de décisions du menu principal" },
      { image: ensemencClassique, caption: "Affichage en mode Classique" },
      { image: ensemencUrgence, caption: "Affichage en mode Urgence"},
      { image: ensemencClasse, caption: "Diagramme des relations entre les classes principales"},
      { image: ensemencWiki, caption: "Wiki du jeu accessible depuis le menu principal"},
    ],
    techs: [{ label: 'Langage et framework', value: 'C# .Net' }],
    techsNote: null,
    learnings: [
      { title: "Hiérarchisation des classes", body: "Polymorphisme, héritage et encapsulation" },
      { title: "Gestion d’états et de comportements dynamiques", body: "Mise à jour des plantes, intempéries et conditions météorologiques à chaque tour" },
      { title: "Séparation nette des responsabilités", body: "une classe dédiée à l’affichage, une classe dédiée à la simulation etc..." },
      { title: "Conception UML complète", body: "Réalisation de diagrammes de classes et de relations" },
    ],
    improvements: [],
    links: [{ label: 'Repository GitHub', url: 'https://github.com/PROGAV-PRJ25/projet-ensemenc-robert-larivaille', note: 'Un rapport complet est disponible sur le repository' }],
    next: 'izired',
  },
}

export default function ProjectDetail() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const pageRef  = useRef(null)
  useReveal(pageRef)

  const project = projects[id]

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6 pt-24">
        <h1 className="font-heading font-semibold text-4xl text-almost-black">Projet introuvable</h1>
        <p className="font-body text-[#4a5a52]">Ce projet n'existe pas ou son identifiant a changé.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-bright-green text-white font-body text-sm font-semibold px-6 py-3 rounded-full hover:bg-dark-green transition-colors">
          ← Retour à l'accueil
        </Link>
      </div>
    )
  }

  const isDesign     = project.type === 'design'
  const accent       = isDesign ? 'text-bright-orange'      : 'text-bright-green'
  const accentBg     = isDesign ? 'bg-bright-orange'        : 'bg-bright-green'
  const accentSoft   = isDesign ? 'bg-bright-orange/10'     : 'bg-bright-green/10'
  const accentBorder = isDesign ? 'border-bright-orange/30' : 'border-bright-green/30'

  const hasSummary      = !!project.summary
  const hasSections     = project.sections?.length > 0
  const hasObjectives   = project.objectives?.length > 0
  const hasConstraints  = project.constraints?.length > 0
  const hasProcess      = project.process?.length > 0
  const hasAppDel       = project.livrablesApp?.length > 0
  const hasSiteDel      = project.livrablesSite?.length > 0
  const hasLivrables    = hasAppDel || hasSiteDel
  const hasLearnings    = project.learnings?.length > 0
  const hasImprovements = project.improvements?.length > 0
  const hasLinks        = project.links?.length > 0
  const nextProject     = projects[project.next]

  const SL = ({ children, color = 'neutral' }) => {
    const cls = color === 'accent'
      ? `${accent} [&>span]:${accentBg}`
      : 'text-[#4a5a52] [&>span]:bg-[#4a5a52]'
    return (
      <div className={`inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase mb-8 ${cls}`}>
        <span className="w-6 h-px" />{children}
      </div>
    )
  }

  return (
    <div ref={pageRef}>
      <section className={`relative min-h-[65vh] flex flex-col justify-end px-6 md:px-12 pt-32 pb-12 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,.03) 0,rgba(255,255,255,.03) 1px,transparent 1px,transparent 24px)' }} />

        <button onClick={() => navigate(-1)} className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-white hover:underline font-body text-sm font-medium transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Retour
        </button>

        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map(t => (
              <span key={t} className="text-[0.67rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-white/15 text-white/90 backdrop-blur-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-heading font-semibold text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] tracking-tight text-white mb-3">{project.title}</h1>
          <p className="font-body text-base text-white/80 max-w-xl leading-relaxed">{project.subtitle}</p>
        </div>

        <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4">
          {[
            { label: 'Rôle',   value: project.role     },
            { label: 'Client', value: project.client   },
            { label: 'Année',  value: project.year     },
            { label: 'Durée',  value: project.duration },
            ...(project.team ? [{ label: 'Équipe', value: project.team }] : []),
          ].map(m => (
            <div key={m.label} className="min-w-0">
              <p className="font-body text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-white/50 mb-0.5">{m.label}</p>
              <p className="font-body text-sm font-medium text-white/90">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider variant={isDesign ? 'og' : 'go'} />

      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">

          <div className="flex flex-col gap-10">
            {hasSummary && (
              <SummaryBox
                summary={project.summary}
                accent={accent}
                accentBorder={accentBorder}
                accentSoft={accentSoft}
                accentBg={accentBg}
              />
            )}

            {hasLinks && (
              <div className="flex flex-wrap gap-3">
                {project.links.map(l => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold font-body px-5 py-2.5 rounded-full border transition-all hover:-translate-y-0.5 ${isDesign ? 'border-bright-orange/40 text-bright-orange hover:bg-bright-orange/10' : 'border-bright-green/40 text-bright-green hover:bg-bright-green/10'}`}
                  >
                    {l.label}
                    {l.note && <span className="font-normal text-xs opacity-60">{l.note}</span>}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                ))}
              </div>
            )}

            {hasSections && project.sections.map((s, i) => (
              <div key={i} className={i > 0 ? 'pt-8 border-t border-black/6' : ''}>
                <NarrativeSection s={s} accent={accent} accentBorder={accentBorder} accentBg={accentBg} gradient={project.gradient} />
              </div>
            ))}

            {hasObjectives && (
              <div className="reveal">
                <SL>Objectifs</SL>
                {typeof project.objectives[0] === 'string' ? (
                  <ul className={`grid ${listGrid(project.objectives.length)} gap-x-8 gap-y-2`}>
                    {project.objectives.map((o, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-body text-sm text-[#4a5a52] leading-relaxed">
                        <span className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentBg}`} />{o}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={`grid ${autoGrid(project.objectives.length)} gap-4`}>
                    {project.objectives.map((o, i) => (
                      <div key={i} className={`rounded-2xl p-5 border ${accentBorder} ${accentSoft}`}>
                        <span className={`text-[0.67rem] font-semibold tracking-[0.12em] uppercase mb-2 block ${accent}`}>{o.label}</span>
                        <p className="font-body text-sm leading-relaxed text-[#3a4a42]">{o.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {hasConstraints && (
              <div className="reveal">
                <SL>Contraintes</SL>
                <ul className={`grid ${listGrid(project.constraints.length)} gap-x-8 gap-y-2`}>
                  {project.constraints.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-body text-sm text-[#4a5a52] leading-relaxed">
                      <span className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentBg}`} />{c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-7 lg:sticky lg:top-28 z-50">
            <Carousel items={project.gallery} gradient={project.gradient} />

            {project.techs?.length > 0 && (
              <div className="reveal flex flex-col gap-3">
                <SL color="accent" className="mb-0">Technologies</SL>
                {project.techs.map(r => (
                  <div key={r.label} className={`flex flex-col gap-0.5 p-4 rounded-xl border ${accentBorder} ${accentSoft}`}>
                    <span className="font-body text-xs font-medium text-[#4a5a52]">{r.label}</span>
                    <span className={`font-heading font-medium text-l ${accent}`}>{r.value}</span>
                  </div>
                ))}
                {project.techsNote && (
                  <p className="font-body text-xs leading-relaxed text-[#6a7a72] mt-1">{project.techsNote}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {hasProcess && (
        <>
          <SectionDivider variant={isDesign ? 'go' : 'og'} />
          <section className="px-6 md:px-12 py-20 md:py-24 bg-[#f2f4f2]">
            <div className="reveal"><SL>Processus</SL></div>
            <div className="flex flex-col gap-5">
              {project.process.map((p, i) => {
                const po = p.color === 'orange'
                const pA = po ? 'text-bright-orange' : 'text-bright-green'
                const pB = po ? 'bg-bright-orange/10' : 'bg-bright-green/10'
                const pBo = po ? 'border-bright-orange/25' : 'border-bright-green/25'
                const pD = po ? 'bg-bright-orange' : 'bg-bright-green'
                return (
                  <div key={i} className={`reveal rounded-2xl border ${pBo} ${pB} p-7 md:p-8`}>
                    <div className="flex items-start gap-5 mb-4">
                      <span className={`font-heading font-semibold text-4xl ${pA} opacity-25 leading-none flex-shrink-0 w-10`}>{p.phase}</span>
                      <div>
                        <h3 className="font-heading font-semibold text-lg md:text-xl text-almost-black leading-tight">{p.title}</h3>
                        {p.period && <p className={`text-[0.72rem] font-semibold tracking-wide mt-1 ${pA}`}>{p.period}</p>}
                      </div>
                    </div>
                    <ul className={`grid ${listGrid(p.tasks.length)} gap-x-8 gap-y-2 pl-[60px]`}>
                      {p.tasks.map((t, j) => (
                        <li key={j} className="flex items-start gap-2.5 font-body text-sm text-[#3a4a42] leading-relaxed">
                          <span className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${pD}`} />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>
        </>
      )}

      {hasLivrables && (
        <>
          <SectionDivider variant={isDesign ? 'og' : 'go'} />
          <section className="px-6 md:px-12 py-20 md:py-24">
            <div className="reveal"><SL>Ce que j'ai livré</SL></div>
            <div className={`grid ${hasAppDel && hasSiteDel ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-xl'} gap-8`}>
              {hasAppDel && (
                <div className={`reveal rounded-2xl p-7 border ${accentBorder} ${accentSoft}`}>
                  <p className={`text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-5 ${accent}`}>Application web</p>
                  <ul className="flex flex-col gap-3">
                    {project.livrablesApp.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-body text-sm text-[#3a4a42] leading-relaxed">
                        <span className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentBg}`} />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {hasSiteDel && (
                <div className={`reveal rounded-2xl p-7 border border-bright-orange/25 bg-bright-orange/10`}>
                  <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-5 text-bright-orange">
                    {hasAppDel ? 'Site vitrine' : 'Livrables'}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {project.livrablesSite.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-body text-sm text-[#3a4a42] leading-relaxed">
                        <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-bright-orange" />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {hasLearnings && (
        <>
          <SectionDivider variant={isDesign ? 'og' : 'go'} />
          <section className="relative bg-forest-green px-6 md:px-12 py-20 md:py-24 overflow-hidden" data-cursor="white">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle,rgba(24,143,126,.12) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="relative z-10">
              <div className="reveal inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-bright-green/90 mb-10">
                <span className="w-6 h-px bg-bright-green/90" />Ce que j'ai appris
              </div>
              <div className={`grid ${autoGrid(project.learnings.length)} gap-5`}>
                {project.learnings.map((l, i) => (
                  <div key={i} className="reveal bg-white/4 border border-white/8 rounded-2xl p-7">
                    <span className="font-heading font-semibold text-3xl text-bright-green block mb-3 leading-none">0{i + 1}</span>
                    <h3 className="font-heading font-semibold text-base text-almost-white mb-3">{l.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-white/55">{l.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {hasImprovements && (
        <>
          <SectionDivider variant="go" />
          <section className="px-6 md:px-12 py-20 md:py-24">
            <div className="reveal"><SL>Ce que je ferais différemment</SL></div>
            <div className={`grid ${autoGrid(project.improvements.length)} gap-5`}>
              {project.improvements.map((imp, i) => (
                <div key={i} className="reveal rounded-2xl p-7 border border-black/8 bg-[#f2f4f2]">
                  <h3 className="font-heading font-semibold text-base text-almost-black mb-3">{imp.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-[#4a5a52]">{imp.body}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <SectionDivider variant={isDesign ? 'og' : 'go'} />

      {nextProject && (
        <section
          onClick={() => navigate(`/project/${project.next}`)}
          className={`relative group cursor-none overflow-hidden px-6 md:px-12 py-16 md:py-20 bg-gradient-to-br ${nextProject.gradient}`}
        >
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,.03) 0,rgba(255,255,255,.03) 1px,transparent 1px,transparent 24px)' }} />
          <div className="relative z-10 flex items-center justify-between gap-6">
            <div className="min-w-0">
              <p className="font-body text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">Projet suivant</p>
              <h2 className="font-heading font-semibold text-[clamp(1.6rem,4vw,3.5rem)] text-white leading-tight group-hover:opacity-80 transition-opacity">{nextProject.title}</h2>
              <p className="font-body text-sm text-white/60 mt-1">{nextProject.subtitle}</p>
            </div>
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/70 group-hover:translate-x-2 transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
