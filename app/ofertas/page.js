import Navbar  from '@/components/Navbar'
import Ofertas from '@/components/Ofertas'
import Footer  from '@/components/Footer'

export const metadata = {
  title:       'Lo que ofrecemos — Tatosh-Dev',
  description: 'Conocé todos nuestros servicios: diseño web, desarrollo y mantenimiento.',
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
