import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import FranjaBadges    from '@/components/FranjaBadges'
import Portfolio       from '@/components/Portfolio'
import Proceso         from '@/components/Proceso'
import Contacto        from '@/components/Contacto'
import Footer          from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FranjaBadges />
        {/* <AnimatedSection><Portfolio /></AnimatedSection> */}
        <Proceso />
        <AnimatedSection><Contacto /></AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
