// ── data/content.js ──────────────────────────────────────────────────────────
// Todos los textos del sitio viven acá. Editá este archivo para cambiar copy.

export const nav = {
  brand: 'Tatosh-Dev',
  links: [
    { label: 'Servicios',        href: '/ofertas'     },
    // { label: 'Portfolio',        href: '/#portfolio'  },
    { label: 'Proceso',          href: '/#proceso'    },
    { label: 'Contacto',         href: '/#contacto'   },
  ],
  cta: 'Hablemos',
}

export const hero = {
  badge:    '🐧 Desarrollo web',
  title:    'Tu presencia digital, hecha con código y corazón.',
  subtitle: 'Creamos experiencias web que no solo se ven bien, sino que conectan. Sitios rápidos, modernos y diseñados para que tu marca nunca deje de crecer.',
  ctaPrimary:   { label: 'Servicios', href: '/ofertas' },
  ctaSecondary: { label: 'Hablemos hoy',      href: '#contacto'  },
  mascotAlt: 'Tatosh, el pingüino de Tatosh-Dev',
}

export const servicios = {
  title:    'Lo que hacemos',
  subtitle: 'Soluciones digitales a medida para tu negocio.',
  items: [
    {
      id:          'diseno',
      title:       'Diseño Web',
      description: 'Interfaces modernas, responsivas y centradas en la experiencia del usuario. Cada pixel tiene un propósito.',
    },
    {
      id:          'desarrollo',
      title:       'Desarrollo',
      description: 'Código limpio con las tecnologías más actuales. Next.js, React y las herramientas que hacen la diferencia.',
    },
    {
      id:          'mantenimiento',
      title:       'Mantenimiento',
      description: 'Tu sitio siempre actualizado, seguro y funcionando. Nos encargamos de todo para que vos no te preocupes.',
    },
  ],
}

