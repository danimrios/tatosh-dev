'use client'

import { m, useReducedMotion } from 'framer-motion'

export default function AnimatedSection({ children, className }) {
  const reduced = useReducedMotion()

  return (
    <m.div
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </m.div>
  )
}
