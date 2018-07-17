import React from 'react'

import About from '../sections/about.js'
import Skills from '../sections/skills.js'
import Projects from '../sections/projects.js'
import Education from '../sections/education.js'

import './main.scss'

const Main = () => (
  <div className="Main">
    <About />
    <Skills />
    <Projects />
    <Education />
  </div>
)

export default Main
