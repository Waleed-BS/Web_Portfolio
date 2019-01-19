import React from 'react'
import Helmet from 'react-helmet'

import chevron from '../assets/images/icons/chevron-down.svg'
import udacity_logo from '../assets/images/icons/udacity_logo.png'
import sunynewpaltz_logo from '../assets/images/icons/newpaltz.png'

class Education extends React.Component {
  state = {
    UdacityIsActive: false,
    SUNYNewPaltzIsActive: false,
  }

  handleClick = event => {
    if (
      event.target.className === 'Udacity chevron' ||
      event.target.className === 'Udacity subsection-title'
    ) {
      this.setState({ UdacityIsActive: true })
    } else if (
      event.target.className === 'Udacity chevron expanded' ||
      event.target.className === 'Udacity subsection-title expanded'
    ) {
      this.setState({ UdacityIsActive: false })
    } else if (
      event.target.className === 'SUNYNewPaltz chevron' ||
      event.target.className === 'SUNYNewPaltz subsection-title'
    ) {
      this.setState({ SUNYNewPaltzIsActive: true })
    } else if (
      event.target.className === 'SUNYNewPaltz chevron expanded' ||
      event.target.className === 'SUNYNewPaltz subsection-title expanded'
    ) {
      this.setState({ SUNYNewPaltzIsActive: false })
    }
  }

  render() {
    return (
      <div id="Education" className="section">
        <Helmet title="My education" />
        <div className="inner-container">
          <div className="title-container">
            <h3
              className={`Udacity subsection-title${
                this.state.UdacityIsActive ? ' expanded' : ''
              }`}
              onClick={this.handleClick}
            >
              React Nanodegree Certificate
            </h3>
            <img
              className={`Udacity chevron${
                this.state.UdacityIsActive ? ' expanded' : ''
              }`}
              alt="expand"
              src={chevron}
              onClick={this.handleClick}
            />
          </div>
          <div
            className={`content${
              this.state.UdacityIsActive ? ' expanded' : ''
            }`}
          >
            <div
              className={`left-side${
                this.state.UdacityIsActive ? ' expanded' : ''
              }`}
            >
              <img className="school" alt="codecore" src={udacity_logo} />
              <p>Udacity</p>
              <p>Online</p>
              <p>2017</p>
            </div>
            <div
              className={`right-side${
                this.state.UdacityIsActive ? ' expanded' : ''
              }`}
            >
              <p>Relevant <span>Coursework</span></p>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>ES6 JavaScript</li>
                <li>Node.js</li>
                <li>Expo</li>
                <li>Git/GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="inner-container">
          <div className="title-container">
            <h3
              className={`SUNYNewPaltz subsection-title${
                this.state.SUNYNewPaltzIsActive ? ' expanded' : ''
              }`}
              onClick={this.handleClick}
            >
              B.S. in Computer Science
            </h3>
            <img
              className={`SUNYNewPaltz chevron${
                this.state.SUNYNewPaltzIsActive ? ' expanded' : ''
              }`}
              alt="expand"
              src={chevron}
              onClick={this.handleClick}
            />
          </div>
          <div
            className={`content${
              this.state.SUNYNewPaltzIsActive ? ' expanded' : ''
            }`}
          >
            <div
              className={`left-side${
                this.state.SUNYNewPaltzIsActive ? ' expanded' : ''
              }`}
            >
              <img className="school" alt="" src={sunynewpaltz_logo} />
              <p>SUNY New Paltz</p>
              <p>New Paltz, NY</p>
              <p>2017</p>
            </div>
            <div
              className={`right-side${
                this.state.SUNYNewPaltzIsActive ? ' expanded' : ''
              }`}
            >
              <p>Relevant <span>Coursework</span></p>
              <ul>
                <li>Computer Science I: Foundations</li>
                <li>Computer Science II: Data Structures</li>
                <li>Computer Science III: Advanced Data Structures</li>
                <li>Object Oriented Programming</li>
                <li>Software Engineering</li>
                <li>Embedded Linux</li>
                <li>Discrete Mathematics for Computing</li>
                <li>Discrete and Continuous Computer Algorithms</li>
                <li>Assembly Language and Computer Architecture</li>
                <li>Language Processing</li>
                <li>Operating System Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Education
