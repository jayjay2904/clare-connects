import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
export function NotFound(){return <section className="not-found"><Compass/><span className="eyebrow">404 · A connection was missed</span><h1>This page isn’t part of the network.</h1><p>The address may have changed, or the page may no longer be here. The homepage is a good place to reconnect.</p><Link className="button" to="/"><ArrowLeft/> Back to Clare Connects</Link></section>}
