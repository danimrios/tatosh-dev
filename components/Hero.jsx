'use client'

import Image from 'next/image'
import Link from 'next/link'
import { m, useReducedMotion } from 'framer-motion'
import { hero } from '@/data/content'
import { images, whatsapp } from '@/data/links'

const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const charVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.03 } },
}

function AnimatedTitle({ text, className }) {
  return (
    <m.span className={className} variants={titleContainer} initial="hidden" animate="visible">
      {text.split('').map((char, i) => (
        <m.span key={i} variants={charVariant}>
          {char}
        </m.span>
      ))}
    </m.span>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()
  const [before, after] = hero.title.split(',')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden pt-16"
    >
      {/* Gradiente de fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-detail/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8">

          {/* ── Contenido izquierdo ── */}
          <div className="flex-1 text-center md:text-left w-full">
            {/* Badge */}
            <m.span
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="hidden md:inline-block font-mono text-xs text-detail bg-detail/10 border border-detail/20 rounded-full px-4 py-1 mb-6"
            >
              {hero.badge}
            </m.span>

            {/* Mobile: título + mascota en fila */}
            <div className="flex items-center justify-center gap-4 mb-6 md:block md:mb-0">
              {/* H1 con typing effect */}
              <h1 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-app-text md:mb-6 flex-1">
                {reduced ? (
                  <>
                    {before},{' '}
                    <span className="text-primary">{after}</span>
                  </>
                ) : (
                  <>
                    <AnimatedTitle text={before + ','} />
                    <AnimatedTitle text={after} className="text-primary" />
                  </>
                )}
              </h1>

              {/* Mascota pequeña — solo mobile */}
              <m.div
                className="relative w-28 h-36 flex-shrink-0 md:hidden"
                initial={reduced ? false : { opacity: 0 }}
                animate={reduced ? {} : { opacity: 1, y: [0, -8, 0] }}
                transition={reduced ? {} : {
                  opacity: { duration: 0.6 },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                }}
              >
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-110" />
                <Image
                  src={images.mascot}
                  alt={hero.mascotAlt}
                  fill
                  sizes="112px"
                  className="object-contain drop-shadow-2xl relative"
                  priority
                />
              </m.div>
            </div>

            {/* Subtítulo */}
            <m.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="font-inter text-lg text-app-text/70 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0"
            >
              {hero.subtitle}
            </m.p>

            {/* CTAs */}
            <m.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href={hero.ctaPrimary.href}
                className="bg-accent text-background font-grotesk font-semibold px-7 py-3.5 rounded-full hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 text-center"
              >
                {hero.ctaPrimary.label}
              </Link>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary/40 text-primary font-grotesk font-semibold px-7 py-3.5 rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-200 text-center"
              >
                {hero.ctaSecondary.label}
              </a>
            </m.div>
          </div>

          {/* ── Mascota derecha — solo desktop ── */}
          <div className="hidden md:flex flex-1 justify-end">
            <m.div
              className="relative w-80 h-96 sm:w-96 sm:h-[28rem]"
              initial={reduced ? false : { opacity: 0 }}
              animate={reduced
                ? {}
                : { opacity: 1, y: [0, -10, 0] }
              }
              transition={reduced
                ? {}
                : {
                    opacity: { duration: 0.6 },
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                  }
              }
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-110" />
              <Image
                src={images.mascot}
                alt={hero.mascotAlt}
                fill
                sizes="(max-width: 768px) 0px, 384px"
                className="object-contain drop-shadow-2xl relative"
                priority
              />
            </m.div>
          </div>

        </div>
      </div>

      {/* Flecha scroll-down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/50">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
