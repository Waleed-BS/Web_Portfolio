import React from 'react'

import profile_pic from '../../assets/images/profile.png'

import './about.scss'

const About = () => {
  return (
    <div id="About" className="section">
      <div className="wrapper">
        <div className="col">
          <img className="profile" alt="Profile" src={profile_pic} />
        </div>
        <div className="col">
          <h1>Waleed Binselim</h1>
          <p>
            An experienced Full Stack Developer. My Computer Science degree was
            focused on programming with Java, complex problem solving,
            algorithms, and team building. My experience with web and mobile
            development comes from personal projects as well as learning from
            online resources.
            <br />
            <br />
            I enjoy working with motivated individuals, solving problems,
            learning new tools, and becoming a better programmer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
