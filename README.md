# layout_portfoliorb — espelho estático

Versão **só do layout** do site da [Roma & Buganza](https://github.com/romavitordev/portfoliorb),
publicada em GitHub Pages para demonstração:

**→ https://romavitordev.github.io/layout_portfoliorb/**

É o mesmo código do repositório principal, exportado como site estático. Serve para
mostrar a interface sem depender de servidor, domínio ou variável de ambiente.

## O que muda em relação ao repo principal

| | `portfoliorb` (completo) | `layout_portfoliorb` (este) |
| --- | --- | --- |
| Build | `next build` (servidor) | `output: 'export'` — HTML estático |
| Hospedagem | Vercel / Node | GitHub Pages |
| Imagens | otimizador do Next (WebP, srcset) | `unoptimized: true` |
| Rotas | estáticas + dinâmicas | tudo pré-renderizado com `trailingSlash` |
| Cartão social | `app/opengraph-image.tsx` (edge runtime) | removido — cai na URL de `imagens.og` |
| `basePath` | nenhum | `/layout_portfoliorb` |
| `brand.url` | domínio real | a própria URL do Pages |

Fora isso, o conteúdo, os componentes e o design são idênticos.

## Rodando

```bash
npm install
```

```bash
npm run build
```

O export sai em `out/`. Para servir localmente:

```bash
npx serve out
```

> `npm run dev` também funciona, mas em dev o `basePath` faz o site responder em
> `http://localhost:3000/layout_portfoliorb/`.

## Deploy

Automático: o workflow em `.github/workflows/deploy.yml` roda a cada push em `main`,
faz o export, adiciona `.nojekyll` e publica no GitHub Pages.

Para funcionar, o repositório precisa de **Settings → Pages → Source: GitHub Actions**.

## Conteúdo

Como no repo principal, todo texto editável vive em `lib/site.ts` e `lib/projetos.ts` —
nenhum componente tem string escrita dentro dele.
