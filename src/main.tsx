import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

if (window.location.search.startsWith('?/')) {
  const [route, ...query] = window.location.search.slice(2).split('&')
  const basePath = window.location.pathname.replace(/\/$/, '')
  const restoredQuery = query.length ? `?${query.join('&')}` : ''
  window.history.replaceState(null, '', `${basePath}/${route}${restoredQuery}${window.location.hash}`)
}

const basename = window.location.hostname.endsWith('github.io') ? '/clare-connects' : '/'

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter basename={basename}><App/></BrowserRouter></StrictMode>)
