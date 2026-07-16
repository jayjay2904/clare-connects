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
      const currentLocation = window.location
      const segmentsToKeep = currentLocation.hostname.endsWith('github.io') ? 1 : 0
      const base = currentLocation.pathname.split('/').slice(0, segmentsToKeep + 1).join('/')
      const route = currentLocation.pathname.slice(base.length).replace(/^\\/+/, '')
      const query = currentLocation.search ? '&' + currentLocation.search.slice(1) : ''
      currentLocation.replace(base + '/?/' + route + query + currentLocation.hash)
    </script>
  </body>
</html>
`

writeFileSync('dist/404.html', fallback)
