/**
 * Mirror estático para GitHub Pages (romavitordev.github.io/layout_portfoliorb).
 * Difere do repo principal (portfoliorb): output export, basePath,
 * trailingSlash e imagens sem otimizador.
 *
 * O que NÃO existe aqui: `app/opengraph-image.tsx` (usa edge runtime, que o
 * export estático não suporta). O cartão social cai no `imagens.og` de
 * `lib/site.ts`, que já é uma URL absoluta.
 */
const basePath = '/layout_portfoliorb'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    // Usado em assets referenciados por src "cru", que não ganham
    // basePath automático como next/link e next/image.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
}

export default nextConfig
