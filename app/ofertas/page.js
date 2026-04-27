import Navbar  from '@/components/Navbar'
import Ofertas from '@/components/Ofertas'
import Footer  from '@/components/Footer'

const siteUrl = 'https://tatosh-dev.com.ar'

export const metadata = {
  title:       'Servicios | Tatosh-Dev — Landing Pages, Sitios Institucionales y E-Commerce',
  description: 'Landing pages, sitios institucionales y e-commerce a medida en Argentina. Diseño profesional, SEO incluido y 6 meses de garantía.',
  alternates: {
    canonical: `${siteUrl}/ofertas`,
  },
  openGraph: {
    title:       'Servicios | Tatosh-Dev — Landing Pages, Sitios Institucionales y E-Commerce',
    description: 'Landing pages, sitios institucionales y e-commerce a medida en Argentina. Diseño profesional, SEO incluido y 6 meses de garantía.',
    url:         `${siteUrl}/ofertas`,
    siteName:    'Tatosh-Dev',
    locale:      'es_AR',
    type:        'website',
    images: [
      {
        url:    `${siteUrl}/images/tathos-trabajando.png`,
        width:  1200,
        height: 630,
        alt:    'Servicios de diseño web en Argentina — Tatosh-Dev',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Servicios | Tatosh-Dev — Landing Pages, Sitios Institucionales y E-Commerce',
    description: 'Landing pages, sitios institucionales y e-commerce a medida en Argentina. Diseño profesional, SEO incluido y 6 meses de garantía.',
    images:      [`${siteUrl}/images/tathos-trabajando.png`],
  },
}

export default function OfertasPage() {
  return (
    <>
      <Navbar />
      <main>
        <Ofertas />
      </main>
      <Footer />
    </>
  )
}
