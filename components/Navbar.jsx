'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { nav } from '@/data/content'
import { whatsapp } from '@/data/links'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.658 4.787 1.806 6.789L2 30l7.386-1.783A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.832-1.594l-.418-.248-4.332 1.046 1.082-4.22-.272-.432A11.5 11.5 0 1116 27.5zm6.306-8.612c-.346-.173-2.046-1.01-2.364-1.125-.317-.115-.548-.173-.778.173-.23.346-.892 1.125-1.094 1.356-.201.23-.403.26-.748.087-.346-.173-1.46-.538-2.782-1.717-1.028-.917-1.722-2.05-1.924-2.396-.202-.346-.022-.533.151-.705.155-.155.346-.403.519-.605.173-.201.23-.346.346-.577.115-.23.058-.432-.029-.605-.087-.173-.778-1.876-1.066-2.568-.281-.674-.566-.583-.778-.594l-.663-.012c-.23 0-.605.087-.922.432-.317.346-1.21 1.183-1.21 2.885s1.239 3.346 1.412 3.577c.173.23 2.44 3.725 5.913 5.222.827.357 1.472.57 1.975.73.83.264 1.585.226 2.182.137.666-.1 2.046-.836 2.335-1.644.288-.808.288-1.5.202-1.644-.087-.144-.317-.23-.663-.403z"/>
  </svg>
)

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
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-background font-grotesk font-semibold text-sm px-5 py-2 rounded-full hover:bg-accent/90 transition-colors duration-200"
        >
          <WaIcon />
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
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-accent text-background font-grotesk font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <WaIcon />
            {nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}