export const ofertas = {
  title:       'Lo que ofrecemos',
  pitch:       'No vendemos páginas web. Construimos la presencia digital que tu negocio merece. Diseño a medida, tecnología de punta, acompañamiento real en cada etapa. Porque una página web no es solo código, es tu mejor vendedor trabajando las 24 horas.',
  subtitle:    'Elegí el servicio que necesita tu proyecto y contanos tu idea.',
  defaultTab:  'institucional',

  proceso: {
    title: 'Así trabajamos',
    items: [
      'Reunión inicial para entender tu proyecto',
      'Reuniones de seguimiento durante el desarrollo',
      'Revisión previa a la entrega para tu conformidad',
      'Asesoramiento personalizado en cada etapa',
    ],
  },

  extra: {
    title:      '¿Querés llevar tu sitio al siguiente nivel?',
    item: {
      label:    'Producción fotográfica y audiovisual profesional',
      note:     'Coordinamos una sesión de fotos y video profesional para que tu sitio luzca al máximo. Servicio a cargo de especialistas externos, gestionado por nosotros.',
    },
    disclaimer: '* Servicio con costo adicional, presupuestado según cada proyecto.',
  },

  banner: {
    title:    'Tu página, a tu gusto',
    subtitle: 'No entregamos hasta que estés conforme. Trabajamos con vos desde la primera reunión hasta el último detalle.',
    cta:      { label: 'Empezá hoy →', href: '/#contacto' },
  },

  tabs: [
    {
      id:          'landing',
      label:       'Landing Pages',
      icon:        'landing',
      tagline:     'Rápida, efectiva y que convierte',
      heading:     'Landing Pages',
      description: 'Páginas diseñadas para captar clientes, mostrar tu producto y generar acción inmediata.',
      callout:     'Sacate la duda y solicitá ya tu presupuesto!',
      features: [
        'Diseño personalizado',
        'Optimización para conversión',
        '100% responsive',
        'Hosting a la medida de tu proyecto',
        'Entrega en menos de 14 días',
        { label: 'Botón de WhatsApp Business integrado',  note: 'Para que tus clientes te contacten con un click' },
        { label: 'Configuración de Google Analytics',     note: 'Conocé cuántas personas visitan tu sitio y desde dónde llegan' },
        { label: 'Instalación de Meta Pixel',             note: 'Seguimiento de visitantes para optimizar tus anuncios en Facebook e Instagram' },
        { label: 'Optimización SEO completa',             note: 'Metadatos, estructura semántica y velocidad configurados para que Google te encuentre primero' },
        { label: 'Preparación para Google Ads',           note: 'Etiquetas de conversión instaladas para que tus campañas pagadas funcionen desde el primer día' },
        { label: 'Certificado SSL incluido',              note: 'Sitio seguro con candado verde: protección de datos y mejor posicionamiento en buscadores' },
      ],
      cta: { label: 'Quiero esto', href: '/#contacto' },
    },
    {
      id:          'institucional',
      label:       'Sitios Institucionales',
      popular:     'Más elegido',
      icon:        'institucional',
      tagline:     'Tu marca en internet, con identidad propia',
      heading:     'Sitios Institucionales',
      description: 'Sitios completos para empresas y profesionales que quieren presencia digital seria y escalable.',
      callout:     'Sacate la duda y solicitá ya tu presupuesto!',
      features: [
        'Múltiples secciones',
        'Diseño a medida',
        'Integración con redes sociales',
        '6 meses de mantenimiento incluido',
        'Hosting a la medida de tu proyecto',
        'Entrega estimada según proyecto',
        { label: 'Botón de WhatsApp Business integrado',  note: 'Para que tus clientes te contacten con un click' },
        { label: 'Configuración de Google Analytics',     note: 'Conocé cuántas personas visitan tu sitio y desde dónde llegan' },
        { label: 'Configuración de Google My Business',   note: 'Dejamos tu perfil listo para que aparezcas en Google Maps. La gestión del perfil queda en tus manos' },
        { label: 'Instalación de Meta Pixel',             note: 'Seguimiento de visitantes para optimizar tus anuncios en Facebook e Instagram' },
        { label: 'Optimización SEO completa',             note: 'Metadatos, estructura semántica y velocidad configurados para que Google te encuentre primero' },
        { label: 'Preparación para Google Ads',           note: 'Etiquetas de conversión instaladas para que tus campañas pagadas funcionen desde el primer día' },
        { label: 'Certificado SSL incluido',              note: 'Sitio seguro con candado verde: protección de datos y mejor posicionamiento en buscadores' },
      ],
      cta: { label: 'Quiero esto', href: '/#contacto' },
    },
    {
      id:          'ecommerce',
      label:       'E-Commerce / Apps',
      icon:        'ecommerce',
      tagline:     'Vendé online o automatizá tu negocio',
      heading:     'E-Commerce / Aplicaciones',
      description: 'Tiendas online y aplicaciones web personalizadas para llevar tu negocio al siguiente nivel.',
      callout:     'Sacate la duda y solicitá ya tu presupuesto!',
      features: [
        'Múltiples secciones',
        'Diseño a medida',
        'Carrito de compras',
        'Gestión de productos',
        'Medios de pago argentinos',
        'Panel de administración',
        'Integración con redes sociales',
        'Soporte técnico — 12 meses de mantenimiento',
        'Hosting a la medida de tu proyecto',
        'Entrega estimada según proyecto',
        { label: 'Botón de WhatsApp Business integrado',  note: 'Para que tus clientes te contacten con un click' },
        { label: 'Configuración de Google Analytics',     note: 'Conocé cuántas personas visitan tu sitio y desde dónde llegan' },
        { label: 'Configuración de Google My Business',   note: 'Dejamos tu perfil listo para que aparezcas en Google Maps. La gestión del perfil queda en tus manos' },
        { label: 'Instalación de Meta Pixel',             note: 'Seguimiento de visitantes para optimizar tus anuncios en Facebook e Instagram' },
        { label: 'Optimización SEO completa',             note: 'Metadatos, estructura semántica y velocidad configurados para que Google te encuentre primero' },
        { label: 'Preparación para Google Ads',           note: 'Etiquetas de conversión instaladas para que tus campañas pagadas funcionen desde el primer día' },
        { label: 'Certificado SSL incluido',              note: 'Sitio seguro con candado verde: protección de datos y mejor posicionamiento en buscadores' },
      ],
      cta: { label: 'Quiero esto', href: '/#contacto' },
    },
  ],
}

