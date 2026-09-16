export const languages = {
  es: 'Español',
  en: 'English'
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': '¿Quiénes somos?',
    'nav.pricing': 'Precios',
    'nav.sla': 'SLA',
    'nav.contact': 'Contacto',
    'nav.quote': 'Cotizar',
    'nav.support': 'Soporte',

    'hero.badge': 'Partner Oficial Proxmox • Centros de Datos Tier III/IV',
    'hero.title': 'Infraestructura Cloud de Alto Rendimiento para la Continuidad de su Negocio',
    'hero.subtitle': 'Diseñamos y operamos soluciones de Nube Privada dedicada, Nube Pública elástica, almacenamiento de alta velocidad y protección de datos con soporte técnico 24/7.',
    'hero.cta.quote': 'Solicitar Cotización',
    'hero.cta.services': 'Ver Servicios',

    'stats.uptime': '99.99%',
    'stats.uptime.label': 'Disponibilidad SLA garantizada',
    'stats.support': '24/7/365',
    'stats.support.label': 'Soporte técnico especializado',
    'stats.latency': '< 15ms',
    'stats.latency.label': 'Baja latencia en Norteamérica',
    'stats.control': '100%',
    'stats.control.label': 'Control y soberanía de datos',

    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales de infraestructura diseñadas para escalar con su empresa',

    'partners.title': 'Alianzas Estratégicas',
    'partners.subtitle': 'Tecnología líder a nivel mundial respaldando cada uno de nuestros despliegues',

    'clients.title': 'Empresas que Confían en KloudXP',
    'clients.subtitle': 'Optimizamos la operación de empresas líderes en diversos sectores',

    'testimonials.title': 'Lo que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Casos de éxito reales en migración y gestión de infraestructura',

    'footer.desc': 'Somos sus socios estratégicos para alcanzar sus metas de transformación digital, enfocados siempre en la continuidad operativa y la optimización de costos.',
    'footer.links': 'Enlaces Rápidos',
    'footer.services': 'Servicios Cloud',
    'footer.support': 'Soporte & Legal',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Aviso de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.abuse': 'Reporte de Abuso',
    'footer.sla': 'Niveles de Servicio (SLA)',
    'footer.planning': 'Guía de Planificación'
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.pricing': 'Pricing',
    'nav.sla': 'SLA',
    'nav.contact': 'Contact',
    'nav.quote': 'Get a Quote',
    'nav.support': 'Support',

    'hero.badge': 'Official Proxmox Partner • Tier III/IV Data Centers',
    'hero.title': 'High-Performance Cloud Infrastructure for Business Continuity',
    'hero.subtitle': 'We architect and operate dedicated Private Cloud, scalable Public Cloud, high-performance storage, and enterprise data protection with 24/7 expert support.',
    'hero.cta.quote': 'Request a Quote',
    'hero.cta.services': 'Explore Services',

    'stats.uptime': '99.99%',
    'stats.uptime.label': 'Guaranteed SLA Uptime',
    'stats.support': '24/7/365',
    'stats.support.label': 'Dedicated Expert Support',
    'stats.latency': '< 15ms',
    'stats.latency.label': 'Low Latency in North America',
    'stats.control': '100%',
    'stats.control.label': 'Data Sovereignty & Control',

    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive infrastructure solutions engineered to scale with your organization',

    'partners.title': 'Strategic Alliances',
    'partners.subtitle': 'World-class technology powering every deployment',

    'clients.title': 'Trusted by Industry Leaders',
    'clients.subtitle': 'Powering operations for prominent enterprises across diverse sectors',

    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real success stories in infrastructure migration and management',

    'footer.desc': 'Your strategic partner for digital transformation, focused on operational continuity, high availability, and cost efficiency.',
    'footer.links': 'Quick Links',
    'footer.services': 'Cloud Services',
    'footer.support': 'Support & Legal',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.abuse': 'Abuse Report',
    'footer.sla': 'Service Level Agreement (SLA)',
    'footer.planning': 'Planning Guide'
  }
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui['es']) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
