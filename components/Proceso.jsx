'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { proceso } from '@/data/content'

const stepIcons = [
  <svg key="01" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M18 18l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity=".3"/>
  </svg>,
  <svg key="02" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M9 18l-5-4 5-4M19 18l5-4-5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7l-4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="03" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M4 14h3l3-3 4 4 3-3 3 3h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 14v4a2 2 0 002 2h10a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const stepVariant = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Proceso() {
  const reduced = useReducedMotion()

  return (
    <section id="proceso" className="bg-background py-24 border-t border-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-detail tracking-widest uppercase mb-3 block">
            — Proceso —
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-app-text mb-4">
            {proceso.title}
          </h2>
          <p className="font-inter text-app-text/60 max-w-md mx-auto">
            {proceso.subtitle}
          </p>
        </div>

        {/* 3 columnas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16"
          variants={container}
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Línea conectora desktop */}
          <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

          {proceso.steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={reduced ? {} : stepVariant}
              className="relative flex flex-col items-center text-center"
            >
              {/* Ícono con número */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {stepIcons[i]}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-background font-mono font-bold text-xs rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-grotesk font-semibold text-xl text-app-text mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-sm text-app-text/60 leading-relaxed max-w-xs mx-auto mb-5">
                {step.description}
              </p>
              {step.details && (
                <ul className="space-y-2 text-left w-full max-w-xs mx-auto">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#75AADB22' }}>
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 2.5" stroke="#75AADB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-inter text-xs text-app-text/55 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Texto equipo */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="font-inter leading-relaxed" style={{ color: '#E8EDF2' }}>
            {proceso.equipo}
          </p>
          <p className="font-inter text-sm" style={{ color: '#75AADB' }}>
            {proceso.equipoExtra}
          </p>
        </div>

      </div>
    </section>
  )
}
