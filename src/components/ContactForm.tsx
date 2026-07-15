import { FormEvent, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Mail } from 'lucide-react'
import { contactService } from '../services/contact'
import { site } from '../content/siteContent'

type Kind = 'contact' | 'connector'
export function ContactForm({ kind = 'contact' }: { kind?: Kind }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<string[]>([])
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; const data = new FormData(form)
    const next: string[] = []
    if (!String(data.get('name') || '').trim()) next.push('Please enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(String(data.get('email') || ''))) next.push('Please enter a valid email address.')
    if (!String(data.get('message') || '').trim()) next.push('Please tell Clare a little about your enquiry.')
    if (!data.get('consent')) next.push('Please confirm that Clare may respond to your enquiry.')
    if (data.get('website')) return
    setErrors(next); if (next.length) { document.querySelector('.error-summary')?.scrollIntoView(); return }
    setStatus('loading')
    try { await contactService.submit(Object.fromEntries(data) as Record<string, string>); setStatus('success'); form.reset() } catch { setStatus('error') }
  }
  if (status === 'success') return <div className="form-success" role="status"><CheckCircle2 /><span className="eyebrow">Message prepared</span><h2>Thank you for getting in touch.</h2><p>Your enquiry has been recorded in this website demo. Until the live form endpoint is connected, please also email Clare directly.</p><a className="button" href={`mailto:${site.email}`}>Email Clare <Mail /></a></div>
  return <form className="contact-form" onSubmit={(e) => void submit(e)} noValidate>
    {errors.length > 0 && <div className="error-summary" role="alert" tabIndex={-1}><strong>There are a few things to check:</strong><ul>{errors.map((e) => <li key={e}>{e}</li>)}</ul></div>}
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="field-row"><Field name="name" label="Name" required /><Field name="email" label="Email" type="email" required /></div>
    <div className="field-row"><Field name="telephone" label="Telephone" type="tel" /><Field name="business" label="Business or organisation" /></div>
    {kind === 'contact' ? <div className="field-row"><Select name="enquiry" label="What can Clare help with?" options={['Home Utilities', 'Business Utilities', 'Become a Connector', 'Join the Opportunity', 'General Enquiry']} /><Select name="contactMethod" label="Preferred contact method" options={['Email', 'Telephone']} /></div> : <><div className="field-row"><Field name="knowClare" label="How do you know Clare?" /><Field name="connectionType" label="Connections you may be able to make" /></div></>}
    <label className="field full"><span>Message <b>*</b></span><textarea name="message" rows={6} placeholder="A few details will help Clare understand the best place to start." /></label>
    <label className="consent"><input type="checkbox" name="consent" /><span>I’m happy for Clare Connects to use these details to respond to my enquiry. <LinkPrivacy /></span></label>
    <button className="button submit-button" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : kind === 'connector' ? 'Send connector enquiry' : 'Send enquiry'}<ArrowUpRight /></button>
    <div aria-live="polite">{status === 'error' && <p className="form-error">Something went wrong. Please email <a href={`mailto:${site.email}`}>{site.email}</a> instead.</p>}</div>
  </form>
}
function Field({ name, label, type = 'text', required = false }: { name: string; label: string; type?: string; required?: boolean }) { return <label className="field"><span>{label}{required && <b> *</b>}</span><input name={name} type={type} /></label> }
function Select({ name, label, options }: { name: string; label: string; options: string[] }) { return <label className="field"><span>{label}</span><select name={name}>{options.map((o) => <option key={o}>{o}</option>)}</select></label> }
function LinkPrivacy() { return <a href="/privacy">Read our privacy information.</a> }
