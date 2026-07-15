import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

const basename = window.location.hostname.endsWith('github.io') ? '/clare-connects' : '/'

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter basename={basename}><App/></BrowserRouter></StrictMode>)
