import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Seo } from './components/Seo'
import { BusinessUtilities, HomeUtilities } from './pages/Utilities'
import { Connectors } from './pages/Connectors'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { Privacy, Terms } from './pages/Legal'
import { NotFound } from './pages/NotFound'

export default function App() { return <><Seo/><Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/home-utilities" element={<HomeUtilities/>}/><Route path="/business-utilities" element={<BusinessUtilities/>}/><Route path="/connectors" element={<Connectors/>}/><Route path="/join" element={<Join/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/terms" element={<Terms/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></> }
