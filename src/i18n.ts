import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          branding: 'IMPULSO™ LAB',
          hero_span: 'STRATEGIC GROWTH SYSTEM',
          hero_h1_1: 'ACCELERATE YOUR',
          hero_h1_2: 'GROWTH.',
          hero_p: 'The elite repository for entrepreneurs and corporate leaders. Strategic frameworks to scale your professional impact through actionable data.',
          cta_main: 'EXPLORE REPOSITORY →',
          stats_resources: 'Validated Assets',
          stats_mastery: 'Scale Capacity',
          stat_updated: 'DEPLOYED BY IMPULSO™ CORE UNIT',
          stat_growth: 'CONTINUOUS ACCESS: EVERY NEW TOOL IS DESIGNED TO BE EASY TO MANAGE',
          index_label: 'CORE DIRECTORY',
          index_h2: 'THE ASSETS',
          filter_all: 'DATABASE',
          resources_available: 'VALIDATED ASSETS',
          status_complete: 'VALIDATED',
          status_mark: 'VALIDATE',
          card_what_is: 'DEFINITION',
          card_strategy: 'SCALE STRATEGY',
          card_duration: 'DURATION',
          card_status: 'STATUS',
          footer_mastery: 'MASTER SERIES',
          footer_mastery_val: 'MAXIMUM PROFESSIONAL GROWTH',
          footer_format: 'FORMAT',
          footer_format_val: 'ELITE TOOLBOX + STRATEGY',
          footer_limited: 'AVAILABLE FOR A LIMITED TIME',
          footer_certified: 'Certified',
          level_beginner: 'Beginner',
          level_intermediate: 'Intermediate',
          level_advanced: 'Advanced',
          level_cli: 'CLI',
          search_placeholder: 'SEARCH...',
          sidebar_title: 'Menu',
          sidebar_all: 'ALL',
          footer_experts: 'THESE TOOLS ARE UTILIZED BY BUSINESS INTELLIGENCE EXPERTS GLOBALLY.',
          motivation_label: 'STRATEGIC INSIGHT',
          alert_protocol: 'SYSTEM UPDATE PROTOCOL'
        }
      },
      es: {
        translation: {
          branding: 'IMPULSO™ LAB',
          hero_span: 'SISTEMA DE CRECIMIENTO ESTRATÉGICO',
          hero_h1_1: 'ACELERA TU',
          hero_h1_2: 'CRECIMIENTO.',
          hero_p: 'El repositorio de élite para líderes y empresarios. Frameworks estratégicos diseñados para escalar tu impacto profesional mediante datos accionables.',
          cta_main: 'EXPLORAR REPOSITORIO →',
          stats_resources: 'Activos Validados',
          stats_mastery: 'Capacidad de Escala',
          stats_resources_available: 'ACTIVOS DISPONIBLES',
          stat_updated: 'DESPLEGADO POR IMPULSO™ CORE UNIT',
          stat_growth: 'ACCESO CONTINUO: CADA NUEVA HERRAMIENTA ESTÁ DISEÑADA PARA FACILITAR SU MANEJO',
          index_label: 'DIRECTORIO MAESTRO',
          index_h2: 'LOS ACTIVOS',
          filter_all: 'BASE DE DATOS',
          resources_available: 'ACTIVOS DISPONIBLES',
          status_complete: 'VALIDADO',
          status_mark: 'VALIDAR',
          card_what_is: 'DEFINICIÓN',
          card_strategy: 'ESTRATEGIA DE ESCALA',
          card_duration: 'DURACIÓN',
          card_status: 'ESTADO',
          footer_mastery: 'MASTER SERIES',
          footer_mastery_val: 'MÁXIMO CRECIMIENTO PROFESIONAL',
          footer_format: 'FORMATO',
          footer_format_val: 'TOOLBOX DE ÉLITE + ESTRATEGIA',
          footer_limited: 'DISPONIBLE POR TIEMPO LIMITADO',
          footer_certified: 'Certificado',
          level_beginner: 'Principiante',
          level_intermediate: 'Intermedio',
          level_advanced: 'Avanzado',
          level_cli: 'CLI',
          search_placeholder: 'BUSCAR...',
          sidebar_title: 'Menú',
          sidebar_all: 'TODOS',
          footer_experts: 'ESTAS HERRAMIENTAS SON UTILIZADAS POR EXPERTOS EN INTELIGENCIA DE NEGOCIOS A NIVEL GLOBAL.',
          motivation_label: 'INSIGHT ESTRATÉGICO',
          alert_protocol: 'PROTOCOLO DE ACTUALIZACIÓN'
        }
      }
    }
  });

export default i18n;
