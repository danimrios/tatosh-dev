'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { nav } from '@/data/content'

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-grotesk font-bold text-xl text-primary tracking-tight">
          Tatosh<span className="text-accent">-</span>Dev<span className="text-accent">.</span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <li key={link.href}>
              {link.href.startsWith('/') ? (
                <Link
                  href={link.href}
                  className="font-grotesk font-semibold text-sm border border-accent text-accent px-4 py-1.5 rounded-full hover:bg-accent hover:text-background transition-all duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="font-grotesk font-semibold text-sm border border-accent text-accent px-4 py-1.5 rounded-full hover:bg-accent hover:text-background transition-all duration-200"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-background font-grotesk font-semibold text-sm px-5 py-2 rounded-full hover:bg-accent/90 transition-colors duration-200"
        >
          {nav.cta}
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-5 h-0.5 bg-app-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-app-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-app-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/10 px-6 py-4 flex flex-col gap-4">
          {nav.links.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                className="font-grotesk font-semibold text-sm border border-accent text-accent px-4 py-2 rounded-full text-center hover:bg-accent hover:text-background transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="font-grotesk font-semibold text-sm border border-accent text-accent px-4 py-2 rounded-full text-center hover:bg-accent hover:text-background transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href="#contacto"
            className="inline-flex justify-center bg-accent text-background font-grotesk font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}
