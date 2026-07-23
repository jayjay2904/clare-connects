import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMeta, site } from '../content/siteContent'

export function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = pageMeta[pathname] ?? { title: 'Page not found | Clare Connects', description: 'The requested page could not be found.' }
    document.title = meta.title
    const set = (name: string, content: string, property = false) => { let element = document.head.querySelector<HTMLMetaElement>(`meta[${property ? 'property' : 'name'}="${name}"]`); if (!element) { element = document.createElement('meta'); element.setAttribute(property ? 'property' : 'name', name); document.head.appendChild(element) } element.content = content }
    const image = `${site.url}/assets/social-share.svg`
    set('description', meta.description)
    set('og:title', meta.title, true); set('og:description', meta.description, true); set('og:url', `${site.url}${pathname}`, true)
    set('og:type', 'website', true); set('og:locale', 'en_GB', true); set('og:site_name', 'Clare Connects', true)
    set('og:image', image, true); set('og:image:type', 'image/svg+xml', true); set('og:image:width', '1200', true); set('og:image:height', '630', true); set('og:image:alt', 'Clare Connects — practical help for home and business essentials', true)
    set('twitter:card', 'summary_large_image'); set('twitter:title', meta.title); set('twitter:description', meta.description); set('twitter:image', image)
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) } canonical.href = `${site.url}${pathname}`
  }, [pathname])
  return null
}