export const portfolio = {
  title:    'Portfolio',
  subtitle: 'Algunos de nuestros trabajos más recientes.',
  cta:      'Ver proyecto',
  items: [
    {
      id:          'proyecto-1',
      name:        'Tienda Online Moda',
      description: 'E-commerce completo con carrito, pasarela de pago y panel de administración.',
    },
    {
      id:          'proyecto-2',
      name:        'Landing SaaS',
      description: 'Página de aterrizaje de alta conversión para producto de software B2B.',
    },
    {
      id:          'proyecto-3',
      name:        'Sitio Corporativo',
      description: 'Presencia institucional para empresa de servicios con blog integrado.',
    },
    {
      id:          'proyecto-4',
      name:        'App Web Interna',
      description: 'Herramienta interna de gestión con dashboard y reportes en tiempo real.',
    },
  ],
}

export const franja = {
  badges: [
    {
      id:    'todo-incluido',
      label: 'Todo incluido',
    },
    {
      id:    'sin-sorpresas',
      label: 'Sin sorpresas',
    },
    {
      id:    'sin-letra-chica',
      label: 'Sin letra chica',
    },
  ],
}

export const proceso = {
  title:    'Nuestro proceso',
  subtitle: 'Simple, transparente y orientado a resultados.',
  equipo:   'No trabajamos para vos, trabajamos con vos. Nos integramos a tu equipo: junto a tu área de marketing, tu community manager o quien sea parte de tu proyecto. Cada decisión se toma con tu aprobación.',
  equipoExtra: 'Estimamos entre 6 y 10 reuniones a lo largo del proyecto. Sin límite: las que hagan falta.',
  steps: [
    {
      number:      '01',
      title:       'Comprensión',
      description: 'Escuchamos tus necesidades, analizamos tu negocio y definimos juntos los objetivos del proyecto.',
      details: [
        'Reunión inicial para conocer tu negocio y objetivos',
        'Definición del alcance y funcionalidades del proyecto',
        'Propuesta personalizada con tiempos y costos',
        'Elección de tecnologías y plataformas según tu caso',
      ],
    },
    {
      number:      '02',
      title:       'Desarrollo',
      description: 'Diseñamos, programamos y testeamos con metodologías ágiles. Te mostramos el avance en cada etapa.',
      details: [
        'Diseño de wireframes y mockups para tu aprobación',
        'Desarrollo iterativo con entregas parciales',
        'Reuniones de seguimiento en cada hito del proyecto',
        'Pruebas de funcionamiento y compatibilidad en todos los dispositivos',
      ],
    },
    {
      number:      '03',
      title:       'Compromiso',
      description: 'Entregamos a tiempo, acompañamos el lanzamiento y nos quedamos disponibles para lo que necesites.',
      details: [
        'Revisión final conjunta antes de publicar',
        'Publicación y configuración del hosting',
        'Capacitación para que puedas gestionar tu sitio',
        'Soporte post-lanzamiento incluido',
      ],
    },
  ],
}

export const testimonios = {
  title:    'Lo que dicen nuestros clientes',
  subtitle: 'La satisfacción de nuestros clientes es nuestro mejor portfolio.',
  items: [
    {
      id:     'test-1',
      name:   'Valeria Gómez',
      role:   'Dueña, Boutique Valen',
      text:   'Tatosh-Dev transformó mi negocio. Mi tienda online quedó increíble y las ventas crecieron 60% en el primer mes.',
      stars:  5,
    },
    {
      id:     'test-2',
      name:   'Marcos Ruiz',
      role:   'CEO, TechBA',
      text:   'Profesionalismo y calidad al 100%. Entregaron antes de lo acordado y el resultado superó todas mis expectativas.',
      stars:  5,
    },
    {
      id:     'test-3',
      name:   'Laura Fernández',
      role:   'Directora, Estudio LF',
      text:   'El proceso fue muy claro y transparente. Siempre supe en qué etapa estábamos. Lo recomiendo sin dudarlo.',
      stars:  5,
    },
  ],
}

export const contacto = {
  title:    '¿Arrancamos?',
  subtitle: 'Tu próxima página web empieza con un mensaje. Escribinos hoy.',
  cta:      'Escribinos por WhatsApp',
  note:     'Te respondemos en menos de 24 horas hábiles.',
}

export const footer = {
  brand:     'Tatosh-Dev',
  tagline:   'Desarrollo web profesional.',
  links: [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Proceso',   href: '/#proceso'   },
    { label: 'Contacto',  href: '/#contacto'  },
  ],
  socials: [
    { label: 'GitHub',    href: '#' },
    { label: 'LinkedIn',  href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} Tatosh-Dev. Todos los derechos reservados.`,
}
