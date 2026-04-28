'use client'

import { m, useReducedMotion } from 'framer-motion'
import { franja } from '@/data/content'

const badgeIcons = {
  'todo-incluido': (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6.5 10l2.5 2.5L13.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'sin-sorpresas': (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 3v8M10 15v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  'sin-letra-chica': (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M4 6h12M4 10h8M4 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const badgeVariant = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function FranjaBadges() {
  const reduced = useReducedMotion()

  return (
    <div style={{ backgroundColor: '#75AADB' }} className="py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <m.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
          variants={container}
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {franja.badges.map((badge) => (
            <m.div
              key={badge.id}
              variants={reduced ? {} : badgeVariant}
              className="flex items-center gap-2.5"
            >
              <span style={{ color: '#0D1B2A' }}>
                {badgeIcons[badge.id]}
              </span>
              <span
                style={{ color: '#0D1B2A' }}
                className="font-grotesk font-semibold text-sm tracking-wide"
              >
                {badge.label}
              </span>
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  )
}
