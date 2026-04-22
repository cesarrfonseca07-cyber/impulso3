import { Section } from "./types";

export const SECTIONS: Section[] = [
  {
    id: "tools",
    title: { es: "Herramientas Prácticas", en: "Practical Tools" },
    icon: "Wrench",
    resources: [
      {
        id: 24,
        title: "Max (Rork)",
        url: "https://rork.com/max",
        whatIsIt: {
          es: "Herramienta de vanguardia para la creación de aplicaciones y juegos interactivos.",
          en: "Cutting-edge tool for creating interactive applications and games."
        },
        useCase: {
          es: "Desarrolla prototipos funcionales de apps y mecánicas de juego en tiempo récord.",
          en: "Develop functional app prototypes and game mechanics in record time."
        },
        level: "level_beginner",
        utility: 5,
        extraLabel: { es: "TOP RECOMENDADO", en: "TOP RECOMMENDED" }
      },
      {
        id: 14,
        title: "Google AI Studio",
        url: "https://aistudio.google.com/apps",
        whatIsIt: {
          es: "Entorno avanzado para el desarrollo completo de aplicaciones y páginas web funcionales potenciadas por IA.",
          en: "Advanced environment for full-stack functional web development and AI-powered applications."
        },
        useCase: {
          es: "Crea desde dashboards complejos hasta sitios web dinámicos y funcionales usando modelos Gemini.",
          en: "Create everything from complex dashboards to dynamic, functional websites using Gemini models."
        },
        level: "level_beginner",
        utility: 5,
        extraLabel: { es: "INDISPENSABLE", en: "MUST HAVE" }
      },
      {
        id: 1,
        title: "Flourish Studio",
        url: "https://flourish.studio",
        whatIsIt: {
          es: "Plataforma web para crear visualizaciones interactivas, animadas y mapas sin saber código.",
          en: "Web platform to create interactive, animated visualizations and maps without coding."
        },
        useCase: {
          es: "Crea un gráfico de barras animado que muestre evolución de ventas por año.",
          en: "Create an animated bar chart showing sales evolution by year."
        },
        level: "level_intermediate",
        utility: 4.5
      },
      {
        id: 2,
        title: "Vercel",
        url: "https://vercel.com",
        whatIsIt: {
          es: "Plataforma de despliegue y hosting para aplicaciones web y dashboards.",
          en: "Deployment and hosting platform for web applications and dashboards."
        },
        useCase: {
          es: "Sube un dashboard de Plotly o D3.js a un dominio personalizado.",
          en: "Upload a Plotly or D3.js dashboard to a custom domain."
        },
        level: "level_intermediate",
        utility: 4
      },
      {
        id: 3,
        title: "Gumroad",
        url: "https://gumroad.com/users/sign_up",
        whatIsIt: {
          es: "Plataforma para vender productos digitales directamente a tu audiencia.",
          en: "Platform to sell digital products directly to your audience."
        },
        useCase: {
          es: "Vende un informe en PDF con gráficos interactivos embebidos.",
          en: "Sell a PDF report with embedded interactive charts."
        },
        level: "level_beginner",
        utility: 4
      },
      {
        id: 4,
        title: "Canva Color Wheel",
        url: "https://www.canva.com/colors/color-wheel",
        whatIsIt: {
          es: "Rueda de colores interactiva para elegir paletas armoniosas.",
          en: "Interactive color wheel to choose harmonious palettes."
        },
        useCase: {
          es: "Genera una paleta complementaria para un mapa de calor.",
          en: "Generate a complementary palette for a heat map."
        },
        level: "level_beginner",
        utility: 4
      },
      {
        id: 5,
        title: "Material Palette",
        url: "https://www.materialpalette.com/lime/grey",
        whatIsIt: {
          es: "Generador de paletas basado en Material Design de Google.",
          en: "Palette generator based on Google's Material Design."
        },
        useCase: {
          es: "Selecciona color primario y secundario, obtén toda la paleta.",
          en: "Select primary and secondary colors, get the full palette."
        },
        level: "level_beginner",
        utility: 4
      },
      {
        id: 6,
        title: "Adobe Color",
        url: "https://color.adobe.com/es/create/color-wheel",
        whatIsIt: {
          es: "Herramienta profesional de paletas de color (gratuita).",
          en: "Professional color palette tool (free)."
        },
        useCase: {
          es: "Sube el logo de tu empresa y extrae los 5 colores corporativos.",
          en: "Upload your company logo and extract the 5 corporate colors."
        },
        level: "level_advanced",
        utility: 4.5
      },
      {
        id: 7,
        title: "Freepik",
        url: "https://www.freepik.es",
        whatIsIt: {
          es: "Banco de recursos gráficos (vectores, iconos, mockups).",
          en: "Graphic resource bank (vectors, icons, mockups)."
        },
        useCase: {
          es: "Descarga iconos de flechas para un gráfico de tendencias.",
          en: "Download arrow icons for a trend chart."
        },
        level: "level_beginner",
        utility: 4.5
      }
    ]
  },
  {
    id: "courses",
    title: { es: "Cursos y Formación", en: "Courses & Training" },
    icon: "GraduationCap",
    resources: [
      {
        id: 8,
        title: "Visualización de Datos – Coursera",
        url: "https://www.coursera.org/learn/dataviz",
        whatIsIt: {
          es: "Curso introductorio de la Universidad de Illinois.",
          en: "Introductory course from the University of Illinois."
        },
        useCase: {
          es: "Ideal para fundamentar por qué eliges un gráfico sobre otro.",
          en: "Ideal for grounding why you choose one chart over another."
        },
        level: "level_beginner",
        utility: 5,
        duration: { es: "15 horas", en: "15 hours" },
        certified: { es: "Sí", en: "Yes" },
        extraLabel: { es: "el mejor para empezar", en: "best to start" }
      },
      {
        id: 23,
        title: "Agent Skills Marketplace (SkillsMP)",
        url: "https://skillsmp.com",
        whatIsIt: {
          es: "Mercado que recopila miles de skills de IA de código abierto.",
          en: "Marketplace collecting thousands of open-source AI skills."
        },
        useCase: {
          es: "Automatiza tareas de programación con instrucciones modulares.",
          en: "Automate programming tasks with modular instructions."
        },
        level: "level_cli",
        utility: 5,
        extraLabel: { es: "100% Open-source", en: "100% Open-source" }
      }
    ]
  },
  {
    id: "inspiration",
    title: { es: "Inspiración y Referencias", en: "Inspiration & References" },
    icon: "Lightbulb",
    resources: [
      {
        id: 12,
        title: "Information is Beautiful",
        url: "https://informationisbeautiful.net",
        whatIsIt: {
          es: "Sitio de referencia mundial en visualización de datos creativa.",
          en: "World reference site in creative data visualization."
        },
        useCase: {
          es: "Ver tendencias globales y formatos innovadores.",
          en: "See global trends and innovative formats."
        },
        level: "level_beginner",
        utility: 5
      }
    ]
  }
];
