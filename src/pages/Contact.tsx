import { Mail, MessageCircle, Sparkles } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/Elements'
import { site } from '../content/siteContent'

export function Contact() { return <>
  <PageHero eyebrow="Contact Clare" title={<>Let’s start with a <em>simple conversation.</em></>} intro="Whether you have a question about your home, your business or a new opportunity, Clare would be pleased to hear what is on your mind." />
  <section className="section contact-layout"><aside className="contact-sidebar"><span className="eyebrow">A personal response</span><h2>Tell Clare where you would like to begin.</h2><p>You do not need to have everything worked out. A few useful details are enough for Clare to understand the best next step.</p><div className="contact-method"><Mail/><div><span>Email Clare</span><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="contact-method"><MessageCircle/><div><span>Response time</span><p>{site.responseTime}</p></div></div><div className="contact-spark"><Sparkles/><p>Telephone and social profiles will appear here once Clare confirms her preferred public details.</p></div></aside><ContactForm /></section>
  </> }
