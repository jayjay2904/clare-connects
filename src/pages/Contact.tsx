import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/Elements'
import { site } from '../content/siteContent'

export function Contact() {
  return <>
    <PageHero eyebrow="Contact Clare" title={<>Ask Clare a <em>question.</em></>} intro="Whether your question is about home utilities, business services, referrals or working with Clare, you will receive a personal response." />
    <section className="section contact-layout">
      <aside className="contact-sidebar">
        <span className="eyebrow">A personal response</span>
        <h2>Tell Clare where you would like to begin.</h2>
        <p>You do not need to have everything worked out. A few useful details are enough for Clare to understand the best next step.</p>
        <div className="contact-method"><Mail/><div><span>Email Clare</span><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
        {site.phone && <div className="contact-method"><Phone/><div><span>Call Clare</span><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></div></div>}
        {site.whatsapp && <div className="contact-method"><MessageCircle/><div><span>Message Clare</span><a href={site.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a></div></div>}
        <div className="contact-method"><ExternalLink/><div><span>Connect professionally</span><a href={site.social.linkedin} target="_blank" rel="noreferrer">Clare on LinkedIn</a></div></div>
        {site.social.facebook && <div className="contact-method"><ExternalLink/><div><span>Follow Clare</span><a href={site.social.facebook} target="_blank" rel="noreferrer">Clare on Facebook</a></div></div>}
        <div className="contact-method"><MapPin/><div><span>Local service area</span><p>{site.serviceAreas.join(' · ')}</p></div></div>
        <div className="contact-method"><MessageCircle/><div><span>Response time</span><p>{site.responseTime}</p></div></div>
      </aside>
      <ContactForm />
    </section>
  </>
}
