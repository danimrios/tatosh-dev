import { portfolio } from '@/data/content'
import { images } from '@/data/links'

// Placeholder de imagen cuando no hay foto real
function ImagePlaceholder({ name }) {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-detail/20 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/50">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" opacity=".5"/>
            <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".5"/>
          </svg>
        </div>
        <span className="font-mono text-xs text-primary/40">{name}</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-detail tracking-widest uppercase mb-3 block">
            — Portfolio —
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-app-text mb-4">
            {portfolio.title}
          </h2>
          <p className="font-inter text-app-text/60 max-w-md mx-auto">
            {portfolio.subtitle}
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolio.items.map((item) => (
            <div
              key={item.id}
              className="group bg-background border border-primary/10 rounded-2xl overflow-hidden
                hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Imagen / placeholder */}
              <div className="overflow-hidden">
                <div className="group-hover:scale-105 transition-transform duration-500">
                  <ImagePlaceholder name={item.name} />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-grotesk font-semibold text-lg text-app-text mb-2">
                  {item.name}
                </h3>
                <p className="font-inter text-sm text-app-text/60 leading-relaxed mb-4">
                  {item.description}
                </p>
                <a
                  href={images.portfolio[item.id] || '#'}
                  className="inline-flex items-center gap-2 font-grotesk font-semibold text-sm
                    text-background bg-accent px-5 py-2 rounded-full
                    hover:bg-accent/90 transition-colors duration-200"
                >
                  {portfolio.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
