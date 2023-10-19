import React from 'react'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function App() {

  return (
    <main className='whole-page'>
      <About />
      <Projects />
      <Skills />
    </main>
  )
}