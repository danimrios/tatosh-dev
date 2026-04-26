'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ofertas } from '@/data/content'
import { whatsappService } from '@/data/links'

const TAB_POSITIONS = { 0: '16.5%', 1: '50%', 2: '83.5%' }

const icons = {
  landing: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="5" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 10h26" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M8 15h10M8 19h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="7" cy="7.5" r="1" fill="currentColor" opacity=".5"/>
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor" opacity=".5"/>
      <circle cx="14" cy="7.5" r="1" fill="currentColor" opacity=".5"/>
    </svg>
  ),
  institucional: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M4 28V14l12-9 12 9v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <rect x="12" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M4 28h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="16" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  ecommerce: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M4 5h3l3.5 14h13L27 10H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="13" cy="26" r="2" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="22" cy="26" r="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M13 14h6M16 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2.5 2.5L8 2.5" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function Ofertas() {
  const [activeTab, setActiveTab] = useState(ofertas.defaultTab)
  const tab      = ofertas.tabs.find((t) => t.id === activeTab)
  const tabIndex = ofertas.tabs.findIndex((t) => t.id === activeTab)

  function handleTabChange(id) {
    if (id === activeTab) return
    setActiveTab(id)
  }

  return (
    <div>
      <section className="bg-background pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="font-mono text-xs text-detail tracking-widest uppercase mb-3 block">
              — Servicios —
            </span>
            <h1 className="font-grotesk font-bold text-4xl sm:text-5xl text-app-text mb-6">
              {ofertas.title}
            </h1>
            <p className="font-inter text-app-text/80 text-base sm:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
              {ofertas.pitch}
            </p>
            <p className="font-inter text-app-text/50 max-w-md mx-auto text-sm">
              {ofertas.subtitle}
            </p>
          </div>

          {/* Tabs + Tatosh flotando arriba */}
          <div className="mb-12 sm:mt-24">
            <div style={{ position: 'relative' }}>
            {/* Tatosh solo visible en desktop donde los tabs son horizontales */}
            <motion.img
              src="/images/tatosh- animacion.png"
              alt="Tatosh"
              animate={{
                left: TAB_POSITIONS[tabIndex],
                y: [0, -6, 0],
              }}
              transition={{
                left: { type: 'spring', stiffness: 300, damping: 20 },
                y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                position: 'absolute',
                bottom: '100%',
                transform: 'translateX(-50%)',
                height: '80px',
                width: 'auto',
              }}
              className="hidden sm:block"
            />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-primary/5 border border-primary/10 rounded-2xl p-1.5">
              {ofertas.tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleTabChange(t.id)}
                  className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-grotesk font-semibold text-sm transition-all duration-200
                    ${activeTab === t.id
                      ? 'bg-background text-primary shadow-sm shadow-black/10'
                      : 'text-app-text/50 hover:text-app-text/80'
                    }`}
                >
                  <span className={activeTab === t.id ? 'text-primary' : 'text-app-text/40'}>
                    {icons[t.icon]}
                  </span>
                  <span className="flex flex-col items-start">
                    {t.label}
                    {t.popular && (
                      <span className="font-mono text-[9px] text-accent tracking-widest uppercase leading-none mt-0.5">
                        ★ {t.popular}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
            </div>
          </div>

          {/* Panel activo */}
          <div key={tab.id} className="grid md:grid-cols-2 gap-10 items-start animate-fade-in-up">

            {/* Izquierda: descripción + CTA */}
            <div>
              <p className="font-mono text-xs text-detail tracking-widest uppercase mb-4">
                {tab.tagline}
              </p>
              <h2 className="font-grotesk font-bold text-2xl sm:text-3xl text-app-text mb-4 leading-snug">
                {tab.heading}
                {tab.popular && (
                  <span className="ml-3 inline-block font-mono text-xs text-background bg-accent rounded-full px-3 py-0.5 align-middle">
                    ★ {tab.popular}
                  </span>
                )}
              </h2>
              <p className="font-inter text-app-text/60 leading-relaxed mb-3">
                {tab.description}
              </p>
              {tab.callout && (
                <p className="font-grotesk font-semibold text-primary mb-8">
                  {tab.callout}
                </p>
              )}
              <a
                href={whatsappService[tab.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-background font-grotesk font-semibold px-7 py-3.5 rounded-full hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
              >
                {tab.cta.label}
                <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.658 4.787 1.806 6.789L2 30l7.386-1.783A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.306 19.888c-.346-.173-2.046-1.01-2.364-1.125-.317-.115-.548-.173-.778.173-.23.346-.892 1.125-1.094 1.356-.201.23-.403.26-.748.087-.346-.173-1.46-.538-2.782-1.717-1.028-.917-1.722-2.05-1.924-2.396-.202-.346-.022-.533.151-.705.155-.155.346-.403.519-.605.173-.201.23-.346.346-.577.115-.23.058-.432-.029-.605-.087-.173-.778-1.876-1.066-2.568-.281-.674-.566-.583-.778-.594l-.663-.012c-.23 0-.605.087-.922.432-.317.346-1.21 1.183-1.21 2.885s1.239 3.346 1.412 3.577c.173.23 2.44 3.725 5.913 5.222.827.357 1.472.57 1.975.73.83.264 1.585.226 2.182.137.666-.1 2.046-.836 2.335-1.644.288-.808.288-1.5.202-1.644-.087-.144-.317-.23-.663-.403z"/>
                </svg>
              </a>

            </div>

            {/* Derecha: Incluye + Así trabajamos */}
            <div className="space-y-6">

              {/* Incluye */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 sm:p-8">
                <p className="font-mono text-xs text-detail tracking-widest uppercase mb-6">
                  Incluye
                </p>
                <ul className="space-y-4">
                  {tab.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      {typeof f === 'string' ? (
                        <span className="font-inter text-sm text-app-text/70 leading-relaxed">{f}</span>
                      ) : (
                        <div>
                          <span className="font-inter text-sm text-app-text/80 font-medium leading-snug block">{f.label}</span>
                          <span className="font-inter text-xs text-app-text/45 leading-relaxed block mt-0.5">{f.note}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Así trabajamos */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 sm:p-8">
                <p className="font-mono text-xs text-detail tracking-widest uppercase mb-6">
                  {ofertas.proceso.title}
                </p>
                <ol className="space-y-4">
                  {ofertas.proceso.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center font-mono text-[9px] text-primary font-bold">
                        {i + 1}
                      </span>
                      <span className="font-inter text-sm text-app-text/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>

                {/* Separador */}
                <div className="border-t border-primary/10 my-6" />

                {/* Bloque extra */}
                <p className="font-grotesk font-semibold text-sm text-app-text mb-4">
                  {ofertas.extra.title}
                </p>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-primary/60">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.6"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-inter text-sm text-app-text/80 font-medium leading-snug block">
                      {ofertas.extra.item.label}
                    </span>
                    <span className="font-inter text-xs text-app-text/45 leading-relaxed block mt-0.5">
                      {ofertas.extra.item.note}
                    </span>
                    <span className="font-inter text-xs leading-relaxed block mt-2" style={{ color: '#75AADB' }}>
                      {ofertas.extra.disclaimer}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section style={{ backgroundColor: '#75AADB' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
            {ofertas.banner.title}
          </h2>
          <p className="font-inter text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {ofertas.banner.subtitle}
          </p>
          <a
            href={ofertas.banner.cta.href}
            className="inline-flex items-center gap-2 bg-white text-[#75AADB] font-grotesk font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 hover:shadow-xl text-base"
          >
            {ofertas.banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  )
}
