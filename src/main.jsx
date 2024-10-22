import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Navbar'
import Hero from './components/Hero'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Hero />
  </StrictMode>
)
