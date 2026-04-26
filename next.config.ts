import type { NextConfig } from "next";

// ── Sistema SSL y cabeceras de seguridad ─────────────────────────────────────
// HSTS fuerza conexiones HTTPS y protege contra ataques de degradación SSL.
// Las demás cabeceras previenen clickjacking, sniffing y filtrado de referencia.
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key:   'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key:   'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key:   'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key:   'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key:   'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
