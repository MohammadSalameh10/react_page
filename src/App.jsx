import React from 'react'
import Navbar from './components/navbar/Navbar'
import StartBootsraps from './components/bootstrap/StartBootsraps'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<StartBootsraps />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<h2>Not found</h2>} />
        
      </Routes>
      
      <Footer />
    </>
  )
}
