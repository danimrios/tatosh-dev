import { contacto } from '@/data/content'
import { whatsapp } from '@/data/links'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-background py-24 border-t border-primary/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

        <span className="font-mono text-xs text-detail tracking-widest uppercase mb-3 block">
          — Contacto —
        </span>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-app-text mb-4">
          {contacto.title}
        </h2>
        <p className="font-inter text-app-text/60 mb-10">
          {contacto.subtitle}
        </p>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-grotesk font-bold text-base sm:text-lg px-7 sm:px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl text-white"
          style={{ backgroundColor: '#25D366' }}
        >
          <svg width="26" height="26" viewBox="0 0 32 32" fill="white">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.658 4.787 1.806 6.789L2 30l7.386-1.783A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.832-1.594l-.418-.248-4.332 1.046 1.082-4.22-.272-.432A11.5 11.5 0 1116 27.5zm6.306-8.612c-.346-.173-2.046-1.01-2.364-1.125-.317-.115-.548-.173-.778.173-.23.346-.892 1.125-1.094 1.356-.201.23-.403.26-.748.087-.346-.173-1.46-.538-2.782-1.717-1.028-.917-1.722-2.05-1.924-2.396-.202-.346-.022-.533.151-.705.155-.155.346-.403.519-.605.173-.201.23-.346.346-.577.115-.23.058-.432-.029-.605-.087-.173-.778-1.876-1.066-2.568-.281-.674-.566-.583-.778-.594l-.663-.012c-.23 0-.605.087-.922.432-.317.346-1.21 1.183-1.21 2.885s1.239 3.346 1.412 3.577c.173.23 2.44 3.725 5.913 5.222.827.357 1.472.57 1.975.73.83.264 1.585.226 2.182.137.666-.1 2.046-.836 2.335-1.644.288-.808.288-1.5.202-1.644-.087-.144-.317-.23-.663-.403z"/>
          </svg>
          {contacto.cta}
        </a>

        <p className="font-inter text-xs text-app-text/30 mt-6">
          {contacto.note}
        </p>

      </div>
    </section>
  )
}
