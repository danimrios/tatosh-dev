// ── data/links.js ─────────────────────────────────────────────────────────────

export const images = {
  mascot:      '/images/tathos-trabajando.png',
  ofertasAnim: '/images/tatosh- animacion.png',
  portfolio: {
    'proyecto-1': '/images/portfolio/proyecto-1.webp',
    'proyecto-2': '/images/portfolio/proyecto-2.webp',
    'proyecto-3': '/images/portfolio/proyecto-3.webp',
    'proyecto-4': '/images/portfolio/proyecto-4.webp',
  },
}

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
// Reemplazá WHATSAPP_NUMBER con tu número: código de país + número sin espacios
// Ejemplo Argentina: 5491112345678
const WHATSAPP_NUMBER = 'WHATSAPP_NUMBER'

function wa(msg) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

// Link general (botón flotante, Hero)
export const whatsapp = wa('¡Hola! Me contacto desde Tatosh-Dev. 👋')

// Links por servicio (botones "Quiero esto" en cada tab)
export const whatsappService = {
  landing:       wa('¡Hola! 👋 Me interesa el desarrollo de una *Landing Page* para mi proyecto. ¿Me pueden contar más sobre este servicio?'),
  institucional: wa('¡Hola! 👋 Me interesa el desarrollo de un *Sitio Institucional* para mi negocio. ¿Me pueden contar más sobre este servicio?'),
  ecommerce:     wa('¡Hola! 👋 Me interesa el desarrollo de un *E-Commerce o Aplicación Web* para mi proyecto. ¿Me pueden contar más sobre este servicio?'),
}

export const videos = {
  showreel: '',
  demo:     'https://youtube.com/shorts/UIfBJf6CXTY',
}
