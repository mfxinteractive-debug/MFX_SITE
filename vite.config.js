import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_URL, pages } from './src/seoPages.js'

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/*
 * The app is a single-page app, so every URL used to return the homepage's
 * <title> and description until JavaScript ran. This writes one HTML file per
 * route (e.g. dist/about.html, served by Netlify for /about) with that page's
 * own head tags, so crawlers see distinct pages straight away.
 */
function prerenderPageMeta() {
  let outDir
  return {
    name: 'prerender-page-meta',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf8')

      for (const [route, page] of Object.entries(pages)) {
        const url = `${SITE_URL}${route}`
        const title = escapeHtml(page.title)
        const description = escapeHtml(page.description)

        const html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
          .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)

        const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
        writeFileSync(resolve(outDir, file), html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPageMeta()],
})
