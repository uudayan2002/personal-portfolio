"use client"

import { Element } from "react-scroll"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-darkGreen via-custom-mediumGreen to-custom-lightCream">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Element name="home">
          <Hero />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
    </div>
  )
}
