
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Make sure the dist directory exists
if (!fs.existsSync(toAbsolute('dist'))) {
  console.error('Error: dist directory does not exist. Please run the build command first.')
  process.exit(1)
}

try {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  const { render } = await import('./dist/server/entry-server.js')

  // Add the new policy pages to the routes to prerender
  const routesToPrerender = []

  // Add main pages
  routesToPrerender.push('/', '/about', '/services', '/contact')

  // Add location pages
  routesToPrerender.push('/london', '/manchester', '/birmingham', '/liverpool', '/edinburgh', '/glasgow')

  // Add policy pages
  routesToPrerender.push('/privacy-policy', '/terms-of-service', '/cookie-policy')

  console.log('Routes to prerender:', routesToPrerender)

  ;(async () => {
    try {
      for (const url of routesToPrerender) {
        console.log(`Pre-rendering: ${url}`)
        const appHtml = render(url)
        const html = template.replace('<!--app-html-->', appHtml)

        const filePath = `dist${url === '/' ? '/index' : url}.html`
        fs.writeFileSync(toAbsolute(filePath), html)
        console.log('Pre-rendered:', filePath)
      }
      console.log('Pre-rendering complete!')
    } catch (e) {
      console.error('Error during pre-rendering:', e)
      process.exit(1)
    }
  })()
} catch (e) {
  console.error('Error in prerender script:', e)
  process.exit(1)
}
