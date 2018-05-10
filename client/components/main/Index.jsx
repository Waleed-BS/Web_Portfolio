/* ./client/components/main/Index.jsx */
import React from 'react';
import { connect } from 'react-redux';

/* components */
import About from '../sections/About.jsx';
import Skills from '../sections/Skills.jsx';
import Projects from '../sections/Projects.jsx';
import Education from '../sections/Education.jsx';
import './Index.scss';

const Index = () => (

  <div className="Index">
    <About />
    <Skills />
    <Projects />
    <Education />
  </div>

);

export default connect(null, null)(Index);
