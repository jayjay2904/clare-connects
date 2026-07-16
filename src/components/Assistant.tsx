import { FormEvent, useEffect, useRef, useState } from 'react'
import { Bot, Mail, RotateCcw, Send, Sparkles, X } from 'lucide-react'
import { chatService } from '../services/chat'
import { site } from '../content/siteContent'

const suggestions = ['How can Clare help with my household bills?', 'Can Clare review my business utilities?', 'What is a Clare Connector?', 'How do I join the team?']
type Message = { role: 'assistant' | 'user'; text: string }
const welcome: Message = { role: 'assistant', text: 'Hello, I’m the Clare Connects automated assistant. I can share general information from this website, but I cannot provide binding quotes or guarantee savings.' }

export function Assistant() {
  const [open, setOpen] = useState(false), [messages, setMessages] = useState<Message[]>([welcome]), [input, setInput] = useState(''), [loading, setLoading] = useState(false)
  const close = useRef<HTMLButtonElement>(null)
  useEffect(() => { if (open) close.current?.focus() }, [open])
  async function ask(question: string) { if (!question.trim() || loading) return; setMessages((m) => [...m, { role: 'user', text: question }]); setInput(''); setLoading(true); try { const reply = await chatService.reply(question); setMessages((m) => [...m, { role: 'assistant', text: reply }]) } catch { setMessages((m) => [...m, { role: 'assistant', text: 'I’m sorry, I’m unavailable right now. Please email Clare instead.' }]) } finally { setLoading(false) } }
  return <>
    <button className="assistant-trigger" onClick={() => setOpen(true)} aria-label="Open Ask Clare Connects assistant"><Sparkles size={18} /><span>Ask Clare Connects</span></button>
    {open && <div className="assistant-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false) }}><section className="assistant" role="dialog" aria-modal="true" aria-labelledby="assistant-title" onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false) }}>
      <header><div className="assistant-avatar"><Bot /></div><div><span className="eyebrow">Automated assistant</span><h2 id="assistant-title">Ask Clare Connects</h2></div><button ref={close} aria-label="Close assistant" onClick={() => setOpen(false)}><X /></button></header>
      <div className="messages" aria-live="polite">{messages.map((m, i) => <div key={i} className={`message ${m.role}`}>{m.text}</div>)}{loading && <div className="message assistant-message typing">Thinking<span /><span /><span /></div>}</div>
      {messages.length === 1 && <div className="suggestions">{suggestions.map((q) => <button key={q} onClick={() => void ask(q)}>{q}</button>)}</div>}
      <form onSubmit={(e: FormEvent) => { e.preventDefault(); void ask(input) }}><label className="sr-only" htmlFor="chat-input">Your question</label><input id="chat-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question…" /><button aria-label="Send question" disabled={loading}><Send /></button></form>
      <footer><button onClick={() => setMessages([welcome])}><RotateCcw /> Reset</button><a href={`mailto:${site.email}`}><Mail /> Email Clare instead</a></footer>
    </section></div>}
  </>
}
