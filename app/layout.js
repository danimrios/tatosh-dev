import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import MotionProvider from '@/components/MotionProvider'

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

const siteUrl = 'https://tatosh-dev.com.ar'

export const metadata = {
  title:       'Tatosh-Dev | Diseño y Desarrollo Web Profesional',
  description: 'Diseño web a medida, sitios institucionales, landing pages y e-commerce en Argentina. 6 meses de garantía incluidos.',
  keywords:    ['diseño web argentina', 'desarrollo web', 'landing page', 'sitio institucional', 'ecommerce argentina', 'Tatosh-Dev'],
  authors:     [{ name: 'Tatosh-Dev' }],
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:       'Tatosh-Dev | Diseño y Desarrollo Web Profesional',
    description: 'Diseño web a medida, sitios institucionales, landing pages y e-commerce en Argentina. 6 meses de garantía incluidos.',
    url:         siteUrl,
    siteName:    'Tatosh-Dev',
    locale:      'es_AR',
    type:        'website',
    images: [
      {
        url:    `${siteUrl}/images/tathos-trabajando.png`,
        width:  1200,
        height: 630,
        alt:    'Tatosh-Dev — Diseño y Desarrollo Web Profesional en Argentina',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Tatosh-Dev | Diseño y Desarrollo Web Profesional',
    description: 'Diseño web a medida, sitios institucionales, landing pages y e-commerce en Argentina. 6 meses de garantía incluidos.',
    images:      [`${siteUrl}/images/tathos-trabajando.png`],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-app-text font-inter antialiased">
        <MotionProvider>
          {children}
        </MotionProvider>
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-KW1F5H15PL" />
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
