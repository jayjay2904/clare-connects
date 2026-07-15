import { writeFileSync } from 'node:fs'

const fallback = `<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8" />
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reconnecting | Clare Connects</title>
  </head>
  <body>
    <script>
      const location = window.location
      const segmentsToKeep = location.hostname.endsWith('github.io') ? 1 : 0
      const base = location.pathname.split('/').slice(0, segmentsToKeep + 1).join('/')
      const route = location.pathname.slice(base.length).replace(/^\\/+/, '')
      const query = location.search ? '&' + location.search.slice(1) : ''
      location.replace(base + '/?/' + route + query + location.hash)
    </script>
  </body>
</html>
`

writeFileSync('dist/404.html', fallback)
