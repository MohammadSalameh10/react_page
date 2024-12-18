import React from 'react'
import Navbar from './components/navbar/Navbar'
import StartBootsraps from './components/bootstrap/StartBootsraps'
import Portfolio from './components/portfolio/portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

export default function App() {
  return (
    <>
      <Navbar />
      <StartBootsraps />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
