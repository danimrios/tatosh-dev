import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// ── SEO ───────────────────────────────────────────────────────────────────────
// Optimización SEO: metadatos completos para que Google indexe correctamente el
// sitio y muestre información enriquecida en los resultados de búsqueda.
export const metadata = {
  title:       'Tatosh-Dev — Desarrollo web profesional',
  description: 'Diseñamos y desarrollamos sitios web modernos, rápidos y que conectan tu marca con el mundo.',
  keywords:    ['desarrollo web', 'diseño web', 'Next.js', 'Argentina', 'Tatosh-Dev', 'agencia web'],
  authors:     [{ name: 'Tatosh-Dev' }],
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://tatosh-dev.com.ar',
  },
  openGraph: {
    title:       'Tatosh-Dev — Desarrollo web profesional',
    description: 'Diseñamos y desarrollamos sitios web modernos, rápidos y que conectan tu marca con el mundo.',
    url:         'https://tatosh-dev.com.ar',
    siteName:    'Tatosh-Dev',
    locale:      'es_AR',
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Tatosh-Dev — Desarrollo web profesional',
    description: 'Diseñamos y desarrollamos sitios web modernos, rápidos y que conectan tu marca con el mundo.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-app-text font-inter antialiased">
        {children}
        <WhatsAppButton />
      </body>

      {/*
        ── Meta Pixel (Facebook / Instagram Ads) ────────────────────────────────
        Permite rastrear las acciones de los visitantes (visitas, contactos,
        compras) para optimizar anuncios en Facebook e Instagram y crear
        audiencias personalizadas. Reemplazá TU_PIXEL_ID con tu ID real.
      */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
          n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','TU_PIXEL_ID');
          fbq('track','PageView');
        `}
      </Script>

      {/*
        ── Google Ads / Google Tag ───────────────────────────────────────────────
        Registra conversiones (formularios, clics en WhatsApp) para medir el
        rendimiento de tus campañas en Google Ads y habilitar el remarketing.
        Reemplazá AW-TU_ID_DE_CONVERSION con tu ID real de Google Ads.
      */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-TU_ID_DE_CONVERSION"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-TU_ID_DE_CONVERSION');
        `}
      </Script>
    </html>
  )
}
