import React from 'react'
import { connect } from 'react-redux'

/* top-links icons */
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap'
import MdWork from 'react-icons/lib/md/work'
import FaCode from 'react-icons/lib/fa/code'
import logo from '../../assets/images/logo.png'
/* bottom-links icons */
import FaMail from 'react-icons/lib/fa/envelope'
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square'
import FaGithub from 'react-icons/lib/fa/github'

import './navlinks.scss'

class NavLinks extends React.Component {
  handleSetActive = to => {
    this.props.setActive(to)
  }

  render() {
    return (
      <div className="NavLinks">
        <ul>
          <img src={logo} />
          <li className={this.props.active === 'About' ? 'active' : ''}>
            <a
              href="#About"
              onClick={() => {
                this.handleSetActive('About')
              }}
            >
              <FaInfoCircle />
              <span>About Me </span>
            </a>
          </li>

          <li className={this.props.active === 'Skills' ? 'active' : ''}>
            <a
              href="#Skills"
              onClick={() => {
                this.handleSetActive('Skills')
              }}
            >
              <FaCode />
              <span>Skills</span>
            </a>
          </li>

          <li className={this.props.active === 'Projects' ? 'active' : ''}>
            <a
              href="#Projects"
              onClick={() => {
                this.handleSetActive('Projects')
              }}
            >
              <MdWork />
              <span>Projects</span>
            </a>
          </li>

          <li className={this.props.active === 'Education' ? 'active' : ''}>
            <a
              href="#Education"
              onClick={() => {
                this.handleSetActive('Education')
              }}
            >
              <FaGraduationCap />
              <span>Education</span>
            </a>
          </li>
        </ul>
        <ul className="side-contacts">
          <li>
            <a href="mailto:waleed-bs@live.com">
              <FaMail />
              <span>Email</span>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://linkedin.com/in/waleed-bs"
            >
              <FaLinkedIn />
              <span>LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/waleed-bs"
            >
              <FaGithub />
              <span>Github</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ active, hover }) => {
  return { active, hover }
}

const mapDispatchToProps = dispatch => {
  return {
    setActive: event =>
      dispatch({
        type: `SET_ACTIVE`,
        isActive: event,
      }),
    setHover: event =>
      dispatch({
        type: `SET_HOVER`,
        isHoveriong: event,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks)
