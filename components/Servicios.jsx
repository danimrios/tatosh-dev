'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { servicios } from '@/data/content'

const icons = {
  diseno: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="3" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 20h26v3a3 3 0 01-3 3H6a3 3 0 01-3-3v-3z" fill="currentColor" opacity=".2"/>
      <circle cx="16" cy="11" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M13 27h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  desarrollo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M10 20l-6-4 6-4M22 20l6-4-6-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 8l-4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  mantenimiento: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M26 12a10 10 0 11-10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M26 6v6h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity=".4"/>
    </svg>
  ),
}

export default function Servicios() {
  const reduced = useReducedMotion()

  return (
    <section id="servicios" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header de sección */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-detail tracking-widest uppercase mb-3 block">
            — Servicios —
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-app-text mb-4">
            {servicios.title}
          </h2>
          <p className="font-inter text-app-text/60 max-w-md mx-auto">
            {servicios.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={reduced ? {} : {
                y: -6,
                borderColor: '#F5C400',
                transition: { duration: 0.2 },
              }}
              className="group relative bg-background border border-primary/10 rounded-2xl p-8
                hover:bg-primary/5 transition-colors duration-300 cursor-default"
            >
              {/* Gradiente hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Ícono */}
              <div className="relative text-primary mb-6 w-12 h-12 flex items-center justify-center
                bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                {icons[item.id]}
              </div>

              {/* Texto */}
              <h3 className="font-grotesk font-semibold text-xl text-app-text mb-3 relative">
                {item.title}
              </h3>
              <p className="font-inter text-sm text-app-text/60 leading-relaxed relative">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
