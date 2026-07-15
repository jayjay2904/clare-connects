import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMeta, site } from '../content/siteContent'

export function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = pageMeta[pathname] ?? { title: 'Page not found | Clare Connects', description: 'The requested page could not be found.' }
    document.title = meta.title
    const set = (name: string, content: string, property = false) => { let element = document.head.querySelector<HTMLMetaElement>(`meta[${property ? 'property' : 'name'}="${name}"]`); if (!element) { element = document.createElement('meta'); element.setAttribute(property ? 'property' : 'name', name); document.head.appendChild(element) } element.content = content }
    set('description', meta.description); set('og:title', meta.title, true); set('og:description', meta.description, true); set('og:url', `${site.url}${pathname}`, true); set('og:type', 'website', true); set('og:image', `${site.url}/assets/social-share.svg`, true); set('twitter:card', 'summary_large_image')
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) } canonical.href = `${site.url}${pathname}`
  }, [pathname])
  return null
}
