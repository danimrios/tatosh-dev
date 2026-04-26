import { testimonios } from '@/data/content'

// Ícono de estrella
function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-accent">
      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95L5 8.42 2 5.5l4.15-.75L8 1z"/>
    </svg>
  )
}

// Avatar placeholder con iniciales
function Avatar({ name }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2)
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-detail flex items-center justify-center flex-shrink-0">
      <span className="font-grotesk font-semibold text-sm text-background">{initials}</span>
    </div>
  )
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-background py-24 border-t border-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-detail tracking-widest uppercase mb-3 block">
            — Testimonios —
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-app-text mb-4">
            {testimonios.title}
          </h2>
          <p className="font-inter text-app-text/60 max-w-md mx-auto">
            {testimonios.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.items.map((item) => (
            <div
              key={item.id}
              className="bg-background border border-primary/10 rounded-2xl p-7
                hover:border-primary/30 transition-all duration-300"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

              {/* Testimonio */}
              <p className="font-inter text-sm text-app-text/70 leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <Avatar name={item.name} />
                <div>
                  <p className="font-grotesk font-semibold text-sm text-app-text">
                    {item.name}
                  </p>
                  <p className="font-inter text-xs text-app-text/50">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
