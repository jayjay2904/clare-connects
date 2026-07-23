import { ArrowUpRight, Check, Mail } from 'lucide-react'
import { site } from '../content/siteContent'

type Kind = 'contact' | 'connector'

export function ContactForm({ kind = 'contact' }: { kind?: Kind }) {
  const connector = kind === 'connector'
  const subject = connector ? 'Clare Connects — Connector enquiry' : 'Clare Connects — Website enquiry'
  const prompts = connector
    ? ['How you know Clare or found the Connector programme', 'The kinds of introductions you may be able to make', 'The best way for Clare to reply']
    : ['Whether your question is about home, business, referrals or the opportunity', 'Any useful contract or renewal dates', 'The best way for Clare to reply']
  const body = `Hello Clare,\n\nI would like to ask about ${connector ? 'becoming a Connector' : '[home utilities / business utilities / referrals / the opportunity]'}.\n\nA few useful details:\n\n\nMy preferred contact method:\n\nThank you.`
  const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return <section className="email-contact-card" aria-labelledby={`${kind}-email-title`}>
    <Mail aria-hidden="true" className="email-contact-icon" />
    <span className="eyebrow">Email Clare directly</span>
    <h2 id={`${kind}-email-title`}>{connector ? 'Start a Connector conversation.' : 'Send Clare your question.'}</h2>
    <p>{connector ? 'Tell Clare a little about you and the connections you may be able to make.' : 'Your email app will open with a helpful subject line and a few prompts. Nothing is stored by this website.'}</p>
    <ul>{prompts.map((prompt) => <li key={prompt}><Check aria-hidden="true" />{prompt}</li>)}</ul>
    <a className="button" href={href}>{connector ? 'Email Clare about becoming a Connector' : 'Email Clare'}<ArrowUpRight /></a>
    <p className="email-contact-address">Or write directly to <a href={`mailto:${site.email}`}>{site.email}</a></p>
  </section>
}
