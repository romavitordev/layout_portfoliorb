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
    // GitHub Pages serve arquivo estático: não existe /api/leads aqui.
    // Com "off", o formulário de orçamento cai direto no WhatsApp em vez
    // de tentar uma rota que não existe.
    NEXT_PUBLIC_LEADS: 'off',
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
}

export default nextConfig
